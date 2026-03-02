"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navItems = [
  {
    label: "Services",
    children: [
      { label: "First Aid, BLS & ALS", href: "/firstaid-bls-als" },
      { label: "Telemedicine", href: "/telemedicine" },
      { label: "Onsite Medical Care", href: "/onsite-care" },
      { label: "Onsite EMTs & Paramedics", href: "/onsite-medics" },
      { label: "Medical Referrals", href: "/referrals" },
    ],
  },
  {
    label: "Case Management",
    children: [
      { label: "Manage Cases", href: "/manage-cases" },
      { label: "Safety Support", href: "/safety-support" },
      { label: "Emergency Response", href: "/emergency-response" },
    ],
  },
  {
    label: "Testing",
    children: [
      { label: "Drug Testing", href: "/drug-testing" },
      { label: "Medical Testing", href: "/medical-testing" },
    ],
  },
  { label: "Training", href: "/cpr-training" },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/cases" },
      { label: "Blog", href: "/blog" },
      { label: "Free Resources", href: "/free-resources" },
      { label: "Toolbox Talks", href: "/toolbox-talks" },
      { label: "OSHA Guide", href: "/osha-compliance-guide" },
      { label: "Injury Prevention Guide", href: "/injury-prevention-guide" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#E8621A] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/1streslogonobg.png"
              alt="1st Response Occupational Health"
              width={360}
              height={96}
              className="h-14 lg:h-20 w-auto"
              priority
            />
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
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 hover:bg-[#F5F6F8] transition-colors text-[#0A1628] ${
                            pathname === child.href ? "bg-[#F5F6F8]" : ""
                          }`}
                          style={{ fontSize: "14px", fontWeight: 400 }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`px-3 py-2 rounded-md text-[#0A1628] hover:bg-[#F5F6F8] transition-colors ${
                    pathname === item.href ? "bg-[#F5F6F8]" : ""
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
              href="/schedule-consult"
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
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-[#5A6178]"
                          style={{ fontSize: "15px", fontWeight: 400 }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
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
              href="/schedule-consult"
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
