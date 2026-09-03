# Marketing Coverage Audit — 1st Response Occupational Health

**Date:** 2026-09-03
**Scope:** the live Next.js app only — repo-root `app/`, `components/`, `lib/schema/`.
**Status:** Phase 1 (read-only audit). See the **Post-edit** section at the end for what Phase 2 changed.

---

## Scope note: `src/` is dead code — do not read findings from it

`tsconfig.json:37-41` explicitly excludes `"src"`. That tree is a pre-migration Figma→Vite export (hence the root `vite.config.ts` and `index.html`); nothing under `app/`, `components/`, or `lib/` imports from it. It contains a near-duplicate `src/app/components/partner-carousel.tsx` that renders text placeholders rather than logos — a decoy. **Every finding and every line reference in this report points at the live app.**

**Stack confirmed:** Next 15 App Router, React 19, TypeScript (`strict: true`), Tailwind CSS v4 CSS-first (no `tailwind.config.*`; the `@theme inline` block in `app/globals.css:23-38` is the config), `next/image`, `lucide-react`, `next/font` Inter. Brand accent `--accent: #E8621A` is exposed as the utility class `text-accent`. There is no CMS, MDX, or content directory — **all copy is inline JSX in the route files.**

---

## 1A. Core capability sentence (H1)

**Target sentence:**

> 1st Responders Occupational Health and Safety LLC delivers onsite occupational health and safety support for first responders, industrial crews, and distributed workforces by combining onsite medics, occupational physician access through telemedicine, testing, emergency response, training, and case management.

**Found:** no faithful variant of this sentence exists anywhere on the site.

**Current home H1 — `app/page.tsx:68-73`:**

> `Occupational Health Services for Workforces Nationwide`

**Supporting hero copy — `app/page.tsx:74-83`:**

- `:66` eyebrow — `Nation's First · Mobile Onsite Occupational Telemedicine`
- `:78` — `The first mobile occupational health clinic to bring onsite telemedicine directly to your worksite, connecting your workers with an occupational physician, not an ER doctor.`
- `:81` — `99% of visits seen in under 1 hour.`

### Element-by-element gap analysis

| Capability-sentence element | Present in H1/hero? |
|---|---|
| Company name "1st Responders Occupational Health **and Safety LLC**" | **No.** See brand-name mismatch below. |
| "onsite occupational health **and safety** support" | Partial — "Occupational Health Services"; the word *safety* is absent from the H1 |
| "**first responders**" as an audience | **Absent from the entire site** — see 1C |
| "industrial crews" | Implied only by "Workforces Nationwide" |
| "distributed workforces" | Not in H1/hero. Only in a service-card blurb, `app/page.tsx:34` ("distributed teams") |
| "onsite medics" | Not in H1. Trust badge `:25`, deck copy `:122` |
| "occupational physician access through telemedicine" | **Yes** — `:78` is the strongest match on the page |
| "testing" | Service cards only |
| "emergency response" | Service cards only |
| "training" | Service cards only |
| "case management" | Service cards only |

The H1 is a generic category claim; the hero leads with *telemedicine differentiation*, not the multi-service capability statement. The sentence's breadth is reconstructable only from the 11-card services grid at `app/page.tsx:29-41`.

### ⚠️ Brand-name mismatch — client decision required

The capability sentence names **1st Responders Occupational Health and Safety LLC**. Every page on the site says **1st Response Occupational Health**:

- `app/layout.tsx:16` (site-wide default `<title>`)
- `components/footer.tsx:39`, and `components/footer.tsx:166` — `© 2025 1st Response Occupational Health. All rights reserved.`

Differences: *Response* vs *Responders*, missing *and Safety*, missing *LLC*. There is **no legal-entity disclosure anywhere on the site**. If the LLC name is the correct legal entity, this is a footer/legal fix beyond copy, not a headline fix.

**Action taken:** none. Per client decision, the H1 is reported and left as-is.

---

## 1B. Service coverage matrix

All eight required services have coverage somewhere on the site. **No service has zero coverage.** Two integrity flags follow the table.

### B1. Onsite occupational care / onsite medics — ✅ COVERED

| File:line | Text |
|---|---|
| `app/page.tsx:32` | card — `Onsite Medical Care` / `Clinical occupational health services delivered directly at your worksite.` |
| `app/page.tsx:25` | trust badge — `Onsite Medics` |
| `app/page.tsx:122` | `We deploy onsite medics, telemedicine, and clinical services to companies across every industry and every state.` |
| `app/page.tsx:176` | H3 — `On-Site or Telemedicine` |
| `app/onsite-care/page.tsx:33` | H1 — `Onsite Medical Care for Industrial Worksites` |
| `app/onsite-care/page.tsx:41` | H2 — `What's Included` |
| `app/onsite-care/page.tsx:53` | H2 — `Who Needs This` |
| `components/start-site-page-client.tsx:25` | H1 — `Start an Onsite Occupational Health Program` |
| `components/footer.tsx:8` | nav — `Onsite Medical Care` |

> **Scope flag:** `/onsite-care` promises "onsite occupational care" but its actual scope is **two bullets** (`app/onsite-care/page.tsx:47-50`): drug and alcohol testing, and return-to-work evaluations. The page under-delivers against its own H1.

### B2. EMT / paramedic / nurse / medic staffing — ⚠️ COVERED EXCEPT "NURSE"

| File:line | Text |
|---|---|
| `app/page.tsx:33` | card — `Onsite EMTs & Paramedics` / `Certified medics and paramedics stationed at your job site for immediate response.` |
| `app/onsite-medics/page.tsx:33` | H1 — `Onsite EMTs & Paramedics for Industrial Sites` |
| `app/onsite-medics/page.tsx:41` | H2 — `What We Provide` |
| `app/onsite-medics/page.tsx:51` | H2 — `Deployment Scenarios` |
| `app/onsite-medics/page.tsx:66` | CTA — `Request Onsite Medic Staffing` |
| `app/faqs/page.tsx:31` | H2 category — `Onsite Care & EMTs/Paramedics` |
| `app/hill/page.tsx:44`, `app/fighting-jays/page.tsx:43` | case-study proof of medic deployment |

> **⚠️ Gap — client decision required.** The word **"nurse" appears nowhere in the repository.** Staffing is EMT/paramedic only. The capability sentence implies nurse staffing is offered. **No copy was added for this** — writing it would invent a capability. If nursing staffing is real, the client must confirm it and it can then be added to `/onsite-medics`.

### B3. Occupational physician telemedicine — ✅ COVERED (strongest on the site)

| File:line | Text |
|---|---|
| `app/page.tsx:34` | card — `Telemedicine` / `OSHA-compliant remote occupational health consultations for distributed teams.` |
| `app/page.tsx:24` | trust badge — `Telemedicine Available` |
| `app/page.tsx:78` | hero — `…connecting your workers with an occupational physician, not an ER doctor.` |
| `app/telemedicine/page.tsx:38` | H1 — `Occupational Telemedicine Services` |
| `app/telemedicine/page.tsx:46` | H2 — `How It Works` |
| `app/telemedicine/page.tsx:59` | H2 — `Industries Served` |
| `app/faqs/page.tsx:38` | H2 category — `Telemedicine` |

### B4. Drug and alcohol testing — ✅ COVERED

| File:line | Text |
|---|---|
| `app/page.tsx:30` | card — `Drug Testing` / `DOT and non-DOT drug & alcohol testing with rapid results and full chain of custody.` |
| `app/page.tsx:22` | trust badge — `DOT Certified` |
| `app/drug-testing/page.tsx:32` | H1 — `DOT & Non-DOT Drug Testing Services` |
| `app/drug-testing/page.tsx:40` | H2 — `Our Drug Testing Services` |
| `app/onsite-care/page.tsx:48` | bullet — `Drug and alcohol testing (DOT and non-DOT)` |
| `app/faqs/page.tsx:15` | H2 category — `Drug & Alcohol Testing` |

### B5. CPR and AED training — ✅ COVERED

| File:line | Text |
|---|---|
| `app/page.tsx:36` | card — `CPR & AED Training` / `OSHA-compliant certification courses for your workforce, onsite or in-clinic.` |
| `app/cpr-training/page.tsx:33` | H1 — `CPR, First Aid & AED Training — OSHA-Compliant Certification` |
| `app/cpr-training/page.tsx:41` | H2 — `Training Programs` |
| `app/cpr-training/page.tsx:54` | H2 — `Class Formats` |
| `app/faqs/page.tsx:52` | H2 category — `CPR & AED Training` |
| `components/navbar.tsx:35` | nav — `Training` |

### B6. Case management (incl. return-to-work) — ✅ COVERED

| File:line | Text |
|---|---|
| `app/page.tsx:37` | card — `Case Management` / `Workers' comp coordination, return-to-work programs, and injury tracking.` |
| `app/manage-cases/page.tsx:34` | H1 — `Occupational Case Management Services` |
| `app/manage-cases/page.tsx:42` | H2 — `What Case Management Covers` |
| `app/manage-cases/page.tsx:50` | bullet — `Return-to-work program design and management` |
| `app/manage-cases/page.tsx:57` | H2 — `Process` |
| `app/onsite-care/page.tsx:49` | bullet — `Return-to-work evaluations` |
| `app/faqs/page.tsx:59` | H2 category — `Case Management` |
| `components/navbar.tsx:21` | nav group — `Case Management` |

### B7. Safety management — 🔴 MARKETED ON HOME, DISCLAIMED ON THE SERVICE PAGE

**This is the highest-priority copy defect on the site.** The home page sells three specific services that the destination page explicitly denies providing.

**What the home page promises — `app/page.tsx:38`:**

> `{ icon: ShieldCheck, title: "Safety Management Support", description: "OSHA compliance consulting, safety program development, and incident investigation.", href: "/safety-support" }`

Also published as machine-readable structured data — `lib/schema/home.ts:74`: `{ "@type": "Service", "name": "Safety Management Support" }`.

**What the destination page says — `app/safety-support/page.tsx:42`:**

> `We are not a safety management company — we partner with your existing site safety team to provide medical support when incidents happen.`

Repeated in that page's FAQ (`app/safety-support/page.tsx:34`) and again at `app/faqs/page.tsx:67`:

> `"No. We work with your existing safety teams to provide case management support and incident coordination. We are not a safety management company and are not CHST-certified, though we follow those guidelines in our approach."`

**None of the three promised services appear on `/safety-support`.** Its actual four bullets (`app/safety-support/page.tsx:48-51`) are: incident response coordination, injury documentation and case management, a communication bridge between providers and the safety team, and support for post-incident reporting and OSHA recordkeeping. There is no OSHA compliance consulting, no safety program development, and no incident investigation.

> **Client decision required.** Either the home card is overselling and must be rewritten to match `/safety-support`, or the service page is underselling. This was **not** changed in Phase 2 — the brief scoped edits to coverage gaps, and this is a contradiction, not a gap.

### B8. Emergency response — ✅ COVERED

| File:line | Text |
|---|---|
| `app/page.tsx:39` | card — `Emergency Response` / `Rapid industrial emergency response services deployed nationwide.` |
| `app/page.tsx:190-191` | H3 — `Emergency Response Ready` + body |
| `app/emergency-response/page.tsx:32` | H1 — `Industrial Emergency Response Services` |
| `app/emergency-response/page.tsx:40` | H2 — `What's Covered` |
| `app/faqs/page.tsx:72` | H2 category — `Emergency Response` |
| `app/about-us/page.tsx:53-54` | `Our healthcare professionals provide expert first aid, emergency response, and OSHA-compliant treatments…` |

### 1B summary

| Service | Verdict |
|---|---|
| Onsite occupational care / onsite medics | ✅ Covered (page scope narrower than the H1 implies) |
| EMT / paramedic / **nurse** / medic staffing | ⚠️ Covered for EMT/paramedic; **nurse has zero coverage** |
| Occupational physician telemedicine | ✅ Covered |
| Drug and alcohol testing | ✅ Covered |
| CPR and AED training | ✅ Covered |
| Case management (incl. return-to-work) | ✅ Covered |
| Safety management | 🔴 Marketed on home, **disclaimed** on the service page |
| Emergency response | ✅ Covered |

---

## 1C. Not-confirmed services — every occurrence

Per client decision, **nothing in this section was changed.** These are reported for the client to decide on removal or "available with notice" labeling.

### C1–C3. Physical exams / respirator fit testing / audiometric testing — 2 occurrences each, **zero on-page substantiation**

| File:line | Exact text |
|---|---|
| `app/page.tsx:31` | `{ icon: Stethoscope, title: "Medical Testing", description: "Physical exams, respirator fit testing, audiometric testing, and vision screenings.", href: "/medical-testing" },` |
| `app/medical-testing/page.tsx:10` | meta description — `"Physical exams, respirator fit testing, audiometric testing, vision screenings, and preventive health screenings delivered at your onsite occupational clinic."` |

> **🔴 CRITICAL.** These three services are claimed **only** in the home-page card and the `<meta description>`. The `/medical-testing` page body (`app/medical-testing/page.tsx:39-58`) lists **ten entirely different services** under two H2s — Cardiovascular Screening, Diabetes Screening, Vision Screening, Wellness Programs, Influenza Testing, Strep Throat Testing, Respiratory Illness Screening, Blood Glucose Testing, Blood Pressure Monitoring, EKG Testing. Not one is a physical exam, a respirator fit test, or an audiometric test.
>
> `lib/schema/medical-testing.ts:11` also omits all three: `"…including cardiovascular, diabetes, vision screenings, rapid diagnostics, and EKG testing."`
>
> The strings `audiometric`, `respirator`, `fit test`, `hearing`, and `spirometry` appear **nowhere else in the repository**. A visitor who clicks the card from the home page lands on a page that does not offer what the card advertised.

### C4. Vision screening — 6 occurrences; **this one is substantiated**, but the scope is overstated

| File:line | Exact text |
|---|---|
| `app/page.tsx:31` | `…and vision screenings.` |
| `app/medical-testing/page.tsx:10` | meta description (above) |
| `app/medical-testing/page.tsx:34` | FAQ — `"We offer cardiovascular screening, diabetes screening, vision screening, and integrated wellness programs — all available at your occupational clinic."` |
| `app/medical-testing/page.tsx:44` | bullet — `"Vision Screening — basic eye health assessment at occupational clinic"` |
| `app/faqs/page.tsx:25` | `"Our preventive screening services include cardiovascular screening, diabetes screening, vision screening, and wellness programs…"` |
| `lib/schema/medical-testing.ts:11`, `:20` | same text as structured data |

> **Scope mismatch:** the home card says "vision screenings" alongside respirator and audiometric testing, which reads as occupational vision **compliance** testing. The page says `basic eye health assessment`. These are different products at different price points.

### C5. First aid / BLS / ALS as a standalone service line — **a full route, extensively marketed**

| File:line | Exact text |
|---|---|
| `app/page.tsx:23` | trust badge — `{ icon: HeartPulse, label: "BLS/ALS Provider" }` |
| `app/page.tsx:35` | card — `{ icon: HeartPulse, title: "First Aid, BLS & ALS", description: "Advanced life support and first aid services for industrial worksites.", href: "/firstaid-bls-als" },` |
| `app/firstaid-bls-als/page.tsx:9` | title — `"First Aid, BLS & ALS Services \| 1st Response Occupational Health"` |
| `app/firstaid-bls-als/page.tsx:11` | meta — `"Onsite first aid, Basic Life Support, and Advanced Life Support services for industrial worksites. OSHA-compliant, certified providers deployed nationwide."` |
| `app/firstaid-bls-als/page.tsx:33` | H1 — `First Aid, BLS & ALS Services` |
| `app/firstaid-bls-als/page.tsx:41-46` | H2 `What We Provide` + `From basic wound care and first aid to advanced cardiac life support, we scale our response to match your site's risk profile.` |
| `app/firstaid-bls-als/page.tsx:50` | H2 — `Who Needs This Service` |
| `app/firstaid-bls-als/page.tsx:58` | `All services meet OSHA 29 CFR 1910.151 and 1926.50 requirements…` |
| `app/emergency-response/page.tsx:49` | bullet — `"BLS and ALS interventions by certified providers"` |
| `app/onsite-medics/page.tsx:37` | FAQ — `"…our medics arrive fully equipped with BLS/ALS gear…"` |
| `app/about-us/page.tsx:18` | cert badge — `{ icon: HeartPulse, label: "BLS/ALS Provider" }` |
| `lib/schema/home.ts:11`, `:71`; `lib/schema/firstaid-bls-als.ts:15`, `:21` | structured data |
| `components/navbar.tsx:13`, `components/footer.tsx:11` | navigation |

> **Internal hedge worth flagging** — `app/firstaid-bls-als/page.tsx:36` quietly walks back the ALS promise made in the card title, the H1, and the page title:
>
> `"Yes. Most construction sites utilize first aid to BLS level of care from our certified providers. ALS coverage is optional and available if the client requires it."`
>
> The site sells ALS as a headline service, then discloses in an FAQ that it is optional and conditional.

### 1C summary — what the client must decide

| Not-confirmed service | Occurrences | Substantiated on-page? | Blast radius if removed |
|---|---|---|---|
| Physical exams | 2 | **No** | Home card copy + one meta description |
| Respirator fit testing | 2 | **No** | Home card copy + one meta description |
| Audiometric testing | 2 | **No** | Home card copy + one meta description |
| Vision screening | 6 | Yes, but narrower than advertised | Home card wording only |
| First aid / BLS / ALS standalone | 20+ | Yes (ALS hedged) | A full route, nav entry, footer entry, 2 trust badges, `sitemap.xml`, 2 schema files |

Removing physical exams / respirator fit testing / audiometric testing is **cheap** — two strings. Removing the BLS/ALS service line is **expensive** and would orphan a live route.

---

## 1D. Unsupported-claim scan

Nothing here was removed. Each item needs proof attached or needs cutting.

### D1. Response-time and turnaround promises

| # | File:line | Claim |
|---|---|---|
| 1 | `app/emergency-response/page.tsx:10` | `"…Pre-positioned EMTs and paramedics with 7–10 minute average response times…"` |
| 2 | `app/emergency-response/page.tsx:35` | `"Our average response time is 7 to 10 minutes."` |
| 3 | `app/emergency-response/page.tsx:44-45` | `…help arrives immediately — not after a 30-minute ambulance drive.` |
| 4 | `app/faqs/page.tsx:74` | `"Our average response time is 7 to 10 minutes…"` |
| 5 | `lib/schema/emergency-response.ts:11`, `:21` | same claim, **machine-readable to search engines** |
| 6 | `app/page.tsx:81` | `99% of visits seen in under 1 hour.` (bolded in the hero) |
| 7 | `app/telemedicine/page.tsx:10` | `"…99% of visits seen in under 1 hour. Nationwide coverage."` |
| 8 | `app/telemedicine/page.tsx:42` | `"99% of appointments are seen in an hour or less from time of visit to clinic."` |
| 9 | `app/faqs/page.tsx:41` | `"99% of telemedicine appointments are seen within one hour of scheduling."` |
| 10 | `lib/schema/telemedicine.ts:11`, `:22` | same, as structured data |
| 11 | `lib/schema/faqs.ts:20` | `"…seen by an occupational physician from the worksite within the hour."` |
| 12 | `app/drug-testing/page.tsx:35`, `app/faqs/page.tsx:18`, `lib/schema/drug-testing.ts:21` | `"…finalized within 24 to 72 hours."` |
| 13 | `app/faqs/page.tsx:34` | `"Simple medic staffing can be arranged within days. Full onsite clinic programs typically take 1 to 2 weeks…"` |
| 14 | `app/faqs/page.tsx:82` | `"…provide a pricing proposal — usually within 1 business day."` |
| 15 | `app/thanks/page.tsx:9`, `:33`; `components/contact-page-client.tsx:131`; `components/resource-lead-capture-client.tsx:116` | `within 1 business day` |
| 16 | `app/cpr-training/page.tsx:37` | `"…run approximately 4 to 6 hours…"` |

> **⚠️ The 99% claim uses three different denominators.** `99% of visits` (`app/page.tsx:81`) vs `99% of appointments … from time of visit to clinic` (`app/telemedicine/page.tsx:42`) vs `99% of telemedicine appointments … within one hour of scheduling` (`app/faqs/page.tsx:41`). "From time of visit to clinic" and "of scheduling" are materially different measurements. Whatever the real figure is, the site currently states it three incompatible ways — including in structured data.

### D2. Clinical-outcome claims

| # | File:line | Claim |
|---|---|---|
| 17 | `app/referrals/page.tsx:36` | `"This improves outcomes, reduces claim duration, and demonstrates your company's duty of care."` |
| 18 | `app/referrals/page.tsx:10`, `:52` | `Faster return-to-work…` |
| 19 | `app/manage-cases/page.tsx:37` | `"…professional case management helps reduce costs and improve outcomes."` |
| 20 | `app/emergency-response/page.tsx:42-43` | `…response time and provider capability determine outcomes.` |
| 21 | `app/about-us/page.tsx:55` | `…solutions that drive exceptional safety performance nationwide.` |
| 22 | `app/about-us/page.tsx:74-76` | `By maintaining industry-leading standards… demonstrating measurable value.` |
| 23 | `app/about-us/page.tsx:80-82` | `…create safer crews and better outcomes…` |
| 24 | `app/page.tsx:163`, `app/free-resources/page.tsx:16` | `"…reduce workplace injuries and insurance costs."` |
| 25 | `app/injury-prevention-guide/page.tsx:9`, `:18` | `"…reduce workplace injuries, lower workers' comp costs…"` |
| 26 | `components/blog-index-client.tsx:40`, `app/blog/[slug]/page.tsx:43` | `"…reduces claim costs…"` |
| 27 | `app/telemedicine/page.tsx:29` | `"…including imaging and other orders if clearly indicated"` — implies imaging-ordering authority |

### D3. Compliance guarantees

| # | File:line | Claim |
|---|---|---|
| 28 | `app/page.tsx:183-184` | H3 `OSHA & DOT Certified` + `Every service meets or exceeds federal compliance standards. No guesswork, no audit surprises.` |
| 29 | `app/page.tsx:21`, `app/about-us/page.tsx:16` | trust badge `OSHA Compliant` — **OSHA does not certify companies** |
| 30 | `app/page.tsx:22`, `app/about-us/page.tsx:17` | trust badge `DOT Certified` |
| 31 | `app/about-us/page.tsx:19` | badge `CLIA Waived Lab`, under H2 `Certifications & Accreditations` (`:183`) |
| 32 | `app/telemedicine/page.tsx:40`, `:69` | `…meet OSHA regulatory standards…` |
| 33 | `app/drug-testing/page.tsx:56` | `…comply with DOT 49 CFR Part 40, FMCSA regulations…` |
| 34 | `app/firstaid-bls-als/page.tsx:37`, `:58` | `…meet OSHA 29 CFR 1910.151 and 1926.50…` |
| 35 | `app/emergency-response/page.tsx:57` | `…meet OSHA 29 CFR 1910.120 (HAZWOPER)…` |
| 36 | `app/cpr-training/page.tsx:33`, `:35`; `lib/schema/faqs.ts:52` | `…accepted by OSHA…` |
| 37 | `components/footer.tsx:47`, `components/schedule-consult-form.tsx:69-70` | `OSHA-compliant occupational health services…` |
| 38 | `app/page.tsx:162`, `:198` | `…compliant and audit-ready.` / `Ready to Keep Your Workforce Compliant and Safe?` |

> **⚠️ Direct contradiction.** `app/page.tsx:184` asserts `Every service meets or exceeds federal compliance standards`, while `app/faqs/page.tsx:67` admits `"…we are not CHST-certified, though we follow those guidelines in our approach."`

### D4. Geographic coverage claims

No literal `"50 states"` string exists, but `nationwide` / `every state` appear **34 times**. Highest-exposure instances:

| # | File:line | Claim |
|---|---|---|
| 39 | `app/page.tsx:122` | `…companies across every industry and every state.` — **the broadest, least supportable claim on the site** |
| 40 | `app/page.tsx:72` | H1 — `…for Workforces Nationwide` |
| 41 | `app/page.tsx:26` | trust badge — `Nationwide Coverage` |
| 42 | `app/page.tsx:15`, `app/layout.tsx:16`, `:20` | site-wide `<title>` and meta |
| 43 | `app/cpr-training/page.tsx:11`, `:45`, `:57` | `Training available at any 1st Response onsite clinic location, nationwide` — **implies a multi-site clinic network** |
| 44 | `app/safety-support/page.tsx:32` | H1 — `…Nationwide` |
| 45 | `app/page.tsx:39`, `:191`; `app/emergency-response/page.tsx:10`; `app/firstaid-bls-als/page.tsx:11`, `:36`; `app/onsite-medics/page.tsx:11`; `app/telemedicine/page.tsx:10`, `:62`; `app/faqs/page.tsx:55`, `:68`; `app/cases/page.tsx:9`; `app/about-us/page.tsx:55`; `components/contact-page-client.tsx:102`; `components/footer.tsx:47` | further `nationwide` claims |
| 46 | `lib/schema/*.ts` (16 files) | `"areaServed": {"@type":"Country","name":"United States"}` — **machine-readable** |
| 47 | `components/partner-carousel.tsx:72-73` | `We partner with some of the largest construction and energy companies in the country…` |

> **The nationwide claims are contradicted by the site's own footprint evidence:** one address (Tyler, TX — `components/footer.tsx:120`, `app/about-us/page.tsx:47`), one phone number, two case studies, and three named partner logos. Nothing on the site substantiates a national clinic network.

### D5. Percentage, metric, and superlative claims

| # | File:line | Claim |
|---|---|---|
| 48 | `app/page.tsx:81` | `99%` — the only percentage on the site |
| 49 | `app/page.tsx:66` | `Nation's First · Mobile Onsite Occupational Telemedicine` — **a first-to-market superlative** |
| 50 | `app/page.tsx:78`; `app/layout.tsx:20`; `lib/schema/home.ts:11`; `lib/schema/about-us.ts:8` | `The first mobile occupational health clinic to…` |
| 51 | `app/page.tsx:143`, `app/cases/page.tsx:21`, `app/hill/page.tsx:10`, `:12`, `:22`, `:48-49`, `lib/schema/hill.ts:10-11` | `800+ days zero incidents` |
| 52 | `app/page.tsx:144`, `app/cases/page.tsx:22`, `app/fighting-jays/page.tsx:9`, `:11`, `:21`, `:47-48`, `lib/schema/fighting-jays.ts:10-11` | `500+ days worked safe` / `0 incidents` |
| 53 | `app/cases/page.tsx:9` | `…1st Response Occupational Health has delivered zero-incident records…` — **attributes the client's safety record to the vendor** |
| 54 | `app/page.tsx:140` | H2 — `Real Results for Real Companies` |
| 55 | `app/about-us/page.tsx:146`, `app/team/page.tsx:44` | `over two decades of specialized experience` |
| 56 | `app/about-us/page.tsx:94-95`, `app/team/page.tsx:28` | `decades of experience` |
| 57 | `app/faqs/page.tsx:81` | `"…competitive flat-rate pricing and volume discounts."` |
| 58 | `components/blog-index-client.tsx:19`, `app/blog/[slug]/page.tsx:22` | `"5 OSHA Recordkeeping Mistakes That Cost Employers Thousands"` |

> **Case-study math flag.** `800+ days` is presented as one continuous record, but `app/hill/page.tsx:38` describes Hill as *a two-phase solar construction project* — likely two records summed. Neither case study discloses crew size, hours worked, or the recordable-injury definition behind "zero incidents."

---

## Appendix — defects found during the audit, out of scope for this work

Not fixed. Flagged because several are more damaging than the copy issues above.

1. **JSON-LD publishes the wrong city.** `lib/schema/home.ts:19-21` and `:41-43` declare `"addressLocality": "Lubbock"`, while every visible page says **Tyler, TX** (`components/footer.tsx:120`, `app/about-us/page.tsx:47`, `components/schedule-consult-form.tsx:228`). Google indexes the schema.
2. **Business hours contradict.** `lib/schema/home.ts:26-28` says Mon–Fri 08:00–17:00; `components/footer.tsx:145-148` says Mon–Fri 8–6, Sat 8–5, Sun as needed.
3. **The blog is empty but indexed.** All six posts render `This article is coming soon.` (`app/blog/[slug]/page.tsx:151-161`) while six titles dated Jan–Feb 2026 are linked from the home page, the nav, `app/sitemap.ts`, and `public/sitemap.xml`.
4. **Broken primary conversion path.** Thirteen "Schedule a Consult" CTAs point at `/schedule-consult`, which is a bare `redirect("/contact")` (`app/schedule-consult/page.tsx:4`) — landing users on a tabbed contact page that defaults to the General tab, not the consult form. `next.config.ts:12-20` adds a second hop from `/schedule-consultation`.
5. **The Start a Site form discards every lead.** `components/start-site-page-client.tsx:78` — `onSubmit={(e) => { e.preventDefault(); if (!form.honeypot) setSubmitted(true); }}`. It shows a success state and POSTs nowhere. The other two forms submit to Formspree.
6. **Blog data is duplicated four times.** The `blogPosts` array is copy-pasted into `components/blog-index-client.tsx:6` and `app/blog/[slug]/page.tsx:9`; slugs are hardcoded again in `app/sitemap.ts:5-12` and a fourth time in `public/sitemap.xml`.

---
---

# Post-edit — Phase 2 changes and re-verification

**Date:** 2026-09-03. Three files changed, one asset added. **Nothing was committed.**

## Files changed

| File | Change |
|---|---|
| `app/page.tsx` | Added a `buyerGroups` array and a **"Who We Serve"** section (H2 + five H3s) between the services grid and the partner carousel |
| `components/partner-carousel.tsx` | Heading → `Trusted Partners`; added a static partner-name list; added the Strata logo slot; per-entry `alt`; explicit `loading="lazy"` |
| `public/assets/stratalogo.webp` | **New.** Converted from the supplied AVIF |
| `audit/marketing-coverage-report.md` | This report |

## 2A — Buyer-group coverage re-run

| Buyer group | Before | After | Heading |
|---|---|---|---|
| Fire departments and EMS agencies | 🔴 zero coverage | ✅ | `app/page.tsx` — H3 `Fire Departments & EMS Agencies` |
| Municipal HR and risk managers | 🔴 zero coverage | ✅ | H3 `Municipal HR & Risk Managers` |
| Industrial contractors *(priority)* | ⚠️ carousel social proof only | ✅ | H3 `Industrial Contractors` |
| Construction and energy companies *(priority)* | ⚠️ bullets under generic headings | ✅ | H3 `Construction & Energy Companies` |
| Prime contractors *(priority)* | 🔴 zero coverage | ✅ | H3 `Prime Contractors` |

**All five buyer groups now have a dedicated subheading.** Copy sits in a `buyerGroups` array literal beside the existing `trustBadges` and `services` arrays — the file's established idiom, and the only "source" available since the site has no CMS or content directory.

**Heading hierarchy verified, no skipped levels:** H1 (`:91`) → H2 `What We Do` (`:141`) → H2 `Who We Serve` (`:160`) → H3 ×5 (`:171`) → H2 `Trusted Partners` → H2 `Real Results…` → H2 `Free Tools…` → H3 ×3.

### Deliberate omissions in the new copy — each avoids an unverified claim

| Emphasis point requested | What was written instead | Why |
|---|---|---|
| Fire/EMS: "physicals" | *"wellness and readiness support"* | Physical exams are not confirmed Available Now (1C) |
| Industrial: "BLS/ALS" | *"the medic credential level matched to your site's risk profile"* | BLS/ALS is a medic credential, not a separately sold service line |
| Industrial: "medical testing" | *"onsite medical care, drug and alcohol testing"* | "Medical testing" routes to `/medical-testing`, whose headline services are unconfirmed (1C) |
| Construction/energy: "fast injury response" | *"treat injuries quickly"* | No minutes figure — the 7–10 minute claim is unproven (1D) |
| Prime: "nationwide coverage" | *"across your portfolio of sites and subcontractors"* | Avoids adding a 35th unproven nationwide claim (1D). **If the client can substantiate national coverage, this line should be strengthened.** |

Verified by grep against the new copy: no percentage, no response time, no "nationwide", no "guarantee", no "certified", and none of the not-confirmed services appear.

## 2B — Trusted Partners

1. **Heading renamed** to exactly `Trusted Partners` (`components/partner-carousel.tsx:72`).
2. **Static, non-rotating name list** added beneath the carousel (`:114-123`) — `Mortenson`, `Strata`, `MYR`, `SOLV`, in that order, as a `<ul>` **outside** the animated `.partner-track`, so it never moves and is readable immediately.
3. **Real text nodes**, not `alt` attributes — rendered as `{partnerName}` from the `partnerNames` array (`:17`). Indexable and available to screen readers.
4. **Carousel kept.** Strata inserted after Mortenson to match the text-list order; the relative order of Mortenson / MYR Group / SOLV is unchanged and the three "Coming Soon" placeholders remain. Seven slots, doubled to fourteen for the marquee.
5. **Brand token reused:** `text-accent`, which maps to `--accent: #E8621A` via `@theme inline` in `app/globals.css:33`. No new hex value and no inline style. (Note `text-primary` is navy in this theme, not orange.)

### Asset

**Wired path: `/assets/stratalogo.webp` → `public/assets/stratalogo.webp`.**

This follows the existing convention (`mortensonlogo.webp`, `myrgroup.webp`, `solvlogo.webp`), **not** the `public/partners/strata.<ext>` path in the brief — there is no `public/partners/` directory and creating one would split logo storage across two locations. Converted from the supplied `771485_840706048d244f1e9f050a613fa40e3b~mv2.avif` (which has been removed from the repo root): 440×107, alpha channel preserved, 17.4 KB — in line with the other logos (13–14 KB).

### 🔴 The supplied Strata logo is the reverse (white) variant

The file is the genuine Strata Construction logo, but the **"STRATA" wordmark is white**, intended for dark backgrounds. The carousel background is `#ffffff` (`components/partner-carousel.tsx:42`), and logos additionally render at `grayscale(100%)` / `opacity: 0.65` by default (`:97-98`). **The wordmark will be effectively invisible in the carousel.** Only the green diamond mark and the green "CONSTRUCTION" sub-text will show.

The asset was wired unmodified — recoloring a partner's brand asset is not a call to make without their approval. **The client should supply the dark-on-light variant.** In the meantime the static name list guarantees "Strata" is readable regardless, which is exactly what that list is for.

### Deviation from the brief: `fill` instead of explicit `width`/`height`

The brief asked for explicit `width`/`height`. `PartnerLogo` uses `fill` inside a fixed `relative h-[60px] w-[160px]` container with `sizes="160px"` (`:26-35`) — which already pins the layout box and prevents CLS. Switching to `width`/`height` would change how all six pre-existing logos render. `fill` was kept; `loading="lazy"` was added explicitly as requested (the carousel is below the fold).

## 2C — Code standards

- Current Next 15 App Router APIs only. No `next/legacy/image`, no deprecated config.
- **No logging added, and none is required:** no new client component and no new route handler were created. `PartnerCarousel` was already `"use client"`. If logging is ever added, the existing convention is the structured JSON call at `app/api/contact/route.ts:71-78` (UTC ISO timestamp, SHA-256-hashed IP, user agent, `event` name).
- **No new dependencies.** `package.json` is byte-identical.
- All new markup uses Tailwind utility classes rather than inline `style={{}}` — a deliberate departure from this file's Figma-export idiom, per the brief's "no inline styles" rule. Pre-existing inline styles were left untouched.
- **Metadata unchanged.** The H1, hero, and services grid were not modified, so the home `description` still describes the page accurately.

## Verification

All checks below were confirmed against the **prerendered HTML** that `next build` emitted, not just the source.

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ exit 0 |
| `npm run build` (`next build`) | ✅ exit 0 — 43/43 static pages generated, no warnings |
| Five buyer groups have headings | ✅ all five `<h3>` present in rendered `/` HTML |
| Heading hierarchy, no skipped levels | ✅ `h1` → `h2 What We Do` → `h2 Who We Serve` → `h3` ×5 → `h2 Trusted Partners` → … |
| No not-confirmed service introduced | ✅ verified by grep over the new copy |
| Four partner names render as real text | ✅ `<li class="…text-accent…">Mortenson\|Strata\|MYR\|SOLV</li>` in rendered HTML — present in visible text, not only in `alt` |
| Carousel renders with Strata slot | ✅ `<img alt="Strata logo" loading="lazy" … src=/_next/image?url=%2Fassets%2Fstratalogo.webp>` |

### `npm run lint` does not run — and was deliberately not made to run

There is no `.eslintrc*` or `eslint.config.*` in the repo, and no `eslint` / `eslint-config-next` in `devDependencies`. `next lint` therefore drops into interactive setup, and it is deprecated in Next 15 besides. Installing ESLint would have violated the no-new-dependency rule. **`next build` is the working gate.** Recommend adding `eslint-config-next` and a `typecheck` script as separate work.

### Environment note — `node_modules` corruption on the Windows mount

`npm install` into `/mnt/c/...` deterministically wrote truncated files (`typescript`, `@swc/helpers`, `@types/react` package.json files, and `sharp`), which broke both `tsc` and `next build`. This is a WSL drvfs issue, **not** a defect in this repo or in these changes. Verification was completed against a `node_modules` installed on the native Linux filesystem. There is also **no `.gitignore` in this repo**, so `node_modules/`, `.next/`, and `tsconfig.tsbuildinfo` all show as untracked — worth fixing separately.

## Still open — client decisions

Carried forward from Phase 1; none were acted on.

1. **🔴 `/safety-support` contradiction (1B7)** — the home card sells OSHA compliance consulting, safety program development, and incident investigation; the page says *"We are not a safety management company."* Highest priority.
2. **🔴 `/medical-testing` headline mismatch (1C1–C3)** — physical exams, respirator fit testing, and audiometric testing are claimed in the home card and meta description with zero support on the page or in its schema. Cheapest fix on the list: two strings.
3. **Not-confirmed services (1C)** — decide remove vs. "available with notice" for physical exams, respirator fit testing, audiometric testing, vision-screening scope, and the standalone First Aid/BLS/ALS line. The BLS/ALS decision is expensive: a live route, nav and footer entries, two trust badges, `sitemap.xml`, and two schema files.
4. **Nurse staffing (1B2)** — the capability sentence implies it; the word appears nowhere in the repo. Confirm before any copy is written.
5. **Unsupported claims (1D)** — ~58 items need proof attached or cutting. Start with the three that contradict themselves: the 99% figure's three denominators, "every service meets or exceeds federal compliance standards" vs. "not CHST-certified", and 34 nationwide claims against a single Tyler, TX address. Several are also published as JSON-LD, so search engines are indexing them.
6. **Brand name (1A)** — the site says *1st Response Occupational Health*; the capability sentence says *1st Responders Occupational Health and Safety LLC*. No legal-entity disclosure exists anywhere on the site.
7. **Strata logo variant** — supply the dark-on-light version (see above).
