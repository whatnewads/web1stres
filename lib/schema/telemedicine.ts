const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const telemedicineSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Occupational Telemedicine Services",
      "serviceType": "Telemedicine",
      "description": "1st Response connects workers with a licensed occupational physician — not an ER doctor — via onsite telemedicine. 99% of visits are seen in under 1 hour from time of clinic visit.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Telemedicine", "serviceUrl": `${base}/telemedicine`, "availableLanguage": "English", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is telemedicine OSHA-compliant for occupational health?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. OSHA permits telemedicine for many occupational health evaluations. We ensure all remote consultations meet applicable regulatory requirements." } },
        { "@type": "Question", "name": "What equipment do we need on our end?", "acceptedAnswer": { "@type": "Answer", "text": "None — we provide everything. Our onsite clinics are fully equipped for telemedicine visits, so your team does not need to set up any technology." } },
        { "@type": "Question", "name": "How fast can we schedule a telemedicine appointment?", "acceptedAnswer": { "@type": "Answer", "text": "99% of appointments are seen in an hour or less from time of visit to clinic." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}/#services` },
        { "@type": "ListItem", "position": 3, "name": "Telemedicine", "item": `${base}/telemedicine` },
      ],
    },
  ],
};
