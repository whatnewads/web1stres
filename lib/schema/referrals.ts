const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const referralsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Occupational Medical Referral Services",
      "serviceType": "Medical Referral Coordination",
      "description": "1st Response's licensed occupational physician evaluates cases and coordinates referrals to indicated specialists, bridging the gap from initial injury to your company's workers' compensation process.",
      "provider": org,
      "areaServed": { "@type": "Country", "name": "United States" },
      "availableChannel": { "@type": "ServiceChannel", "serviceType": "In-Person", "areaServed": { "@type": "Country", "name": "United States" } },
      "audience": { "@type": "Audience", "audienceType": "Employers, HR Managers, EHS Professionals, Safety Directors" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of specialists do you refer to?", "acceptedAnswer": { "@type": "Answer", "text": "Our licensed occupational physician refers patients to any indicated specialist based on the clinical findings and needs of the case. We do not limit referrals to a predetermined list — the physician recommends or refers to whichever specialist is clearly indicated." } },
        { "@type": "Question", "name": "How does this work with our workers compensation carrier?", "acceptedAnswer": { "@type": "Answer", "text": "We bridge the gap from the initial injury to your company's workers' compensation process. Our occupational physician follows all doctors' orders for treatments, follow-ups, and care, but we do not direct the direction of your company's workers' compensation case." } },
        { "@type": "Question", "name": "How do referrals reduce our liability?", "acceptedAnswer": { "@type": "Answer", "text": "When a licensed occupational physician manages the referral process, injured workers receive appropriate care quickly. This improves outcomes, reduces claim duration, and demonstrates your company's duty of care." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}/#services` },
        { "@type": "ListItem", "position": 3, "name": "Medical Referrals", "item": `${base}/referrals` },
      ],
    },
  ],
};
