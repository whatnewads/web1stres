"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function StartSitePageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", contact: "", phone: "", email: "", size: "", location: "", message: "", honeypot: "" });

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#E8621A] mx-auto mb-4" />
          <h1 className="text-[#0A1628] mb-3" style={{ fontSize: "28px", fontWeight: 700 }}>Assessment Requested</h1>
          <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.6 }}>Our team will contact you to discuss setting up an onsite program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
        Start an Onsite Occupational Health Program
      </h1>
      <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
        Bring a full occupational health program directly to your worksite. We deploy medical providers, equipment, and protocols tailored to your operation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>What is an Onsite Program?</h2>
          <p className="text-[#5A6178] mb-6" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            An onsite occupational health program places medical professionals, equipment, and compliance protocols at your worksite. This means faster injury response, less downtime, and no driving employees to off-site clinics.
          </p>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>Who Is This For?</h2>
          <ul className="space-y-2 mb-6">
            {["Construction crews managing 50+ workers", "Oilfield operations in remote locations", "Manufacturing plants with multi-shift workforces", "Energy projects requiring sustained medical coverage"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
                <span className="text-[#5A6178]" style={{ fontSize: "15px" }}>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "22px", fontWeight: 700 }}>How It Works</h2>
          <div className="space-y-4">
            {["Site assessment and needs analysis", "Custom program design", "Provider deployment and equipment setup", "Ongoing service delivery and reporting", "Regular program review and optimization"].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 bg-[#E8621A] text-white rounded-full flex items-center justify-center shrink-0" style={{ fontSize: "13px", fontWeight: 700 }}>{i + 1}</div>
                <p className="text-[#5A6178] pt-0.5" style={{ fontSize: "15px" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); if (!form.honeypot) setSubmitted(true); }} className="bg-[#F5F6F8] rounded-xl p-6 lg:p-8 space-y-5 h-fit">
          <h3 className="text-[#0A1628]" style={{ fontSize: "20px", fontWeight: 700 }}>Request a Site Assessment</h3>
          <div className="hidden" aria-hidden="true">
            <input name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} />
          </div>
          {[
            { id: "company", label: "Company Name", type: "text" },
            { id: "contact", label: "Contact Name", type: "text" },
            { id: "phone", label: "Phone", type: "tel" },
            { id: "email", label: "Email", type: "email" },
            { id: "size", label: "Workforce Size", type: "text" },
            { id: "location", label: "Site Location", type: "text" },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={`start-${field.id}`} className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>{field.label} *</label>
              <input id={`start-${field.id}`} type={field.type} required
                value={(form as Record<string, string>)[field.id]}
                onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none" />
            </div>
          ))}
          <div>
            <label htmlFor="start-msg" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>Message</label>
            <textarea id="start-msg" rows={3} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none resize-y" />
          </div>
          <button type="submit" className="w-full py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors" style={{ fontSize: "16px", fontWeight: 600 }}>
            Request a Site Assessment
          </button>
        </form>
      </div>
    </div>
  );
}
