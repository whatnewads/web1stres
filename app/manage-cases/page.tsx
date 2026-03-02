import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { manageCasesSchema } from "@/lib/schema/manage-cases";

export const metadata: Metadata = {
  title: "Occupational Case Management Services | 1st Response Occupational Health",
  description:
    "End-to-end workers' comp coordination, return-to-work programs, and injury tracking. From incident through full return to work — we handle the complexity.",
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

const processSteps = ["Incident reported", "Case opened & documented", "Treatment coordinated", "Return-to-work achieved"];

export default function ManageCasesPage() {
  return (
    <>
      <JsonLd data={manageCasesSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Management" }, { label: "Manage Cases" }]}
        title="Occupational Case Management Services"
        faqs={[
          { question: "What does case management include?", answer: "Case management includes return-to-work planning, injury tracking and reporting, specialist referral management when clearly indicated by our occupational physician, and ongoing communication between all parties." },
          { question: "When should a company use case management?", answer: "Any time an employee is injured on the job and the case involves specialist care or a modified duty return-to-work program, professional case management helps reduce costs and improve outcomes." },
          { question: "How does specialist referral management work?", answer: "When our licensed occupational physician determines that a specialist is clearly indicated, we coordinate the referral, track the case through treatment, and keep your team informed with ongoing status updates throughout the process." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What Case Management Covers</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Our case management service acts as the single coordination point for
            workplace injury cases — from the initial incident through full return to
            work. We handle the complexity so your HR and safety teams can focus on
            prevention.
          </p>
          <BulletList items={[
            "Return-to-work program design and management",
            "Injury tracking, trending, and OSHA recordkeeping",
            "Specialist referral management — coordinated by our occupational physician when clearly indicated",
            "Ongoing status reporting to employers",
          ]} />
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-[#F5F6F8] rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-[#0A1628] text-white rounded-full flex items-center justify-center mx-auto mb-2" style={{ fontSize: "14px", fontWeight: 700 }}>
                  {i + 1}
                </div>
                <p className="text-[#0A1628]" style={{ fontSize: "13px", fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
