import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbNav } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { hillSchema } from "@/lib/schema/hill";

export const metadata: Metadata = {
  title: "Hill 1 & Hill 2 Case Study: 800+ Days Zero Incidents | 1st Response",
  description:
    "How 1st Response Occupational Health supported two phases of solar construction with dedicated onsite EMTs and paramedics, achieving 800+ days of zero incidents.",
};

export default function HillCaseStudyPage() {
  return (
    <>
      <JsonLd data={hillSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/cases" }, { label: "Hill" }]} />
        <h1 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Hill 1 &amp; Hill 2: 800+ Days of Zero Incidents
        </h1>
        <div className="relative rounded-xl overflow-hidden mb-10" style={{ height: 420 }}>
          <Image
            src="/assets/hill1.webp"
            alt="Hill solar construction project site"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
        <div className="max-w-3xl space-y-10">
          <div>
            <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Project</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Hill 1 and Hill 2 is a two-phase solar construction project with large crews working across expansive jobsites. With the inherent risks of solar construction — heavy equipment, electrical work, and outdoor conditions — the project required dedicated onsite medical support from day one.
            </p>
          </div>
          <div>
            <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Solution</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              1st Response deployed dedicated onsite EMTs and paramedics across both phases of the project, providing immediate medical response, injury treatment, and case management. Our team worked alongside the site safety personnel to ensure every incident was documented and managed from start to finish.
            </p>
          </div>
          <div className="bg-[#0A1628] rounded-xl p-8 text-center">
            <p className="text-[#E8621A]" style={{ fontSize: "48px", fontWeight: 800 }}>800+</p>
            <p className="text-white" style={{ fontSize: "18px", fontWeight: 600 }}>Days of zero incidents across Hill 1 &amp; Hill 2</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link href="/fighting-jays" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90" style={{ fontSize: "15px", fontWeight: 600 }}>
            Read Next Case Study <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/schedule-consult" className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a]" style={{ fontSize: "15px", fontWeight: 600 }}>
            Schedule a Consult
          </Link>
        </div>
      </div>
    </>
  );
}
