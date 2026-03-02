"use client";

import Link from "next/link";
import { Shield, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BreadcrumbNav } from "@/components/shared";

/* ── FAQ Accordion ── */
export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-border rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F5F6F8] transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
          >
            <span className="text-[#0A1628] pr-4" style={{ fontSize: "15px", fontWeight: 600 }}>
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#5A6178] shrink-0 transition-transform ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === idx && (
            <div id={`faq-answer-${idx}`} className="px-4 pb-4">
              <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Sticky Sidebar CTA ── */
export function StickyServiceSidebar({
  serviceTitle,
}: {
  serviceTitle: string;
}) {
  return (
    <div className="hidden lg:block sticky top-24">
      <div className="bg-[#0A1628] rounded-xl p-6 text-white">
        <h3 className="mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
          Ready to Get Started?
        </h3>
        <p className="text-gray-400 mb-6" style={{ fontSize: "14px", lineHeight: 1.6 }}>
          Schedule {serviceTitle} for your workforce today.
        </p>
        <Link
          href="/schedule-consult"
          className="block w-full text-center py-3 bg-[#E8621A] rounded-lg hover:bg-[#d4571a] transition-colors"
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Schedule This Service
        </Link>
        <div className="mt-4 pt-4 border-t border-white/10">
          <a
            href="tel:+19038691201"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
            style={{ fontSize: "14px" }}
          >
            <Shield className="w-4 h-4" />
            (903) 869-1201
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Service Page Layout ── */
export function ServicePageLayout({
  breadcrumbs,
  title,
  children,
  faqs,
}: {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  children: ReactNode;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <BreadcrumbNav items={breadcrumbs} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1
            className="text-[#0A1628] mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
          >
            {title}
          </h1>
          {children}
          {faqs.length > 0 && (
            <div className="mt-12">
              <h2
                className="text-[#0A1628] mb-6"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={faqs} />
            </div>
          )}
        </div>
        <StickyServiceSidebar serviceTitle={title.toLowerCase()} />
      </div>
      <div className="lg:hidden mt-8">
        <Link
          href="/schedule-consult"
          className="block w-full text-center py-3.5 bg-[#E8621A] text-white rounded-lg"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          Schedule This Service
        </Link>
      </div>
    </div>
  );
}
