import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { oshaGuideSchema } from "@/lib/schema/osha-compliance-guide";
import { ResourceLeadCaptureClient } from "@/components/resource-lead-capture-client";

export const metadata: Metadata = {
  title: "Free OSHA Compliance Guide | 1st Response Occupational Health",
  description:
    "A practical, no-nonsense checklist to help you identify compliance gaps and prepare for OSHA inspections. Built for safety managers and HR professionals in industrial settings.",
};

export default function OshaComplianceGuidePage() {
  return (
    <>
      <JsonLd data={oshaGuideSchema} />
      <ResourceLeadCaptureClient
        title="Free OSHA Compliance Guide"
        description="A practical, no-nonsense checklist to help you identify compliance gaps and prepare for OSHA inspections. Built for safety managers and HR professionals in industrial settings."
        topics={[
          "OSHA 300 log recordkeeping requirements",
          "Required safety training by industry",
          "PPE program compliance checklist",
          "Hazard communication program essentials",
          "Emergency action plan requirements",
          "Common citation categories and how to avoid them",
        ]}
        buttonLabel="Download Free OSHA Guide"
        downloadUrl="/assets/osha-compliance-guide.pdf"
      />
    </>
  );
}
