"use client";

import Image from "next/image";

const partners = [
  { name: "Mortenson", alt: "Mortenson", src: "/assets/mortensonlogo.webp" },
  { name: "Strata", alt: "Strata logo", src: "/assets/stratalogo.webp" },
  { name: "MYR Group", alt: "MYR Group", src: "/assets/myrgroup.webp" },
  { name: "SOLV", alt: "SOLV", src: "/assets/solvlogo.webp" },
  { name: "Coming Soon", alt: "Coming Soon", src: "/assets/comingsoon.webp" },
  { name: "Coming Soon", alt: "Coming Soon", src: "/assets/comingsoon.webp" },
  { name: "Coming Soon", alt: "Coming Soon", src: "/assets/comingsoon.webp" },
];

// Static, non-rotating list so the names are readable without waiting on the
// carousel animation, and are indexable / available to screen readers.
const partnerNames = ["Mortenson", "Strata", "MYR", "SOLV"];

function PartnerLogo({ name, alt, src }: { name: string; alt: string; src: string }) {
  const isPlaceholder = name === "Coming Soon";
  return (
    <div
      className="flex items-center justify-center shrink-0 select-none"
      style={{ height: 60, minWidth: 140, padding: "0 8px" }}
    >
      <div className="relative h-[60px] w-[160px]">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          className="object-contain"
          sizes="160px"
          style={{ opacity: isPlaceholder ? 0.4 : 1 }}
        />
      </div>
    </div>
  );
}

export function PartnerCarousel() {
  const allPartners = [...partners, ...partners];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e9ecef",
        borderBottom: "1px solid #e9ecef",
        padding: "5rem 0",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "60%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%)",
          transform: "rotate(-30deg)",
          transformOrigin: "top right",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-6 text-center mb-8">
        <h2
          className="text-[#1A1A2E] mb-3"
          style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700 }}
        >
          Trusted Partners
        </h2>
        <p
          className="text-[#666] mx-auto"
          style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: 600 }}
        >
          We partner with some of the largest construction and energy companies in the country
          to keep their teams safe and compliant.
        </p>
      </div>

      <div className="relative overflow-hidden" style={{ padding: "2rem 0" }}>
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div
          className="flex items-center gap-16 partner-track"
          style={{ width: "max-content" }}
        >
          {allPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="partner-logo"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.65,
                transition: "all 0.3s ease",
              }}
            >
              <PartnerLogo name={p.name} alt={p.alt} src={p.src} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {partnerNames.map((partnerName) => (
            <li
              key={partnerName}
              className="text-accent font-semibold tracking-wide text-[clamp(16px,2vw,20px)]"
            >
              {partnerName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
