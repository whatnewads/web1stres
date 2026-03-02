"use client";

import { useState } from "react";
import { BlogCard } from "@/components/shared";

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

const categories = [
  "All",
  "Drug Testing",
  "Safety Compliance",
  "Telemedicine",
  "Case Management",
  "Training",
  "Industry News",
];

export function BlogIndexClient() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <div className="mb-10">
        <h1
          className="text-[#0A1628] mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
        >
          Occupational Health Resources &amp; Insights
        </h1>
        <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          Safety compliance guides, industry news, and best practices for industrial employers.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === cat
                ? "bg-[#E8621A] text-white"
                : "bg-white border border-border text-[#5A6178] hover:border-[#E8621A] hover:text-[#E8621A]"
            }`}
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <BlogCard key={post.slug} {...post} href={`/blog/${post.slug}`} />
        ))}
      </div>
    </div>
  );
}
