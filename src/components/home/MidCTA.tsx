"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { usePortfolio } from "@/context/parent";

/* ──────────────────────────────────────────────────────────────────
   MidCTA — quick conversion strip placed mid-page (after Projects).
   Catches the warm scroll moment without breaking flow.
─────────────────────────────────────────────────────────────────── */

export function MidCTA() {
  const { handleToChangeState, slotsLeft } = usePortfolio();

  // Capacity meter — assumes the in-context counter starts ≥ 82.
  // Treats "available slots" as a fixed 3-per-quarter window.
  const TOTAL_SLOTS = 3;
  const taken = Math.max(
    0,
    Math.min(TOTAL_SLOTS - 1, Math.round(((slotsLeft ?? 85) - 82) / 1)),
  );
  const open = TOTAL_SLOTS - taken;
  const filledPct = (taken / TOTAL_SLOTS) * 100;

  return (
    <section
      aria-label="Quick start"
      className="relative"
      style={{
        background: "var(--p-bg)",
        borderTop: "1px solid var(--p-border)",
        borderBottom: "1px solid var(--p-border)",
      }}
    >
      <div className="max-content px-6 md:px-16 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Headline ── */}
          <Reveal className="lg:col-span-7" offset={20}>
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="eyebrow">Build with me</span>
            </div>
            <h3
              className="font-display font-bold leading-[1.05] mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                color: "var(--p-text)",
                letterSpacing: "-0.01em",
              }}
            >
              Have a similar project?{" "}
              <span style={{ color: "var(--p-accent)" }}>
                Let&apos;s ship it together.
              </span>
            </h3>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ color: "var(--p-text-muted)" }}
            >
              30-min discovery call · Free, no obligation · Scope, stack, and
              timeline mapped on the call.
            </p>
          </Reveal>

          {/* ── Action + capacity ── */}
          <Reveal className="lg:col-span-5" offset={20} delay={0.08}>
            <div className="flex flex-col gap-5">
              {/* Capacity meter */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "var(--p-text-faint)" }}
                  >
                    Q2 Capacity
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--p-accent)" }}
                  >
                    {open}/{TOTAL_SLOTS} slots open
                  </span>
                </div>
                <div
                  className="relative h-1 w-full"
                  style={{ background: "var(--p-elevated)" }}
                >
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${filledPct}%` }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0"
                    style={{ background: "var(--p-accent)" }}
                  />
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleToChangeState?.("fillOut", true)}
                  data-cursor="Book"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-90"
                  style={{
                    background: "var(--p-accent)",
                    color: "var(--p-bg)",
                  }}
                >
                  Book a 15-min call
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide border transition-all duration-200 hover:border-(--p-accent) hover:text-(--p-accent)"
                  style={{
                    borderColor: "var(--p-border-mid)",
                    color: "var(--p-text-muted)",
                  }}
                >
                  Or email instead
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
