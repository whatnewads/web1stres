const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const freeResourcesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "name": "Free Safety Resources for Employers",
      "description": "Download free occupational health tools, guides, and safety resources from 1st Response Occupational Health.",
      "url": `${base}/free-resources`,
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
      ],
    },
  ],
};
