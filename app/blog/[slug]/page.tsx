import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import { blogPostSchema } from "@/lib/schema/blog-post";
import { BreadcrumbNav, CTABanner } from "@/components/shared";

const blogPosts = [
  {
    slug: "dot-drug-testing-guide-2025",
    title: "The Employer's Guide to DOT Drug Testing in 2025",
    excerpt:
      "Everything you need to know about DOT drug testing requirements, panel types, and how to set up a compliant program.",
    date: "Feb 15, 2026",
    category: "Drug Testing",
    imageUrl:
      "https://images.unsplash.com/photo-1766297246958-b6ca17b56fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVnJTIwdGVzdGluZyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "osha-recordkeeping-mistakes",
    title: "5 OSHA Recordkeeping Mistakes That Cost Employers Thousands",
    excerpt:
      "Common OSHA 300 log errors and how to avoid the fines and audit issues that come with them.",
    date: "Feb 8, 2026",
    category: "Safety Compliance",
    imageUrl:
      "https://images.unsplash.com/photo-1553946550-4b8f3eea5451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjB2ZXN0fGVufDF8fHx8MTc3MjIyOTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "telemedicine-remote-worksites",
    title: "How Telemedicine Is Changing Occupational Health for Remote Worksites",
    excerpt: "Remote worksites no longer need to choose between compliance and convenience.",
    date: "Jan 28, 2026",
    category: "Telemedicine",
    imageUrl:
      "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjBkb2N0b3IlMjBsYXB0b3B8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "return-to-work-best-practices",
    title: "Return-to-Work Programs: Best Practices for Industrial Employers",
    excerpt:
      "How to design a return-to-work program that reduces claim costs and gets employees back on the job safely.",
    date: "Jan 20, 2026",
    category: "Case Management",
    imageUrl:
      "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "cpr-training-why-it-matters",
    title: "Why Every Industrial Worksite Needs CPR-Trained Employees",
    excerpt:
      "The case for CPR training as a fundamental part of your workplace safety program.",
    date: "Jan 12, 2026",
    category: "Training",
    imageUrl:
      "https://images.unsplash.com/photo-1643227991784-fabfe0cf4470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUFIlMjB0cmFpbmluZyUyMGZpcnN0JTIwYWlkJTIwY2xhc3N8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    slug: "oil-gas-safety-trends-2025",
    title: "Oil & Gas Safety Trends to Watch in 2025",
    excerpt:
      "Industry shifts in technology, regulation, and workforce safety that affect your operations.",
    date: "Jan 5, 2026",
    category: "Industry News",
    imageUrl:
      "https://images.unsplash.com/photo-1646227655718-dd721b681d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzcyMjg5MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | 1st Response Occupational Health`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block px-3 py-1 bg-[#E8621A]/10 text-[#E8621A] rounded-full"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              {post.category}
            </span>
            <span className="text-[#5A6178]" style={{ fontSize: "14px" }}>
              {post.date}
            </span>
          </div>

          <h1
            className="text-[#0A1628] mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            {post.title}
          </h1>

          <p className="text-[#5A6178] mb-8" style={{ fontSize: "18px", lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 max-w-3xl">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* Article body (placeholder) */}
        <div className="max-w-3xl prose prose-lg" style={{ color: "#5A6178" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.8 }}>
            This article is coming soon. In the meantime, contact our team at{" "}
            <a href="tel:+19038691201" className="text-[#E8621A]">
              (903) 869-1201
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-[#E8621A]">
              send us a message
            </Link>{" "}
            for answers to your occupational health questions.
          </p>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border max-w-3xl">
            <h2 className="text-[#0A1628] mb-6" style={{ fontSize: "22px", fontWeight: 700 }}>
              More Articles
            </h2>
            <ul className="space-y-4">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex items-start gap-3 hover:text-[#E8621A] transition-colors"
                  >
                    <span
                      className="inline-block px-2.5 py-0.5 bg-[#E8621A]/10 text-[#E8621A] rounded-full shrink-0 mt-0.5"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      {p.category}
                    </span>
                    <span
                      className="text-[#0A1628] group-hover:text-[#E8621A] transition-colors"
                      style={{ fontSize: "15px", fontWeight: 500 }}
                    >
                      {p.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <CTABanner
        title="Questions About Occupational Health for Your Worksite?"
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/schedule-consult"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
