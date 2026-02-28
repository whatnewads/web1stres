const partners = [
  { name: "Mortenson", subtitle: "Construction" },
  { name: "MYR Group", subtitle: "" },
  { name: "SOLV", subtitle: "Construction" },
  { name: "Coming Soon", subtitle: "" },
  { name: "Coming Soon", subtitle: "" },
  { name: "Coming Soon", subtitle: "" },
];

function LogoPlaceholder({ name, subtitle }: { name: string; subtitle: string }) {
  const isPlaceholder = name === "Coming Soon";
  return (
    <div
      className="flex items-center justify-center shrink-0 select-none"
      style={{ height: 60, minWidth: 160, padding: "0 8px" }}
    >
      <div className="text-center">
        <span
          className="block whitespace-nowrap"
          style={{
            fontSize: isPlaceholder ? "16px" : "20px",
            fontWeight: isPlaceholder ? 500 : 800,
            color: isPlaceholder ? "#999" : "#1A1A2E",
            letterSpacing: isPlaceholder ? "0.5px" : "0.02em",
            fontStyle: isPlaceholder ? "italic" : "normal",
          }}
        >
          {name}
        </span>
        {subtitle && (
          <span
            className="block whitespace-nowrap"
            style={{ fontSize: "12px", fontWeight: 600, color: "#666", letterSpacing: "1.5px", textTransform: "uppercase" }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export function PartnerCarousel() {
  // Duplicate for seamless loop
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
      {/* Subtle decorative gradient */}
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
          Trusted by Leading Industrial Contractors
        </h2>
        <p
          className="text-[#666] mx-auto"
          style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: 600 }}
        >
          We partner with some of the largest construction and energy companies in the country to keep their teams safe and compliant.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden" style={{ padding: "2rem 0" }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

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
                opacity: 0.6,
                transition: "all 0.3s ease",
              }}
            >
              <LogoPlaceholder name={p.name} subtitle={p.subtitle} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partner-track {
          animation: partner-scroll 20s linear infinite;
        }
        .partner-track:hover {
          animation-play-state: paused;
        }
        .partner-logo:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
