import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { safetySupportSchema } from "@/lib/schema/safety-support";

export const metadata: Metadata = {
  title: "Safety Coordination & Incident Support | 1st Response Occupational Health",
  description:
    "Medical support for your site safety team. We coordinate incident response, injury documentation, and case management alongside your existing safety personnel.",
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

export default function SafetySupportPage() {
  return (
    <>
      <JsonLd data={safetySupportSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Management" }, { label: "Safety Support" }]}
        title="Safety Coordination & Incident Support Nationwide"
        faqs={[
          { question: "What does safety coordination include?", answer: "We work alongside your site safety team to support case management when incidents occur — including injury documentation, incident response coordination, and communication between medical providers and your safety personnel." },
          { question: "Do you replace our site safety team?", answer: "No. We are not a safety management company. We work with your existing safety team to ensure that when incidents happen onsite, the medical response and case management process is seamless." },
          { question: "What happens when an incident occurs onsite?", answer: "Our team coordinates with your safety personnel to document the incident, provide or arrange appropriate medical care, and manage the case from injury through return to work." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>How We Work With Your Safety Team</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            We are not a safety management company — we partner with your existing site
            safety team to provide medical support when incidents happen. When a workplace
            injury or incident occurs, our team steps in to coordinate the medical response,
            document the case, and manage it through resolution.
          </p>
          <BulletList items={[
            "Incident response coordination with your onsite safety personnel",
            "Injury documentation and case management from incident through return to work",
            "Communication bridge between medical providers and your safety team",
            "Support for post-incident reporting and OSHA recordkeeping",
          ]} />
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Industries Served</h2>
          <BulletList items={[
            "Construction and general contractors",
            "Oil and gas exploration and production",
            "Solar energy projects",
            "Wind energy installations",
            "Manufacturing and heavy industry",
            "Energy and utilities",
            "Logistics and transportation",
          ]} />
        </div>
      </ServicePageLayout>
    </>
  );
}
