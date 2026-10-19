const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const rockyMountainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "Rocky Mountain: a 73% Return on Onsite Care",
      "description":
        "Mortenson spent $415,000 on 1st Response onsite care at the Rocky Mountain solar construction project. The site recorded 1 OSHA recordable case in 575,000 worker-hours, 84% below the construction industry average, and 309 of 314 first-aid encounters were resolved on site, for an estimated 73% return on investment.",
      // Placeholder: this case study has no site photo yet. Swap for the hero image when one is added.
      "image": `${base}/assets/1streslogobg.png`,
      "author": { "@type": "Person", "name": "Wesley Yielding" },
      "publisher": org,
      "datePublished": "2026-10-19",
      "dateModified": "2026-10-19",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/rocky-mountain` },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${base}/cases` },
        { "@type": "ListItem", "position": 3, "name": "Rocky Mountain", "item": `${base}/rocky-mountain` },
      ],
    },
  ],
};
