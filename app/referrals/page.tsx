import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { referralsSchema } from "@/lib/schema/referrals";

export const metadata: Metadata = {
  title: "Occupational Medical Referral Services | 1st Response Occupational Health",
  description:
    "Coordinated specialist referrals managed by our licensed occupational physician. Faster return-to-work, complete documentation, and seamless workers' comp coordination.",
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

export default function ReferralsPage() {
  return (
    <>
      <JsonLd data={referralsSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Medical Referrals" }]}
        title="Occupational Medical Referral Services"
        faqs={[
          { question: "What types of specialists do you refer to?", answer: "Our licensed occupational physician refers patients to any indicated specialist based on the clinical findings and needs of the case. We do not limit referrals to a predetermined list — the physician recommends or refers to whichever specialist is clearly indicated." },
          { question: "How does this work with our workers' compensation carrier?", answer: "We bridge the gap from the initial injury to your company's workers' compensation process. Our occupational physician follows all doctors' orders for treatments, follow-ups, and care, but we do not direct the direction of your company's workers' compensation case." },
          { question: "How do referrals reduce our liability?", answer: "When a licensed occupational physician manages the referral process, injured workers receive appropriate care quickly. This improves outcomes, reduces claim duration, and demonstrates your company's duty of care." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>How Referral Coordination Works</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            When an employee needs care beyond what our onsite or clinic-based services
            provide, our licensed occupational physician evaluates the case and refers the
            patient to any indicated specialist. We bridge the gap from initial injury to
            your company&apos;s workers&apos; compensation process — following all doctors&apos; orders
            for treatments, follow-ups, and care.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Why This Matters for Employers</h2>
          <BulletList items={[
            "Faster return-to-work timelines through physician-directed specialist referrals",
            "Seamless bridge from initial injury to your workers' compensation process",
            "Complete documentation trail for compliance and liability protection",
          ]} />
        </div>
      </ServicePageLayout>
    </>
  );
}
