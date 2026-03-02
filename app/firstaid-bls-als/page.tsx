import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import { CTABanner } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { firstAidSchema } from "@/lib/schema/firstaid-bls-als";

export const metadata: Metadata = {
  title: "First Aid, BLS & ALS Services | 1st Response Occupational Health",
  description:
    "Onsite first aid, Basic Life Support, and Advanced Life Support services for industrial worksites. OSHA-compliant, certified providers deployed nationwide.",
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

export default function FirstAidPage() {
  return (
    <>
      <JsonLd data={firstAidSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "First Aid, BLS & ALS" }]}
        title="First Aid, BLS & ALS Services"
        faqs={[
          { question: "What is the difference between BLS and ALS?", answer: "Basic Life Support (BLS) covers CPR, AED use, and basic airway management. Advanced Life Support (ALS) includes IV access, cardiac monitoring, medication administration, and advanced airway management by certified paramedics." },
          { question: "Do you provide coverage at construction sites?", answer: "Yes. Most construction sites utilize first aid to BLS level of care from our certified providers. ALS coverage is optional and available if the client requires it. We deploy to construction sites, oilfield locations, and industrial facilities nationwide on a contract basis." },
          { question: "Are your providers OSHA-compliant?", answer: "All of our BLS and ALS providers meet or exceed OSHA general duty clause requirements, are licensed at the EMT level and above including paramedic level licensure." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What We Provide</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Our First Aid, BLS & ALS services ensure your worksite has immediate access to
            trained medical professionals capable of responding to injuries and medical
            emergencies. From basic wound care and first aid to advanced cardiac life support,
            we scale our response to match your site&apos;s risk profile.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Who Needs This Service</h2>
          <BulletList items={[
            "Construction companies with high-risk jobsites",
            "Oil & gas operations in remote locations",
            "Manufacturing facilities with heavy machinery",
          ]} />
        </div>
        <div className="bg-[#E8621A]/5 border-l-4 border-[#E8621A] p-4 rounded-r-lg mb-8">
          <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>All services meet OSHA 29 CFR 1910.151 and 1926.50 requirements for workplace first aid and medical services.</p>
        </div>
      </ServicePageLayout>
    </>
  );
}
