import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { blogSchema } from "@/lib/schema/blog";
import { BlogIndexClient } from "@/components/blog-index-client";

export const metadata: Metadata = {
  title: "Blog | Occupational Health Resources & Insights | 1st Response",
  description:
    "Safety compliance guides, industry news, and best practices for industrial employers from 1st Response Occupational Health.",
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <BlogIndexClient />
    </>
  );
}
