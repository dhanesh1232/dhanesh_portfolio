"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePortfolio } from "@/context/parent";
import { Button } from "../ui/button";

const SOCIALS = [
  { name: "GitHub", Icon: FaGithub, href: "https://github.com/dhanesh1232" },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dhanesh-ecodrix/",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "https://www.instagram.com/erix.dhanesh/",
  },
];

export function CTA() {
  const { handleToChangeState } = usePortfolio();

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--p-bg)" }}
    >
      {/* Watermark background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-bold text-white leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(5rem, 18vw, 18rem)", opacity: 0.018 }}
        >
          LET&apos;S WORK
        </span>
      </div>

      {/* Amber accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--p-accent), transparent)",
        }}
      />

      <div className="max-content relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="accent-line" />
          <span className="eyebrow">Contact</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--p-text)",
              }}
            >
              Have an idea?
              <br />
              <span style={{ color: "var(--p-accent)" }}>
                Let&apos;s build it.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-sm leading-relaxed max-w-md"
              style={{ color: "var(--p-text-muted)" }}
            >
              Whether it&apos;s a startup idea, a system that needs automation,
              or a website that needs to convert — I&apos;m open for
              collaborations, contracts, and long-term builds.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                id="cta-hire-btn"
                onClick={() => handleToChangeState?.("fillOut", true)}
                data-cursor="Book"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-90"
                style={{ background: "var(--p-accent)", color: "var(--p-bg)" }}
              >
                Book a call →
              </button>

              <Link
                href="mailto:dhaneshreddy980@gmail.com"
                id="cta-email-btn"
                data-cursor="Mail"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide border transition-all duration-200 hover:border-(--p-accent) hover:text-(--p-accent)"
                style={{
                  borderColor: "var(--p-border-mid)",
                  color: "var(--p-text-muted)",
                }}
              >
                Send email
              </Link>
            </motion.div>
          </div>

          {/* Right: contact details */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-6"
            >
              {/* Schedule a 15-min intro call */}
              <div
                className="p-5"
                style={{
                  border: "1px solid var(--p-accent-border)",
                  background: "rgba(245,158,11,0.04)",
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "var(--p-accent)" }}
                  >
                    Free 15-min intro
                  </span>
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    No obligation
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  Pick a slot that works in your timezone — I&apos;ll come
                  prepared with questions about your goals, scope, and stack.
                </p>
                <Button
                  onClick={() => handleToChangeState?.("fillOut", true)}
                  data-cursor="Book"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-90"
                  style={{
                    background: "var(--p-accent)",
                    color: "var(--p-bg)",
                  }}
                >
                  Open calendar
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Button>
              </div>

              <div
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--p-border)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--p-text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Email
                </span>
                <Link
                  href="mailto:dhaneshreddy980@gmail.com"
                  className="text-sm font-medium hover:text-(--p-accent) transition-colors duration-200"
                  style={{ color: "var(--p-text)" }}
                >
                  dhaneshreddy980@gmail.com
                </Link>
              </div>

              {/* Platform */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--p-border)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--p-text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Platform
                </span>
                <Link
                  href="https://ecodrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-(--p-accent) transition-colors duration-200"
                  style={{ color: "var(--p-text)" }}
                >
                  ecodrix.com ↗
                </Link>
              </div>

              {/* Location */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--p-border)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--p-text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Location
                </span>
                <span className="text-sm" style={{ color: "var(--p-text)" }}>
                  Andhra Pradesh, India
                </span>
              </div>

              {/* WhatsApp */}
              <div
                className="flex items-center justify-between py-4"
                style={{ borderBottom: "1px solid var(--p-border)" }}
              >
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{
                    color: "var(--p-text-muted)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  WhatsApp
                </span>
                <Link
                  href="https://wa.me/+918143963821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "#25d366" }}
                >
                  +91 81439 63821 ↗
                </Link>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5 pt-2">
                {SOCIALS.map(({ name, Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="transition-all duration-200 hover:scale-110"
                    style={{ color: "var(--p-text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--p-accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--p-text-muted)")
                    }
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
