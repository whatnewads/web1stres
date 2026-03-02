const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "name": "Occupational Health Resources & Insights",
      "url": `${base}/blog`,
      "description": "Occupational health guides, safety compliance resources, and industry insights from 1st Response Occupational Health.",
      "publisher": org,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${base}/blog` },
      ],
    },
  ],
};
