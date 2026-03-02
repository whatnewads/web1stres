const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Privacy Policy — 1st Response Occupational Health",
      "url": `${base}/privacy-policy`,
      "publisher": org,
    },
  ],
};
