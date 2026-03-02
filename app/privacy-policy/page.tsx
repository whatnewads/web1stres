import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { privacyPolicySchema } from "@/lib/schema/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | 1st Response Occupational Health",
  description: "Privacy Policy for 1st Response Occupational Health. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you fill out a contact form, schedule a consultation, or download a resource. This may include your name, company name, email address, phone number, and the nature of your inquiry." },
  { title: "How We Use Your Information", content: "We use the information we collect to respond to your inquiries, provide our services, send you requested resources, and communicate with you about our services. We do not sell your personal information to third parties." },
  { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
  { title: "Cookies", content: "This website does not use cookies." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at jeremy.layton@1stresponseoccupational.com." },
  { title: "Contact Us", content: "If you have questions about this Privacy Policy, please contact us at jeremy.layton@1stresponseoccupational.com or call (903) 869-1201." },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={privacyPolicySchema} />
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>Privacy Policy</h1>
        <p className="text-[#5A6178] mb-8" style={{ fontSize: "14px" }}>Last updated: February 1, 2026</p>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[#0A1628] mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>{section.title}</h2>
              <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.7 }}>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
