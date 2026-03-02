const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const oshaGuideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "name": "Free OSHA Compliance Guide",
      "description": "A practical checklist to help industrial employers identify compliance gaps, prepare for OSHA inspections, and avoid common citation categories.",
      "url": `${base}/osha-compliance-guide`,
      "publisher": org,
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "audience": { "@type": "Audience", "audienceType": "Employers, Safety Managers, EHS Professionals" },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Free Resources", "item": `${base}/free-resources` },
        { "@type": "ListItem", "position": 3, "name": "OSHA Compliance Guide", "item": `${base}/osha-compliance-guide` },
      ],
    },
  ],
};
