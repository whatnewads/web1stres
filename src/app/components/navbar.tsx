import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Shield,
} from "lucide-react";

const navItems = [
  {
    label: "Services",
    children: [
      { label: "First Aid, BLS & ALS", to: "/firstaid-bls-als" },
      { label: "Telemedicine", to: "/telemedicine" },
      { label: "Onsite Medical Care", to: "/onsite-care" },
      { label: "Onsite EMTs & Paramedics", to: "/onsite-medics" },
      { label: "Medical Referrals", to: "/referrals" },
    ],
  },
  {
    label: "Case Management",
    children: [
      { label: "Manage Cases", to: "/manage-cases" },
      { label: "Safety Support", to: "/safety-support" },
      { label: "Emergency Response", to: "/emergency-response" },
    ],
  },
  {
    label: "Testing",
    children: [
      { label: "Drug Testing", to: "/drug-testing" },
      { label: "Medical Testing", to: "/medical-testing" },
    ],
  },
  { label: "Training", to: "/cpr-training" },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", to: "/cases" },
      { label: "Blog", to: "/blog" },
      { label: "Free Resources", to: "/free-resources" },
      { label: "Toolbox Talks", to: "/toolbox-talks" },
      { label: "OSHA Guide", to: "/osha-compliance-guide" },
      { label: "Injury Prevention Guide", to: "/injury-prevention-guide" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Us", to: "/about-us" },
      { label: "Our Team", to: "/team" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Skip to main */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#E8621A] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Shield className="w-8 h-8 text-[#E8621A]" />
            <div className="flex flex-col leading-tight">
              <span className="text-[#0A1628]" style={{ fontSize: "15px", fontWeight: 700 }}>
                1st Response
              </span>
              <span className="text-[#5A6178]" style={{ fontSize: "11px", fontWeight: 500 }}>
                Occupational Health
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-[#0A1628] hover:bg-[#F5F6F8] transition-colors"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2 hover:bg-[#F5F6F8] transition-colors ${
                            child.highlight
                              ? "text-[#E8621A]"
                              : "text-[#0A1628]"
                          } ${location.pathname === child.to ? "bg-[#F5F6F8]" : ""}`}
                          style={{ fontSize: "14px", fontWeight: child.highlight ? 600 : 400 }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                          {child.highlight && " ✨"}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`px-3 py-2 rounded-md text-[#0A1628] hover:bg-[#F5F6F8] transition-colors ${
                    location.pathname === item.to ? "bg-[#F5F6F8]" : ""
                  }`}
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19038691201"
              className="flex items-center gap-1.5 text-[#0A1628] hover:text-[#E8621A] transition-colors"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              <Phone className="w-4 h-4" />
              (903) 869-1201
            </a>
            <Link
              to="/schedule-consult"
              className="inline-flex items-center px-5 py-2.5 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
              style={{ fontSize: "14px", fontWeight: 600 }}
            >
              Schedule a Consult
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#0A1628]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="p-4 pb-32">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-border">
                  <button
                    className="flex items-center justify-between w-full py-3 text-[#0A1628]"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 pb-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block py-2 ${
                            child.highlight ? "text-[#E8621A]" : "text-[#5A6178]"
                          }`}
                          style={{ fontSize: "15px", fontWeight: child.highlight ? 600 : 400 }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                          {child.highlight && " ✨"}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="block py-3 text-[#0A1628] border-b border-border"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border">
            <Link
              to="/schedule-consult"
              className="block w-full text-center py-3 bg-[#E8621A] text-white rounded-lg"
              style={{ fontSize: "16px", fontWeight: 600 }}
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consult
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}