const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const onsiteCareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Onsite Medical Care",
      "serviceType": "Occupational Medicine",
      "description": "1st Response brings drug testing and return-to-work evaluations directly to your worksite through a mobile medical clinic, eliminating employee travel time and reducing productivity loss.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How is onsite care different from onsite medics?", "acceptedAnswer": { "@type": "Answer", "text": "Onsite medical care provides clinical services like drug testing and return-to-work evaluations at your worksite. Onsite EMTs & Paramedics focuses on staffing certified EMTs and paramedics for ongoing emergency standby and medical consultation." } },
        { "@type": "Question", "name": "Can you set up a temporary clinic at our jobsite?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We deploy fully equipped mobile medical units and can establish temporary clinics for projects lasting from a few days to several months." } },
        { "@type": "Question", "name": "What services are available onsite?", "acceptedAnswer": { "@type": "Answer", "text": "Drug and alcohol testing (DOT and non-DOT) and return-to-work evaluations. We bring these services directly to your worksite so your team stays on the job." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}/#services` },
        { "@type": "ListItem", "position": 3, "name": "Onsite Medical Care", "item": `${base}/onsite-care` },
      ],
    },
  ],
};
