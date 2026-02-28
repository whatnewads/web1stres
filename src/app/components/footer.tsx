import { Link } from "react-router";
import { Shield, Linkedin, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const serviceLinks = [
  { label: "Drug Testing", to: "/drug-testing" },
  { label: "Medical Testing", to: "/medical-testing" },
  { label: "Onsite Medical Care", to: "/onsite-care" },
  { label: "Onsite EMTs & Paramedics", to: "/onsite-medics" },
  { label: "Telemedicine", to: "/telemedicine" },
  { label: "First Aid, BLS & ALS", to: "/firstaid-bls-als" },
  { label: "CPR Training", to: "/cpr-training" },
  { label: "Case Management", to: "/manage-cases" },
  { label: "Safety Support", to: "/safety-support" },
  { label: "Emergency Response", to: "/emergency-response" },
  { label: "Medical Referrals", to: "/referrals" },
];

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Our Team", to: "/team" },
  { label: "Case Studies", to: "/cases" },
  { label: "Blog", to: "/blog" },
  { label: "Free Resources", to: "/free-resources" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[#E8621A]" />
              <div className="flex flex-col leading-tight">
                <span style={{ fontSize: "16px", fontWeight: 700 }}>1st Response</span>
                <span className="text-gray-400" style={{ fontSize: "12px" }}>
                  Occupational Health
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6" style={{ fontSize: "14px", lineHeight: 1.6 }}>
              OSHA-compliant occupational health services for companies nationwide. Drug testing,
              onsite clinics, emergency response, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/1st-response-occupational-health"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E8621A] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E8621A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: "16px", fontWeight: 700 }}>
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#E8621A] transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: "16px", fontWeight: 700 }}>
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#E8621A] transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: "16px", fontWeight: 700 }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400" style={{ fontSize: "14px" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E8621A]" />
                <span>
                  Tyler, TX
                </span>
              </li>
              <li>
                <a
                  href="tel:+19038691201"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#E8621A] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#E8621A]" />
                  (903) 869-1201
                </a>
              </li>
              <li>
                <a
                  href="mailto:jeremy.layton@1stresponseoccupational.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#E8621A] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#E8621A]" />
                  jeremy.layton@1stresponseoccupational.com
                </a>
              </li>
              <li className="flex flex-col gap-1 text-gray-400" style={{ fontSize: "14px" }}>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-[#E8621A]" />
                  Mon–Fri: 8:00 AM – 6:00 PM
                </span>
                <span className="ml-6">Sat: 8:00 AM – 5:00 PM</span>
                <span className="ml-6">Sun: As Needed</span>
              </li>
            </ul>
            <Link
              to="/schedule-consult"
              className="inline-flex items-center mt-6 px-5 py-2.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Schedule a Consult
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500" style={{ fontSize: "13px" }}>
            &copy; 2025 1st Response Occupational Health. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontSize: "13px" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              style={{ fontSize: "13px" }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}