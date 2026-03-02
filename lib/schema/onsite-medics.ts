const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const onsiteMedicsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Onsite Medics & Paramedics",
      "serviceType": "Medical Staffing",
      "description": "1st Response places certified EMTs and paramedics at your job site for immediate emergency response and daily medical support. Available for short-term events or multi-year industrial assignments nationwide.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What qualifications do your onsite providers have?", "acceptedAnswer": { "@type": "Answer", "text": "All providers hold current EMT-Basic or Paramedic certifications. Many have additional OSHA safety training, wilderness medicine certifications, and industrial experience." } },
        { "@type": "Question", "name": "Can you staff medics for short-term projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide medic staffing for projects ranging from a single day to multi-year assignments." } },
        { "@type": "Question", "name": "Do your medics carry their own equipment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our medics arrive fully equipped with BLS/ALS gear, first aid supplies, and communication equipment appropriate for your worksite environment." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}/#services` },
        { "@type": "ListItem", "position": 3, "name": "Onsite EMTs & Paramedics", "item": `${base}/onsite-medics` },
      ],
    },
  ],
};
