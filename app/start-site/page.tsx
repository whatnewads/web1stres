import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { startSiteSchema } from "@/lib/schema/start-site";
import { StartSitePageClient } from "@/components/start-site-page-client";

export const metadata: Metadata = {
  title: "Start an Onsite Occupational Health Program | 1st Response",
  description:
    "Deploy a full occupational health program at your worksite. Site assessment, custom program design, and provider deployment — tailored to your operation.",
};

export default function StartSitePage() {
  return (
    <>
      <JsonLd data={startSiteSchema} />
      <StartSitePageClient />
    </>
  );
}
