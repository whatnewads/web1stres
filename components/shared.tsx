// Server-safe shared components — no "use client"
// Interactive components (FAQAccordion, ServicePageLayout) are in shared-client.tsx

import Link from "next/link";
import {
  ArrowRight,
  Star,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { type ReactNode } from "react";

/* ── Trust Badge ── */
export function TrustBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <Icon className="w-5 h-5 text-[#E8621A] shrink-0" />
      <span className="text-[#0A1628] whitespace-nowrap" style={{ fontSize: "13px", fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

/* ── Service Card ── */
export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-[#E8621A]/30 transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-[#E8621A]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#E8621A]" />
      </div>
      <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-[#5A6178] mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1 text-[#E8621A] group-hover:gap-2 transition-all"
        style={{ fontSize: "14px", fontWeight: 600 }}
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

/* ── Case Study Card ── */
export function CaseStudyCard({
  title,
  industry,
  stat,
  href,
}: {
  title: string;
  industry: string;
  stat: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all"
    >
      <span
        className="inline-block px-3 py-1 bg-[#E8621A]/10 text-[#E8621A] rounded-full mb-3"
        style={{ fontSize: "12px", fontWeight: 600 }}
      >
        {industry}
      </span>
      <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "20px", fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-[#E8621A] mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>
        {stat}
      </p>
      <span
        className="inline-flex items-center gap-1 text-[#0A1628] group-hover:text-[#E8621A] transition-colors"
        style={{ fontSize: "14px", fontWeight: 600 }}
      >
        Read Case Study <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

/* ── Resource Card ── */
export function ResourceCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-[#0A1628]/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#0A1628]" />
      </div>
      <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>
        {title}
      </h3>
      <p className="text-[#5A6178] mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1 text-[#E8621A] group-hover:gap-2 transition-all"
        style={{ fontSize: "14px", fontWeight: 600 }}
      >
        Download Free <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

/* ── Testimonial Card ── */
export function TestimonialCard({
  quote,
  name,
  role,
  company,
  stars = 5,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  stars?: number;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#E8621A] text-[#E8621A]" />
        ))}
      </div>
      <p className="text-[#0A1628] mb-4 italic" style={{ fontSize: "15px", lineHeight: 1.7 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
          {name}
        </p>
        <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>
          {role}, {company}
        </p>
      </div>
    </div>
  );
}

/* ── CTA Banner ── */
export function CTABanner({
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: {
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "orange";
}) {
  const bgClass = variant === "navy" ? "bg-[#0A1628]" : "bg-[#E8621A]";
  return (
    <section className={`${bgClass} py-16 lg:py-20`}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-white mb-8" style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700 }}>
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`inline-flex items-center px-8 py-3.5 rounded-lg transition-colors ${
              variant === "navy"
                ? "bg-[#E8621A] text-white hover:bg-[#d4571a]"
                : "bg-white text-[#E8621A] hover:bg-gray-100"
            }`}
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center px-8 py-3.5 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Breadcrumb ── */
export function BreadcrumbNav({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1" style={{ fontSize: "14px" }}>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#5A6178]" />}
            {item.href ? (
              <Link href={item.href} className="text-[#5A6178] hover:text-[#E8621A] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0A1628]" style={{ fontWeight: 500 }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Blog Card ── */
export function BlogCard({
  title,
  excerpt,
  date,
  category,
  imageUrl,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="aspect-video bg-[#F5F6F8] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-block px-2.5 py-0.5 bg-[#E8621A]/10 text-[#E8621A] rounded-full"
            style={{ fontSize: "12px", fontWeight: 600 }}
          >
            {category}
          </span>
          <span className="text-[#5A6178]" style={{ fontSize: "12px" }}>
            {date}
          </span>
        </div>
        <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
          {title}
        </h3>
        <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

/* ── Error Page ── */
export function ErrorPage({
  code,
  title,
  message,
  links,
}: {
  code: string;
  title: string;
  message: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#E8621A] mb-4" style={{ fontSize: "72px", fontWeight: 800 }}>
          {code}
        </p>
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>
          {title}
        </h1>
        <p className="text-[#5A6178] mb-8" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          {message}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-5 py-2.5 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90 transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

