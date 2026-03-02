const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const manageCasesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Occupational Case Management",
      "serviceType": "Workers Compensation Case Management",
      "description": "1st Response manages workplace injury cases from initial incident through full return to work, coordinating treatment, specialist referrals, and reporting so your HR and safety teams can focus on prevention.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "In-Person", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does case management include?", "acceptedAnswer": { "@type": "Answer", "text": "Case management includes return-to-work planning, injury tracking and reporting, specialist referral management when clearly indicated by our occupational physician, and ongoing communication between all parties." } },
        { "@type": "Question", "name": "When should a company use case management?", "acceptedAnswer": { "@type": "Answer", "text": "Any time an employee is injured on the job and the case involves specialist care or a modified duty return-to-work program, professional case management helps reduce costs and improve outcomes." } },
        { "@type": "Question", "name": "How does specialist referral management work?", "acceptedAnswer": { "@type": "Answer", "text": "When our licensed occupational physician determines that a specialist is clearly indicated, we coordinate the referral, track the case through treatment, and keep your team informed with ongoing status updates throughout the process." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Management", "item": `${base}/manage-cases` },
        { "@type": "ListItem", "position": 3, "name": "Manage Cases", "item": `${base}/manage-cases` },
      ],
    },
  ],
};
