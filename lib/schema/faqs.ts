export const faqsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is occupational health and why does my company need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Occupational health focuses on preventing and treating workplace injuries and illnesses. It helps employers reduce lost workdays, manage workers compensation costs, maintain OSHA compliance, and keep their workforce healthy and productive on the job."
          }
        },
        {
          "@type": "Question",
          "name": "Does 1st Response come to our worksite or do employees travel to a clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. 1st Response operates a mobile occupational health clinic that deploys directly to employer worksites nationwide, eliminating lost productivity from employee travel. We also offer telemedicine so workers can be seen by an occupational physician from the worksite within the hour."
          }
        },
        {
          "@type": "Question",
          "name": "What types of drug testing does 1st Response provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1st Response provides DOT-compliant and non-DOT drug and alcohol testing including pre-employment, random, post-accident, reasonable suspicion, and return-to-duty testing. We collect onsite at your facility so your workforce does not need to leave the job."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can 1st Response deploy to our worksite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deployment timelines depend on your location and service needs. Contact our team to discuss your site requirements and we will provide a specific timeline. We serve clients nationwide and are experienced in rapid mobilization for industrial projects."
          }
        },
        {
          "@type": "Question",
          "name": "Does 1st Response handle workers compensation case management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our case management team coordinates the full workers compensation process — from initial injury reporting through treatment, specialist referrals, return-to-duty planning, and insurer communication — so employers can stay focused on their operations."
          }
        },
        {
          "@type": "Question",
          "name": "Is your CPR and AED training OSHA compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our CPR, First Aid, and AED training courses meet OSHA requirements and are conducted by certified instructors. Training is available onsite at your facility or at our clinic, and we issue certifications upon course completion."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://1stresponseoccupational.com" },
        { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://1stresponseoccupational.com/faqs" }
      ]
    }
  ]
};
