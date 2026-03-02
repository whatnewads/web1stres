import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, HardHat, ArrowRight } from "lucide-react";
import JsonLd from "@/components/json-ld";
import { freeResourcesSchema } from "@/lib/schema/free-resources";

export const metadata: Metadata = {
  title: "Free Safety Resources for Employers | 1st Response Occupational Health",
  description:
    "Download free toolbox talks, OSHA compliance guides, and injury prevention resources. Practical safety tools for safety managers and industrial employers.",
};

const resources = [
  { icon: BookOpen, title: "Free Toolbox Talks Bundle", desc: "Pre-built safety talk scripts covering the most common industrial hazards.", href: "/toolbox-talks" },
  { icon: FileText, title: "Free OSHA Compliance Guide", desc: "A practical checklist to keep your worksite compliant and audit-ready.", href: "/osha-compliance-guide" },
  { icon: HardHat, title: "Free Injury Prevention Guide", desc: "Actionable strategies to reduce workplace injuries and lower insurance costs.", href: "/injury-prevention-guide" },
];

export default function FreeResourcesPage() {
  return (
    <>
      <JsonLd data={freeResourcesSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Free Safety Resources for Employers
        </h1>
        <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          Download practical tools and guides to improve your workplace safety program.
          No sales pitch — just actionable resources from our team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#0A1628]/5 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-[#0A1628]" />
              </div>
              <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>{resource.title}</h3>
              <p className="text-[#5A6178] mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>{resource.desc}</p>
              <span className="inline-flex items-center gap-1 text-[#E8621A] group-hover:gap-2 transition-all" style={{ fontSize: "14px", fontWeight: 600 }}>
                Download Free <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
