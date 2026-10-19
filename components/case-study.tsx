// Server-safe case-study components — no "use client"
// Shared by app/fighting-jays, app/blevins and app/rocky-mountain.
import type { CSSProperties, ReactNode } from "react";

export const sectionHeading: CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
};

export const body: CSSProperties = { fontSize: "16px", lineHeight: 1.7 };

/* \u2500\u2500 Data table. Each one is wrapped in an overflow-x-auto container so wide
      tables scroll within themselves instead of widening the page on mobile. \u2500\u2500 */
export function DataTable({
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
export function Strong({ children }: { children: ReactNode }) {
  return <span style={{ fontWeight: 700, color: "#0A1628" }}>{children}</span>;
}

/* Bulleted point with a bold lead-in label. */
export function Point({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="text-[#5A6178]" style={body}>
      <span style={{ fontWeight: 700, color: "#0A1628" }}>{label}</span> {children}
    </li>
  );
}

/* Outbound citation link. */
export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#E8621A] hover:underline"
      style={{ fontWeight: 600 }}
    >
      {children}
    </a>
  );
}
