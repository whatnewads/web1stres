const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

export const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Terms and Conditions — 1st Response Occupational Health",
      "url": `${base}/terms-and-conditions`,
      "publisher": org,
    },
  ],
};
