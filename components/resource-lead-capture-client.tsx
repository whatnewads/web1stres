"use client";

import { useState } from "react";
import { CheckCircle, Download } from "lucide-react";

interface ResourceLeadCaptureClientProps {
  title: string;
  description: string;
  topics: string[];
  buttonLabel?: string;
  downloadUrl?: string;
}

export function ResourceLeadCaptureClient({
  title,
  description,
  topics,
  buttonLabel = "Download Free Guide",
  downloadUrl,
}: ResourceLeadCaptureClientProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    if (honeypot) return;

    setStatus("submitting");
    const data = {
      ...Object.fromEntries(new FormData(form)),
      resourceTitle: title,
    };

    try {
      const res = await fetch("https://formspree.io/f/xwvnjedw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — What's included */}
        <div>
          <span
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8621A]/10 text-[#E8621A] rounded-full mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            <Download className="w-3.5 h-3.5" />
            Free Download
          </span>
          <h1
            className="text-[#0A1628] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
          >
            {title}
          </h1>
          <p className="text-[#5A6178] mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            {description}
          </p>

          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>
            What&apos;s Inside
          </h2>
          <ul className="space-y-3">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8621A] shrink-0 mt-0.5" />
                <span className="text-[#5A6178]" style={{ fontSize: "15px" }}>
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Lead capture form */}
        <div className="bg-[#F5F6F8] rounded-xl p-6 lg:p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-[#E8621A] mx-auto mb-4" />
              <h2 className="text-[#0A1628] mb-2" style={{ fontSize: "22px", fontWeight: 700 }}>
                You&apos;re All Set!
              </h2>
              {downloadUrl ? (
                <>
                  <p className="text-[#5A6178] mb-6" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                    Your download is ready. Click below to get your free copy.
                  </p>
                  <a
                    href={downloadUrl}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
                    style={{ fontSize: "15px", fontWeight: 600 }}
                  >
                    <Download className="w-4 h-4" />
                    Download Now
                  </a>
                </>
              ) : (
                <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  Check your inbox — we&apos;ll send the resource within 1 business day.
                </p>
              )}
            </div>
          ) : (
            <>
              <h2 className="text-[#0A1628] mb-2" style={{ fontSize: "22px", fontWeight: 700 }}>
                Get Your Free Copy
              </h2>
              <p className="text-[#5A6178] mb-6" style={{ fontSize: "14px" }}>
                {downloadUrl
                  ? "Enter your details and download instantly."
                  : "Enter your work email and we\u2019ll send it straight to your inbox."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="hidden" aria-hidden="true">
                  <input name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label
                    htmlFor="resource-name"
                    className="block mb-1.5 text-[#0A1628]"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="resource-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resource-email"
                    className="block mb-1.5 text-[#0A1628]"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    Work Email *
                  </label>
                  <input
                    id="resource-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resource-company"
                    className="block mb-1.5 text-[#0A1628]"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    Company Name
                  </label>
                  <input
                    id="resource-company"
                    type="text"
                    name="company"
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="organization"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600" style={{ fontSize: "14px" }}>
                    Something went wrong. Please try again or call (903) 869-1201.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {status === "submitting" ? "Sending..." : buttonLabel}
                </button>

                <p className="text-[#5A6178] text-center" style={{ fontSize: "12px" }}>
                  No spam. We&apos;ll only use your email to send the resource.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
