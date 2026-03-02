const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const emergencyResponseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "EmergencyService"],
      "name": "Industrial Emergency Response Services",
      "serviceType": "Emergency Response",
      "description": "1st Response provides rapid industrial emergency response nationwide, deploying certified medics and paramedics to worksites for critical incidents. Average response time is 7 to 10 minutes.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of emergencies do you respond to?", "acceptedAnswer": { "@type": "Answer", "text": "We respond to workplace injuries, medical emergencies, hazardous material incidents, confined space rescues, and any other onsite injury or incident requiring immediate medical intervention." } },
        { "@type": "Question", "name": "What is your typical response time?", "acceptedAnswer": { "@type": "Answer", "text": "Our average response time is 7 to 10 minutes. With our EMTs and paramedics pre-positioned at your worksite, help arrives fast — no waiting on outside ambulance services." } },
        { "@type": "Question", "name": "Can we pre-position emergency responders at our site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer dedicated onsite emergency response staffing for high-risk operations. Contact us to discuss a staffing plan tailored to your site." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Management", "item": `${base}/manage-cases` },
        { "@type": "ListItem", "position": 3, "name": "Emergency Response", "item": `${base}/emergency-response` },
      ],
    },
  ],
};
