# Figma AI Design Prompt — 1st Response Occupational Health
## Full Site Redesign → Next.js / Vercel Production Handoff
### v2 — Pages verified against live index.php router

---

## PROJECT CONTEXT

**Client:** 1st Response Occupational Health
**Location:** Lubbock, TX (West Texas service region, also serves oil/gas/energy corridors)
**Target industries:** Construction, oil & gas, energy, manufacturing, logistics
**Primary users:** HR managers, EHS managers, safety directors, small business owners
**Goal:** Low-latency marketing site on Vercel (Next.js App Router), excellent SEO, eligible for Google AI Overviews (AIO), maximum conversion

---

## DESIGN PHILOSOPHY (Radians.com-inspired)

Study radians.com for UI reference. The key principles to borrow:

- **Full-bleed hero** with a single dominant H1, one subhead, and exactly two CTAs (primary + secondary). No decorative clutter. No carousels.
- **Immediate wayfinding** — user should know exactly where to go within one scroll. Services are visible above or at the fold.
- **Card-based service grid** — clean imagery, short label, one CTA per card. No walls of text.
- **Trust bar** — OSHA logos, DOT compliance, FMCSA, CLIA-waived lab, certifications — runs just below the hero, before any service content.
- **Frictionless flow** — every section has a single clear next action. No dead ends.
- **Social proof at the bottom** — testimonials, industries served, partner logos. NOT in the hero.

Color palette: Navy (#0A1628), Safety Orange (#E8621A), Clean White (#FFFFFF), Light Gray (#F5F6F8). This signals trust, industrial authority, and compliance without feeling clinical or cold.

Typography: Inter or Geist (Vercel-native, fast-loading). Bold H1 (60–72px), confident H2 (36–40px), readable body (16–18px / 1.6 line height). No serif fonts.

---

## COMPLETE PAGE LIST
### All pages verified against the live PHP router (index.php)

### CORE / LANDING
| Route | Page Title | Notes |
|---|---|---|
| `/` | Home | |
| `/locations` | Our Locations | |
| `/schedule-consult` | Schedule a Consult | Alias: `/schedule-consultation` |
| `/start-site` | Start a Site | Lead gen for onsite clinic setup |

### ABOUT
| Route | Page Title | Notes |
|---|---|---|
| `/about-us` | About Us | NOT `/about` |
| `/contact` | Contact Us | |
| `/faqs` | FAQs | NOT `/faq` |
| `/team` | Our Team | Separate from About Us |

### MEDICAL SERVICES
| Route | Page Title | Notes |
|---|---|---|
| `/firstaid-bls-als` | First Aid, BLS & ALS | |
| `/telemedicine` | Telemedicine Services | |
| `/onsite-care` | Onsite Medical Care | |
| `/onsite-medics` | Onsite Medics & Paramedics | Distinct from onsite-care |
| `/referrals` | Medical Referral Services | |
| `/care-level-quiz` | Care Level Quiz | Interactive tool |

### CASE MANAGEMENT
| Route | Page Title | Notes |
|---|---|---|
| `/manage-cases` | Case Management Services | |
| `/safety-support` | Safety Management Support | |
| `/emergency-response` | Emergency Response Services | |

### TESTING SERVICES
| Route | Page Title | Notes |
|---|---|---|
| `/drug-testing` | Drug Testing Services | |
| `/medical-testing` | Medical Testing Services | |

### TRAINING
| Route | Page Title | Notes |
|---|---|---|
| `/cpr-training` | CPR, First Aid & AED Training | |

### CASE STUDIES
| Route | Page Title | Notes |
|---|---|---|
| `/cases` | Case Studies Index | |
| `/hill` | Hill 1 to Hill 2 Case Study | |
| `/fighting-jays` | Fighting Jays Case Study | |

### BLOG (NEW — adding per client request)
| Route | Page Title | Notes |
|---|---|---|
| `/blog` | Blog Index | New addition |
| `/blog/[slug]` | Blog Post Template | Dynamic route |

### FREE RESOURCES
| Route | Page Title | Notes |
|---|---|---|
| `/free-resources` | Free Resource Hub | |
| `/toolbox-talks` | Free Toolbox Talks | Lead magnet |
| `/osha-compliance-guide` | Free OSHA Compliance Guide | Lead magnet |
| `/injury-prevention-guide` | Free Injury Prevention Guide | Lead magnet |

### LEGAL / POLICY
| Route | Page Title | Notes |
|---|---|---|
| `/privacy-policy` | Privacy Policy | |
| `/terms-and-conditions` | Terms and Conditions | |
| `/cookie-preferences` | Cookie Preferences | |

### ERROR PAGES
| Route | HTTP Code | Notes |
|---|---|---|
| `/errors/403` | 403 Forbidden | |
| `/errors/404` | 404 Not Found | |
| `/errors/429` | 429 Too Many Requests | Rate limiting page |
| `/errors/500` | 500 Internal Server Error | |

---

## PAGE-BY-PAGE LAYOUT SPECS

---

### HOME (`/`)

#### Section 1 — HERO
- Full-bleed background: dark navy overlay on high-quality image of an occupational health clinic or industrial worker receiving care (not stock-photo-obvious)
- H1 (max 8 words): "Occupational Health Built for West Texas Workers"
- Subhead (1 sentence): "OSHA-compliant drug testing, onsite clinics, emergency response, and telemedicine for construction, oil & gas, and energy companies — fast."
- CTA Primary (orange button): "Schedule a Consult" → `/schedule-consult`
- CTA Secondary (ghost/outline button): "View Our Services"
- NO hero carousel. Static. Fast.
- Mobile: Stack CTAs vertically. H1 scales to 36px.

#### Section 2 — TRUST BAR
- Full-width horizontal strip, light gray background
- Badges: OSHA Compliant | DOT Certified | BLS/ALS Provider | Telemedicine Available | Onsite Medics | Lubbock, TX
- Icon + short label only. No text walls.

#### Section 3 — SERVICES GRID
- H2: "What We Do"
- 3-column card grid (2 col tablet, 1 col mobile)
- Each card: service icon (SVG), service name, 1-sentence description, "Learn More" link
- Service cards (all verified routes):
  - Drug Testing → `/drug-testing`
  - Medical Testing → `/medical-testing`
  - Onsite Medical Care → `/onsite-care`
  - Onsite Medics & Paramedics → `/onsite-medics`
  - Telemedicine → `/telemedicine`
  - First Aid, BLS & ALS → `/firstaid-bls-als`
  - CPR & AED Training → `/cpr-training`
  - Case Management → `/manage-cases`
  - Safety Management Support → `/safety-support`
  - Emergency Response → `/emergency-response`
  - Medical Referrals → `/referrals`

#### Section 4 — NOT SURE WHAT YOU NEED?
- H2: "Not Sure What Level of Care You Need?"
- Short description (2 sentences max): "We work with companies of all sizes across West Texas. Answer a few quick questions and we'll point you to the right service."
- CTA: "Take the Care Level Quiz" → `/care-level-quiz`
- Design as a full-width CTA banner, orange accent color

#### Section 5 — CASE STUDIES TEASER
- H2: "Real Results for Real Companies"
- 2 case study preview cards → `/hill` and `/fighting-jays`
- Card: Company name, one-line outcome stat, "Read Case Study →"
- CTA below cards: "See All Case Studies" → `/cases`

#### Section 6 — FREE RESOURCES TEASER
- H2: "Free Tools for Safety Managers"
- 3 resource cards: Toolbox Talks | OSHA Compliance Guide | Injury Prevention Guide
- Each card: icon, title, short description, "Download Free →" (links to respective resource pages)

#### Section 7 — WHY CHOOSE US
- 3 columns, icon + differentiator
- "On-Site or Telemedicine" / "OSHA & DOT Certified" / "Emergency Response Ready"
- Max 2 sentences per column

#### Section 8 — SOCIAL PROOF
- 2–3 testimonial cards (company name, role, quote)
- Star rating display if applicable

#### Section 9 — CTA BANNER
- Full-width navy banner
- H2: "Ready to Keep Your Workforce Compliant and Safe?"
- Two buttons: "Schedule a Consult" (orange, primary) | "Start a Site" (ghost, secondary)

#### Section 10 — FOOTER
See FOOTER section below.

---

### LOCATIONS (`/locations`)

- H1: "1st Response Occupational Health Locations"
- Location cards (one per location): clinic name, address, phone, hours, map pin
- Map embed (Google Maps iframe or static map image with link)
- "Don't see your area? Ask about our Onsite & Telemedicine options." → `/onsite-care` and `/telemedicine`
- Schema.org: `MedicalBusiness` with `geo` per location

---

### SCHEDULE A CONSULT (`/schedule-consult`)

- H1: "Schedule a Consultation"
- This is the primary lead capture page — treat it as a landing page, not just a form
- Brief value prop above form: what happens after they submit, turnaround time expectation
- Form fields: Name, Company, Phone, Email, Service Needed (dropdown — all services), Number of Employees, Preferred Contact Method, Message
- Submit: "Request My Consult"
- Right column or below: address, phone, hours
- ⚠️ DEVELOPER NOTE: Honeypot field, CSRF token, server-side PHP validation, hashed IP logging, rate limit 3/hour/IP, JSON response. Next.js Route Handler proxies to PHP — never expose PHP endpoint to client.
- Alias route `/schedule-consultation` must redirect 301 → `/schedule-consult`

---

### START A SITE (`/start-site`)

- H1: "Start an Onsite Occupational Health Program"
- This is a high-intent lead gen page for companies wanting a permanent or recurring onsite clinic
- Section: "What is an Onsite Program?" — 2 paragraphs
- Section: "Who Is This For?" — industries/company sizes (construction crews, oilfield operations, manufacturing plants)
- Section: "How It Works" — 3–5 step process
- Section: "What's Included" — services available onsite (medics, drug testing, injury care, emergency response)
- CTA form: Company name, contact name, phone, email, workforce size, site location, message
- Submit: "Request a Site Assessment"
- ⚠️ DEVELOPER NOTE: Same security/logging requirements as `/schedule-consult`

---

### ABOUT US (`/about-us`)

- H1: "About 1st Response Occupational Health"
- Mission statement
- Founding story / timeline
- Certifications & accreditations (logos + descriptions)
- CTA: "Meet Our Team" → `/team` | "Get in Touch" → `/contact`

---

### OUR TEAM (`/team`)

- H1: "Meet the 1st Response Team"
- Team member cards: photo, name, title, brief bio
- Bottom CTA: "Work with our team" → `/schedule-consult`

---

### CONTACT (`/contact`)

- H1: "Contact Us"
- Two-column layout: form left, info right
- Form fields: Name, Company, Phone, Email, Message
- Right: Address, phone, email, hours
- Map embed placeholder
- ⚠️ DEVELOPER NOTE: Same security/logging requirements as `/schedule-consult`

---

### FAQs (`/faqs`)

- H1: "Frequently Asked Questions"
- Category accordion sections:
  - Drug & Alcohol Testing FAQs
  - Medical Testing FAQs
  - Onsite Care & Medics FAQs
  - Telemedicine FAQs
  - CPR / First Aid Training FAQs
  - Case Management FAQs
  - Emergency Response FAQs
  - General / Billing FAQs
- Each FAQ: accordion item, keyboard navigable (aria-expanded, aria-controls)
- Bottom CTA: "Still have questions? Contact us." → `/contact`
- ⚠️ Schema.org: `FAQPage` with `mainEntity` array — all Q&A in plain text, no HTML in answer text

---

### FIRST AID, BLS & ALS (`/firstaid-bls-als`)

- H1: "First Aid, BLS & ALS Services — Lubbock, TX"
- Breadcrumb: Home > Services > First Aid, BLS & ALS
- What it is, who needs it, what to expect, compliance callout
- FAQ accordion (3–5 questions)
- Sticky sidebar CTA (desktop): "Schedule This Service" → `/schedule-consult`
- Schema.org: `Service` type

---

### TELEMEDICINE (`/telemedicine`)

- H1: "Occupational Telemedicine Services — West Texas"
- Breadcrumb: Home > Services > Telemedicine
- How it works (step process), industries served, OSHA-compliant callout
- FAQ accordion
- Sidebar CTA
- Schema.org: `Service` + `availableChannel` with `serviceType: "Telemedicine"` and `serviceUrl`

---

### ONSITE MEDICAL CARE (`/onsite-care`)

- H1: "Onsite Medical Care for Industrial Worksites"
- Breadcrumb: Home > Services > Onsite Medical Care
- Distinction from Onsite Medics page (care = clinical; medics = staffing)
- What's included, who needs it, process steps
- CTA: "Start a Site" → `/start-site`
- FAQ accordion
- Schema.org: `Service` + `availableChannel` with `serviceType: "Onsite"`

---

### ONSITE MEDICS & PARAMEDICS (`/onsite-medics`)

- H1: "Onsite Medics & Paramedics for Industrial Sites"
- Breadcrumb: Home > Services > Onsite Medics
- Differentiate clearly from `/onsite-care`: this is about staffing certified medics/paramedics at the employer's location
- Qualifications of staff, deployment scenarios, industries served
- CTA: "Request Onsite Medic Staffing" → `/start-site`
- FAQ accordion
- Schema.org: `Service`

---

### MEDICAL REFERRAL SERVICES (`/referrals`)

- H1: "Occupational Medical Referral Services"
- Breadcrumb: Home > Services > Referrals
- What referrals cover, how coordination works, why it matters for employers
- FAQ accordion
- Sidebar CTA
- Schema.org: `Service`

---

### CARE LEVEL QUIZ (`/care-level-quiz`)

- H1: "What Level of Care Does Your Workforce Need?"
- Interactive quiz — multi-step, 3–5 questions
- Questions: industry type, workforce size, current safety program, incident history, compliance needs
- Result screen: recommended service(s) with CTA to schedule
- Design as a card/stepper UI — full-width, centered, progress indicator
- ⚠️ DEVELOPER NOTE: All quiz logic is client-side only. No PII collected. Log only: quiz completion event, result category (no identifiable data).

---

### CASE MANAGEMENT (`/manage-cases`)

- H1: "Occupational Case Management Services"
- Breadcrumb: Home > Case Management > Manage Cases
- What case management covers (workers' comp coordination, return-to-work, injury tracking)
- Process steps
- FAQ accordion
- Sidebar CTA
- Schema.org: `Service`

---

### SAFETY MANAGEMENT SUPPORT (`/safety-support`)

- H1: "Safety Management Support for West Texas Companies"
- Breadcrumb: Home > Case Management > Safety Support
- OSHA compliance consulting, safety program development, incident investigation support
- Industries served
- FAQ accordion
- Sidebar CTA
- Schema.org: `Service`

---

### EMERGENCY RESPONSE (`/emergency-response`)

- H1: "Industrial Emergency Response Services — West Texas"
- Breadcrumb: Home > Case Management > Emergency Response
- What's covered, response capability, industries, certifications
- ⚠️ Design note: This page has the highest urgency — design with a prominent phone number CTA at the very top ("For emergencies, call: [number]") — visible immediately, above the fold
- FAQ accordion
- Schema.org: `Service` + `EmergencyService`

---

### DRUG TESTING (`/drug-testing`)

- H1: "DOT & Non-DOT Drug Testing Services — Lubbock, TX"
- Breadcrumb: Home > Testing > Drug Testing
- DOT vs non-DOT explanation, panel types, chain of custody, MRO services
- Compliance callout: DOT / FMCSA / OSHA
- FAQ accordion (DOT-specific questions)
- Sidebar CTA
- Schema.org: `Service`

---

### MEDICAL TESTING (`/medical-testing`)

- H1: "Occupational Medical Testing Services"
- Breadcrumb: Home > Testing > Medical Testing
- Physical exams, respirator fit testing, audiometric testing, vision screenings — whatever this page covers
- Compliance callout: OSHA standards
- FAQ accordion
- Sidebar CTA
- Schema.org: `Service`

---

### CPR TRAINING (`/cpr-training`)

- H1: "CPR, First Aid & AED Training — OSHA-Compliant Certification"
- Breadcrumb: Home > Training > CPR & AED Training
- Certification types (AHA, Red Cross, etc.), class formats (onsite vs in-clinic), group pricing
- "Schedule Group Training" CTA → `/schedule-consult`
- FAQ accordion
- Schema.org: `Service` + `Course`

---

### CASE STUDIES INDEX (`/cases`)

- H1: "Client Case Studies"
- Grid of case study cards — each card: company name, industry, challenge summary, outcome stat, "Read More →"
- Currently: `/hill` and `/fighting-jays`
- Design grid to scale — will add more case studies over time
- Bottom CTA: "Want results like these? Schedule a consult." → `/schedule-consult`

---

### CASE STUDY — HILL (`/hill`)

- H1: "Hill 1 to Hill 2: [Outcome headline TBD by client]"
- Breadcrumb: Home > Case Studies > Hill
- Layout: challenge → solution → results (3-section flow)
- Pull quote from client
- Results in bold callout numbers/stats
- Bottom: "Read Next Case Study" → `/fighting-jays` | "Schedule a Consult" → `/schedule-consult`
- Schema.org: `Article` with `articleSection: "Case Study"`

---

### CASE STUDY — FIGHTING JAYS (`/fighting-jays`)

- H1: "Fighting Jays: [Outcome headline TBD by client]"
- Breadcrumb: Home > Case Studies > Fighting Jays
- Same layout as `/hill`
- Schema.org: `Article` with `articleSection: "Case Study"`

---

### BLOG INDEX (`/blog`) — NEW

- H1: "Occupational Health Resources & Insights"
- Filterable by category tag pills (Drug Testing, Safety Compliance, Case Management, Training, Telemedicine, Industry News)
- Card grid: featured image, category tag, title, excerpt, date, "Read More →"
- Pagination (6–9 posts per page)
- Sidebar (desktop): "Subscribe for Safety Updates" email capture + popular posts
- Schema.org: `Blog`

---

### BLOG POST TEMPLATE (`/blog/[slug]`) — NEW

- H1: [Post Title]
- Breadcrumb: Home > Blog > [Post Title]
- Author, date, reading time, category tag
- Full article body (rich text)
- Sidebar (desktop): sticky "Schedule a Consult" CTA + related posts
- Bottom: Author bio card, social share buttons (LinkedIn, Facebook, X/Twitter), related posts grid
- ⚠️ DEVELOPER NOTE: Use Next.js generateStaticParams for known slugs at build time. ISR (Incremental Static Regeneration) with 60-second revalidation for new posts. Log: slug, referrer, time-on-page event (client-side, no PII).
- Schema.org: `BlogPosting` with `author`, `datePublished`, `dateModified`, `headline`, `image`

---

### FREE RESOURCE HUB (`/free-resources`)

- H1: "Free Safety Resources for West Texas Companies"
- Grid of 3 resource cards, each linking to its download/lead-capture page
- Design as a lead magnet hub — email capture before download
- Resources:
  - Toolbox Talks Bundle → `/toolbox-talks`
  - OSHA Compliance Guide → `/osha-compliance-guide`
  - Injury Prevention Guide → `/injury-prevention-guide`
- Schema.org: `CollectionPage`

---

### TOOLBOX TALKS (`/toolbox-talks`)

- H1: "Free Toolbox Talks Bundle"
- What's included, preview of topics
- Email capture form: Name, Company Email → "Send Me the Free Bundle"
- ⚠️ DEVELOPER NOTE: On submit, trigger PHP backend to send email with download link. Log: timestamp, hashed email domain (not full email), company name. Never store full email in logs.
- Schema.org: `DigitalDocument`

---

### OSHA COMPLIANCE GUIDE (`/osha-compliance-guide`)

- H1: "Free OSHA Compliance Guide"
- Same layout as Toolbox Talks page
- Email capture → PDF delivery via PHP mailer
- Schema.org: `DigitalDocument`

---

### INJURY PREVENTION GUIDE (`/injury-prevention-guide`)

- H1: "Free Workplace Injury Prevention Guide"
- Same layout as above
- Schema.org: `DigitalDocument`

---

### PRIVACY POLICY (`/privacy-policy`)

- H1: "Privacy Policy"
- Standard legal document layout — readable typography, section anchors in sidebar
- Last updated date visible
- No decorative design — clean, accessible, printer-friendly

---

### TERMS AND CONDITIONS (`/terms-and-conditions`)

- H1: "Terms and Conditions"
- Same layout as privacy policy

---

### COOKIE PREFERENCES (`/cookie-preferences`)

- H1: "Cookie Preferences"
- Toggle UI: Essential (locked on) | Analytics | Marketing
- "Save Preferences" button
- ⚠️ DEVELOPER NOTE: Preferences stored in localStorage with consent timestamp. Re-read on every page load. Never fire analytics scripts until consent confirmed.

---

### ERROR PAGES

#### 403 (`/errors/403`)
- H1: "Access Denied"
- Friendly message, not a dead end
- Links: Home | Contact Us | Schedule a Consult

#### 404 (`/errors/404`)
- H1: "Page Not Found"
- Brief message + search bar (if blog search is implemented)
- Popular links: Home | Services | Drug Testing | Contact
- ⚠️ DEVELOPER NOTE: Log 404 hits with path + referrer for broken link detection. Do not cache 404 responses.

#### 429 (`/errors/429`)
- H1: "Too Many Requests"
- "Please wait a moment before trying again."
- Retry-After guidance
- ⚠️ This page should be simple and fast — no heavy assets

#### 500 (`/errors/500`)
- H1: "Something Went Wrong"
- Friendly message + contact phone number prominently displayed
- Do NOT show stack traces or error details in production

---

## NAVIGATION STRUCTURE

### Primary Nav
```
Logo | Services ▾ | Case Management ▾ | Testing | Training | Resources ▾ | About ▾ | [Schedule a Consult] (CTA button)
```

**Services dropdown:**
- First Aid, BLS & ALS
- Telemedicine
- Onsite Medical Care
- Onsite Medics & Paramedics
- Medical Referrals
- Care Level Quiz ✨

**Case Management dropdown:**
- Manage Cases
- Safety Support
- Emergency Response

**Testing:** (direct link to `/drug-testing` with sub-links)
- Drug Testing
- Medical Testing

**Training:** (direct → `/cpr-training`)

**Resources dropdown:**
- Case Studies
- Blog
- Free Resources
- Toolbox Talks
- OSHA Guide
- Injury Prevention Guide

**About dropdown:**
- About Us
- Our Team
- Locations
- FAQs
- Contact

### Mobile Nav
Hamburger → full-screen overlay. All dropdowns expand as accordions. "Schedule a Consult" pinned to bottom of mobile menu as full-width orange button.

### Footer (4 columns)
- Col 1: Logo + tagline + social icons (LinkedIn, Facebook)
- Col 2: Services (all 11 service links)
- Col 3: Company (About Us, Team, Locations, Cases, Blog, Free Resources)
- Col 4: Contact info (address, phone, email, hours) + "Schedule a Consult" button
- Bottom bar: © 2025 1st Response Occupational | Privacy Policy | Terms & Conditions | Cookie Preferences

---

## COMPONENTS (Reusable, Design Token–exported)

1. **NavBar** — Logo, mega-dropdown nav, CTA button, mobile hamburger
2. **Footer** — 4-column, bottom legal bar
3. **ServiceCard** — SVG icon, title, description, CTA link
4. **CaseStudyCard** — Industry tag, outcome stat, title, "Read More"
5. **ResourceCard** — Icon, title, description, download CTA
6. **TestimonialCard** — Quote, name, company, role, stars
7. **FAQAccordion** — aria-expanded, aria-controls, keyboard navigable
8. **TrustBadge** — Icon + compliance label
9. **CTABanner** — Full-width, navy/orange, H2 + 1–2 buttons
10. **BreadcrumbNav** — Semantic, Schema.org BreadcrumbList ready
11. **AppointmentForm** — Controlled inputs, dropdown, honeypot, CSRF-aware
12. **QuizStepper** — Multi-step card, progress indicator, result screen
13. **BlogCard** — Thumbnail, tag, title, excerpt, date
14. **ResourceLeadCapture** — Email + name form, PDF delivery trigger
15. **StickyServiceSidebar** — Desktop sticky CTA card (position: sticky)
16. **ErrorPage** — Reusable shell for 403/404/429/500

---

## ⚠️ CRITICAL — SCHEMA.ORG STRUCTURED DATA
## AI TOOLS WILL MISS OR INCORRECTLY IMPLEMENT THIS — REVIEW MANUALLY

### MedicalBusiness (Homepage, About Us, Contact, Locations)
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "1st Response Occupational Health",
  "url": "https://1stresponseoccupational.com",
  "logo": "https://1stresponseoccupational.com/logo.png",
  "image": "https://1stresponseoccupational.com/og-image.jpg",
  "description": "Occupational health clinic in Lubbock, TX providing drug testing, onsite medical care, emergency response, BLS/ALS, telemedicine, and safety management for West Texas industries.",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@1stresponseoccupational.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS]",
    "addressLocality": "Lubbock",
    "addressRegion": "TX",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Midland", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Odessa", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Amarillo", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "AdministrativeArea", "name": "West Texas" }
  ],
  "availableChannel": [
    {
      "@type": "ServiceChannel",
      "serviceType": "In-Person",
      "serviceLocation": {
        "@type": "Place",
        "name": "1st Response Occupational Clinic",
        "address": { "@type": "PostalAddress", "addressLocality": "Lubbock", "addressRegion": "TX" }
      }
    },
    {
      "@type": "ServiceChannel",
      "serviceType": "Telemedicine",
      "availableLanguage": "English",
      "serviceUrl": "https://1stresponseoccupational.com/telemedicine"
    },
    {
      "@type": "ServiceChannel",
      "serviceType": "Onsite",
      "description": "Mobile occupational health clinic and medic staffing deployed to employer worksites across West Texas"
    }
  ],
  "medicalSpecialty": "Occupational Medicine",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Occupational Health Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drug Testing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Testing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Onsite Medical Care" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Onsite Medics & Paramedics" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telemedicine" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "First Aid, BLS & ALS" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CPR & AED Training" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Case Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safety Management Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Referrals" } }
    ]
  }
}
```

### Service Schema (each service page — customize per route)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[e.g. Drug and Alcohol Testing]",
  "name": "[Service Name]",
  "description": "[2-sentence description, no keyword stuffing]",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "1st Response Occupational Health",
    "url": "https://1stresponseoccupational.com"
  },
  "areaServed": { "@type": "AdministrativeArea", "name": "West Texas" },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "[In-Person | Telemedicine | Onsite — match the actual service]"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors"
  }
}
```

### EmergencyService Schema (`/emergency-response` only)
```json
{
  "@context": "https://schema.org",
  "@type": ["Service", "EmergencyService"],
  "name": "Industrial Emergency Response Services",
  "provider": { "@type": "MedicalBusiness", "name": "1st Response Occupational Health" },
  "areaServed": { "@type": "AdministrativeArea", "name": "West Texas" }
}
```

### Course Schema (`/cpr-training`)
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "CPR, First Aid & AED Training",
  "description": "OSHA-compliant CPR, First Aid, and AED certification training for industrial workforces in West Texas.",
  "provider": { "@type": "MedicalBusiness", "name": "1st Response Occupational Health" },
  "educationalLevel": "Workforce / Professional",
  "availableLanguage": "English"
}
```

### FAQPage Schema (`/faqs` + accordion sections on service pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text — exact wording from accordion]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text — PLAIN TEXT ONLY, no HTML tags, no markdown]"
      }
    }
  ]
}
```

### BlogPosting Schema (`/blog/[slug]`)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post title]",
  "image": "[Featured image URL]",
  "author": { "@type": "Person", "name": "[Author name]" },
  "publisher": {
    "@type": "Organization",
    "name": "1st Response Occupational Health",
    "logo": { "@type": "ImageObject", "url": "https://1stresponseoccupational.com/logo.png" }
  },
  "datePublished": "[ISO 8601 date]",
  "dateModified": "[ISO 8601 date]",
  "description": "[Post excerpt / meta description]",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://1stresponseoccupational.com/blog/[slug]" }
}
```

### Article Schema (Case Studies: `/hill`, `/fighting-jays`)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "articleSection": "Case Study",
  "headline": "[Case study headline]",
  "author": { "@type": "Organization", "name": "1st Response Occupational Health" },
  "publisher": { "@type": "Organization", "name": "1st Response Occupational Health" },
  "datePublished": "[ISO 8601 date]"
}
```

### BreadcrumbList Schema (every page except homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
    { "@type": "ListItem", "position": 2, "name": "[Section]", "item": "https://1stresponseoccupational.com/[route]" }
  ]
}
```

### LocalBusiness (supplementary, on About + Contact)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "1st Response Occupational Health",
  "sameAs": [
    "https://www.facebook.com/[page]",
    "https://www.linkedin.com/company/[page]",
    "https://www.google.com/maps/place/[place-id]"
  ]
}
```

---

## ⚠️ CRITICAL — NEXT.JS METADATA API (generateMetadata)
## AI TOOLS OFTEN PRODUCE INCOMPLETE OR OUTDATED METADATA — VERIFY EACH PAGE

Every page must export `generateMetadata()` (App Router). Required fields per page:

- `title`: "[Page Name] | 1st Response Occupational Health — Lubbock, TX"
- `description`: Unique, 140–160 characters, action-oriented, never duplicated across pages
- `canonical`: Self-referencing on every page
- `openGraph`: title, description, image (1200×630px), type (`website` or `article` for blog/cases)
- `twitter`: card: `"summary_large_image"`
- `robots`: `"index, follow"` on all content pages
- `robots`: `"noindex, nofollow"` on: `/errors/*`, `/cookie-preferences`, form confirmation states
- `/schedule-consultation` must 301 redirect to `/schedule-consult` — handle in `next.config.js` redirects, NOT in a page component

---

## ⚠️ CRITICAL — CONTENT QUALITY
## AI TOOLS PRODUCE KEYWORD-STUFFED COPY — REJECT AND REWRITE ANY THAT DOES THIS

- No keyword stuffing. Service names appear naturally, max 2–3 times per page, never in consecutive sentences.
- Every page has a unique H1. No duplicates across the site.
- Every page has a unique meta description.
- Copy speaks to the buyer (HR manager, safety director, EHS manager) — not the patient. Frame around liability reduction, OSHA compliance, workforce productivity.
- Case study pages speak to outcomes in concrete numbers wherever possible.
- Free resource pages must feel genuinely useful, not like a content trap.

---

## ⚠️ CRITICAL — ACCESSIBILITY (WCAG 2.1 AA)

- Visible focus states on all interactive elements (3:1 contrast minimum)
- Body text: 4.5:1 contrast ratio minimum
- Large text / UI components: 3:1 contrast ratio minimum
- All images annotated with descriptive alt text in Figma (becomes HTML alt attribute)
- Form fields: visible labels, not just placeholders
- FAQ accordions: keyboard navigable, aria-expanded, aria-controls
- Quiz stepper: full keyboard support, ARIA live regions for result announcement
- Skip-to-main-content link in NavBar (visually hidden, visible on focus)
- Tab order follows visual reading order on all pages

---

## ⚠️ CRITICAL — PERFORMANCE (Vercel / Next.js)

- No image over 200KB at display size — all images via `next/image` with WebP + correct `sizes` prop
- Hero image on homepage is the LCP element — annotate it, developer adds `priority` prop
- All images must have explicit width and height in Figma specs — no layout shift
- SVG icons only — no icon fonts, no PNG icons
- Fonts: Inter or Geist via `next/font` — annotate as variable fonts
- CSS transitions only — no JS-driven animations unless absolutely necessary
- `prefers-reduced-motion` respected on all animations
- 429 error page must be ultra-lightweight — no heavy assets

---

## ⚠️ CRITICAL — LOGGING & SECURITY (Developer Handoff Notes)

**All forms (`/contact`, `/schedule-consult`, `/start-site`, `/toolbox-talks`, `/osha-compliance-guide`, `/injury-prevention-guide`):**
- PHP backend on LAMP/GoDaddy handles processing
- Next.js Route Handler acts as proxy — PHP endpoint URL never exposed to client
- PHP logs: timestamp (UTC), hashed IP (SHA-256), user agent, form type, service requested
- Honeypot field on every form: `aria-hidden="true"`, positioned off-screen, never visible
- CSRF token fetched from PHP endpoint before form renders, validated on submit
- Rate limit: 3 submissions per IP per hour at PHP layer
- PHP returns JSON: `{ success: boolean, message: string }`
- Free resource forms: log hashed email domain (not full email address), company name — never full email in logs

**Cookie consent (`/cookie-preferences`):**
- Consent stored in localStorage with ISO 8601 timestamp
- Analytics and marketing scripts blocked until consent confirmed
- Re-read consent state on every page load in Next.js middleware

**All page loads:**
- Vercel Analytics enabled (privacy-safe, no cookies by default)
- Custom logging middleware: page path, referrer, country (Vercel geo header), timestamp
- No PII in any server-side logs

**404 logging:**
- Log every 404: path + referrer → weekly report for broken link remediation
- Do not cache 404 responses (`Cache-Control: no-store`)

**Error pages:**
- Never expose stack traces or internal paths in production error pages
- 500 page must show phone number prominently — user needs an escape route

---

## RESPONSIVE BREAKPOINTS

- Mobile: 375px (design primary — mobile-first)
- Tablet: 768px
- Desktop: 1280px
- Wide: 1440px (max-width container: 1200px, centered)

Annotate breakpoint behavior for every component.

---

## FIGMA FILE STRUCTURE

```
📁 1st Response Occ Health — Full Redesign v2
  📁 _Design Tokens
    🎨 Colors
    📝 Typography
    📐 Spacing / Grid
    🔲 Shadows / Elevation
  📁 _Components (16 components)
  📁 Pages — Core
    📄 Home (/)
    📄 Locations (/locations)
    📄 Schedule a Consult (/schedule-consult)
    📄 Start a Site (/start-site)
  📁 Pages — About
    📄 About Us (/about-us)
    📄 Our Team (/team)
    📄 Contact (/contact)
    📄 FAQs (/faqs)
  📁 Pages — Medical Services
    📄 First Aid, BLS & ALS (/firstaid-bls-als)
    📄 Telemedicine (/telemedicine)
    📄 Onsite Medical Care (/onsite-care)
    📄 Onsite Medics (/onsite-medics)
    📄 Referrals (/referrals)
    📄 Care Level Quiz (/care-level-quiz)
  📁 Pages — Case Management
    📄 Manage Cases (/manage-cases)
    📄 Safety Support (/safety-support)
    📄 Emergency Response (/emergency-response)
  📁 Pages — Testing & Training
    📄 Drug Testing (/drug-testing)
    📄 Medical Testing (/medical-testing)
    📄 CPR Training (/cpr-training)
  📁 Pages — Case Studies
    📄 Cases Index (/cases)
    📄 Hill Case Study (/hill)
    📄 Fighting Jays Case Study (/fighting-jays)
  📁 Pages — Blog (New)
    📄 Blog Index (/blog)
    📄 Blog Post Template (/blog/[slug])
  📁 Pages — Free Resources
    📄 Free Resources Hub (/free-resources)
    📄 Toolbox Talks (/toolbox-talks)
    📄 OSHA Compliance Guide (/osha-compliance-guide)
    📄 Injury Prevention Guide (/injury-prevention-guide)
  📁 Pages — Legal
    📄 Privacy Policy (/privacy-policy)
    📄 Terms & Conditions (/terms-and-conditions)
    📄 Cookie Preferences (/cookie-preferences)
  📁 Pages — Errors
    📄 403 Forbidden
    📄 404 Not Found
    📄 429 Too Many Requests
    📄 500 Internal Server Error
  📁 Mobile Variants
    📄 Home — 375px
    📄 Schedule a Consult — 375px
    📄 Drug Testing — 375px
    📄 Contact — 375px
    📄 Emergency Response — 375px
```

---

## EXPORT / HANDOFF NOTES FOR NEXT.JS DEVELOPER

- Export design tokens as JSON (Tailwind CSS `theme.extend` compatible)
- Export all SVG icons individually, named in kebab-case matching component prop names
- Annotate every page section with its Schema.org type in Figma comments
- Annotate every image: dimensions, alt text string, loading priority (eager LCP / lazy all others)
- Annotate form fields: input type, validation rules, aria-label, autocomplete attribute
- Note all transition timings (ms) and easing functions
- Document color contrast ratios for all text/background combinations
- Spacing system: 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px)
- `/schedule-consultation` → 301 redirect to `/schedule-consult` goes in `next.config.js`
- Blog routes use ISR — document revalidation interval (recommended: 60s)

---

*Pages verified against live index.php router — v2. All routes, slugs, and page titles are accurate as of the source file provided. Blog section is a new addition approved by client. Schema.org, metadata, logging, and security sections require manual developer review — do not ship AI-generated output for these without auditing against this spec.*