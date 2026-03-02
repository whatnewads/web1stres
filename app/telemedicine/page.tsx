import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { telemedicineSchema } from "@/lib/schema/telemedicine";

export const metadata: Metadata = {
  title: "Occupational Telemedicine Services | 1st Response Occupational Health",
  description:
    "OSHA-compliant telemedicine for industrial worksites. Connect your workers with an occupational physician — 99% of visits seen in under 1 hour. Nationwide coverage.",
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

const steps = [
  "Register and make an appointment with our occupational physician",
  "Connect via compliant video medicine services",
  "Receive documentation and next steps — including imaging and other orders if clearly indicated",
];

export default function TelemedicinePage() {
  return (
    <>
      <JsonLd data={telemedicineSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Telemedicine" }]}
        title="Occupational Telemedicine Services"
        faqs={[
          { question: "Is telemedicine OSHA-compliant for occupational health?", answer: "Yes. OSHA permits telemedicine for many occupational health evaluations. We ensure all remote consultations meet applicable regulatory requirements." },
          { question: "What equipment do we need on our end?", answer: "None — we provide everything. Our onsite clinics are fully equipped for telemedicine visits, so your team doesn't need to set up any technology." },
          { question: "How fast can we schedule a telemedicine appointment?", answer: "99% of appointments are seen in an hour or less from time of visit to clinic." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#F5F6F8] rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-[#E8621A] text-white rounded-full flex items-center justify-center mx-auto mb-2" style={{ fontSize: "14px", fontWeight: 700 }}>
                  {i + 1}
                </div>
                <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Industries Served</h2>
          <BulletList items={[
            "Remote oilfield and pipeline crews",
            "Distributed construction teams nationwide",
            "Solar and wind energy projects",
            "Small businesses without onsite medical staff",
            "Companies needing rapid post-incident evaluations",
          ]} />
        </div>
        <div className="bg-[#E8621A]/5 border-l-4 border-[#E8621A] p-4 rounded-r-lg mb-8">
          <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>All telemedicine consultations are conducted by licensed providers and meet OSHA regulatory standards for occupational health evaluations.</p>
        </div>
      </ServicePageLayout>
    </>
  );
}
