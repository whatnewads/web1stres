const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const casesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Client Case Studies — 1st Response Occupational Health",
      "url": `${base}/cases`,
      "description": "Real-world results from 1st Response Occupational Health's onsite and telemedicine services for industrial clients nationwide.",
      "publisher": org,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${base}/cases` },
      ],
    },
  ],
};
