const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const safetySupportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Safety Management Support",
      "serviceType": "Occupational Safety Consulting",
      "description": "1st Response partners with your existing site safety team to provide medical support, incident coordination, and case management when workplace injuries occur — nationwide across construction, oil & gas, and industrial sectors.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "Onsite", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does safety coordination include?", "acceptedAnswer": { "@type": "Answer", "text": "We work alongside your site safety team to support case management when incidents occur — including injury documentation, incident response coordination, and communication between medical providers and your safety personnel." } },
        { "@type": "Question", "name": "Do you replace our site safety team?", "acceptedAnswer": { "@type": "Answer", "text": "No. We are not a safety management company. We work with your existing safety team to ensure that when incidents happen onsite, the medical response and case management process is seamless." } },
        { "@type": "Question", "name": "What happens when an incident occurs onsite?", "acceptedAnswer": { "@type": "Answer", "text": "Our team coordinates with your safety personnel to document the incident, provide or arrange appropriate medical care, and manage the case from injury through return to work." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Case Management", "item": `${base}/manage-cases` },
        { "@type": "ListItem", "position": 3, "name": "Safety Support", "item": `${base}/safety-support` },
      ],
    },
  ],
};
