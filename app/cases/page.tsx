import type { Metadata } from "next";
import { CaseStudyCard, CTABanner } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { casesSchema } from "@/lib/schema/cases";

export const metadata: Metadata = {
  title: "Client Case Studies | 1st Response Occupational Health",
  description:
    "Real results from real companies. See how 1st Response Occupational Health has delivered zero-incident records across solar construction and industrial projects nationwide.",
};

export default function CasesIndexPage() {
  return (
    <>
      <JsonLd data={casesSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-10" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Client Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard title="Hill 1 & Hill 2" industry="Solar Construction" stat="800+ days zero incidents" href="/hill" />
          <CaseStudyCard title="Fighting Jays" industry="Solar Construction" stat="500+ days worked safe" href="/fighting-jays" />
        </div>
      </div>
      <CTABanner title="Want results like these?" primaryLabel="Schedule a Consult" primaryHref="/schedule-consult" />
    </>
  );
}
