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
      "@type": "ItemList",
      "name": "Client Case Studies",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": 3,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Rocky Mountain", "url": `${base}/rocky-mountain` },
        { "@type": "ListItem", "position": 2, "name": "Blevins", "url": `${base}/blevins` },
        { "@type": "ListItem", "position": 3, "name": "Fighting Jays", "url": `${base}/fighting-jays` },
      ],
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
