"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePortfolio } from "@/context/parent";
import { ScrambleText } from "@/components/ui/ScrambleText";

const STATS = [
  { value: "3+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "3", label: "SaaS Live" },
];

export const Hero = () => {
  const { handleToChangeState } = usePortfolio();
  const heroRef = React.useRef<HTMLElement>(null);

  // Mouse-tracking amber glow
  const [glow, setGlow] = React.useState({ x: 50, y: 50 });
  const onMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--p-bg)" }}
    >
      {/* ── Dot-grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Cursor amber glow ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none transition-all duration-300"
        aria-hidden
        style={{
          background: `radial-gradient(circle 28vw at ${glow.x}% ${glow.y}%, rgba(245,158,11,0.06) 0%, transparent 65%)`,
        }}
      />
      {/* ── Watermark background text ── */}
      <div
        className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-bold text-white leading-none pl-4 md:pl-10"
          style={{
            fontSize: "clamp(6rem, 22vw, 22rem)",
            opacity: 0.022,
            whiteSpace: "nowrap",
          }}
        >
          BUILD.
        </span>
      </div>

      {/* ── Top eyebrow bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center justify-between px-6 md:px-16 pt-24 md:pt-28"
      >
        <div className="flex items-center gap-2.5">
          <span
            className="block w-1.5 h-1.5 rounded-full amber-pulse"
            style={{ background: "var(--p-accent)" }}
          />
          <span className="eyebrow">
            Full·Stack Developer &amp; SaaS Builder &amp; Founder of{" "}
            <strong
              style={{ color: "var(--p-accent)" }}
            >
              ECODrIx
            </strong>
          </span>
        </div>
        <span
          className="text-xs tracking-widest uppercase hidden sm:block"
          style={{
            color: "var(--p-text-muted)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Andhra Pradesh, India
        </span>
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 px-6 md:px-16 mt-6 md:mt-10 gap-y-8 items-end pb-4">
        {/* Left: name + bio + CTAs */}
        <div className="lg:col-span-8 flex flex-col justify-end">
          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3"
          >
            <span
              className="font-display font-bold leading-none"
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)",
                color: "var(--p-accent)",
                letterSpacing: "0.04em",
              }}
            >
              From idea to live product — end-to-end.
            </span>
          </motion.div>

          {/* Display name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-[0.88] tracking-tighter"
              style={{ color: "var(--p-text)" }}
            >
              <span
                className="block"
                style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}
              >
                <ScrambleText text="Dhanesh" startDelay={400} duration={950} />
              </span>
              <span
                className="block pl-[5%] md:pl-[8%]"
                style={{
                  fontSize: "clamp(3.5rem, 13vw, 11rem)",
                  color: "var(--p-accent)",
                }}
              >
                <ScrambleText text="M." startDelay={900} duration={500} />
              </span>
            </motion.h1>
          </div>

          {/* Bio + CTAs row */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-6"
          >
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--p-text-muted)" }}
            >
              I take your idea from a Google Doc to a live product — designed,
              built, and deployed. Full-stack, end-to-end, no hand-offs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                id="hero-view-work"
                href="#projects"
                data-cursor="View"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-90"
                style={{ background: "var(--p-accent)", color: "var(--p-bg)" }}
              >
                View Work
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>

              <button
                id="hero-hire-btn"
                onClick={() => handleToChangeState?.("fillOut", true)}
                data-cursor="Hire"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide border transition-all duration-200 hover:border-[var(--p-accent)] hover:text-[var(--p-accent)]"
                style={{
                  borderColor: "var(--p-border-mid)",
                  color: "var(--p-text-muted)",
                  background: "transparent",
                }}
              >
                Let&apos;s Talk
              </button>
            </div>

            {/* Availability widget */}
            <div className="flex items-center gap-3">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5"
                style={{
                  border: "1px solid var(--p-border-mid)",
                  background: "var(--p-elevated)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full amber-pulse"
                  style={{ background: "#4ade80" }}
                />
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  Next slot: June - July 2026
                </span>
              </div>
              <span
                className="text-xs font-mono"
                style={{ color: "var(--p-text-faint)" }}
              >
                · limited spot open
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: photo */}
        <div className="lg:col-span-4 flex items-end justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Vertical available label (desktop) */}
            <div
              className="absolute -right-8 top-1/2 hidden lg:flex items-center gap-1.5 text-xs tracking-[0.35em] uppercase select-none"
              style={{
                color: "var(--p-accent)",
                fontFamily: "var(--font-geist-mono)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "translateY(-50%) rotate(180deg)",
              }}
              aria-hidden
            >
              Available Now ↓
            </div>

            {/* Image rectangle */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(180px, 22vw, 280px)",
                height: "clamp(230px, 28vw, 360px)",
                borderLeft: "2px solid var(--p-accent)",
                background: "var(--p-elevated)",
              }}
            >
              <Image
                alt="Dhanesh Mekalthuru — Full Stack Developer"
                src="https://res.cloudinary.com/dhzw6k0vc/image/upload/v1763133090/DN_u5rrpd.png"
                fill
                sizes="280px"
                priority
                className="object-cover object-top hover:grayscale transition-all duration-700"
              />
              {/* Amber tint */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(245,158,11,0.12) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Open to work pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 left-0 flex items-center gap-2 px-3 py-1.5"
              style={{
                background: "var(--p-elevated)",
                border: "1px solid var(--p-border-mid)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full amber-pulse"
                style={{ background: "#4ade80" }}
              />
              <span
                className="text-xs font-mono"
                style={{ color: "var(--p-text-muted)" }}
              >
                Open to work
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="relative z-10 px-6 md:px-16 pb-10 mt-14"
      >
        <div
          className="flex items-center justify-between pt-6"
          style={{ borderTop: "1px solid var(--p-border)" }}
        >
          <div className="flex items-center gap-6 md:gap-10">
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && (
                  <div
                    className="w-px h-7 hidden sm:block"
                    style={{ background: "var(--p-border-mid)" }}
                  />
                )}
                <div>
                  <div
                    className="font-display font-bold text-xl md:text-2xl leading-none"
                    style={{ color: "var(--p-accent)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mt-0.5"
                    style={{
                      color: "var(--p-text-muted)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Scroll hint */}
          <div
            className="hidden sm:flex items-center gap-2 text-xs"
            style={{
              color: "var(--p-text-muted)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            <span>Scroll</span>
            <span
              className="block w-8 h-px"
              style={{ background: "var(--p-border-mid)" }}
            />
            <span
              style={{ color: "var(--p-accent)" }}
              className="animate-bounce inline-block"
            >
              ↓
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
