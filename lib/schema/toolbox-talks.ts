const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const toolboxTalksSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "name": "Free Toolbox Talks Bundle",
      "description": "Download ready-to-use toolbox talk scripts covering fall protection, heat illness, PPE, hazard communication, lockout/tagout, confined space safety, and more.",
      "url": `${base}/toolbox-talks`,
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
        { "@type": "ListItem", "position": 3, "name": "Toolbox Talks", "item": `${base}/toolbox-talks` },
      ],
    },
  ],
};
