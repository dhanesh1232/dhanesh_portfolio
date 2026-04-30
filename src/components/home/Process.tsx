"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    index: "01",
    phase: "Discovery",
    description:
      "Deep-dive into your business, users, and goals. Define scope, stack, and success criteria before a single line of code is written.",
    duration: "1–2 days",
    icon: "◎",
  },
  {
    index: "02",
    phase: "Design",
    description:
      "Wireframes, component map, and design tokens. You see and approve the interface before build starts — no surprises mid-project.",
    duration: "2–5 days",
    icon: "⬡",
  },
  {
    index: "03",
    phase: "Build",
    description:
      "Iterative development with daily progress updates. Production-grade code: typed, tested, documented, and deployable from day one.",
    duration: "1–4 weeks",
    icon: "⟳",
  },
  {
    index: "04",
    phase: "Ship",
    description:
      "CI/CD pipeline, domain setup, monitoring, and a live handoff session. You own your product — I hand over keys, not just a URL.",
    duration: "1–2 days",
    icon: "↗",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--p-bg)" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, var(--p-accent), transparent 60%)",
        }}
      />

      <div className="max-content">
        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-16">
          <span className="accent-line" />
          <span className="eyebrow">How I Work</span>
        </Reveal>

        {/* Headline */}
        <Reveal offset={24} className="mb-20">
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "var(--p-text)",
            }}
          >
            No surprises.{" "}
            <span style={{ color: "var(--p-accent)" }}>No hand-offs.</span>
            <br />
            Just working software.
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical amber rail — desktop */}
          <div
            className="absolute left-9 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--p-accent), transparent 92%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08} offset={28}>
                <motion.div
                  className="relative grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-0 md:gap-0 py-10 border-b"
                  style={{ borderColor: "var(--p-border)" }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Left: index + icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 mb-6 md:mb-0">
                    {/* Amber node on the rail */}
                    <motion.div
                      variants={{
                        rest: {
                          borderColor: "rgba(255,255,255,0.12)",
                          backgroundColor: "rgba(0,0,0,0)",
                        },
                        hover: {
                          borderColor: "#F59E0B",
                          backgroundColor: "rgba(245,158,11,0.10)",
                        },
                      }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 w-9 h-9 flex items-center justify-center shrink-0 border"
                    >
                      <motion.span
                        variants={{
                          rest: { color: "rgba(255,255,255,0.4)" },
                          hover: { color: "#F59E0B" },
                        }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base leading-none"
                      >
                        {step.icon}
                      </motion.span>
                    </motion.div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: "var(--p-accent)" }}
                    >
                      {step.index}
                    </span>
                  </div>

                  {/* Right: content */}
                  <div className="pl-0 md:pl-8">
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <h3
                        className="font-display font-bold text-2xl md:text-3xl leading-none tracking-tight"
                        style={{ color: "var(--p-text)" }}
                      >
                        {step.phase}
                      </h3>
                      {/* Duration badge */}
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 shrink-0"
                        style={{
                          color: "var(--p-accent)",
                          border:
                            "1px solid var(--p-accent-border, var(--p-border-mid))",
                          background:
                            "var(--p-accent-dim, rgba(245,158,11,0.06))",
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed max-w-lg"
                      style={{ color: "var(--p-text-muted)" }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Hover amber left stripe */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-0 bottom-0 w-0.5"
                    style={{ background: "var(--p-accent)" }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Bottom note */}
          <Reveal delay={0.35} className="mt-12">
            <motion.div className="flex items-center gap-4">
              <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                Every project is different — timelines adjust to scope.
              </span>
              <div
                className="flex-1 h-px hidden sm:block"
                style={{ background: "var(--p-border)" }}
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
