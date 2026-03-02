const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const firstAidSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "First Aid, BLS & ALS Services",
      "serviceType": "Emergency Medical Services",
      "description": "1st Response deploys certified first aid, BLS, and ALS providers directly to industrial worksites, ensuring immediate medical response from EMT-level and above providers. All services meet OSHA 29 CFR 1910.151 and 1926.50 requirements.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between BLS and ALS?", "acceptedAnswer": { "@type": "Answer", "text": "Basic Life Support (BLS) covers CPR, AED use, and basic airway management. Advanced Life Support (ALS) includes IV access, cardiac monitoring, medication administration, and advanced airway management by certified paramedics." } },
        { "@type": "Question", "name": "Do you provide coverage at construction sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most construction sites utilize first aid to BLS level of care from our certified providers. ALS coverage is optional and available if the client requires it. We deploy to construction sites, oilfield locations, and industrial facilities nationwide on a contract basis." } },
        { "@type": "Question", "name": "Are your providers OSHA-compliant?", "acceptedAnswer": { "@type": "Answer", "text": "All of our BLS and ALS providers meet or exceed OSHA general duty clause requirements, are licensed at the EMT level and above including paramedic level licensure." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}/#services` },
        { "@type": "ListItem", "position": 3, "name": "First Aid, BLS & ALS", "item": `${base}/firstaid-bls-als` },
      ],
    },
  ],
};
