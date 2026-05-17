"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/Reveal";

/* ──────────────────────────────────────────────────────────────────
   ClientWall — wordmark-only client list, premium and quiet.
   Uses brand-styled wordmarks (no external logos required to start).
   Replace `wordmark` with an actual SVG <Image> later if needed.
─────────────────────────────────────────────────────────────────── */

type Client = {
  name: string;
  wordmark: string;
  href: string;
  region: string;
  font?: "display" | "mono" | "serif";
};

const CLIENTS: Client[] = [
  {
    name: "Phoenix Trade",
    wordmark: "PHOENIX",
    href: "https://phoenixexporthub.com",
    region: "IN",
  },
  {
    name: "Nirvisham",
    wordmark: "Nirvisham",
    href: "https://nirvisham.com",
    region: "IN",
    font: "serif",
  },
  {
    name: "The Pathfinders",
    wordmark: "PATHFINDERS",
    href: "https://thepathfinderr.com",
    region: "IN",
  },
  {
    name: "Ecodrix",
    wordmark: "ECODRIX",
    href: "https://ecodrix.com",
    region: "IN",
  },
  {
    name: "LAIE",
    wordmark: "LAIE",
    href: "#projects",
    region: "IN",
    font: "mono",
  },
  {
    name: "ECODrIx API",
    wordmark: "api.ecodrix",
    href: "https://api.ecodrix.com",
    region: "IN",
    font: "mono",
  },
];

function fontClass(f: Client["font"]) {
  if (f === "mono") return "font-mono";
  if (f === "serif") return "font-display italic";
  return "font-display";
}

export function ClientWall() {
  return (
    <section
      aria-label="Trusted by"
      className="relative"
      style={{
        background: "var(--p-elevated)",
        borderTop: "1px solid var(--p-border)",
      }}
    >
      <div className="max-content px-6 md:px-16 py-14 md:py-16">
        {/* Eyebrow row */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <Reveal className="flex items-center gap-3">
            <span className="accent-line" />
            <span className="eyebrow">Trusted By</span>
          </Reveal>

          <Reveal delay={0.08}>
            <span
              className="text-[10px] font-mono uppercase tracking-widest hidden sm:block"
              style={{ color: "var(--p-text-faint)" }}
            >
              {CLIENTS.length.toString().padStart(2, "0")} brands · 5+ regions
            </span>
          </Reveal>
        </div>

        {/* Logo grid */}
        <Reveal offset={20}>
          <ul
            className="grid grid-cols-2 md:grid-cols-5"
            style={{
              borderTop: "1px solid var(--p-border)",
              borderLeft: "1px solid var(--p-border)",
            }}
          >
            {CLIENTS.map((c) => (
              <li
                key={c.name}
                className="group relative"
                style={{
                  borderRight: "1px solid var(--p-border)",
                  borderBottom: "1px solid var(--p-border)",
                }}
              >
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="flex flex-col items-center justify-center text-center px-6 py-10 md:py-12 transition-colors duration-300"
                  style={{ color: "var(--p-text-muted)" }}
                >
                  {/* Wordmark */}
                  <span
                    className={`${fontClass(c.font)} font-bold tracking-tight leading-none transition-all duration-300 group-hover:text-(--p-accent)`}
                    style={{
                      fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                      letterSpacing:
                        c.font === "mono" ? "-0.02em" : "0.02em",
                    }}
                  >
                    {c.wordmark}
                  </span>

                  {/* Region pill */}
                  <span
                    className="mt-3 text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "var(--p-accent)" }}
                  >
                    {c.region}
                  </span>

                  {/* Corner brackets on hover */}
                  <span
                    aria-hidden
                    className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "var(--p-accent)" }}
                  />
                  <span
                    aria-hidden
                    className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: "var(--p-accent)" }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={0.15} className="mt-6">
          <p
            className="text-xs"
            style={{ color: "var(--p-text-muted)" }}
          >
            Selected partners. Full client list available on request — covered
            under NDA where applicable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
