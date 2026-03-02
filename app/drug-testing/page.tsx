import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { drugTestingSchema } from "@/lib/schema/drug-testing";

export const metadata: Metadata = {
  title: "DOT & Non-DOT Drug Testing Services | 1st Response Occupational Health",
  description:
    "Comprehensive drug and alcohol testing with full chain of custody. DOT-compliant urine, oral fluid, and breath alcohol testing with rapid results and MRO services.",
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

export default function DrugTestingPage() {
  return (
    <>
      <JsonLd data={drugTestingSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testing" }, { label: "Drug Testing" }]}
        title="DOT & Non-DOT Drug Testing Services"
        faqs={[
          { question: "What is the difference between DOT and non-DOT testing?", answer: "DOT testing follows strict federal protocols mandated by the Department of Transportation for safety-sensitive positions. Non-DOT testing follows your company's own drug-free workplace policy and can be customized in terms of panel type and procedures." },
          { question: "How quickly do we get results?", answer: "Rapid screening results are typically available within minutes for negative results. Non-negative results are sent to a Medical Review Officer (MRO) and finalized within 24 to 72 hours." },
          { question: "Do you provide MRO services?", answer: "Yes. Our Medical Review Officer reviews all non-negative results, contacts the donor for verification, and provides a final determination to your company." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Our Drug Testing Services</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            We provide comprehensive drug and alcohol testing services that meet DOT,
            FMCSA, and OSHA requirements. Whether you need pre-employment screening,
            random testing programs, or post-accident testing, we handle the entire
            chain of custody with precision.
          </p>
          <BulletList items={[
            "DOT and non-DOT multi-panel urine drug screens",
            "Oral fluid testing",
            "Breath alcohol testing (BAT)",
            "Support for suspicion, pre-employment, post-incident, and more",
            "MRO (Medical Review Officer) services",
          ]} />
        </div>
        <div className="bg-[#E8621A]/5 border-l-4 border-[#E8621A] p-4 rounded-r-lg mb-8">
          <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>All drug testing services comply with DOT 49 CFR Part 40, FMCSA regulations, and OSHA drug-free workplace standards.</p>
        </div>
      </ServicePageLayout>
    </>
  );
}
