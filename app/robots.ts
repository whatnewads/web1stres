import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thanks", "/errors/"],
      },
    ],
    sitemap: "https://1stresponseoccupational.com/sitemap.xml",
  };
}
