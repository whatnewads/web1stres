const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const drugTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "DOT & Non-DOT Drug Testing",
      "serviceType": "Drug and Alcohol Testing",
      "description": "1st Response provides comprehensive DOT and non-DOT drug and alcohol testing with full chain of custody, MRO services, and rapid results. Available onsite at your worksite or in-clinic.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between DOT and non-DOT testing?", "acceptedAnswer": { "@type": "Answer", "text": "DOT testing follows strict federal protocols mandated by the Department of Transportation for safety-sensitive positions. Non-DOT testing follows your company's own drug-free workplace policy and can be customized in terms of panel type and procedures." } },
        { "@type": "Question", "name": "How quickly do we get results?", "acceptedAnswer": { "@type": "Answer", "text": "Rapid screening results are typically available within minutes for negative results. Non-negative results are sent to a Medical Review Officer (MRO) and finalized within 24 to 72 hours." } },
        { "@type": "Question", "name": "Do you provide MRO services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Medical Review Officer reviews all non-negative results, contacts the donor for verification, and provides a final determination to your company." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Testing", "item": `${base}/drug-testing` },
        { "@type": "ListItem", "position": 3, "name": "Drug Testing", "item": `${base}/drug-testing` },
      ],
    },
  ],
};
