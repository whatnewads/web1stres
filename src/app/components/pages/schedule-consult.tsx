import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const industryOptions = [
  "Construction",
  "Oil & Gas",
  "Solar / Renewable Energy",
  "Wind Energy",
  "Manufacturing",
  "Transportation / Logistics",
  "Mining",
  "Utilities",
  "Government / Municipal",
  "Other",
];

const employeeOptions = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "500+",
];

export function ScheduleConsultPage() {
  const [state, handleSubmit] = useForm("mzdaqpqd");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      navigate("/thanks");
    }
  }, [state.succeeded, navigate]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
      <div className="max-w-3xl mb-10">
        <h1
          className="text-[#0A1628] mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
        >
          Schedule a Free Consultation
        </h1>
        <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          Tell us about your construction site medical needs and we'll create a tailored
          OSHA-compliant occupational health solution for your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                autoComplete="name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="company" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Company Name *
              </label>
              <input
                id="company"
                type="text"
                name="company"
                required
                placeholder="Your company"
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                autoComplete="organization"
              />
              <ValidationError prefix="Company" field="company" errors={state.errors} />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                autoComplete="email"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
                autoComplete="tel"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
          </div>

          {/* Industry & Number of Employees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="industry" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
              >
                <option value="">Select your industry</option>
                {industryOptions.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              <ValidationError prefix="Industry" field="industry" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="employees" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
                Number of Employees *
              </label>
              <select
                id="employees"
                name="employees"
                required
                className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all"
              >
                <option value="">Select employee count</option>
                {employeeOptions.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
              <ValidationError prefix="Employees" field="employees" errors={state.errors} />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1.5 text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>
              How can our occupational health services help you? *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 bg-[#F5F6F8] border border-border rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-[#E8621A] outline-none transition-all resize-y"
              placeholder="Please describe your construction site medical needs, OSHA compliance challenges, or questions about our services"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Privacy consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1 w-4 h-4 accent-[#E8621A] shrink-0"
            />
            <label htmlFor="consent" className="text-[#5A6178]" style={{ fontSize: "13px", lineHeight: 1.5 }}>
              I agree to the processing of my personal data according to the privacy policy.
              Your information will only be used to process your occupational health consultation request.
            </label>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            {state.submitting ? "Submitting..." : "Schedule Free Consultation"}
          </button>
        </form>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-[#F5F6F8] rounded-xl p-6">
            <h3 className="text-[#0A1628] mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3" style={{ fontSize: "14px" }}>
                <MapPin className="w-5 h-5 text-[#E8621A] shrink-0 mt-0.5" />
                <span className="text-[#5A6178]">Tyler, TX</span>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "14px" }}>
                <Phone className="w-5 h-5 text-[#E8621A] shrink-0" />
                <a href="tel:+19038691201" className="text-[#5A6178] hover:text-[#E8621A]">(903) 869-1201</a>
              </li>
              <li className="flex items-center gap-3" style={{ fontSize: "14px" }}>
                <Mail className="w-5 h-5 text-[#E8621A] shrink-0" />
                <a href="mailto:jeremy.layton@1stresponseoccupational.com" className="text-[#5A6178] hover:text-[#E8621A]">jeremy.layton@1stresponseoccupational.com</a>
              </li>
              <li className="flex items-start gap-3" style={{ fontSize: "14px" }}>
                <Clock className="w-5 h-5 text-[#E8621A] shrink-0 mt-0.5" />
                <div className="text-[#5A6178]">
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat: 8:00 AM – 5:00 PM</p>
                  <p>Sun: As Needed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}