"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const STATS = [
  { num: 3, suffix: "+", label: "Years of\nEngineering" },
  { num: 20, suffix: "+", label: "Products\nShipped" },
  { num: 5, suffix: "+", label: "Clients\nServed" },
  { num: 3, suffix: "", prefix: "~", label: "SaaS\nLive" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.12 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "var(--p-elevated)" }}
    >
      <div className="max-content">
        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-16">
          <span className="accent-line" />
          <span className="eyebrow">About</span>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Stats */}
          <div className="lg:col-span-4">
            <RevealGroup stagger={0.1} className="grid grid-cols-2 gap-x-6 gap-y-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      color: "var(--p-accent)",
                    }}
                  >
                    <CountUp
                      target={stat.num}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      duration={900}
                    />
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest leading-relaxed whitespace-pre-line"
                    style={{
                      color: "var(--p-text-muted)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </RevealGroup>

            {/* Separator */}
            <div
              className="mt-12 h-px"
              style={{
                background:
                  "linear-gradient(to right, var(--p-accent), transparent)",
              }}
            />

            {/* Location + availability */}
            <motion.div {...fadeUp} className="mt-8 space-y-3">
              {[
                { label: "Location", value: "Andhra Pradesh, India" },
                { label: "Status", value: "Open to work" },
                { label: "Focus", value: "SaaS · AI · Growth" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span
                    className="text-xs uppercase tracking-widest shrink-0"
                    style={{
                      color: "var(--p-text-faint)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-tight mb-8"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "var(--p-text)",
              }}
            >
              Engineering with precision,
              <br />
              <span style={{ color: "var(--p-accent)" }}>
                shipping with purpose.
              </span>
            </motion.h2>

            <div className="space-y-5">
              {[
                `I'm a full-stack engineer and entrepreneur who builds systems that don't just look good — they work hard underneath. My stack spans modern web frameworks, AI-powered workflows, database architecture, and performance-tuned deployments.`,
                `What sets me apart is range. I write production code, design growth systems, run ad funnels, and architect SaaS platforms end-to-end. Most engineers do one. I do all of it — because real products need all of it.`,
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base leading-[1.85]"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Ecodrix accent line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm font-mono pt-2"
                style={{ color: "var(--p-accent)" }}
              >
                Currently building{" "}
                <a
                  href="https://ecodrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Ecodrix
                </a>
                {" "}— AI automation, ad management, and web infrastructure in one platform.
              </motion.p>
            </div>

            {/* Tech signature row */}
            <motion.div
              {...fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "n8n",
                "AI/LLMs",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--p-accent)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
