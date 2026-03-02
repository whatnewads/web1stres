"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScheduleConsultForm } from "@/components/schedule-consult-form";

export function ContactPageClient() {
  const [activeTab, setActiveTab] = useState<"general" | "consult">("general");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot check
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    if (honeypot) return;

    setStatus("submitting");
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://formspree.io/f/xwvnjedw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeTab === "general"
              ? "bg-[#E8621A] text-white"
              : "bg-white border border-border text-[#0A1628] hover:bg-[#F5F6F8]"
          }`}
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          General Contact
        </button>
        <button
          onClick={() => setActiveTab("consult")}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeTab === "consult"
              ? "bg-[#E8621A] text-white"
              : "bg-white border border-border text-[#0A1628] hover:bg-[#F5F6F8]"
          }`}
          style={{ fontSize: "15px", fontWeight: 600 }}
        >
          Free Occupational Health Consultation
        </button>
      </div>

      {activeTab === "consult" ? (
        <ScheduleConsultForm />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div>
            <h2 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700 }}>
              Contact Our Occupational Health Team
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#E8621A]" />
                </div>
                <div>
                  <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>Email:</p>
                  <a href="mailto:jeremy.layton@1stresponseoccupational.com" className="text-[#0A1628] hover:text-[#E8621A]">
                    jeremy.layton@1stresponseoccupational.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E8621A]" />
                </div>
                <div>
                  <p className="text-[#5A6178]" style={{ fontSize: "13px" }}>Phone:</p>
                  <a href="tel:+19038691201" className="text-[#0A1628] hover:text-[#E8621A]">(903) 869-1201</a>
                </div>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "15px" }}>
                <div className="w-10 h-10 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E8621A]" />
                </div>
                <span className="text-[#0A1628]">We provide nationwide construction site medical services</span>
              </li>
            </ul>

            <h3 className="text-[#0A1628] mb-4" style={{ fontSize: "20px", fontWeight: 700 }}>Business Hours</h3>
            <ul className="space-y-3">
              {[
                "Monday - Friday: 8:00 AM - 6:00 PM",
                "Saturday: 8:00 AM - 5:00 PM",
                "Sunday: As Needed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3" style={{ fontSize: "14px" }}>
                  <div className="w-8 h-8 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#E8621A]" />
                  </div>
                  <span className="text-[#5A6178]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="text-[#0A1628] mb-6" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700 }}>
              Send Us a Message About Occupational Health
            </h2>
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <p className="text-green-800" style={{ fontSize: "16px", fontWeight: 600 }}>
                  Message sent! We&apos;ll follow up within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="hidden" aria-hidden="true">
                  <input name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="contact-name" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Company Name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    How can our occupational health services help you? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your construction site medical needs or OSHA compliance questions"
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all resize-y"
                  />
                </div>

                <div className="bg-[#FFF7ED] border-l-4 border-[#E8621A] p-4 rounded-r-lg">
                  <p className="text-[#5A6178]" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                    <span className="text-[#0A1628]" style={{ fontWeight: 600 }}>Information Collection Notice:</span>{" "}
                    By submitting this form, you consent to 1st Response Occupational collecting and processing
                    the information you provide. We will use this information solely to respond to your occupational
                    health inquiry. We do not sell or share your information with third parties.
                  </p>
                </div>

                {status === "error" && (
                  <p className="text-red-600" style={{ fontSize: "14px" }}>
                    Something went wrong. Please try again or call us at (903) 869-1201.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
