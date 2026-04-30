"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { usePortfolio } from "@/context/parent";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

// Active section detector
function useActiveSection() {
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const { handleToChangeState, navOpen, setNavOpen } = usePortfolio();
  const { scrollY } = useScroll();
  const active = useActiveSection();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <>
      {/* ── Navbar bar ───────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          borderBottom: scrolled
            ? "1px solid var(--p-border)"
            : "1px solid transparent",
          background: navOpen
            ? "transparent"
            : scrolled
              ? "rgba(8,10,14,0.9)"
              : "transparent",
          backdropFilter:
            scrolled && !navOpen ? "blur(14px) saturate(180%)" : "none",
        }}
      >
        <div className="max-content flex items-center justify-between px-6 md:px-16 h-14">
          {/* Monogram */}
          <Link
            href="/"
            className="relative text-xl font-bold tracking-tighter ring-0 outline-none focus:outline-none select-none group"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
            aria-label="Home"
          >
            <span
              className="transition-colors duration-200"
              style={{ color: "var(--p-accent)" }}
            >
              D
            </span>
            <span
              className="transition-colors duration-200"
              style={{ color: "var(--p-border-mid)" }}
            >
              ·
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-1.5 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--p-text)" : "var(--p-text-muted)",
                  }}
                >
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--p-accent)" }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {/* Hover bg pill */}
                  <span
                    className="absolute inset-0 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "var(--p-hover)" }}
                    aria-hidden
                  />
                  <span className="relative">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Hire me — desktop */}
            <motion.button
              id="nav-hire-btn"
              onClick={() => handleToChangeState?.("fillOut", true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200"
              style={{
                background: "var(--p-accent)",
                color: "var(--p-bg)",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              Hire me <span aria-hidden>→</span>
            </motion.button>

            {/* Hamburger — mobile */}
            <button
              id="nav-menu-toggle"
              onClick={() => setNavOpen(!navOpen)}
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-sm transition-colors duration-200"
              style={{
                background: navOpen ? "var(--p-accent-dim)" : "transparent",
                border: "1px solid",
                borderColor: navOpen ? "var(--p-accent-border)" : "transparent",
              }}
            >
              <div className="relative w-[18px] h-3">
                {/* Top bar */}
                <span
                  className="absolute left-0 w-full h-[1.5px] transition-all duration-350 ease-in-out"
                  style={{
                    background: navOpen ? "var(--p-accent)" : "var(--p-text)",
                    top: navOpen ? "50%" : "0%",
                    transform: navOpen
                      ? "translateY(-50%) rotate(45deg)"
                      : "none",
                  }}
                />
                {/* Middle bar */}
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] transition-all duration-350 ease-in-out"
                  style={{
                    background: "var(--p-text)",
                    width: navOpen ? "0%" : "75%",
                    opacity: navOpen ? 0 : 1,
                  }}
                />
                {/* Bottom bar */}
                <span
                  className="absolute left-0 w-full h-[1.5px] transition-all duration-350 ease-in-out"
                  style={{
                    background: navOpen ? "var(--p-accent)" : "var(--p-text)",
                    bottom: navOpen ? "50%" : "0%",
                    transform: navOpen
                      ? "translateY(50%) rotate(-45deg)"
                      : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Amber progress line when scrolled */}
        {scrolled && !navOpen && (
          <motion.div
            className="absolute bottom-0 left-0 h-px"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            style={{
              background:
                "linear-gradient(to right, var(--p-accent), transparent 70%)",
              width: "100%",
              transformOrigin: "left",
            }}
          />
        )}
      </motion.nav>

      {/* ── Mobile full-screen menu ───────────────────────────── */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col md:hidden overflow-hidden"
            style={{ background: "var(--p-bg)" }}
          >
            {/* Ambient glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(245,158,11,0.06), transparent 70%)",
              }}
            />

            {/* Top bar spacer */}
            <div className="h-14 shrink-0" />

            {/* Amber accent line */}
            <div
              className="h-px w-16 mx-6"
              style={{ background: "var(--p-accent)" }}
            />

            {/* Nav links */}
            <div className="flex-1 flex flex-col justify-center px-6 py-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.065,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center gap-5 py-5 border-b"
                  style={{
                    borderColor: "var(--p-border)",
                    textDecoration: "none",
                  }}
                >
                  {/* Index */}
                  <span
                    className="text-[10px] tabular-nums shrink-0 w-5"
                    style={{
                      color: "var(--p-accent)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Label */}
                  <span
                    className="flex-1 text-[2.25rem] font-bold leading-none tracking-tight transition-colors duration-200 group-hover:text-(--p-accent)"
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      color: "var(--p-text)",
                    }}
                  >
                    {link.name}
                  </span>

                  {/* Arrow indicator */}
                  <span
                    className="text-lg shrink-0 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                    style={{ color: "var(--p-accent)" }}
                  >
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom section — social + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: navLinks.length * 0.065 + 0.1,
                duration: 0.4,
              }}
              className="px-6 pb-10 flex flex-col gap-4"
            >
              {/* Social row */}
              <div
                className="flex items-center gap-5 pb-4"
                style={{ borderBottom: "1px solid var(--p-border)" }}
              >
                {[
                  { label: "GitHub", href: "https://github.com/dhanesh1232" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/dhanesh-ecodrix/",
                  },
                  { label: "Ecodrix", href: "https://ecodrix.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-(--p-accent)"
                    style={{
                      color: "var(--p-text-muted)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Hire me CTA */}
              <button
                onClick={() => {
                  setNavOpen(false);
                  handleToChangeState?.("fillOut", true);
                }}
                className="w-full py-4 text-sm font-semibold tracking-widest uppercase transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
                style={{ background: "var(--p-accent)", color: "var(--p-bg)" }}
              >
                Hire me →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
