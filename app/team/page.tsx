import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbNav, CTABanner } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { teamSchema } from "@/lib/schema/team";

export const metadata: Metadata = {
  title: "Meet the 1st Response Team | Occupational Health Professionals",
  description:
    "Meet the EMS professionals and occupational health leaders behind 1st Response. Clinical expertise combined with industrial experience to protect your workforce.",
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  category: "leadership" | "medical" | "operations";
  photo?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Daniel Hayes",
    title: "Co-Founder & Owner",
    initials: "DH",
    photo: "/assets/danhay.webp",
    bio: "With decades of experience in emergency medical services and workplace safety, Daniel identified a pressing need for a modern approach to occupational health services across industrial sectors. He co-founded 1st Response Occupational to redefine the industry through innovative workplace clinic solutions.",
    category: "leadership",
  },
  {
    name: "Jeremy Layton",
    title: "Co-Founder & Owner",
    initials: "JL",
    photo: "/assets/jlay.webp",
    bio: "An EMS professional turned occupational health business owner, Jeremy envisioned a flexible remote clinic model to solve the challenges businesses face in managing employee health and workplace medical care. His leadership drives 1st Response's mission to protect America's industrial workforce.",
    category: "leadership",
  },
  {
    name: "Dr. Kyle Jones, MD",
    title: "Contracted Occupational Physician",
    initials: "KJ",
    photo: "/assets/Dr_Kyle_Jones.webp",
    bio: "Dr. Jones brings over two decades of specialized experience in occupational medicine. A Texas A&M graduate who earned his medical degree from Texas Tech School of Medicine, he founded Texas and Oklahoma Occupational Medicine Services and has dedicated his career to industrial medicine, workplace injury management, and OSHA-compliant treatments.",
    category: "medical",
  },
  {
    name: "Michael Martinez, NRP",
    title: "Patient Lead",
    initials: "MM",
    bio: "A Nationally Registered Paramedic, Michael leads patient care operations across 1st Response's onsite and clinic programs. His clinical expertise and focus on patient outcomes ensure every worker receives timely, high-quality occupational health care.",
    category: "operations",
  },
  {
    name: "Wesley Yielding, NRP",
    title: "IT Lead",
    initials: "WY",
    photo: "/assets/wespro.jpg",
    bio: "A Nationally Registered Paramedic with a passion for technology, Wesley supports 1st Response's IT infrastructure, telehealth systems, and digital workflows to keep operations running efficiently across every worksite.",
    category: "operations",
  },
];

function TeamCard({ member, photoHeight = 350 }: { member: TeamMember; photoHeight?: number }) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <div className="relative bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] flex items-center justify-center" style={{ height: photoHeight }}>
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white"
            style={{ fontSize: "28px", fontWeight: 700 }}
          >
            {member.initials}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-[#0A1628]" style={{ fontSize: "17px", fontWeight: 700 }}>
          {member.name}
        </h3>
        <p className="text-[#E8621A] mb-2" style={{ fontSize: "14px", fontWeight: 500 }}>
          {member.title}
        </p>
        <p className="text-[#5A6178]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Our Team" }]} />
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Meet the 1st Response Team
        </h1>
        <p className="text-[#5A6178] max-w-2xl mb-12" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          From EMS professionals to pioneering occupational health leaders — our team combines
          clinical expertise with industrial experience to deliver services that protect your workforce.
        </p>

        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Ownership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {teamMembers.filter((m) => m.category === "leadership").map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Medical Direction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {teamMembers.filter((m) => m.category === "medical").map((member) => (
            <TeamCard key={member.name} member={member} photoHeight={650} />
          ))}
        </div>

        <h2 className="text-[#E8621A] mb-6" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          Operations Leads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.filter((m) => m.category === "operations").map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
      <CTABanner title="Work with Our Team" primaryLabel="Schedule a Consult" primaryHref="/schedule-consult" />
    </>
  );
}
