export const aboutUsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "About 1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com/about-us",
      "description": "Learn about 1st Response Occupational Health — the first mobile occupational health clinic to provide onsite telemedicine services nationwide for industrial workforces.",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    },
    {
      "@type": "LocalBusiness",
      "name": "1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com",
      "telephone": "+1-903-869-1201",
      "email": "jeremy.layton@1stresponseoccupational.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tyler",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": { "@type": "Country", "name": "United States" },
      "sameAs": [
        "https://www.facebook.com/1stresponseoccupational",
        "https://www.linkedin.com/company/1st-response-occupational-health"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://1stresponseoccupational.com/about-us" }
      ]
    }
  ]
};
