const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const hillSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "Hill 1 & Hill 2: 800+ Days of Zero Incidents",
      "description": "1st Response deployed dedicated onsite EMTs and paramedics across a two-phase solar construction project, achieving 800+ days of zero incidents.",
      "author": org,
      "publisher": org,
      "datePublished": "2025-01-15",
      "dateModified": "2026-01-15",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/hill` },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${base}/cases` },
        { "@type": "ListItem", "position": 3, "name": "Hill 1 & Hill 2", "item": `${base}/hill` },
      ],
    },
  ],
};
