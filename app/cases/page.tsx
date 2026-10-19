import type { Metadata } from "next";
import { CaseStudyCard, CTABanner } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { casesSchema } from "@/lib/schema/cases";

export const metadata: Metadata = {
  title: "Client Case Studies | 1st Response Occupational Health",
  description:
    "What onsite medical care returned on three solar construction projects: 934 first-aid encounters, 915 resolved on site, recordable injury rates up to 84% below the construction average, and a measured return for each general contractor.",
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
          <CaseStudyCard title="Rocky Mountain" industry="Solar Construction" stat="84% below industry injury rate" href="/rocky-mountain" />
          <CaseStudyCard title="Blevins" industry="Solar Construction" stat="75% below industry injury rate" href="/blevins" />
          <CaseStudyCard title="Fighting Jays" industry="Solar Construction" stat="256% return on investment" href="/fighting-jays" />
        </div>
      </div>
      <CTABanner title="Want results like these?" primaryLabel="Schedule a Consult" primaryHref="/schedule-consult" />
    </>
  );
}
