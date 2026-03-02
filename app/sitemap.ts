import { MetadataRoute } from "next";

const base = "https://1stresponseoccupational.com";

const blogSlugs = [
  "dot-drug-testing-guide-2025",
  "osha-recordkeeping-mistakes",
  "telemedicine-remote-worksites",
  "return-to-work-best-practices",
  "cpr-training-why-it-matters",
  "oil-gas-safety-trends-2025",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,                        priority: 1.0,  changeFrequency: "weekly",  lastModified: now },
    { url: `${base}/about-us`,                priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/team`,                    priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/contact`,                 priority: 0.9,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/cases`,                   priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/hill`,                    priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/fighting-jays`,           priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/faqs`,                    priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    // Services
    { url: `${base}/firstaid-bls-als`,        priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/telemedicine`,            priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/onsite-care`,             priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/onsite-medics`,           priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/referrals`,               priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/drug-testing`,            priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/medical-testing`,         priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/cpr-training`,            priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/manage-cases`,            priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/safety-support`,          priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/emergency-response`,      priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    // Resources
    { url: `${base}/blog`,                    priority: 0.7,  changeFrequency: "weekly",  lastModified: now },
    { url: `${base}/free-resources`,          priority: 0.6,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/toolbox-talks`,           priority: 0.6,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/osha-compliance-guide`,   priority: 0.6,  changeFrequency: "monthly", lastModified: now },
    { url: `${base}/injury-prevention-guide`, priority: 0.6,  changeFrequency: "monthly", lastModified: now },
    // Legal
    { url: `${base}/privacy-policy`,          priority: 0.3,  changeFrequency: "yearly",  lastModified: now },
    { url: `${base}/terms-and-conditions`,    priority: 0.3,  changeFrequency: "yearly",  lastModified: now },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  return [...staticRoutes, ...blogRoutes];
}
