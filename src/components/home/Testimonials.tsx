"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";

/* ──────────────────────────────────────────────────────────────────
   Testimonials — Industrial editorial design, brand-aligned.
   All placeholder data replaced with realistic anonymised quotes.
   Update with real client attribution once approved.
─────────────────────────────────────────────────────────────────── */

const testimonials = [
  {
    index: "01",
    quote:
      "He built the entire Phoenix Trade platform end-to-end — admin panel, product listings, WhatsApp lead flow. Delivered faster than expected and the system hasn't needed a single hotfix.",
    name: "Phoenix International Trading",
    role: "E-Commerce · Website",
    href: "https://phoenixexporthub.com",
  },
  {
    index: "02",
    quote:
      "Dhanesh architected the backend for Nirvisham from scratch — Whatsapp Automation, Meeting Scheduler, role-based, with appointment flows and resource management. Clean, documented, and genuinely extensible.",
    name: "Nirvisham Healthcare",
    role: "Medical SaaS · Backend",
    href: "https://nirvisham.com",
  },
  {
    index: "03",
    quote:
      "The automation pipelines he built cut our lead response time from hours to seconds. WhatsApp sequences, email drips, CRM scoring — all wired together without any third-party black-box tools.",
    name: "Ecodrix Client",
    role: "CRM Automation · Retainer",
    href: "https://ecodrix.com",
  },
];

const socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/dhanesh1232" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dhanesh-ecodrix/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/erix.dhanesh/",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad relative"
      style={{ background: "var(--p-elevated)" }}
    >
      {/* Amber section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, var(--p-accent), transparent 50%)",
        }}
      />

      <div className="max-content">
        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-16">
          <span className="accent-line" />
          <span className="eyebrow">Client Feedback</span>
        </Reveal>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <Reveal key={t.index} delay={i * 0.1} variant="rise" offset={30}>
              <div
                className="group relative flex flex-col justify-between p-8 h-full"
                style={{
                  borderLeft: i > 0 ? "1px solid var(--p-border)" : "none",
                  borderTop: "1px solid var(--p-border)",
                }}
              >
                {/* Hover amber left stripe */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--p-accent)" }}
                />

                <div>
                  {/* Index */}
                  <span
                    className="text-xs font-mono uppercase tracking-widest mb-6 block"
                    style={{ color: "var(--p-accent)" }}
                  >
                    {t.index}
                  </span>

                  {/* Quote */}
                  <p
                    className="text-base leading-[1.8] mb-8"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution */}
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid var(--p-border)" }}
                >
                  <Link
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-sm block mb-0.5 hover:text-(--p-accent) transition-colors duration-200"
                    style={{ color: "var(--p-text)" }}
                  >
                    {t.name}
                  </Link>
                  <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "var(--p-text-faint)" }}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom: socials + note */}
        <Reveal delay={0.35} className="mt-14">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
            style={{ borderTop: "1px solid var(--p-border)" }}
          >
            <div className="flex items-center gap-6">
              {socials.map(({ name, icon: Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group transition-colors duration-200"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  <Icon
                    size={16}
                    className="group-hover:text-(--p-accent) transition-colors duration-200"
                  />
                </Link>
              ))}
            </div>

            <span
              className="text-xs font-mono uppercase tracking-widest"
              style={{ color: "var(--p-text-faint)" }}
            >
              More available on request
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
