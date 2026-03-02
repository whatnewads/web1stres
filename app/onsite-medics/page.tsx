import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { onsiteMedicsSchema } from "@/lib/schema/onsite-medics";

export const metadata: Metadata = {
  title: "Onsite EMTs & Paramedics for Industrial Sites | 1st Response Occupational Health",
  description:
    "Certified EMTs and paramedics stationed at your job site for immediate emergency response and medical consultation. Short-term or long-term staffing nationwide.",
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

export default function OnsiteMedicsPage() {
  return (
    <>
      <JsonLd data={onsiteMedicsSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Onsite EMTs & Paramedics" }]}
        title="Onsite EMTs & Paramedics for Industrial Sites"
        faqs={[
          { question: "What qualifications do your onsite providers have?", answer: "All providers hold current EMT-Basic or Paramedic certifications. Many have additional OSHA safety training, wilderness medicine certifications, and industrial experience." },
          { question: "Can you staff medics for short-term projects?", answer: "Yes. We provide medic staffing for projects ranging from a single day to multi-year assignments." },
          { question: "Do your medics carry their own equipment?", answer: "Yes. Our medics arrive fully equipped with BLS/ALS gear, first aid supplies, and communication equipment appropriate for your worksite environment." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What We Provide</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Onsite EMTs & Paramedics places certified emergency medical professionals
            directly at your job site as medical consultants and providers. Unlike onsite
            clinical care, this service focuses on having a trained responder present and
            ready for immediate action or for any medical consultation needs — available
            at any point during operating hours.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Deployment Scenarios</h2>
          <BulletList items={[
            "Oilfield drilling and completion operations",
            "Pipeline construction and maintenance projects",
            "Solar and wind energy installations",
            "Manufacturing plant shifts with elevated injury risk",
            "Large-scale construction projects",
          ]} />
        </div>
        <div className="mt-6">
          <Link
            href="/start-site"
            className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Request Onsite Medic Staffing
          </Link>
        </div>
      </ServicePageLayout>
    </>
  );
}
