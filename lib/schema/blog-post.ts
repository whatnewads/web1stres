const org = { "@id": "https://1stresponseoccupational.com/#organization" };
const base = "https://1stresponseoccupational.com";

// This schema is generated dynamically per post in app/blog/[slug]/page.tsx
// This export is the template/default for the first post
export const blogPostSchema = (post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": post.title,
      "image": { "@type": "ImageObject", "url": post.imageUrl, "width": 1200, "height": 630 },
      "author": { "@type": "Person", "name": "1st Response Occupational Health", "worksFor": org },
      "publisher": org,
      "datePublished": post.date,
      "dateModified": post.date,
      "description": post.excerpt,
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${base}/blog/${post.slug}` },
      "articleSection": post.category,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": base },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${base}/blog` },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `${base}/blog/${post.slug}` },
      ],
    },
  ],
});
