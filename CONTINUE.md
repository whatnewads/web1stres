# Continue Next.js Migration — Next Session Prompt

## What This Is
Vite → Next.js 15 App Router migration for 1st Response Occupational Health v3.0.
Stack: Next.js 15, TypeScript, Tailwind CSS v4, `next/image`, `next/font/google`.

## What Has Been Done

### Config / Root
- `package.json` — Next.js 15 deps
- `tsconfig.json` — paths `@/*`
- `postcss.config.mjs` — Tailwind v4 (`@tailwindcss/postcss`)
- `next.config.ts` — Unsplash remotePatterns + `/schedule-consultation` → `/schedule-consult` 301
- `middleware.ts` — blocks `/admin`, `/.env`
- `.env.local.example` — `FORMSPREE_FORM_ID`, `CSRF_SECRET`
- `app/globals.css` — Tailwind v4 + CSS vars + partner-scroll keyframe
- `app/layout.tsx` — Inter font, NavBar, Footer, ScrollToTop
- `app/api/contact/route.ts` — GET (CSRF cookie) + POST (honeypot, CSRF, validate, Formspree proxy)

### Components (`components/`)
- `navbar.tsx` — "use client", usePathname, all `to=` → `href=`
- `footer.tsx` — server component
- `scroll-to-top.tsx` — "use client"
- `json-ld.tsx` — server component
- `partner-carousel.tsx` — "use client"
- `shared.tsx` — "use client"; ALL Link props use `href` (not `to`); CTABanner uses `primaryHref`/`secondaryHref`
- `schedule-consult-form.tsx` — "use client", fetches CSRF from GET /api/contact, POSTs to /api/contact
- `start-site-page-client.tsx` — "use client", local form state, honeypot

### JSON-LD Schemas (`lib/schema/`) — ALL 30 DONE
All files created. Key exports:
`homeSchema`, `aboutUsSchema`, `teamSchema`, `contactSchema`, `faqsSchema`,
`scheduleConsultSchema`, `startSiteSchema`, `firstAidSchema`, `telemedicineSchema`,
`onsiteCareSchema`, `onsiteMedicsSchema`, `referralsSchema`, `manageCasesSchema`,
`safetySupportSchema`, `emergencyResponseSchema`, `drugTestingSchema`, `medicalTestingSchema`,
`cprTrainingSchema`, `casesSchema`, `hillSchema`, `fightingJaysSchema`, `blogSchema`,
`blogPostSchema` (function), `freeResourcesSchema`, `toolboxTalksSchema`, `oshaGuideSchema`,
`injuryPreventionSchema`, `privacyPolicySchema`, `termsSchema`, `thanksSchema`

### Pages Done (`app/`)
- `page.tsx` — home ✅
- `firstaid-bls-als/page.tsx` ✅
- `telemedicine/page.tsx` ✅
- `onsite-care/page.tsx` ✅
- `onsite-medics/page.tsx` ✅
- `referrals/page.tsx` ✅
- `manage-cases/page.tsx` ✅
- `safety-support/page.tsx` ✅
- `emergency-response/page.tsx` ✅
- `drug-testing/page.tsx` ✅
- `medical-testing/page.tsx` ✅
- `cpr-training/page.tsx` ✅
- `about-us/page.tsx` ✅
- `team/page.tsx` ✅
- `faqs/page.tsx` ✅
- `thanks/page.tsx` ✅
- `schedule-consult/page.tsx` ✅ (server, renders `<ScheduleConsultForm />`)
- `cases/page.tsx` ✅
- `hill/page.tsx` ✅
- `fighting-jays/page.tsx` ✅
- `free-resources/page.tsx` ✅
- `privacy-policy/page.tsx` ✅
- `terms-and-conditions/page.tsx` ✅

---

## STILL TO DO (in order)

### 1. Fix `app/contact/page.tsx`
Currently written as `"use client"` (wrong — can't export metadata). Must be:
- **Server** `app/contact/page.tsx` that exports `metadata` + `JsonLd` + renders `<ContactPageClient />`
- **Client** `components/contact-page-client.tsx` — already written in this session

Delete the current `app/contact/page.tsx` and replace with:

```tsx
// app/contact/page.tsx  (SERVER COMPONENT)
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { contactSchema } from "@/lib/schema/contact";
import { ContactPageClient } from "@/components/contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us | 1st Response Occupational Health",
  description: "Contact our occupational health team. General inquiries, or schedule a free consultation for your worksite.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactPageClient />
    </>
  );
}
```

Then create `components/contact-page-client.tsx` — it was written but user interrupted before the file was saved. Content is in the previous session. It's a "use client" component with `useState` for tab switching ("General Contact" vs "Free Consultation") and a general contact form that POSTs to `/api/contact` with CSRF token.

### 2. Fix `app/start-site/page.tsx`
Currently written as `"use client"` (wrong). Must be:
- **Server** `app/start-site/page.tsx` with metadata + JsonLd + renders `<StartSitePageClient />`
- `components/start-site-page-client.tsx` is already written ✅

Replace `app/start-site/page.tsx` with:
```tsx
// app/start-site/page.tsx  (SERVER COMPONENT)
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { startSiteSchema } from "@/lib/schema/start-site";
import { StartSitePageClient } from "@/components/start-site-page-client";

export const metadata: Metadata = {
  title: "Start an Onsite Occupational Health Program | 1st Response",
  description: "Deploy a full occupational health program at your worksite. Site assessment, custom program design, and provider deployment — tailored to your operation.",
};

export default function StartSitePage() {
  return (
    <>
      <JsonLd data={startSiteSchema} />
      <StartSitePageClient />
    </>
  );
}
```

### 3. Write `app/blog/page.tsx`
"use client" because it has `useState` for category filter.
Use `BlogCard` from `@/components/shared` with `href` prop (not `to`).
Blog posts data and categories are in `src/app/components/pages/other-pages.tsx` (BlogIndexPage).
Schema: `blogSchema` from `@/lib/schema/blog`.
Since it's client, either wrap it (server page → client component) or just accept no metadata.
Recommended: server page + `<BlogIndexClient />` client component.

### 4. Write `app/blog/[slug]/page.tsx`
Dynamic route. Use `generateStaticParams` with the 6 blog post slugs.
Blog post content is placeholder (same for all slugs in source).
Schema: `blogPostSchema(post)` function from `@/lib/schema/blog-post`.
The `blogPostSchema` function takes `{ title, url, datePublished, description, author }`.
Use `Image` from `next/image` for the hero image.
See `src/app/components/pages/other-pages.tsx` for `BlogPostPage` content.

Blog posts data (copy this into page):
```ts
const blogPosts = [
  { slug: "dot-drug-testing-guide-2025", title: "The Employer's Guide to DOT Drug Testing in 2025", excerpt: "Everything you need to know about DOT drug testing requirements, panel types, and how to set up a compliant program.", date: "Feb 15, 2026", category: "Drug Testing", imageUrl: "https://images.unsplash.com/photo-1766297246958-b6ca17b56fb7?..." },
  { slug: "osha-recordkeeping-mistakes", title: "5 OSHA Recordkeeping Mistakes That Cost Employers Thousands", excerpt: "...", date: "Feb 8, 2026", category: "Safety Compliance", imageUrl: "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?..." },
  { slug: "telemedicine-remote-worksites", title: "How Telemedicine Is Changing Occupational Health for Remote Worksites", excerpt: "...", date: "Jan 28, 2026", category: "Telemedicine", imageUrl: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?..." },
  { slug: "return-to-work-best-practices", title: "Return-to-Work Programs: Best Practices for Industrial Employers", excerpt: "...", date: "Jan 20, 2026", category: "Case Management", imageUrl: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?..." },
  { slug: "cpr-training-why-it-matters", title: "Why Every Industrial Worksite Needs CPR-Trained Employees", excerpt: "...", date: "Jan 12, 2026", category: "Training", imageUrl: "https://images.unsplash.com/photo-1643227991784-fabfe0cf4470?..." },
  { slug: "oil-gas-safety-trends-2025", title: "Oil & Gas Safety Trends to Watch in 2025", excerpt: "...", date: "Jan 5, 2026", category: "Industry News", imageUrl: "https://images.unsplash.com/photo-1646227655718-dd721b681d91?..." },
];
```
(Full imageUrls are in `src/app/components/pages/other-pages.tsx`)

### 5. Write `app/toolbox-talks/page.tsx`
Server page with metadata + JsonLd (`toolboxTalksSchema`) + ResourceLeadCaptureClient component.
The ResourceLeadCapturePage in source is a reusable pattern for all three resource pages.
Create `components/resource-lead-capture-client.tsx` as "use client" component that takes `{ title, description, topics, buttonLabel }` props and handles form submission.

For toolbox-talks:
- title: "Free Toolbox Talks Bundle"
- description: "Download ready-to-use toolbox talk scripts..."
- topics: ["Fall protection and working at heights", "Heat illness prevention", "Personal protective equipment (PPE)", "Hazard communication", "Lockout/tagout procedures", "Confined space safety", "Hand and power tool safety", "Electrical safety basics"]

### 6. Write `app/osha-compliance-guide/page.tsx`
Same ResourceLeadCapture pattern.
Schema: `oshaGuideSchema`
- title: "Free OSHA Compliance Guide"
- topics: ["OSHA 300 log recordkeeping requirements", "Required safety training by industry", "PPE program compliance checklist", "Hazard communication program essentials", "Emergency action plan requirements", "Common citation categories and how to avoid them"]

### 7. Write `app/injury-prevention-guide/page.tsx`
Same ResourceLeadCapture pattern.
Schema: `injuryPreventionSchema`
- title: "Free Workplace Injury Prevention Guide"
- topics: ["Job hazard analysis (JHA) templates", "Pre-shift stretching and warm-up programs", "Near-miss reporting system setup", "Modified duty and return-to-work protocols", "Safety incentive program design", "Leading vs. lagging indicator tracking"]

### 8. Write `app/not-found.tsx`
Server component. Uses `ErrorPage` component from `@/components/shared`.
```tsx
import { ErrorPage } from "@/components/shared";
export default function NotFound() {
  return <ErrorPage code="404" title="Page Not Found" message="The page you're looking for doesn't exist or has been moved."
    links={[{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: "Drug Testing", href: "/drug-testing" }, { label: "Contact", href: "/contact" }]} />;
}
```

### 9. Write `app/error.tsx`
"use client" — Next.js error boundary requires it.
```tsx
"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#E8621A] mb-4" style={{ fontSize: "72px", fontWeight: 800 }}>500</p>
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>Something Went Wrong</h1>
        <p className="text-[#5A6178] mb-4" style={{ fontSize: "16px", lineHeight: 1.6 }}>We're experiencing a temporary issue. Please try again in a moment.</p>
        <p className="text-[#0A1628] mb-8" style={{ fontSize: "18px", fontWeight: 700 }}>
          Need help now? Call <a href="tel:+19038691201" className="text-[#E8621A] underline">(903) 869-1201</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg" style={{ fontSize: "15px", fontWeight: 600 }}>Try Again</button>
          <a href="/" className="inline-flex items-center px-6 py-3 bg-[#0A1628] text-white rounded-lg" style={{ fontSize: "15px", fontWeight: 600 }}>Go Home</a>
        </div>
      </div>
    </div>
  );
}
```

### 10. Write `app/errors/403/page.tsx`
```tsx
import { ErrorPage } from "@/components/shared";
export default function Error403() {
  return <ErrorPage code="403" title="Access Denied" message="You don't have permission to access this page."
    links={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }, { label: "Schedule a Consult", href: "/schedule-consult" }]} />;
}
```

### 11. Write `app/errors/429/page.tsx`
```tsx
import { ErrorPage } from "@/components/shared";
export default function Error429() {
  return <ErrorPage code="429" title="Too Many Requests" message="Please wait a moment before trying again. This limit resets automatically."
    links={[{ label: "Home", href: "/" }]} />;
}
```

### 12. Run `npm install`
```bash
cd /mnt/c/Users/wesyi/.vscode/1stresponseoccupational.comv3.0 && npm install
```

### 13. Run `npm run dev` to verify build

---

## Key Patterns to Remember

- **Link props**: Always `href=` not `to=`
- **CTABanner**: `primaryHref=` and `secondaryHref=` (not `primaryTo`/`secondaryTo`)
- **BreadcrumbNav**: items use `{ label, href? }` (not `to`)
- **ServicePageLayout**: breadcrumbs use `{ label, href? }`
- **Images**: `next/image` `Image` with `fill` + `sizes` props; wrap in `relative` container
- **Client pages with metadata**: Use server page.tsx that exports metadata + renders a "use client" component
- **Schemas**: All in `lib/schema/*.ts`, imported and rendered via `<JsonLd data={schema} />`
- **CLAUDE.md rule**: `generateMetadata()` required on every page

## Source Files (reference only, do not modify)
- `src/app/components/pages/other-pages.tsx` — Blog, Contact, FAQs, Cases, resources, legal, error pages
- `src/app/components/pages/service-pages.tsx` — All service page content
- `src/app/components/pages/about.tsx` — About page content
- `src/app/components/pages/schedule-consult.tsx` — Schedule consult form layout
