import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { ServicePageLayout } from "@/components/shared-client";
import JsonLd from "@/components/json-ld";
import { medicalTestingSchema } from "@/lib/schema/medical-testing";

export const metadata: Metadata = {
  title: "Occupational Medical Testing Services | 1st Response Occupational Health",
  description:
    "Physical exams, respirator fit testing, audiometric testing, vision screenings, and preventive health screenings delivered at your onsite occupational clinic.",
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

export default function MedicalTestingPage() {
  return (
    <>
      <JsonLd data={medicalTestingSchema} />
      <ServicePageLayout
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testing" }, { label: "Medical Testing" }]}
        title="Occupational Medical Testing Services"
        faqs={[
          { question: "What preventive screenings do you offer?", answer: "We offer cardiovascular screening, diabetes screening, vision screening, and integrated wellness programs — all available at your occupational clinic." },
          { question: "Can testing be done at our worksite?", answer: "Yes. All of our medical testing and preventive screening services are available at your onsite occupational clinic staffed by our healthcare professionals." },
          { question: "What rapid diagnostic tests are available?", answer: "We provide rapid influenza testing, strep throat detection, respiratory illness screening, blood glucose testing, blood pressure monitoring, and EKG testing — all performed by trained professionals at your onsite clinic." },
        ]}
      >
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Preventive Screening at Your Occupational Clinic</h2>
          <BulletList items={[
            "Cardiovascular Screening — blood pressure and heart health monitoring at workplace clinic",
            "Diabetes Screening — blood glucose testing at occupational clinic for early detection",
            "Vision Screening — basic eye health assessment at occupational clinic",
            "Wellness Programs — integrated health initiatives at workplace clinic",
          ]} />
        </div>
        <div className="mb-8">
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Medical Testing Services at Your Occupational Clinic</h2>
          <BulletList items={[
            "Influenza Testing — rapid flu screening at workplace clinics by healthcare professionals",
            "Strep Throat Testing — quick strep detection at occupational clinics for immediate treatment",
            "Respiratory Illness Screening — comprehensive testing at occupational clinics for workplace health",
            "Blood Glucose Testing — diabetes screening at workplace clinics",
            "Blood Pressure Monitoring — cardiovascular screening at occupational clinics for occupational health",
            "EKG Testing — trained professionals to take and interpret tests at onsite clinics for occupational health",
          ]} />
        </div>
      </ServicePageLayout>
    </>
  );
}
