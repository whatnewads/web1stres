import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { injuryPreventionSchema } from "@/lib/schema/injury-prevention-guide";
import { ResourceLeadCaptureClient } from "@/components/resource-lead-capture-client";

export const metadata: Metadata = {
  title: "Free Workplace Injury Prevention Guide | 1st Response Occupational Health",
  description:
    "Practical strategies your safety team can implement this week to reduce workplace injuries, lower workers' comp costs, and build a stronger safety culture.",
};

export default function InjuryPreventionGuidePage() {
  return (
    <>
      <JsonLd data={injuryPreventionSchema} />
      <ResourceLeadCaptureClient
        title="Free Workplace Injury Prevention Guide"
        description="Practical strategies your safety team can implement this week to reduce workplace injuries, lower workers' comp costs, and build a stronger safety culture."
        topics={[
          "Job hazard analysis (JHA) templates",
          "Pre-shift stretching and warm-up programs",
          "Near-miss reporting system setup",
          "Modified duty and return-to-work protocols",
          "Safety incentive program design",
          "Leading vs. lagging indicator tracking",
        ]}
        buttonLabel="Download Free Injury Prevention Guide"
        downloadUrl="/assets/preventative-safety.pdf"
      />
    </>
  );
}
