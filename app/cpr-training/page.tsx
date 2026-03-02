import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { cprTrainingSchema } from "@/lib/schema/cpr-training";

export const metadata: Metadata = {
  title: "CPR, First Aid & AED Training — OSHA-Compliant Certification | 1st Response Occupational Health",
  description:
    "Nationally recognized CPR, AED, and First Aid certification courses. Onsite group training available at your facility or any 1st Response clinic location, nationwide.",
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

export default function CPRTrainingPage() {
  return (
    <>
      <JsonLd data={cprTrainingSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Training" }, { label: "CPR & AED Training" }]}
        title="CPR, First Aid & AED Training — OSHA-Compliant Certification"
        faqs={[
          { question: "What certifications do participants receive?", answer: "Participants receive nationally recognized CPR, First Aid, and AED certifications valid for two years. Certifications are accepted by OSHA and meet workplace first aid requirements." },
          { question: "Can you train our team at our location?", answer: "Yes. We provide onsite training at your facility, jobsite, or office. Group training is available for teams of any size." },
          { question: "How long does the training take?", answer: "Standard CPR/AED/First Aid certification courses run approximately 4 to 6 hours depending on the curriculum and group size." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Training Programs</h2>
          <p className="text-[#5A6178] mb-4" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Our OSHA-compliant CPR, First Aid, and AED training courses prepare your
            workforce to respond to medical emergencies with confidence. Training is
            available onsite wherever our 1st Response onsite clinics operate, nationwide.
          </p>
          <BulletList items={[
            "CPR/AED for adults, children, and infants",
            "AED deployment and maintenance guidance",
            "Refresher and recertification courses",
          ]} />
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Class Formats</h2>
          <BulletList items={[
            "Onsite group training at your facility (recommended for teams of 6+)",
            "Training available at any 1st Response onsite clinic location, nationwide",
            "Custom scheduling to minimize workforce disruption",
          ]} />
        </div>
        <div className="mt-6">
          <Link
            href="/schedule-consult"
            className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Schedule Group Training
          </Link>
        </div>
      </ServicePageLayout>
    </>
  );
}
