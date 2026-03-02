# Schema.org JSON-LD Spec — 1st Response Occupational Health
## Claude Code Reference Document
### Source of truth for all structured data markup across the site

---

## RULES — READ FIRST

1. Every page gets its own `<script type="application/ld+json">` tag injected via `generateMetadata()` or a dedicated `JsonLd` server component — never client-side.
2. Use the minimum schema type that accurately describes the content. Do not stack unnecessary types.
3. `areaServed` is always `{ "@type": "Country", "name": "United States" }` — services are nationwide. HQ is Lubbock TX but that only appears in `address`, never `areaServed`.
4. All `text` values in `FAQPage` answers must be plain text — no HTML, no markdown, no line breaks.
5. Fill in all `[PLACEHOLDER]` values with real data before deploying. Never ship placeholders.
6. Validate every page at https://search.google.com/test/rich-results before launch.
7. BreadcrumbList goes on every page except the homepage.

---

## BASE ORGANIZATION — include as `@graph` member on every page

```json
{
  "@type": "Organization",
  "@id": "https://1stresponseoccupational.com/#organization",
  "name": "1st Response Occupational Health",
  "url": "https://1stresponseoccupational.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://1stresponseoccupational.com/logo.png",
    "width": 200,
    "height": 60
  },
  "sameAs": [
    "https://www.facebook.com/[PAGE_SLUG]",
    "https://www.linkedin.com/company/[PAGE_SLUG]",
    "https://www.google.com/maps/place/[PLACE_ID]"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-[PHONE]",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
}
```

---

## PAGE-BY-PAGE SCHEMA ASSIGNMENTS

---

### `/` — Homepage

**Types:** `MedicalBusiness` + `WebSite`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://1stresponseoccupational.com/#medicalbusiness",
      "name": "1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com",
      "logo": "https://1stresponseoccupational.com/logo.png",
      "image": "https://1stresponseoccupational.com/og-image.jpg",
      "description": "The first mobile occupational health clinic to provide onsite telemedicine services nationwide. Drug testing, onsite clinics, emergency response, BLS/ALS, case management, and CPR training for industrial workforces.",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Insurance",
      "telephone": "+1-[PHONE]",
      "email": "[EMAIL]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET_ADDRESS]",
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
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "availableChannel": [
        {
          "@type": "ServiceChannel",
          "serviceType": "In-Person",
          "serviceLocation": {
            "@type": "Place",
            "name": "1st Response Occupational Health Clinic",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lubbock",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          }
        },
        {
          "@type": "ServiceChannel",
          "serviceType": "Telemedicine",
          "availableLanguage": "English",
          "serviceUrl": "https://1stresponseoccupational.com/telemedicine",
          "areaServed": { "@type": "Country", "name": "United States" }
        },
        {
          "@type": "ServiceChannel",
          "serviceType": "Onsite",
          "description": "Mobile occupational health clinic and medic staffing deployed to employer worksites nationwide",
          "areaServed": { "@type": "Country", "name": "United States" }
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
    },
    {
      "@type": "WebSite",
      "@id": "https://1stresponseoccupational.com/#website",
      "url": "https://1stresponseoccupational.com",
      "name": "1st Response Occupational Health",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    }
  ]
}
```

---

### `/locations` — Locations

**Types:** `MedicalBusiness` (one per location) + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "1st Response Occupational Health — Lubbock",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[STREET_ADDRESS]",
        "addressLocality": "Lubbock",
        "addressRegion": "TX",
        "postalCode": "[ZIP]",
        "addressCountry": "US"
      },
      "telephone": "+1-[PHONE]",
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
      "parentOrganization": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://1stresponseoccupational.com/locations" }
      ]
    }
  ]
}
```

---

### `/about-us` — About Us

**Types:** `AboutPage` + `LocalBusiness` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "About 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/about-us",
      "description": "[META DESCRIPTION TEXT]",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "LocalBusiness",
      "name": "1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com",
      "sameAs": [
        "https://www.facebook.com/[PAGE_SLUG]",
        "https://www.linkedin.com/company/[PAGE_SLUG]",
        "https://www.google.com/maps/place/[PLACE_ID]"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://1stresponseoccupational.com/about-us" }
      ]
    }
  ]
}
```

---

### `/team` — Our Team

**Types:** `CollectionPage` + `Person` (one per team member) + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Our Team — 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/team"
    },
    {
      "@type": "Person",
      "name": "[TEAM_MEMBER_NAME]",
      "jobTitle": "[TITLE]",
      "worksFor": { "@id": "https://1stresponseoccupational.com/#organization" },
      "image": "https://1stresponseoccupational.com/team/[PHOTO_FILENAME]"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://1stresponseoccupational.com/about-us" },
        { "@type": "ListItem", "position": 3, "name": "Our Team", "item": "https://1stresponseoccupational.com/team" }
      ]
    }
  ]
}
```

---

### `/contact` — Contact

**Types:** `ContactPage` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/contact",
      "description": "Contact 1st Response Occupational Health to schedule services, request information, or speak with our team.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://1stresponseoccupational.com/contact" }
      ]
    }
  ]
}
```

---

### `/faqs` — FAQs

**Types:** `FAQPage` + `BreadcrumbList`

⚠️ `text` in `acceptedAnswer` must be plain text only — no HTML, no markdown.
⚠️ Populate with real FAQ content. Placeholder questions shown for structure only.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[QUESTION TEXT]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[PLAIN TEXT ANSWER — no HTML, no markdown]"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://1stresponseoccupational.com/faqs" }
      ]
    }
  ]
}
```

---

### `/schedule-consult` — Schedule a Consult

**Types:** `WebPage` + `BreadcrumbList`
Note: noindex this page's confirmation state only — the form page itself is indexed.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Schedule a Consult — 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/schedule-consult",
      "description": "Schedule an occupational health consultation with 1st Response. Services available nationwide — onsite, telemedicine, or in-clinic.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Schedule a Consult", "item": "https://1stresponseoccupational.com/schedule-consult" }
      ]
    }
  ]
}
```

---

### `/start-site` — Start a Site

**Types:** `Service` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Onsite Occupational Health Program Setup",
      "description": "1st Response deploys mobile occupational health clinics and medic staffing to employer worksites nationwide. Request a site assessment to start your onsite program.",
      "provider": { "@id": "https://1stresponseoccupational.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Onsite"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Start a Site", "item": "https://1stresponseoccupational.com/start-site" }
      ]
    }
  ]
}
```

---

## SERVICE PAGES — Standard Template

Apply this template to all service pages. Customize `serviceType`, `name`, `description`, and `availableChannel.serviceType` per page. The `FAQPage` block is included on every service page since each has an FAQ accordion.

### Template (copy and fill for each service)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "[SERVICE NAME]",
      "serviceType": "[SERVICE TYPE]",
      "description": "[2-sentence description. No keyword stuffing. Speak to employer benefit.]",
      "provider": { "@id": "https://1stresponseoccupational.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "[In-Person | Telemedicine | Onsite — pick the primary delivery method]",
        "areaServed": { "@type": "Country", "name": "United States" }
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[QUESTION]",
          "acceptedAnswer": { "@type": "Answer", "text": "[PLAIN TEXT ANSWER]" }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "[SERVICE NAME]", "item": "https://1stresponseoccupational.com/[ROUTE]" }
      ]
    }
  ]
}
```

---

## SERVICE PAGES — Individual Overrides

Only the fields that differ from the template are listed below. Merge with template above.

### `/firstaid-bls-als`
```json
{
  "name": "First Aid, BLS & ALS Services",
  "serviceType": "Emergency Medical Services",
  "availableChannel": { "serviceType": "Onsite" }
}
```

### `/telemedicine`
```json
{
  "name": "Occupational Telemedicine Services",
  "serviceType": "Telemedicine",
  "description": "1st Response connects workers with a licensed occupational physician — not an ER doctor — via onsite telemedicine. 99% of visits are seen in under 1 hour from time of clinic visit.",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Telemedicine",
    "serviceUrl": "https://1stresponseoccupational.com/telemedicine",
    "availableLanguage": "English",
    "areaServed": { "@type": "Country", "name": "United States" }
  }
}
```

### `/onsite-care`
```json
{
  "name": "Onsite Medical Care",
  "serviceType": "Occupational Medicine",
  "availableChannel": { "serviceType": "Onsite" }
}
```

### `/onsite-medics`
```json
{
  "name": "Onsite Medics & Paramedics",
  "serviceType": "Medical Staffing",
  "availableChannel": { "serviceType": "Onsite" }
}
```

### `/referrals`
```json
{
  "name": "Occupational Medical Referral Services",
  "serviceType": "Medical Referral Coordination",
  "availableChannel": { "serviceType": "In-Person" }
}
```

### `/drug-testing`
```json
{
  "name": "DOT & Non-DOT Drug Testing",
  "serviceType": "Drug and Alcohol Testing",
  "availableChannel": { "serviceType": "Onsite" }
}
```

### `/medical-testing`
```json
{
  "name": "Occupational Medical Testing",
  "serviceType": "Medical Testing",
  "availableChannel": { "serviceType": "In-Person" }
}
```

### `/manage-cases`
```json
{
  "name": "Occupational Case Management",
  "serviceType": "Workers Compensation Case Management",
  "availableChannel": { "serviceType": "In-Person" }
}
```

### `/safety-support`
```json
{
  "name": "Safety Management Support",
  "serviceType": "Occupational Safety Consulting",
  "availableChannel": { "serviceType": "Onsite" }
}
```

### `/emergency-response`

⚠️ This page uses a dual `@type` — both `Service` and `EmergencyService`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "EmergencyService"],
      "name": "Industrial Emergency Response Services",
      "serviceType": "Emergency Response",
      "description": "1st Response provides rapid industrial emergency response nationwide, deploying certified medics and paramedics to worksites for critical incidents.",
      "provider": { "@id": "https://1stresponseoccupational.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Onsite",
        "areaServed": { "@type": "Country", "name": "United States" }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[QUESTION]",
          "acceptedAnswer": { "@type": "Answer", "text": "[PLAIN TEXT ANSWER]" }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Emergency Response", "item": "https://1stresponseoccupational.com/emergency-response" }
      ]
    }
  ]
}
```

### `/cpr-training`

⚠️ Dual `@type` — both `Service` and `Course`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "Course"],
      "name": "CPR, First Aid & AED Training",
      "description": "OSHA-compliant CPR, First Aid, and AED certification training for industrial workforces. Available onsite at your facility or in-clinic.",
      "provider": { "@id": "https://1stresponseoccupational.com/#organization" },
      "educationalLevel": "Workforce / Professional",
      "availableLanguage": "English",
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Onsite",
        "areaServed": { "@type": "Country", "name": "United States" }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[QUESTION]",
          "acceptedAnswer": { "@type": "Answer", "text": "[PLAIN TEXT ANSWER]" }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "CPR Training", "item": "https://1stresponseoccupational.com/cpr-training" }
      ]
    }
  ]
}
```

### `/care-level-quiz`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Care Level Quiz — 1st Response Occupational Health",
      "description": "Answer a few questions to find out which occupational health service is right for your workforce.",
      "url": "https://1stresponseoccupational.com/care-level-quiz",
      "applicationCategory": "HealthApplication",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Care Level Quiz", "item": "https://1stresponseoccupational.com/care-level-quiz" }
      ]
    }
  ]
}
```

---

## CASE STUDY PAGES

### `/cases` — Case Studies Index

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Client Case Studies — 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/cases",
      "description": "Real-world results from 1st Response Occupational Health's onsite and telemedicine services for industrial clients nationwide.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://1stresponseoccupational.com/cases" }
      ]
    }
  ]
}
```

### `/hill` and `/fighting-jays` — Individual Case Studies

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "[CASE STUDY HEADLINE]",
      "description": "[ONE SENTENCE OUTCOME SUMMARY]",
      "image": "https://1stresponseoccupational.com/cases/[IMAGE_FILENAME]",
      "author": { "@id": "https://1stresponseoccupational.com/#organization" },
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" },
      "datePublished": "[ISO_DATE e.g. 2025-01-15]",
      "dateModified": "[ISO_DATE]",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://1stresponseoccupational.com/[hill OR fighting-jays]"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://1stresponseoccupational.com/cases" },
        { "@type": "ListItem", "position": 3, "name": "[CASE STUDY NAME]", "item": "https://1stresponseoccupational.com/[ROUTE]" }
      ]
    }
  ]
}
```

---

## BLOG PAGES

### `/blog` — Blog Index

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "name": "Occupational Health Resources & Insights",
      "url": "https://1stresponseoccupational.com/blog",
      "description": "Occupational health guides, safety compliance resources, and industry insights from 1st Response Occupational Health.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://1stresponseoccupational.com/blog" }
      ]
    }
  ]
}
```

### `/blog/[slug]` — Blog Post

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "[POST TITLE — max 110 characters]",
      "image": {
        "@type": "ImageObject",
        "url": "https://1stresponseoccupational.com/blog/[FEATURED_IMAGE]",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Person",
        "name": "[AUTHOR NAME]",
        "worksFor": { "@id": "https://1stresponseoccupational.com/#organization" }
      },
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" },
      "datePublished": "[ISO_DATE]",
      "dateModified": "[ISO_DATE]",
      "description": "[POST EXCERPT — 140-160 characters, matches meta description]",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://1stresponseoccupational.com/blog/[SLUG]"
      },
      "articleSection": "[CATEGORY e.g. Drug Testing | Safety Compliance | Telemedicine]",
      "keywords": "[comma, separated, keywords]"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://1stresponseoccupational.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "[POST TITLE]", "item": "https://1stresponseoccupational.com/blog/[SLUG]" }
      ]
    }
  ]
}
```

---

## FREE RESOURCE PAGES

### `/free-resources`, `/toolbox-talks`, `/osha-compliance-guide`, `/injury-prevention-guide`

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "name": "[RESOURCE TITLE]",
      "description": "[ONE SENTENCE DESCRIPTION]",
      "url": "https://1stresponseoccupational.com/[ROUTE]",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" },
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "audience": {
        "@type": "Audience",
        "audienceType": "Employers, Safety Managers, EHS Professionals"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Free Resources", "item": "https://1stresponseoccupational.com/free-resources" },
        { "@type": "ListItem", "position": 3, "name": "[RESOURCE NAME]", "item": "https://1stresponseoccupational.com/[ROUTE]" }
      ]
    }
  ]
}
```

---

## PAGES WITH NO SCHEMA REQUIRED

These pages should have `robots: noindex` in `generateMetadata()` and do not need JSON-LD:

- `/errors/403`
- `/errors/404`
- `/errors/429`
- `/errors/500`
- `/cookie-preferences`
- `/privacy-policy` (WebPage schema optional but not beneficial)
- `/terms-and-conditions` (same)

---

## IMPLEMENTATION PATTERN — JsonLd Server Component

Create this reusable component at `components/JsonLd.tsx` and use it in every page:

```tsx
// components/JsonLd.tsx
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

Usage in a page (server component):

```tsx
// app/telemedicine/page.tsx
import JsonLd from '@/components/JsonLd';
import { teleMedicineSchema } from '@/lib/schema/telemedicine';

export default function TelemedicinePage() {
  return (
    <>
      <JsonLd data={teleMedicineSchema} />
      {/* page content */}
    </>
  );
}
```

Store all schema objects in `lib/schema/[route-name].ts` — one file per page. Never inline schema directly in page components.

---

## VALIDATION CHECKLIST — run before every deploy

- [ ] https://search.google.com/test/rich-results — every page with FAQPage, Service, BlogPosting, Course
- [ ] https://validator.schema.org — full graph validation
- [ ] No `[PLACEHOLDER]` strings remaining in any schema
- [ ] All FAQPage `text` values are plain text (no HTML)
- [ ] `datePublished` and `dateModified` are valid ISO 8601 format
- [ ] `areaServed` is `Country: United States` everywhere — no city-level entries except inside `address`
- [ ] `/telemedicine` schema includes the occupational physician + 99% / 1-hour stat in `description`
- [ ] Error pages and legal pages have `noindex` set in `generateMetadata()`