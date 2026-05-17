"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Clock, Shield, Zap, Globe2 } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────
   TrustBar — single-page trust signal strip.
   Targets cross-border buyers (US/EU/UK) and Indian enterprise.
   - Live multi-timezone clock with overlap hint
   - SLA · async-first · contracts
   - Payments + GST clarity
   - Client geography
─────────────────────────────────────────────────────────────────── */

const ZONES = [
  { code: "IST", label: "Local",     tz: "Asia/Kolkata"      },
  { code: "GMT", label: "London",    tz: "Europe/London"     },
  { code: "EST", label: "New York",  tz: "America/New_York"  },
  { code: "PST", label: "San Fran.", tz: "America/Los_Angeles" },
];

function fmt(tz: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  } catch {
    return "--:--";
  }
}

function useClock() {
  const [, force] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    const id = setInterval(force, 30_000);
    return () => clearInterval(id);
  }, []);
}

const PAYMENTS = [
  "Stripe",
  "Wise",
  "SWIFT",
  "Razorpay",
  "UPI",
  "USDC",
];

const GEOS = ["IN", "US", "UAE", "UK", "EU"];

export function TrustBar() {
  // Avoid SSR/CSR mismatch on time strings — render placeholders until mounted.
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  useClock();

  return (
    <section
      aria-label="Trust signals and engagement details"
      className="relative"
      style={{
        background: "var(--p-bg)",
        borderTop: "1px solid var(--p-border)",
        borderBottom: "1px solid var(--p-border)",
      }}
    >
      <div className="max-content px-6 md:px-16 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ── World clocks ── */}
          <Reveal className="lg:col-span-5" offset={20}>
            <div className="flex items-center gap-3 mb-4">
              <Clock
                className="w-3.5 h-3.5"
                style={{ color: "var(--p-accent)" }}
              />
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                Working Hours · IST 09:00 – 22:00
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {ZONES.map((z) => (
                <div
                  key={z.code}
                  className="flex flex-col"
                  suppressHydrationWarning
                >
                  <span
                    className="font-display font-bold leading-none tabular-nums"
                    style={{
                      color: "var(--p-text)",
                      fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                    }}
                  >
                    {mounted ? fmt(z.tz) : "--:--"}
                  </span>
                  <span
                    className="text-[9px] font-mono uppercase tracking-widest mt-1.5"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    {z.code}
                  </span>
                  <span
                    className="text-[9px] font-mono uppercase tracking-widest"
                    style={{ color: "var(--p-text-faint)" }}
                  >
                    {z.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-4 text-xs"
              style={{ color: "var(--p-text-muted)" }}
            >
              Daily overlap with{" "}
              <span style={{ color: "var(--p-accent)" }}>EU mornings</span> and{" "}
              <span style={{ color: "var(--p-accent)" }}>US evenings</span>.
              Async-first delivery.
            </p>
          </Reveal>

          {/* ── Engagement details ── */}
          <Reveal className="lg:col-span-3" offset={20} delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <Zap
                className="w-3.5 h-3.5"
                style={{ color: "var(--p-accent)" }}
              />
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                Engagement
              </span>
            </div>

            <ul className="space-y-2.5">
              {[
                { k: "Response", v: "Within 4 hours" },
                { k: "Contracts", v: "DocuSign · NDA on request" },
                { k: "Reporting", v: "Weekly · Loom + Notion" },
                { k: "Code", v: "Your repo · MIT or commercial" },
              ].map((row) => (
                <li
                  key={row.k}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest shrink-0"
                    style={{ color: "var(--p-text-faint)" }}
                  >
                    {row.k}
                  </span>
                  <span
                    className="text-xs text-right"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    {row.v}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ── Payments + GST ── */}
          <Reveal className="lg:col-span-2" offset={20} delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <Shield
                className="w-3.5 h-3.5"
                style={{ color: "var(--p-accent)" }}
              />
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                Payments
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {PAYMENTS.map((p) => (
                <span
                  key={p}
                  className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5"
                  style={{
                    color: "var(--p-text-muted)",
                    border: "1px solid var(--p-border-mid)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <p
              className="mt-3 text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "var(--p-accent)" }}
            >
              GST · Invoice ready
            </p>
          </Reveal>

          {/* ── Geography ── */}
          <Reveal className="lg:col-span-2" offset={20} delay={0.15}>
            <div className="flex items-center gap-3 mb-4">
              <Globe2
                className="w-3.5 h-3.5"
                style={{ color: "var(--p-accent)" }}
              />
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                Clients
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {GEOS.map((g) => (
                <span
                  key={g}
                  className="text-[10px] font-mono font-semibold uppercase tracking-widest px-2 py-0.5"
                  style={{
                    color: "var(--p-accent)",
                    background: "rgba(245,158,11,0.06)",
                    border: "1px solid rgba(245,158,11,0.18)",
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            <p
              className="mt-3 text-xs leading-snug"
              style={{ color: "var(--p-text-muted)" }}
            >
              Serving founders &amp; teams across 5+ regions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
