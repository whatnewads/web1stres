import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import { contactSchema } from "@/lib/schema/contact";
import { ContactPageClient } from "@/components/contact-page-client";

export const metadata: Metadata = {
  title: "Contact Us | 1st Response Occupational Health",
  description:
    "Contact our occupational health team. General inquiries, or schedule a free consultation for your worksite.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactPageClient />
    </>
  );
}
