import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import JsonLd from "@/components/json-ld";
import { thanksSchema } from "@/lib/schema/thanks";

export const metadata: Metadata = {
  title: "Thank You | 1st Response Occupational Health",
  description: "Thank you for contacting 1st Response Occupational Health. Our team will follow up within 1 business day.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <JsonLd data={thanksSchema} />
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-[#E8621A]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#E8621A]" />
          </div>
          <h1
            className="text-[#0A1628] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700 }}
          >
            Thank You for Reaching Out
          </h1>
          <p
            className="text-[#5A6178] mb-3"
            style={{ fontSize: "16px", lineHeight: 1.6 }}
          >
            Your message has been received. A member of our occupational health
            team will review your request and follow up within 1 business day.
          </p>
          <p
            className="text-[#5A6178] mb-8"
            style={{ fontSize: "15px", lineHeight: 1.6 }}
          >
            Need immediate assistance? Call us at{" "}
            <a
              href="tel:+19038691201"
              className="text-[#E8621A] hover:underline"
              style={{ fontWeight: 600 }}
            >
              (903) 869-1201
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90 transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Back to Home
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-[#0A1628] rounded-lg hover:bg-[#F5F6F8] transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              View Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
