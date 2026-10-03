const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const fightingJaysSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "Fighting Jays: a 256% Return on Onsite Care",
      "description":
        "Mortenson spent approximately $100,000 on 1st Response onsite care at the Fighting Jays solar construction project and avoided an estimated $355,500 in offsite medical visits, an estimated 256% return on investment, with 237 of 245 first-aid encounters resolved on site.",
      "image": `${base}/assets/fighting_jays.webp`,
      "author": { "@type": "Person", "name": "Wesley Yielding" },
      "publisher": org,
      "datePublished": "2026-10-02",
      "dateModified": "2026-10-03",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/fighting-jays` },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${base}/cases` },
        { "@type": "ListItem", "position": 3, "name": "Fighting Jays", "item": `${base}/fighting-jays` },
      ],
    },
  ],
};
