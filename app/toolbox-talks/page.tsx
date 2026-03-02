import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { toolboxTalksSchema } from "@/lib/schema/toolbox-talks";
import { ResourceLeadCaptureClient } from "@/components/resource-lead-capture-client";

export const metadata: Metadata = {
  title: "Free Toolbox Talks Bundle | 1st Response Occupational Health",
  description:
    "Download ready-to-use toolbox talk scripts covering the most common industrial safety topics. Print them, share them with your foremen, and run better morning safety meetings.",
};

export default function ToolboxTalksPage() {
  return (
    <>
      <JsonLd data={toolboxTalksSchema} />
      <ResourceLeadCaptureClient
        title="Free Toolbox Talks Bundle"
        description="Download ready-to-use toolbox talk scripts that cover the most common industrial safety topics. Print them, share them with your foremen, and run better morning safety meetings."
        topics={[
          "Fall protection and working at heights",
          "Heat illness prevention",
          "Personal protective equipment (PPE)",
          "Hazard communication",
          "Lockout/tagout procedures",
          "Confined space safety",
          "Hand and power tool safety",
          "Electrical safety basics",
        ]}
        buttonLabel="Download Free Toolbox Talks"
        downloadUrl="/assets/OSHA_Toolbox_Talks_52_Weeks.csv"
      />
    </>
  );
}
