const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const injuryPreventionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "name": "Free Workplace Injury Prevention Guide",
      "description": "Practical strategies your safety team can implement to reduce workplace injuries, lower workers compensation costs, and build a stronger safety culture.",
      "url": `${base}/injury-prevention-guide`,
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
        { "@type": "ListItem", "position": 3, "name": "Injury Prevention Guide", "item": `${base}/injury-prevention-guide` },
      ],
    },
  ],
};
