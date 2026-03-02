import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { emergencyResponseSchema } from "@/lib/schema/emergency-response";

export const metadata: Metadata = {
  title: "Industrial Emergency Response Services | 1st Response Occupational Health",
  description:
    "Rapid industrial emergency response deployed nationwide. Pre-positioned EMTs and paramedics with 7–10 minute average response times for workplace injuries and emergencies.",
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

export default function EmergencyResponsePage() {
  return (
    <>
      <JsonLd data={emergencyResponseSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Management" }, { label: "Emergency Response" }]}
        title="Industrial Emergency Response Services"
        faqs={[
          { question: "What types of emergencies do you respond to?", answer: "We respond to workplace injuries, medical emergencies, hazardous material incidents, confined space rescues, and any other onsite injury or incident requiring immediate medical intervention." },
          { question: "What is your typical response time?", answer: "Our average response time is 7 to 10 minutes. With our EMTs and paramedics pre-positioned at your worksite, help arrives fast — no waiting on outside ambulance services." },
          { question: "Can we pre-position emergency responders at our site?", answer: "Yes. We offer dedicated onsite emergency response staffing for high-risk operations. Contact us to discuss a staffing plan tailored to your site." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What&apos;s Covered</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            When an industrial emergency happens, response time and provider capability
            determine outcomes. Our emergency response services place trained, equipped
            responders at or near your worksite so help arrives immediately — not after
            a 30-minute ambulance drive.
          </p>
          <BulletList items={[
            "Immediate medical response to workplace injuries and emergencies",
            "BLS and ALS interventions by certified providers",
            "Hazmat incident medical support",
            "Confined space rescue medical standby",
            "Post-incident documentation and reporting",
            "And more — we respond to any onsite injury or incident",
          ]} />
        </div>
        <div className="bg-[#E8621A]/5 border-l-4 border-[#E8621A] p-4 rounded-r-lg mb-8">
          <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>Our emergency response capabilities meet OSHA 29 CFR 1910.120 (HAZWOPER) and 29 CFR 1926.65 requirements for emergency medical services at industrial worksites.</p>
        </div>
      </ServicePageLayout>
    </>
  );
}
