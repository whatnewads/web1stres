import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { fightingJaysSchema } from "@/lib/schema/fighting-jays";

export const metadata: Metadata = {
  title: "Fighting Jays Case Study: 500+ Days Zero Incidents | 1st Response",
  description:
    "How 1st Response Occupational Health provided 18 months of dedicated onsite EMT and paramedic coverage for the Fighting Jays solar construction project with zero incidents.",
};

export default function FightingJaysCaseStudyPage() {
  return (
    <>
      <JsonLd data={fightingJaysSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/cases" }, { label: "Fighting Jays" }]} />
        <h1 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Fighting Jays: Zero Incidents Over 500+ Days Worked Safe
        </h1>
        <div className="relative rounded-xl overflow-hidden mb-10" style={{ height: 420 }}>
          <Image
            src="/assets/fighting_jays.webp"
            alt="Fighting Jays solar construction project site"
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
              Fighting Jays is a solar construction project spanning an 18-month duration with large crews on site daily. The project required consistent onsite medical coverage to support the workforce through the full construction lifecycle.
            </p>
          </div>
          <div>
            <h2 className="text-[#E8621A] mb-3" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>The Solution</h2>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              1st Response placed dedicated onsite EMTs and paramedics for the full 18-month project duration. Our team provided immediate medical response, injury treatment, and case management — working alongside site safety personnel to keep the project running safely from start to finish.
            </p>
          </div>
          <div className="bg-[#0A1628] rounded-xl p-8 text-center">
            <p className="text-[#E8621A]" style={{ fontSize: "48px", fontWeight: 800 }}>0</p>
            <p className="text-white" style={{ fontSize: "18px", fontWeight: 600 }}>Incidents over 500+ days worked safe across an 18-month project</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link href="/hill" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90" style={{ fontSize: "15px", fontWeight: 600 }}>
            Read Previous Case Study
          </Link>
          <Link href="/schedule-consult" className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a]" style={{ fontSize: "15px", fontWeight: 600 }}>
            Schedule a Consult
          </Link>
        </div>
      </div>
    </>
  );
}
