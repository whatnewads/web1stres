export const startSiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Onsite Occupational Health Program Setup",
      "serviceType": "Onsite Occupational Health",
      "description": "1st Response deploys mobile occupational health clinics and medic staffing to employer worksites nationwide. Request a site assessment to start your onsite program.",
      "provider": { "@id": "https://1stresponseoccupational.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Onsite",
        "areaServed": { "@type": "Country", "name": "United States" }
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "Start a Site", "item": "https://1stresponseoccupational.com/start-site" }
      ]
    }
  ]
};
