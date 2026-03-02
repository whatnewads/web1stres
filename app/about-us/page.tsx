import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, HeartPulse, Target, GraduationCap, Stethoscope } from "lucide-react";
import { BreadcrumbNav, CTABanner } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { aboutUsSchema } from "@/lib/schema/about-us";

export const metadata: Metadata = {
  title: "About 1st Response Occupational Health | Tyler, TX",
  description:
    "Based in Tyler, Texas, 1st Response Occupational Health delivers premium occupational health services for industrial worksites. Learn about our leadership, mission, and medical director.",
};

const certifications = [
  { icon: Shield, label: "OSHA Compliant" },
  { icon: Award, label: "DOT Certified" },
  { icon: HeartPulse, label: "BLS/ALS Provider" },
  { icon: Users, label: "CLIA Waived Lab" },
];

const drJonesCerts = [
  "Board Certified — American Academy of Family Practice",
  "Certified Independent Medical Examiner — American Board of Independent Medical Examiners",
  "Certified Medical Review Officer",
  "DATIA Certified Trainer for Drug Screen Collectors and Breath Alcohol Technicians",
  "Member of American College of Occupational and Environmental Medicine",
  "Member of Texas Medical Association",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutUsSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1
              className="text-[#0A1628] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}
            >
              About 1st Response Occupational Health
            </h1>
            <p className="text-[#5A6178] mb-4" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Based in Tyler, Texas, 1st Response Occupational Health delivers premium
              occupational health services tailored for industrial worksites across
              construction, oil field operations, distribution centers, wind energy
              sectors, and more.
            </p>
            <p className="text-[#5A6178] mb-6" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Our healthcare professionals provide expert first aid, emergency response,
              and OSHA-compliant treatments through our remote clinic and workplace clinic
              solutions that drive exceptional safety performance nationwide.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image
              src="/assets/occservices.webp"
              alt="1st Response occupational health services in the field"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#0A1628] rounded-2xl p-8 lg:p-12 mb-16 text-white">
          <Target className="w-10 h-10 text-[#E8621A] mx-auto mb-4" />
          <h2 className="text-center mb-6" style={{ fontSize: "28px", fontWeight: 700 }}>Our Occupational Health Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-4" style={{ fontSize: "16px", lineHeight: 1.8 }}>
            By maintaining industry-leading standards, our occupational clinic teams make
            the decision to invest in onsite medical support not just about compliance,
            but about protecting your workforce and demonstrating measurable value.
          </p>
          <p className="max-w-3xl mx-auto text-gray-300" style={{ fontSize: "16px", lineHeight: 1.8 }}>
            We show business leaders how comprehensive occupational health programs,
            delivered by experienced healthcare professionals, create safer crews and
            better outcomes that align with business goals across every industrial setting.
          </p>
        </div>

        {/* Leadership Story */}
        <div className="mb-16">
          <h2 className="text-[#0A1628] text-center mb-10" style={{ fontSize: "32px", fontWeight: 700 }}>
            Our Leadership Story
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              From their roots in Texas, Daniel Hayes and Jeremy Layton identified a
              pressing need for a modern approach to occupational health services across
              industrial sectors. With decades of experience in emergency medical services
              and workplace safety, they envisioned a flexible remote clinic solution to
              the challenges businesses face in managing employee health and workplace
              medical care. Determined to create real change, they founded 1st Response
              Occupational to redefine the occupational health industry through innovative
              workplace clinic services.
            </p>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              By integrating advanced telehealth services with our occupational clinic
              presence, they&apos;ve made it easier than ever for employees across construction
              sites, oil fields, distribution centers, wind farms, and general industries
              to access healthcare professionals for both personal and work-related needs.
              This innovative approach to occupational health not only streamlines care
              delivery at every clinic but also addresses personal health issues before they
              impact workplace safety. Through our workplace clinic model, employees receive
              immediate attention from qualified healthcare professionals who understand the
              unique demands of industrial environments.
            </p>
            <p className="text-[#5A6178]" style={{ fontSize: "16px", lineHeight: 1.8 }}>
              Through their leadership, 1st Response Occupational empowers businesses
              across all industrial sectors to take a proactive stance in workforce health.
              By providing comprehensive OSHA-compliant occupational health support through
              workplace clinic models, they are setting a new standard in protecting
              America&apos;s industrial workforce with expert healthcare professionals trained
              in first aid and emergency response capabilities. The journey of Daniel Hayes
              and Jeremy Layton, from EMS professionals to pioneering occupational health
              business owners, reflects their commitment to transforming occupational health
              services and workplace medical care — and their mission is far from over.
            </p>
          </div>
        </div>

        {/* Medical Director */}
        <div className="bg-[#F5F6F8] rounded-2xl p-8 lg:p-12 mb-16">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Stethoscope className="w-8 h-8 text-[#E8621A]" />
            <h2 className="text-[#0A1628]" style={{ fontSize: "28px", fontWeight: 700 }}>
              Our Medical Director
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-[#0A1628]" style={{ fontSize: "22px", fontWeight: 700 }}>
                Dr. Kyle Jones, MD
              </h3>
              <p className="text-[#E8621A]" style={{ fontSize: "15px", fontWeight: 600 }}>
                Medical Director — Occupational Health
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                Dr. Jones brings over two decades of specialized experience in occupational
                medicine and workplace health care to 1st Response Occupational. After
                graduating from Texas A&amp;M in 1982, he spent five years teaching and coaching
                basketball before pursuing his medical degree at Texas Tech School of
                Medicine, which he completed in 1996.
              </p>
              <p className="text-[#5A6178]" style={{ fontSize: "15px", lineHeight: 1.8 }}>
                With a background that includes founding Texas and Oklahoma Occupational
                Medicine Services, Dr. Jones has dedicated his career to industrial medicine,
                workplace injury management, and OSHA-compliant occupational health services
                across construction, oil field, distribution, wind energy, and general
                construction sectors. His passion for musculoskeletal and sports medicine
                perfectly aligns with the needs of our remote clinic and workplace clinic
                operations, where he excels in helping injured workers receive proper first
                aid, emergency response, and OSHA-compliant treatments with safe
                return-to-work protocols through every occupational clinic.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-[#0A1628] mb-4" style={{ fontSize: "16px", fontWeight: 700 }}>
                Certifications &amp; Memberships
              </h4>
              <ul className="space-y-2">
                {drJonesCerts.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-[#E8621A] shrink-0 mt-1" />
                    <span className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company Certifications */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-[#0A1628] text-center mb-8" style={{ fontSize: "28px", fontWeight: 700 }}>
            Certifications &amp; Accreditations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.label} className="text-center">
                <cert.icon className="w-10 h-10 text-[#E8621A] mx-auto mb-3" />
                <p className="text-[#0A1628]" style={{ fontSize: "14px", fontWeight: 600 }}>{cert.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/team"
            className="inline-flex items-center px-8 py-3.5 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90 transition-colors"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            Meet Our Team
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 border-2 border-[#0A1628] text-[#0A1628] rounded-lg hover:bg-[#F5F6F8] transition-colors"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <CTABanner
        title="Ready to Partner with 1st Response?"
        primaryLabel="Schedule a Consult"
        primaryHref="/schedule-consult"
      />
    </>
  );
}
