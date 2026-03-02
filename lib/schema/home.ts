export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://1stresponseoccupational.com/#medicalbusiness",
      "name": "1st Response Occupational Health",
      "url": "https://1stresponseoccupational.com",
      "logo": "https://1stresponseoccupational.com/logo.png",
      "image": "https://1stresponseoccupational.com/og-image.jpg",
      "description": "The first mobile occupational health clinic to provide onsite telemedicine services nationwide. Drug testing, onsite clinics, emergency response, BLS/ALS, case management, and CPR training for industrial workforces.",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Insurance",
      "telephone": "+1-903-869-1201",
      "email": "jeremy.layton@1stresponseoccupational.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lubbock",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": [
        {
          "@type": "ServiceChannel",
          "serviceType": "In-Person",
          "serviceLocation": {
            "@type": "Place",
            "name": "1st Response Occupational Health Clinic",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lubbock",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          }
        },
        {
          "@type": "ServiceChannel",
          "serviceType": "Telemedicine",
          "availableLanguage": "English",
          "serviceUrl": "https://1stresponseoccupational.com/telemedicine",
          "areaServed": { "@type": "Country", "name": "United States" }
        },
        {
          "@type": "ServiceChannel",
          "serviceType": "Onsite",
          "description": "Mobile occupational health clinic and medic staffing deployed to employer worksites nationwide",
          "areaServed": { "@type": "Country", "name": "United States" }
        }
      ],
      "medicalSpecialty": "Occupational Medicine",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Occupational Health Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drug Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Onsite Medical Care" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Onsite Medics & Paramedics" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telemedicine" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "First Aid, BLS & ALS" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CPR & AED Training" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Case Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Safety Management Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Referrals" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://1stresponseoccupational.com/#website",
      "url": "https://1stresponseoccupational.com",
      "name": "1st Response Occupational Health",
      "publisher": { "@id": "https://1stresponseoccupational.com/#organization" }
    }
  ]
};
