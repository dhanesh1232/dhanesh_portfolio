"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────
   Positioning — two halves:
   1. "Right fit / Not a fit" filter (premium positioning)
   2. "Marketplace vs working with me" comparison (price justification)
─────────────────────────────────────────────────────────────────── */

const FIT = [
  "Founders shipping their first or second SaaS",
  "Teams scaling production-grade backends",
  "Brands needing premium, design-led builds",
  "Operators automating CRM, sales, or growth",
  "Clients who value speed, ownership, and clarity",
];

const NOT_FIT = [
  "WordPress / Wix / theme customisation",
  "Pure brand identity or logo design",
  "Projects under $1.5K / ₹1.2L total",
  "40h/week single-client commitments",
  "Black-box rebuilds without owner input",
];

const COMPARE = [
  {
    label: "Communication",
    marketplace: "Through platform · ticket-style",
    me: "Direct WhatsApp · Slack · Loom",
    meAccent: true,
  },
  {
    label: "Stack ownership",
    marketplace: "Generic templates",
    me: "Architected for your scale",
    meAccent: true,
  },
  {
    label: "Code in your repo",
    marketplace: "Sometimes",
    me: "Always · day one",
    meAccent: true,
  },
  {
    label: "Reporting cadence",
    marketplace: "On request",
    me: "Weekly Loom · Notion log",
    meAccent: true,
  },
  {
    label: "Refund on milestone 1",
    marketplace: "Platform mediation",
    me: "Full refund · no friction",
    meAccent: true,
  },
  {
    label: "Long-term partnership",
    marketplace: "Transactional",
    me: "Retainers · equity · advisory",
    meAccent: true,
  },
];

export function Positioning() {
  return (
    <section
      id="positioning"
      className="section-pad"
      style={{ background: "var(--p-elevated)" }}
    >
      <div className="max-content">
        {/* ── Header ── */}
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="accent-line" />
          <span className="eyebrow">Who I work with</span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-6">
            <Reveal offset={24}>
              <h2
                className="font-display font-bold leading-[1.05]"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  color: "var(--p-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Not for everyone.
                <br />
                <span style={{ color: "var(--p-accent)" }}>
                  Right for the few.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pl-8 flex items-end">
            <Reveal offset={20} delay={0.1}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--p-text-muted)" }}
              >
                Premium engineering takes focus. I take on projects where the
                work is substantive, the partnership matters, and the outcome
                is worth the rate. Here&apos;s how to know if we fit.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Fit / Not Fit grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-20"
          style={{ borderTop: "1px solid var(--p-border)" }}
        >
          {/* Right fit */}
          <Reveal offset={20}>
            <div
              className="p-8 md:p-10 h-full"
              style={{
                borderRight: "1px solid var(--p-border)",
                borderBottom: "1px solid var(--p-border)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Check
                  className="w-4 h-4"
                  style={{ color: "var(--p-accent)" }}
                />
                <span
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--p-accent)" }}
                >
                  Right fit
                </span>
              </div>
              <ul className="space-y-3.5">
                {FIT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--p-text)" }}
                  >
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--p-accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not a fit */}
          <Reveal offset={20} delay={0.08}>
            <div
              className="p-8 md:p-10 h-full"
              style={{ borderBottom: "1px solid var(--p-border)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <X
                  className="w-4 h-4"
                  style={{ color: "var(--p-text-faint)" }}
                />
                <span
                  className="text-[10px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--p-text-faint)" }}
                >
                  Not a fit
                </span>
              </div>
              <ul className="space-y-3.5">
                {NOT_FIT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    <X
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--p-text-faint)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── Comparison ── */}
        <Reveal className="flex items-center gap-3 mb-8">
          <span className="accent-line" />
          <span className="eyebrow">Why not a marketplace</span>
        </Reveal>

        <Reveal offset={20}>
          <div
            className="overflow-hidden"
            style={{ border: "1px solid var(--p-border)" }}
          >
            {/* Header row */}
            <div
              className="grid grid-cols-3 text-[10px] font-mono uppercase tracking-widest"
              style={{
                background: "var(--p-bg)",
                borderBottom: "1px solid var(--p-border)",
              }}
            >
              <div
                className="px-4 py-4"
                style={{ color: "var(--p-text-faint)" }}
              >
                Dimension
              </div>
              <div
                className="px-4 py-4"
                style={{
                  color: "var(--p-text-muted)",
                  borderLeft: "1px solid var(--p-border)",
                }}
              >
                Marketplace freelancer
              </div>
              <div
                className="px-4 py-4"
                style={{
                  color: "var(--p-accent)",
                  borderLeft: "1px solid var(--p-border)",
                  background: "rgba(245,158,11,0.04)",
                }}
              >
                Working with me
              </div>
            </div>

            {/* Rows */}
            {COMPARE.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-3 text-sm"
                style={{
                  borderBottom:
                    i === COMPARE.length - 1
                      ? "none"
                      : "1px solid var(--p-border)",
                }}
              >
                <div
                  className="px-4 py-4 text-[11px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--p-text-faint)" }}
                >
                  {row.label}
                </div>
                <div
                  className="px-4 py-4"
                  style={{
                    color: "var(--p-text-muted)",
                    borderLeft: "1px solid var(--p-border)",
                  }}
                >
                  {row.marketplace}
                </div>
                <div
                  className="px-4 py-4 font-medium"
                  style={{
                    color: "var(--p-text)",
                    borderLeft: "1px solid var(--p-border)",
                    background: row.meAccent
                      ? "rgba(245,158,11,0.04)"
                      : "transparent",
                  }}
                >
                  {row.me}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
