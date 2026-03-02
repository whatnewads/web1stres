const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const medicalTestingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Occupational Medical Testing",
      "serviceType": "Medical Testing",
      "description": "1st Response provides preventive screenings and medical testing at your onsite occupational clinic — including cardiovascular, diabetes, vision screenings, rapid diagnostics, and EKG testing.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "In-Person", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What preventive screenings do you offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer cardiovascular screening, diabetes screening, vision screening, and integrated wellness programs — all available at your occupational clinic." } },
        { "@type": "Question", "name": "Can testing be done at our worksite?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All of our medical testing and preventive screening services are available at your onsite occupational clinic staffed by our healthcare professionals." } },
        { "@type": "Question", "name": "What rapid diagnostic tests are available?", "acceptedAnswer": { "@type": "Answer", "text": "We provide rapid influenza testing, strep throat detection, respiratory illness screening, blood glucose testing, blood pressure monitoring, and EKG testing — all performed by trained professionals at your onsite clinic." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Testing", "item": `${base}/drug-testing` },
        { "@type": "ListItem", "position": 3, "name": "Medical Testing", "item": `${base}/medical-testing` },
      ],
    },
  ],
};
