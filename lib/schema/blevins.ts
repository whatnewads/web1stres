const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const blevinsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "articleSection": "Case Study",
      "headline": "Blevins: a 62% Return on Onsite Care",
      "description":
        "Mortenson spent $525,000 on 1st Response onsite care at the Blevins solar construction project. The site recorded 2 OSHA recordable cases in 740,000 worker-hours, 75% below the construction industry average, and 369 of 375 first-aid encounters were resolved on site, for an estimated 62% return on investment.",
      // Placeholder: this case study has no site photo yet. Swap for the hero image when one is added.
      "image": `${base}/assets/1streslogobg.png`,
      "author": { "@type": "Person", "name": "Wesley Yielding" },
      "publisher": org,
      "datePublished": "2026-10-19",
      "dateModified": "2026-10-19",
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/blevins` },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${base}/cases` },
        { "@type": "ListItem", "position": 3, "name": "Blevins", "item": `${base}/blevins` },
      ],
    },
  ],
};
