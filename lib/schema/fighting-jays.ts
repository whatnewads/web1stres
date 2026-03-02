const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const fightingJaysSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "Fighting Jays: Zero Incidents Over 500+ Days Worked Safe",
      "description": "1st Response placed dedicated onsite EMTs and paramedics for an 18-month solar construction project, achieving zero incidents over 500+ days worked safe.",
      "author": org,
      "publisher": org,
      "datePublished": "2025-01-15",
      "dateModified": "2026-01-15",
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
