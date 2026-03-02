export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/contact",
      "description": "Contact 1st Response Occupational Health to schedule services, request information, or speak with our team.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://1stresponseoccupational.com/contact" }
      ]
    }
  ]
};
