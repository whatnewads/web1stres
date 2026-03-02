import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createHash, randomBytes } from "crypto";

function sha256(str: string): string {
  return createHash("sha256").update(str).digest("hex");
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

/* GET — generate CSRF token */
export async function GET() {
  const token = randomBytes(32).toString("hex");
  const cookieStore = await cookies();
  cookieStore.set("csrf", token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 1 hour
  });
  return NextResponse.json({ csrfToken: token });
}

/* POST — validate and proxy to Formspree */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ ok: false, error: "Bot detected." }, { status: 400 });
    }

    // 2. CSRF verification
    const cookieStore = await cookies();
    const cookieCsrf = cookieStore.get("csrf")?.value;
    if (!cookieCsrf || body._csrf !== cookieCsrf) {
      return NextResponse.json({ ok: false, error: "Invalid CSRF token." }, { status: 403 });
    }

    // 3. Server-side validation
    const required = ["name", "company", "email", "phone", "industry", "employees", "message"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { ok: false, error: `${field} is required.` },
          { status: 422 }
        );
      }
    }
    if (body.consent !== "on") {
      return NextResponse.json(
        { ok: false, error: "Consent is required." },
        { status: 422 }
      );
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(body.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 422 });
    }

    // 4. Log submission
    const ip = getClientIp(req);
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        hashedIp: sha256(ip),
        userAgent: req.headers.get("user-agent") ?? "",
        event: "contact_form_submission",
      })
    );

    // 5. Proxy to Formspree
    const formspreeId = process.env.FORMSPREE_FORM_ID;
    if (!formspreeId) {
      return NextResponse.json({ ok: false, error: "Server configuration error." }, { status: 500 });
    }

    const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        company: body.company,
        email: body.email,
        phone: body.phone,
        industry: body.industry,
        employees: body.employees,
        message: body.message,
      }),
    });

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { ok: false, error: "Failed to send message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
