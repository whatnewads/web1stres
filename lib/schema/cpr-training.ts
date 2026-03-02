const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const cprTrainingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "Course"],
      "name": "CPR, First Aid & AED Training",
      "description": "OSHA-compliant CPR, First Aid, and AED certification training for industrial workforces. Available onsite at your facility or at any 1st Response onsite clinic, nationwide.",
      "provider": org,
      "educationalLevel": "Workforce / Professional",
      "availableLanguage": "English",
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What certifications do participants receive?", "acceptedAnswer": { "@type": "Answer", "text": "Participants receive nationally recognized CPR, First Aid, and AED certifications valid for two years. Certifications are accepted by OSHA and meet workplace first aid requirements." } },
        { "@type": "Question", "name": "Can you train our team at our location?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide onsite training at your facility, jobsite, or office. Group training is available for teams of any size." } },
        { "@type": "Question", "name": "How long does the training take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard CPR/AED/First Aid certification courses run approximately 4 to 6 hours depending on the curriculum and group size." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Training", "item": `${base}/cpr-training` },
        { "@type": "ListItem", "position": 3, "name": "CPR Training", "item": `${base}/cpr-training` },
      ],
    },
  ],
};
