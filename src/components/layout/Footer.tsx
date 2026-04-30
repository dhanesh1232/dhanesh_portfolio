"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
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

const footerNav = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--p-bg)" }}>
      {/* Amber gradient top line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--p-accent) 30%, transparent)",
        }}
      />

      {/* Brand manifesto row */}
      <div
        className="max-content px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
        style={{ borderBottom: "1px solid var(--p-border)" }}
      >
        {/* Left: manifesto */}
        <div className="md:col-span-5">
          <div
            className="font-display font-bold text-2xl mb-3 leading-tight"
            style={{ color: "var(--p-text)" }}
          >
            From idea to{" "}
            <span style={{ color: "var(--p-accent)" }}>live product.</span>
          </div>
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "var(--p-text-muted)" }}
          >
            Full-stack development, SaaS infrastructure, AI automation, and
            growth systems — end-to-end, no hand-offs, no surprises.
          </p>

          {/* Availability chip */}
          <div
            className="inline-flex items-center gap-2 mt-5 px-3 py-1.5"
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
              Open to new projects
            </span>
          </div>
        </div>

        {/* Right: nav + social */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* Quick nav */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4 font-mono"
              style={{ color: "var(--p-text-faint)" }}
            >
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              {footerNav.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-sm transition-colors duration-200 hover:text-(--p-accent) w-fit"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4 font-mono"
              style={{ color: "var(--p-text-faint)" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:dhaneshreddy980@gmail.com"
                className="text-sm transition-colors duration-200 hover:text-(--p-accent) break-all"
                style={{ color: "var(--p-text-muted)" }}
              >
                dhaneshreddy980@gmail.com
              </a>
              <a
                href="https://wa.me/+918143963821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: "#25d366" }}
              >
                WhatsApp ↗
              </a>
              <a
                href="https://ecodrix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-(--p-accent)"
                style={{ color: "var(--p-text-muted)" }}
              >
                ecodrix.com ↗
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-4 font-mono"
              style={{ color: "var(--p-text-faint)" }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group flex items-center gap-2 transition-colors duration-200 w-fit"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  <Icon
                    size={14}
                    className="group-hover:text-(--p-accent) transition-colors duration-200"
                  />
                  <span className="text-sm group-hover:text-(--p-accent) transition-colors duration-200">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-content px-6 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-xs"
          style={{
            color: "var(--p-text-muted)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          © {new Date().getFullYear()} Dhanesh Mekalthuru · All rights reserved
        </p>

        <p
          className="text-xs hidden sm:block"
          style={{
            color: "var(--p-text-faint)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
