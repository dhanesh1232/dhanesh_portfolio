"use client";
import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

type Project = {
  index: string;
  title: string;
  description: string;
  tech: string;
  link: string;
  image: string;
  status: "Live" | "In Progress" | "Published";
  category: string;
  featured: boolean;
  results: string[];
};

const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────────────────
  {
    index: "01",
    title: "Phoenix Trade Website",
    description:
      "Full-stack business website with SEO-optimized public pages, product listings, enquiry flow, and a secure admin panel for managing products, categories, media, and leads.",
    tech: "Next.js · TypeScript · MongoDB · WhatsApp Integration",
    link: "https://phoenixexporthub.com",
    image:
      "https://ik.imagekit.io/gclqlaadh/Screenshot%202025-12-30%20210218_684QpISOv.png",
    status: "Live",
    category: "Import / Export Platform",
    featured: true,
    results: ["↑ 3× enquiry rate", "0 downtime since launch", "SEO rank pg.1"],
  },
  {
    index: "02",
    title: "Nirvisham Medical SaaS",
    description:
      "Full-stack medical SaaS platform for AYUSH & holistic healthcare. Doctor listings, patient management, appointment booking, resource library, and SEO-optimized public pages — built for real clinical operations.",
    tech: "Next.js · TypeScript · MongoDB · Cloudinary · SEO · Admin Panel",
    link: "https://nirvisham.com",
    image: "https://cdn.ecodrix.com/Screenshot%202026-04-28%20205802.png",
    status: "In Progress",
    category: "Medical SaaS",
    featured: true,
    results: ["Multi-role auth", "Appointment + WhatsApp flow", "CMS built-in"],
  },
  {
    index: "03",
    title: "The Pathfinders — Creative Agency",
    description:
      "Cinematic website for a graphic design and branding agency. Motion-led reels showcase, immersive scroll storytelling, trusted-by wall, and a conversion-driven enquiry funnel — engineered to feel as premium as the work it presents.",
    tech: "Next.js · Framer Motion · TypeScript · Video Streaming · SEO",
    link: "https://thepathfinderr.com",
    image:
      "https://cdn.ecodrix.com/portfolio/Screenshot%202026-05-17%20153536.png",
    status: "Live",
    category: "Graphic Design Agency",
    featured: true,
    results: ["Cinematic UX", "Reels-led funnel", "Premium brand feel"],
  },
  {
    index: "04",
    title: "LAIE — LeadGen AI Engine",
    description:
      "Full-stack AI lead generation platform. Hybrid Node.js + Python ML architecture: lead qualification, ML scoring, NLP intelligence, real-time WebSocket job pipeline, and an autonomous research agent. Built on top of ECODrIx multi-tenant infrastructure.",
    tech: "Next.js · Node.js · Python · FastAPI · MongoDB · PostgreSQL · TensorFlow · Socket.IO · Docker",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    status: "In Progress",
    category: "AI / ML Platform",
    featured: true,
    results: [
      "Hybrid TS + Py stack",
      "ML scoring · NLP · CV",
      "Multi-tenant SaaS",
    ],
  },

  // ── Rest ─────────────────────────────────────────────────────────
  {
    index: "05",
    title: "ECODrIx Backend Infrastructure",
    description:
      "Production-grade multi-tenant SaaS backend (v1.7.8). Powers CRM pipelines, lead scoring, WhatsApp automation, email marketing via AWS SES, Google Meet OAuth, real-time Socket.io messaging, a custom job-queue (ErixJobs), and a full event-log audit trail.",
    tech: "Node.js · Express 5 · TypeScript · MongoDB · Postgresql · Socket.io · AWS SES/S3 · OpenAI · Docker",
    link: "https://api.ecodrix.com",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    status: "Live",
    category: "Backend Infrastructure",
    featured: false,
    results: ["↓ 90% response time", "847+ commits", "Multi-tenant isolated"],
  },
  {
    index: "06",
    title: "Ecodrix SaaS Platform",
    description:
      "Multi-tenant SaaS platform with AI chatbot, ads automation, and subscription management. Built with modern web technologies and scalable architecture.",
    tech: "Next.js · TypeScript · PostgreSQL · Stripe · AI",
    link: "https://ecodrix.com",
    image: "https://cdn.ecodrix.com/Screenshot%202026-04-30%20194935.png",
    status: "In Progress",
    category: "SaaS Platform",
    featured: false,
    results: ["Stripe billing", "AI chatbot embedded", "Ads automation"],
  },
  {
    index: "07",
    title: "WhatsApp CMS Manager",
    description:
      "AI-powered WhatsApp management system with automated responses, analytics dashboard, and multi-user collaboration.",
    tech: "React · Node.js · MongoDB · Socket.io · Redis",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1636751364472-12bfad09b451?q=80&w=2070&auto=format&fit=crop",
    status: "In Progress",
    category: "AI Automation",
    featured: false,
    results: ["↓ 95% manual replies", "Real-time analytics", "Multi-agent"],
  },
  {
    index: "08",
    title: "Rich Text Editor Package",
    description:
      "Open-source npm package featuring a customizable TinyMCE-like rich text editor with modern tooling and extensibility.",
    tech: "TypeScript · React · Tailwind CSS · npm",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?q=80&w=2069&auto=format&fit=crop",
    status: "Published",
    category: "Open Source",
    featured: false,
    results: ["npm published", "Zero dependencies", "Fully typed"],
  },
];

function safeHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function statusColor(status: string) {
  if (status === "Live" || status === "Published")
    return {
      color: "#0dd255ff",
      border: "rgba(74,222,128,0.3)",
      bg: "rgba(74,222,128,0.08)",
      dot: "#0dd255ff",
    };
  if (status === "In Progress")
    return {
      color: "var(--p-accent)",
      border: "var(--p-accent-border)",
      bg: "var(--p-accent-dim)",
      dot: "var(--p-accent)",
    };
  return {
    color: "var(--p-text-muted)",
    border: "var(--p-border-mid)",
    bg: "transparent",
    dot: "var(--p-text-muted)",
  };
}


// ── Outcome badges strip ─────────────────────────────────────────────
function ResultBadges({
  results,
  size = "md",
}: {
  results: string[];
  size?: "sm" | "md";
}) {
  const cls =
    size === "sm"
      ? "text-[9px] px-1.5 py-0.5"
      : "text-[10px] px-2.5 py-1";
  return (
    <div className="flex flex-wrap gap-1.5">
      {results.map((r) => (
        <span
          key={r}
          className={`${cls} font-mono uppercase tracking-widest`}
          style={{
            color: "var(--p-accent)",
            background: "rgba(245,158,11,0.06)",
            border: "1px solid rgba(245,158,11,0.18)",
          }}
        >
          {r}
        </span>
      ))}
    </div>
  );
}

// ── Header stat ──────────────────────────────────────────────────────
function Stat({
  label,
  value,
  numeric,
}: {
  label: string;
  value: string;
  numeric?: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-display font-bold leading-none tabular-nums"
        style={{
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          color: "var(--p-text)",
        }}
      >
        {numeric !== undefined ? (
          <CountUp
            target={numeric}
            duration={900}
            // Pad with leading zero
            prefix={numeric < 10 ? "0" : ""}
          />
        ) : (
          value
        )}
      </span>
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--p-text-faint)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Featured block (alternating image / copy) ───────────────────────
function FeaturedBlock({
  project,
  position,
}: {
  project: Project;
  position: number;
}) {
  const sc = statusColor(project.status);
  const isExternal = project.link !== "#";
  const isReverse = position % 2 === 1;

  return (
    <Reveal variant="rise" offset={36}>
      <motion.a
        href={isExternal ? project.link : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        data-cursor={isExternal ? "View" : undefined}
        className="group block"
        style={{
          color: "inherit",
          textDecoration: "none",
          cursor: isExternal ? "pointer" : "default",
        }}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image */}
          <div
            className={`lg:col-span-7 relative ${isReverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <div
              className="relative aspect-[16/10] overflow-hidden border bg-(--p-elevated) transition-all duration-500"
              style={{
                borderColor: "var(--p-border)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />

              {/* Subtle vignette + amber wash on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 60%, rgba(8,10,14,0.35) 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, transparent 50%)",
                }}
              />

              {/* Corner accents */}
              <span
                aria-hidden
                className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 transition-colors duration-300"
                style={{ borderColor: "var(--p-accent)" }}
              />
              <span
                aria-hidden
                className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 transition-colors duration-300"
                style={{ borderColor: "var(--p-accent)" }}
              />

              {/* Status pill (top-right) */}
              <div className="absolute top-4 right-4">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 backdrop-blur-md"
                  style={{
                    color: sc.color,
                    borderColor: sc.border,
                    background: "rgba(8,10,14,0.55)",
                    border: `1px solid ${sc.border}`,
                  }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Live" ? "amber-pulse" : ""
                    }`}
                    style={{ background: sc.dot }}
                  />
                  {project.status}
                </span>
              </div>

              {/* Hover: faint border glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 0 1px var(--p-accent-border)",
                }}
              />
            </div>

            {/* Index watermark below image */}
            <span
              aria-hidden
              className="hidden lg:block absolute font-display font-bold leading-none select-none pointer-events-none"
              style={{
                fontSize: "9rem",
                color: "var(--p-accent)",
                opacity: 0.05,
                [isReverse ? "right" : "left"]: "-2rem",
                bottom: "-3rem",
              }}
            >
              {project.index}
            </span>
          </div>

          {/* Copy */}
          <div
            className={`lg:col-span-5 flex flex-col gap-5 ${isReverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-mono tracking-widest"
                style={{ color: "var(--p-accent)" }}
              >
                {project.index}
              </span>
              <span
                className="h-px w-8"
                style={{ background: "var(--p-accent)" }}
              />
              <span
                className="text-[11px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-muted)" }}
              >
                {project.category}
              </span>
            </div>

            <h3
              className="font-display font-bold leading-[1.05] transition-colors duration-300 group-hover:text-(--p-accent)"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--p-text)",
              }}
            >
              {project.title}
            </h3>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--p-text-muted)" }}
            >
              {project.description}
            </p>

            <ResultBadges results={project.results} />

            <p
              className="text-xs font-mono pt-1"
              style={{ color: "var(--p-text-faint)" }}
            >
              {project.tech}
            </p>

            <div
              className="flex items-center justify-between gap-6 pt-5 mt-2"
              style={{ borderTop: "1px solid var(--p-border)" }}
            >
              <span
                className="text-[10px] font-mono uppercase tracking-widest"
                style={{ color: "var(--p-text-faint)" }}
              >
                {isExternal
                  ? safeHostname(project.link)
                  : "Private build"}
              </span>

              {isExternal ? (
                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
                  style={{ color: "var(--p-accent)" }}
                >
                  Visit live
                  <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </span>
              ) : (
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--p-text-faint)" }}
                >
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

// ── List row (rest projects) ────────────────────────────────────────
function ProjectRow({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const sc = statusColor(project.status);

  return (
    <Reveal delay={delay} variant="rise" offset={20}>
      <div
        className="project-row cursor-pointer"
        onClick={() => setExpanded((p) => !p)}
      >
        <div className="flex items-center gap-6 px-4 py-5 group">
          <span
            className="text-xs font-bold shrink-0 w-8"
            style={{
              color: "var(--p-accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {project.index}
          </span>

          <div className="flex-1 min-w-0">
            <div
              className="font-display font-semibold text-base md:text-lg leading-tight group-hover:text-(--p-accent) transition-colors duration-200 truncate"
              style={{ color: "var(--p-text)" }}
            >
              {project.title}
            </div>
            <div
              className="text-xs mt-0.5 truncate hidden sm:block"
              style={{
                color: "var(--p-text-faint)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {project.tech}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            {project.results.slice(0, 2).map((r) => (
              <span
                key={r}
                className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5"
                style={{
                  color: "var(--p-accent)",
                  background: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.15)",
                }}
              >
                {r}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span
              className="text-xs hidden md:inline-flex items-center gap-1.5 font-mono uppercase tracking-widest"
              style={{ color: sc.color }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "Live" ? "amber-pulse" : ""
                }`}
                style={{ background: sc.dot }}
              />
              {project.status}
            </span>
            <span
              className="text-lg transition-transform duration-300"
              style={{
                color: "var(--p-text-muted)",
                transform: expanded ? "rotate(45deg)" : "none",
              }}
            >
              +
            </span>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-0 mx-4 mb-4 overflow-hidden"
                style={{ border: "1px solid var(--p-border)" }}
              >
                <div className="relative h-40 md:h-full md:col-span-1 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:col-span-2 p-6 flex flex-col justify-between gap-4">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    {project.description}
                  </p>

                  <ResultBadges results={project.results} />

                  <div>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="View"
                        className="inline-flex items-center gap-1.5 text-sm font-medium"
                        style={{ color: "var(--p-accent)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const total = projects.length;
  const live = projects.filter(
    (p) => p.status === "Live" || p.status === "Published",
  ).length;
  const inBuild = projects.filter((p) => p.status === "In Progress").length;

  // Scroll progress for the featured stack rail (gated on mount to avoid
  // motion's "Target ref is defined but not hydrated" warning).
  const featuredRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({
    target: mounted ? featuredRef : undefined,
    offset: ["start 80%", "end 20%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="projects"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--p-bg)" }}
    >
      {/* Faint top divider */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px opacity-50"
        style={{ background: "var(--p-border)" }}
      />

      <div className="max-content relative">
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-28 items-end">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="accent-line" />
              <span className="eyebrow">Selected Work</span>
            </Reveal>

            <Reveal offset={28}>
              <h2
                className="font-display font-bold leading-[1.02]"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
                  color: "var(--p-text)",
                  letterSpacing: "-0.02em",
                }}
              >
                Projects shipped
                <br />
                <span style={{ color: "var(--p-text-faint)" }}>
                  &amp; shipping.
                </span>
              </h2>
            </Reveal>
          </div>

          <div
            className="lg:col-span-5 lg:pl-12"
            style={{ borderLeft: "1px solid var(--p-border)" }}
          >
            <Reveal delay={0.1} offset={20}>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--p-text-muted)" }}
              >
                A curated cut of full-stack platforms, design-led web
                experiences, and infra-grade backends. Each one shipped to
                production and built to outlast trend cycles.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <Stat
                  label="Projects"
                  value={total.toString().padStart(2, "0")}
                  numeric={total}
                />
                <Stat
                  label="Live"
                  value={live.toString().padStart(2, "0")}
                  numeric={live}
                />
                <Stat
                  label="In Build"
                  value={inBuild.toString().padStart(2, "0")}
                  numeric={inBuild}
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Featured blocks ───────────────────────────────────── */}
        <div
          ref={featuredRef}
          className="relative space-y-24 lg:space-y-32 mb-24 lg:mb-32"
        >
          {/* Scroll progress rail (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute -left-6 top-2 bottom-2 w-px"
            style={{ background: "var(--p-border)" }}
          >
            <motion.span
              className="absolute left-0 top-0 w-px"
              style={{ background: "var(--p-accent)", height: railHeight }}
            />
          </div>

          {featured.map((p, i) => (
            <FeaturedBlock key={`feat-${p.index}`} project={p} position={i} />
          ))}
        </div>

        {/* ── Rest section ──────────────────────────────────────── */}
        <Reveal className="flex items-end justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="accent-line" />
            <span className="eyebrow">More Work</span>
          </div>
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--p-text-faint)" }}
          >
            {rest.length.toString().padStart(2, "0")} entries
          </span>
        </Reveal>

        <div>
          {rest.map((p, i) => (
            <ProjectRow key={`row-${p.index}`} project={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
