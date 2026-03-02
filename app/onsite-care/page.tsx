import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { onsiteCareSchema } from "@/lib/schema/onsite-care";

export const metadata: Metadata = {
  title: "Onsite Medical Care for Industrial Worksites | 1st Response Occupational Health",
  description:
    "Mobile occupational health clinics brought directly to your worksite. Drug testing, return-to-work evaluations, and more — without pulling your crew off the job.",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
          <span className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.6 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function OnsiteCarePage() {
  return (
    <>
      <JsonLd data={onsiteCareSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Onsite Medical Care" }]}
        title="Onsite Medical Care for Industrial Worksites"
        faqs={[
          { question: "How is onsite care different from onsite medics?", answer: "Onsite medical care provides clinical services like drug testing and return-to-work evaluations at your worksite. Onsite EMTs & Paramedics focuses on staffing certified EMTs and paramedics for ongoing emergency standby and medical consultation." },
          { question: "Can you set up a temporary clinic at our jobsite?", answer: "Yes. We deploy fully equipped mobile medical units and can establish temporary clinics for projects lasting from a few days to several months." },
          { question: "What services are available onsite?", answer: "Drug and alcohol testing (DOT and non-DOT) and return-to-work evaluations. We bring these services directly to your worksite so your team stays on the job." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What&apos;s Included</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Onsite Medical Care brings the clinic to your worksite. Our mobile medical
            units and trained providers deliver drug testing and return-to-work
            evaluations — without pulling your workers off the job.
          </p>
          <BulletList items={[
            "Drug and alcohol testing (DOT and non-DOT)",
            "Return-to-work evaluations",
          ]} />
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Who Needs This</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Companies running large-scale construction projects, oilfield operations, or
            manufacturing plants benefit most from onsite medical care. If your workers
            lose hours traveling to a clinic, we eliminate that downtime.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/start-site"
            className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Start a Site
          </Link>
        </div>
      </ServicePageLayout>
    </>
  );
}
