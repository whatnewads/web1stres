import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { BreadcrumbNav } from "@/components/shared";
import { DataTable, Point, SourceLink, Strong, body, sectionHeading } from "@/components/case-study";
import JsonLd from "@/components/json-ld";
import { rockyMountainSchema } from "@/lib/schema/rocky-mountain";

const BLS = "https://www.bls.gov/iag/tgs/iag23.htm";
const NSC = "https://injuryfacts.nsc.org/work/costs/work-injury-costs/";

export const metadata: Metadata = {
  title: "Rocky Mountain Case Study: Recordable Rate 84% Below Industry | 1st Response",
  description:
    "Mortenson spent $415,000 on 1st Response onsite care at the Rocky Mountain solar project. The site recorded 1 OSHA recordable in 575,000 worker-hours, 84% below the construction average, for an estimated 73% return.",
};

export default function RockyMountainCaseStudyPage() {
  return (
    <>
      <JsonLd data={rockyMountainSchema} />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <BreadcrumbNav
          items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/cases" }, { label: "Rocky Mountain" }]}
        />
        <h1 className="text-[#0A1628] mb-3" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
          Rocky Mountain: a 73% Return on Onsite Care
        </h1>
        <p className="text-[#5A6178] mb-6" style={{ fontSize: "15px" }}>
          Oct 19, 2026 &middot; By Wesley Yielding
        </p>

        <div className="max-w-3xl space-y-4 mb-8">
          <p className="text-[#0A1628]" style={{ fontSize: "18px", lineHeight: 1.7 }}>
            Mortenson, general contractor on Xcel Energy&rsquo;s Rocky Mountain project, spent $415,000 on 1st Response
            onsite care from Nov 19, 2024 to Mar 5, 2026. The site recorded 1 OSHA recordable case in 575,000
            worker-hours, a rate 84% below the construction industry average. Valuing the offsite visits avoided and
            the gap to the industry injury rate, the program returned an estimated 73% on what was spent, a net savings
            of about $304,100.
          </p>
          <p className="text-[#5A6178]" style={body}>
            1st Response handled 314 first-aid encounters on the project and resolved 309 of them (98.4%) on site. Of
            the 113 work-related encounters, 111 (98.2%) were resolved on site.
          </p>
          <p className="text-[#5A6178]" style={body}>
            The encounter and recordable counts are exact. The dollar figures are estimates, and the last section shows
            every input behind them.
          </p>
        </div>

        <div className="max-w-3xl mb-12">
          <a
            href="/assets/case-study-rocky-mountain.pdf"
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
                ["Owner", "Xcel Energy"],
                ["General contractor", "Mortenson"],
                ["Site", "Rocky Mountain, near Pueblo, Colorado"],
                ["1st Response on site", "Nov 19, 2024 to Mar 5, 2026"],
                ["Peak workforce", "500"],
                ["Worker-hours", "575,000"],
                ["Staffing", "One nationally registered paramedic (NREMT-P), 6 to 7 days a week"],
                ["Services", "Onsite medical care and first aid, drug testing, case management"],
              ]}
            />
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Results: 98% of encounters resolved on site
            </h2>
            <p className="text-[#5A6178] mb-6" style={body}>
              1st Response resolved 98% of both work-related and personal encounters on site, including 111 of the 113
              work-related ones.
            </p>
            <DataTable
              head={["Encounter type", "Encounters", "Resolved on site", "Percent resolved"]}
              rows={[
                ["Work-related", "113", "111", "98.2%"],
                ["Personal", "201", "198", "98.5%"],
                [<Strong key="t">Total</Strong>, <Strong key="e">314</Strong>, <Strong key="r">309</Strong>, <Strong key="p">98.4%</Strong>],
              ]}
            />
            <p className="text-[#5A6178] mt-6" style={body}>
              Those 314 encounters covered 196 individual workers across 542 visits. The 228 follow-up visits were
              handled on site as well, so a worker did not have to leave the job for a recheck.
            </p>
            <p className="text-[#5A6178] mt-4" style={body}>
              Two in three encounters were personal, and they matter to the contractor too. A worker with a non-work
              health problem who gets seen on site stays on shift instead of leaving to find care.
            </p>
          </section>

          {/* SAFETY */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Safety: recordable rate 84% below industry
            </h2>
            <p className="text-[#5A6178] mb-4" style={body}>
              The site recorded 1 OSHA recordable case in 575,000 worker-hours. A construction workforce working the
              same hours at the industry average rate would expect about 6.
            </p>
            <p className="text-[#5A6178] mb-6" style={body}>
              The industry rate is the Bureau of Labor Statistics figure for private construction in 2024 (
              <SourceLink href={BLS}>BLS</SourceLink>). Fast first aid on site helps keep minor injuries minor, and
              Mortenson&rsquo;s own safety program shares the credit.
            </p>
            <DataTable
              head={["Measure", "Rocky Mountain", "Construction industry average"]}
              rows={[
                ["Recordable rate (cases per 200,000 hours)", <Strong key="r">0.35</Strong>, "2.2"],
                ["Recordable cases over 575,000 hours", <Strong key="c">1</Strong>, "6.3"],
              ]}
            />
          </section>

          {/* ROI */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Return on investment: 73%
            </h2>
            <p className="text-[#5A6178] mb-4" style={body}>
              The savings come from two places: offsite visits the site never needed, and recordable injuries it did
              not have compared with the industry rate.
            </p>
            <p className="text-[#5A6178] mb-6" style={body}>
              The same program cost also paid for drug testing and case management.
            </p>
            <DataTable
              head={["Line", "Amount"]}
              rows={[
                ["Encounters resolved on site", "309"],
                ["Assumed cost of one offsite clinic or ER visit", "$1,500"],
                ["Offsite visit cost avoided", "$463,500"],
                ["Recordable cases below the industry rate (6.325 expected, 1 recorded)", "5.325"],
                ["Average cost per medically consulted work injury (NSC, 2024)", "$48,000"],
                ["Recordable injury cost avoided", "$255,600"],
                ["Total estimated cost avoided", "$719,100"],
                ["Program cost", "$415,000"],
                ["Estimated net savings to the general contractor", "$304,100"],
                [<Strong key="l">Estimated return on investment</Strong>, <Strong key="a">73%</Strong>],
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
                One provider on the site&rsquo;s own schedule, 6 to 7 days a week, with no clinic facility to carry.
              </Point>
              <Point label="Workers stay on the job.">
                No trip, no escort pulled off the crew, no half-day lost to a clinic visit.
              </Point>
              <Point label="Follow-up on site.">
                Rechecks happened where the worker already was: 228 follow-up visits across the project.
              </Point>
              <Point label="One provider, several jobs.">
                The same program covered first aid, drug testing and case management.
              </Point>
              <Point label="Personal health included.">
                201 non-work problems were seen on site too, which kept those workers on shift.
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
                  "Encounters: 314 total, 113 work-related, 201 personal",
                  "1st Response electronic patient charts for this site, Nov 19, 2024 to Mar 5, 2026",
                  "Exact count",
                ],
                [
                  "Resolved on site: 309 total, 111 work-related, 198 personal",
                  "The same charts. An encounter is resolved when it closes with a completed 1st Response visit.",
                  "Exact count",
                ],
                ["Work-related or personal", "The final determination recorded on each chart", "Exact count"],
                ["OSHA recordable cases: 1", "Reported by the general contractor", "Exact count"],
                [
                  "Worker-hours: 575,000; peak workforce: 500",
                  "Payroll hours and headcount reported by the general contractor, which approved these metrics for publication",
                  "As reported",
                ],
                ["Program cost: $415,000", "1st Response contract value", "As recorded"],
                ["Industry recordable rate: 2.2", "Bureau of Labor Statistics, private construction, 2024", "Published figure"],
                [
                  "Cost per recordable injury: $48,000",
                  "National Safety Council cost per medically consulted work injury, 2024. Includes wage loss, medical, administrative and employer costs.",
                  "Published national average, not the contractor’s claims data",
                ],
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
                Visits by the same worker within 4 days count as one encounter, so 542 visits became 314 encounters.
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
              With the recordable line as modeled, the program breaks even at 107 avoided offsite visits, about a third
              of the 309 resolved on site.
            </p>
            <DataTable
              head={["Scenario", "Cost avoided", "Return on investment"]}
              rows={[
                ["Base case", "$719,100", "73%"],
                ["Only half the recordable gap credited to 1st Response", "$591,300", "42%"],
                ["Offsite visit cost cut in half ($750)", "$487,350", "17%"],
                [
                  "Harshest case: work-related encounters only (111 offsite visits) — no credit for the 201 personal encounters, drug testing or case management",
                  "$422,100",
                  "2%",
                ],
              ]}
            />
          </section>

          {/* SOURCES */}
          <section>
            <h2 className="text-[#E8621A] mb-3" style={sectionHeading}>
              Published sources
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-[#5A6178]" style={body}>
                <SourceLink href={BLS}>Bureau of Labor Statistics, construction injury and illness rates</SourceLink>
              </li>
              <li className="text-[#5A6178]" style={body}>
                <SourceLink href={NSC}>National Safety Council, Injury Facts: Work Injury Costs</SourceLink>
              </li>
            </ul>
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
