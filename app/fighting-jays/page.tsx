import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { BreadcrumbNav } from "@/components/shared";
import JsonLd from "@/components/json-ld";
import { fightingJaysSchema } from "@/lib/schema/fighting-jays";

export const metadata: Metadata = {
  title: "Fighting Jays Case Study: 256% Return on Onsite Care | 1st Response",
  description:
    "Mortenson spent about $100,000 on 1st Response onsite care at the Fighting Jays solar project and avoided an estimated $355,500 in offsite medical visits — an estimated 256% return.",
};

const sectionHeading: CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const body: CSSProperties = { fontSize: "16px", lineHeight: 1.7 };

/* ── Tables. These are the only tables on the site, so the helper lives here
      rather than in components/shared.tsx. ── */
function DataTable({
  head,
  rows,
  labelColumn = false,
}: {
  head?: string[];
  rows: ReactNode[][];
  labelColumn?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left" style={{ fontSize: "15px" }}>
        {head && (
          <thead>
            <tr>
              {head.map((label, i) => (
                <th
                  key={label}
                  scope="col"
                  className="border-b-2 border-[#0A1628] py-3 pr-4 align-bottom text-[#0A1628]"
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    whiteSpace: i === 0 ? "normal" : "nowrap",
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((cells, r) => (
            <tr key={r} className="border-b border-border">
              {cells.map((cell, c) =>
                labelColumn && c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="py-3 pr-6 align-top text-[#0A1628]"
                    style={{ fontWeight: 600, lineHeight: 1.6 }}
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="py-3 pr-4 align-top text-[#5A6178]" style={{ lineHeight: 1.6 }}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Emphasised cell, for total and bottom-line rows. */
function Strong({ children }: { children: ReactNode }) {
  return <span style={{ fontWeight: 700, color: "#0A1628" }}>{children}</span>;
}

function Point({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="text-[#5A6178]" style={body}>
      <span style={{ fontWeight: 700, color: "#0A1628" }}>{label}</span> {children}
    </li>
  );
}

export default function FightingJaysCaseStudyPage() {
  return (
    <>
      <JsonLd data={fightingJaysSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav
          items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/cases" }, { label: "Fighting Jays" }]}
        />
        <h1 className="text-[#0A1628] mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Fighting Jays: a 256% Return on Onsite Care
        </h1>
        <p className="text-[#5A6178] mb-6" style={{ fontSize: "15px" }}>
          Oct 2, 2026 · By Wesley Yielding
        </p>

        <div className="max-w-3xl space-y-4 mb-10">
          <p className="text-[#0A1628]" style={{ fontSize: "18px", lineHeight: 1.7 }}>
            Mortenson, general contractor on TotalEnergies’ Fighting Jays project, spent approximately $100,000 on 1st
            Response onsite care from Apr 15 to Dec 10, 2024 and avoided an estimated $355,500 in offsite medical
            visits. That is an estimated 256% return on investment, a net savings of $255,500.
          </p>
          <p className="text-[#5A6178]" style={body}>
            1st Response handled 245 first-aid encounters on the project and resolved 237 of them (96.7%) on site. Of
            the 148 work-related encounters, 143 (96.6%) were resolved on site.
          </p>
          <p className="text-[#5A6178]" style={body}>
            The encounter counts are exact tallies from patient charts. The dollar figures are estimates, and the last
            section shows every input behind them.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden mb-6" style={{ height: 420 }}>
          <Image
            src="/assets/fighting_jays.webp"
            alt="Fighting Jays solar construction project site"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        <div className="max-w-3xl mb-12">
          <a
            href="/assets/case-study-fighting-jays.pdf"
            className="inline-flex items-center gap-2 text-[#E8621A] hover:underline"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            <Download className="w-4 h-4" />
            Download this case study (PDF)
          </a>
        </div>

        <div className="max-w-3xl space-y-12">
          {/* THE PROJECT */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              The project
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              On a site this size, every injury or illness forces a choice: treat the worker where they stand, or send
              them off the job to a clinic. Mortenson brought 1st Response on site so the first option was always
              available.
            </p>
            <DataTable
              labelColumn
              rows={[
                ["Owner", "TotalEnergies"],
                ["General contractor", "Mortenson"],
                ["Site", "Fighting Jays, Guy, Texas"],
                ["1st Response on site", "Apr 15, 2024 to Dec 10, 2024"],
                ["Peak workforce", "340 (average 260)"],
                ["Staffing", "One nationally registered paramedic (NREMT-P), 6 to 7 days a week"],
                ["Services", "Onsite medical care and first aid, drug testing, case management"],
              ]}
            />
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Results: 97% of encounters resolved on site
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              Six in ten encounters were work-related, and 1st Response resolved 143 of those 148 on site.
            </p>
            <DataTable
              head={["Encounter type", "Encounters", "Resolved on site", "Percent resolved"]}
              rows={[
                ["Work-related", "148", "143", "96.6%"],
                ["Personal", "97", "94", "96.9%"],
                [<Strong key="t">Total</Strong>, <Strong key="e">245</Strong>, <Strong key="r">237</Strong>, <Strong key="p">96.7%</Strong>],
              ]}
            />
            <p className="text-[#5A6178] mt-6" style={body}>
              Those 245 encounters covered 176 individual workers across 343 visits. The 98 follow-up visits were
              handled on site as well, so a worker did not have to leave the job for a recheck.
            </p>
            <p className="text-[#5A6178] mt-4" style={body}>
              The 97 personal encounters matter to the contractor too. A worker with a non-work health problem who gets
              seen on site stays on shift instead of leaving to find care.
            </p>
          </section>

          {/* ROI */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Return on investment: 256%
            </h2>
            <p className="text-[#5A6178] mb-4" style={body}>
              Without 1st Response on site, each of the 237 encounters resolved there, 143 of them work-related, has one
              route to care: off the site.
            </p>
            <p className="text-[#5A6178] mb-6" style={body}>
              On site, care cost about $408 per encounter ($100,000 across 245 encounters). That figure is conservative,
              because the same program cost also paid for drug testing and case management.
            </p>
            <DataTable
              head={["Line", "Amount"]}
              rows={[
                ["Encounters resolved on site", "237"],
                ["Assumed cost of one offsite clinic or ER visit", "$1,500"],
                ["Estimated offsite cost avoided", "$355,500"],
                ["Program cost (approximate)", "$100,000"],
                ["Estimated net savings to the general contractor", "$255,500"],
                [<Strong key="l">Estimated return on investment</Strong>, <Strong key="a">256%</Strong>],
              ]}
            />
          </section>

          {/* HOW IT WORKED */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              How it worked
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              Nothing here is exotic. The return comes from putting care where the work is and paying only for what the
              site needs.
            </p>
            <ul className="space-y-4 list-disc pl-5">
              <Point label="Care in minutes.">
                Workers were seen within minutes of an injury, on site, instead of after a drive and a waiting room.
              </Point>
              <Point label="Coverage sized to the job.">
                One provider on the site’s own schedule, 6 to 7 days a week, with no clinic facility to carry.
              </Point>
              <Point label="Workers stay on the job.">
                No trip, no escort pulled off the crew, no half-day lost to a clinic visit.
              </Point>
              <Point label="Follow-up on site.">
                Rechecks happened where the worker already was: 98 follow-up visits across the project.
              </Point>
              <Point label="One provider, several jobs.">
                The same program covered first aid, drug testing and case management.
              </Point>
              <Point label="Personal health included.">
                Non-work problems were seen on site too, which kept those workers on shift.
              </Point>
            </ul>
          </section>

          {/* PROVENANCE */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Where the numbers come from
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              The counts are measured and the dollars are modeled. Each figure below is labeled as one or the other.
            </p>
            <DataTable
              head={["Figure", "Source", "Precision"]}
              rows={[
                [
                  "Encounters: 245 total, 148 work-related, 97 personal",
                  "1st Response electronic patient charts for this site. Charted encounters run Apr 15 to Nov 26, 2024.",
                  "Exact count",
                ],
                [
                  "Resolved on site: 237 total, 143 work-related, 94 personal",
                  "The same charts. An encounter is resolved when it closes with a completed 1st Response visit.",
                  "Exact count",
                ],
                ["Work-related or personal", "The final determination recorded on each chart", "Exact count"],
                [
                  "Workforce and site dates",
                  "Site data approved for publication by the general contractor’s safety department",
                  "As reported",
                ],
                ["Program cost: $100,000", "1st Response", "Approximate, rounded"],
                [
                  "Offsite visit: $1,500",
                  "Planning assumption covering the visit, transport and paid time away from work",
                  "Assumption, not a billed figure",
                ],
              ]}
            />
          </section>

          {/* COUNTING RULES */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              How encounters were counted
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              The count was built to run low, not high.
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-[#5A6178]" style={body}>
                Only first-aid encounters count. Drug tests, alcohol tests and physicals are excluded.
              </li>
              <li className="text-[#5A6178]" style={body}>
                Test and training charts are removed.
              </li>
              <li className="text-[#5A6178]" style={body}>
                Visits by the same worker within 4 days count as one encounter, so 343 visits became 245 encounters.
              </li>
              <li className="text-[#5A6178]" style={body}>
                An encounter charted as both work-related and personal is counted once, under its final determination.
              </li>
            </ul>
          </section>

          {/* SENSITIVITY */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              How far the estimate can bend
            </h2>
            <p className="text-[#5A6178] mb-4" style={body}>
              The return stays positive under every conservative case below.
            </p>
            <p className="text-[#5A6178] mb-6" style={body}>
              The program breaks even at 67 avoided offsite visits, which is 28% of the 237 resolved on site, or at an
              offsite visit cost of $422.
            </p>
            <DataTable
              head={["Scenario", "Cost avoided", "Return on investment"]}
              rows={[
                ["Base case: 237 visits at $1,500", "$355,500", "256%"],
                ["Program cost 50% higher ($150,000)", "$355,500", "137%"],
                ["Work-related encounters only (143)", "$214,500", "115%"],
                ["Offsite visit cost cut in half ($750)", "$177,750", "78%"],
              ]}
            />
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-white rounded-lg hover:bg-[#0A1628]/90"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Back to Case Studies
          </Link>
          <Link
            href="/schedule-consult"
            className="inline-flex items-center px-6 py-3 bg-[#E8621A] text-white rounded-lg hover:bg-[#d4571a]"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Schedule a Consult
          </Link>
        </div>
      </div>
    </>
  );
}
