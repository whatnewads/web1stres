import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Syringe, Stethoscope, Building2, Users, MonitorSmartphone, HeartPulse,
  GraduationCap, Briefcase, ShieldCheck, Siren, FileHeart, Shield,
  Truck, MapPin, BookOpen, FileText, HardHat, ArrowRight,
} from "lucide-react";
import { TrustBadge, ServiceCard, CaseStudyCard, ResourceCard, CTABanner } from "@/components/shared";
import { PartnerCarousel } from "@/components/partner-carousel";
import JsonLd from "@/components/json-ld";
import { homeSchema } from "@/lib/schema/home";

export const metadata: Metadata = {
  title: "1st Response Occupational Health | Nationwide Industrial Health Services",
  description:
    "The first mobile occupational health clinic to bring onsite telemedicine directly to your worksite. Drug testing, onsite clinics, emergency response, and more.",
};

const trustBadges = [
  { icon: ShieldCheck, label: "OSHA Compliant" },
  { icon: Truck, label: "DOT Certified" },
  { icon: HeartPulse, label: "BLS/ALS Provider" },
  { icon: MonitorSmartphone, label: "Telemedicine Available" },
  { icon: Users, label: "Onsite Medics" },
  { icon: MapPin, label: "Nationwide Coverage" },
];

const services = [
  { icon: Syringe, title: "Drug Testing", description: "DOT and non-DOT drug & alcohol testing with rapid results and full chain of custody.", href: "/drug-testing" },
  { icon: Stethoscope, title: "Medical Testing", description: "Physical exams, respirator fit testing, audiometric testing, and vision screenings.", href: "/medical-testing" },
  { icon: Building2, title: "Onsite Medical Care", description: "Clinical occupational health services delivered directly at your worksite.", href: "/onsite-care" },
  { icon: Users, title: "Onsite EMTs & Paramedics", description: "Certified medics and paramedics stationed at your job site for immediate response.", href: "/onsite-medics" },
  { icon: MonitorSmartphone, title: "Telemedicine", description: "OSHA-compliant remote occupational health consultations for distributed teams.", href: "/telemedicine" },
  { icon: HeartPulse, title: "First Aid, BLS & ALS", description: "Advanced life support and first aid services for industrial worksites.", href: "/firstaid-bls-als" },
  { icon: GraduationCap, title: "CPR & AED Training", description: "OSHA-compliant certification courses for your workforce, onsite or in-clinic.", href: "/cpr-training" },
  { icon: Briefcase, title: "Case Management", description: "Workers' comp coordination, return-to-work programs, and injury tracking.", href: "/manage-cases" },
  { icon: ShieldCheck, title: "Safety Management Support", description: "OSHA compliance consulting, safety program development, and incident investigation.", href: "/safety-support" },
  { icon: Siren, title: "Emergency Response", description: "Rapid industrial emergency response services deployed nationwide.", href: "/emergency-response" },
  { icon: FileHeart, title: "Medical Referrals", description: "Coordinated specialist referrals to keep your employees healthy and working.", href: "/referrals" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />

      {/* HERO */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwb2NjdXBhdGlvbmFsJTIwaGVhbHRoJTIwY2xpbmljfGVufDF8fHx8MTc3MjI4OTMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial worker receiving occupational health care"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0A1628]/80" />
        </div>
        <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-16 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 mx-auto lg:mx-0"
            style={{ background: "rgba(255,255,255,0.15)", fontSize: "clamp(11px, 1.5vw, 13px)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}
          >
            <span>Nation&apos;s First · Mobile Onsite Occupational Telemedicine</span>
          </div>
          <h1
            className="text-white max-w-2xl mb-6 mx-auto lg:mx-0"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Occupational Health Services for Workforces Nationwide
          </h1>
          <p
            className="max-w-[560px] mb-4 mx-auto lg:mx-0"
            style={{ fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.6, color: "rgba(255,255,255,0.95)" }}
          >
            The first mobile occupational health clinic to bring onsite telemedicine directly to your worksite, connecting your workers with an occupational physician, not an ER doctor.
          </p>
          <p className="mb-7 mx-auto lg:mx-0 max-w-[560px]" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            <strong className="text-white">99% of visits seen in under 1 hour.</strong>{" "}
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Affordable care built for companies of every size.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/schedule-consult"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a] transition-colors"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              Schedule a Consult
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#F5F6F8] border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 py-4">
            {trustBadges.map((badge) => (
              <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
              What We Do
            </h2>
            <p className="text-[#5A6178] max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              We deploy onsite medics, telemedicine, and clinical services to companies across every industry and every state.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGO CAROUSEL */}
      <PartnerCarousel />

      {/* CASE STUDIES TEASER */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <h2 className="text-[#0A1628] text-center mb-12" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700 }}>
            Real Results for Real Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <CaseStudyCard title="Hill 1 & Hill 2" industry="Solar Construction" stat="800+ days zero incidents" href="/hill" />
            <CaseStudyCard title="Fighting Jays" industry="Solar Construction" stat="500+ days worked safe" href="/fighting-jays" />
          </div>
          <div className="text-center mt-8">
            <Link href="/cases" className="inline-flex items-center gap-2 text-[#E8621A] hover:gap-3 transition-all" style={{ fontSize: "15px", fontWeight: 600 }}>
              See All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section id="resources" className="py-16 lg:py-20 bg-[#F5F6F8]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <h2 className="text-[#0A1628] text-center mb-12" style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700 }}>
            Free Tools for Safety Managers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard icon={BookOpen} title="Toolbox Talks Bundle" description="Pre-built safety talk scripts ready for your morning meetings." href="/toolbox-talks" />
            <ResourceCard icon={FileText} title="OSHA Compliance Guide" description="A practical checklist to keep your worksite compliant and audit-ready." href="/osha-compliance-guide" />
            <ResourceCard icon={HardHat} title="Injury Prevention Guide" description="Actionable strategies to reduce workplace injuries and insurance costs." href="/injury-prevention-guide" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8621A]/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#E8621A]" />
              </div>
              <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>On-Site or Telemedicine</h3>
              <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>We come to your job site or connect remotely — whatever keeps your crew working and compliant.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8621A]/10 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-[#E8621A]" />
              </div>
              <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>OSHA & DOT Certified</h3>
              <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>Every service meets or exceeds federal compliance standards. No guesswork, no audit surprises.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8621A]/10 flex items-center justify-center">
                <Siren className="w-7 h-7 text-[#E8621A]" />
              </div>
              <h3 className="text-[#0A1628] mb-2" style={{ fontSize: "18px", fontWeight: 700 }}>Emergency Response Ready</h3>
              <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>When minutes matter, our emergency response team is trained and ready for industrial incidents nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Keep Your Workforce Compliant and Safe?"
        primaryLabel="Schedule a Consult"
        primaryHref="/schedule-consult"
        secondaryLabel="Start a Site"
        secondaryHref="/start-site"
      />
    </>
  );
}
