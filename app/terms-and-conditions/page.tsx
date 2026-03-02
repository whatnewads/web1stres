import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { termsSchema } from "@/lib/schema/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms and Conditions | 1st Response Occupational Health",
  description: "Terms and Conditions for 1st Response Occupational Health website. Governing law: State of Texas.",
};

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement." },
  { title: "Use of Website", content: "This website is intended to provide information about 1st Response Occupational Health services. The content is for informational purposes only and does not constitute medical advice." },
  { title: "Intellectual Property", content: "All content on this website, including text, graphics, logos, and images, is the property of 1st Response Occupational Health and is protected by applicable intellectual property laws." },
  { title: "Limitation of Liability", content: "1st Response Occupational Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of this website." },
  { title: "Governing Law", content: "These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions." },
  { title: "Contact", content: "Questions about these Terms should be directed to jeremy.layton@1stresponseoccupational.com." },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={termsSchema} />
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <h1 className="text-[#0A1628] mb-2" style={{ fontSize: "32px", fontWeight: 700 }}>Terms and Conditions</h1>
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
