"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#E8621A] mb-4" style={{ fontSize: "72px", fontWeight: 800 }}>
          500
        </p>
        <h1 className="text-[#0A1628] mb-4" style={{ fontSize: "28px", fontWeight: 700 }}>
          Something Went Wrong
        </h1>
        <p className="text-[#5A6178] mb-4" style={{ fontSize: "16px", lineHeight: 1.6 }}>
          We&apos;re experiencing a temporary issue. Please try again in a moment.
        </p>
        <p className="text-[#0A1628] mb-8" style={{ fontSize: "18px", fontWeight: 700 }}>
          Need help now? Call{" "}
          <a href="tel:+19038691201" className="text-[#E8621A] underline">
            (903) 869-1201
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#E8621A] text-white rounded-lg"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0A1628] text-white rounded-lg"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
