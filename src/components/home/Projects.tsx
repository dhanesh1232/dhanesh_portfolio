"use client";
import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  // ── Featured cards ────────────────────────────────────────────────
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
    category: "Import/Export Platform",
    featured: true,
    results: ["↑ 3× enquiry rate", "0 downtime since launch", "SEO rank pg.1"],
  },
  {
    index: "02",
    title: "Nirvisham Medical SaaS",
    description:
      "Full-stack medical SaaS platform for AYUSH & holistic healthcare. Features doctor listings, patient management, appointment booking, resource library, and SEO-optimized public pages — built for real clinical operations.",
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
    title: "ECODrIx Backend Infrastructure",
    description:
      "Production-grade multi-tenant SaaS backend (v1.7.8). Powers CRM pipelines, lead scoring, WhatsApp automation, email marketing via AWS SES, Google Meet OAuth, real-time Socket.io messaging, a custom job-queue (ErixJobs), and a full event-log audit trail.",
    tech: "Node.js · Express 5 · TypeScript · MongoDB · Socket.io · AWS SES/S3 · OpenAI · Docker",
    link: "https://api.ecodrix.com",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
    status: "Live",
    category: "Backend Infrastructure",
    featured: false,
    results: ["↓ 90% response time", "847+ commits", "Multi-tenant isolated"],
  },
  {
    index: "04",
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
    index: "05",
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
    index: "06",
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

function statusColor(status: string) {
  if (status === "Live" || status === "Published")
    return {
      color: "#4ade80",
      border: "rgba(74,222,128,0.3)",
      bg: "rgba(74,222,128,0.08)",
    };
  if (status === "In Progress")
    return {
      color: "var(--p-accent)",
      border: "var(--p-accent-border)",
      bg: "var(--p-accent-dim)",
    };
  return {
    color: "var(--p-text-muted)",
    border: "var(--p-border-mid)",
    bg: "transparent",
  };
}

// ── Outcome badges strip ────────────────────────────────────────────
function ResultBadges({ results }: { results: string[] }) {
  return (
    <div
      className="flex flex-wrap gap-1.5 pt-3 mt-3"
      style={{ borderTop: "1px solid var(--p-border)" }}
    >
      {results.map((r) => (
        <span
          key={r}
          className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5"
          style={{
            color: "var(--p-accent)",
            background: "rgba(245,158,11,0.07)",
            border: "1px solid rgba(245,158,11,0.18)",
          }}
        >
          {r}
        </span>
      ))}
    </div>
  );
}

// ── Featured card ─────────────────────────────────────────────────
function FeaturedCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[number];
  delay?: number;
}) {
  const sc = statusColor(project.status);
  const isExternal = project.link !== "#";

  return (
    <Reveal delay={delay} variant="rise" offset={28}>
      <motion.a
        href={isExternal ? project.link : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        data-cursor={isExternal ? "View" : undefined}
        className="group block h-full"
        style={{
          color: "inherit",
          textDecoration: "none",
          cursor: isExternal ? "pointer" : "default",
        }}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="relative overflow-hidden flex flex-col h-full transition-all duration-300 border border-(--p-border) bg-(--p-elevated) group-hover:border-(--p-accent-border) group-hover:shadow-[0_0_30px_var(--p-accent-dim)]">
          {/* Image */}
          <div className="relative h-52 overflow-hidden shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-[1.04] transition-all duration-700"
            />
            {/* Bottom dark fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(8,10,14,0.85) 100%)",
              }}
            />
            {/* Category + status overlaid on image */}
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <span
                className="text-xs uppercase tracking-widest font-mono"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {project.category}
              </span>
              <span
                className="text-xs px-2 py-0.5 border font-mono"
                style={{
                  color: sc.color,
                  borderColor: sc.border,
                  background: sc.bg,
                }}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Content pane */}
          <div
            className="relative p-6 flex flex-col gap-3 flex-1"
            style={{ borderTop: "2px solid var(--p-accent)" }}
          >
            {/* Large index watermark */}
            <span
              className="absolute top-2 right-5 font-display font-bold leading-none select-none pointer-events-none"
              style={{
                fontSize: "4rem",
                color: "var(--p-accent)",
                opacity: 0.06,
              }}
              aria-hidden
            >
              {project.index}
            </span>

            <span
              className="text-xs uppercase tracking-widest font-mono"
              style={{ color: "var(--p-accent)" }}
            >
              {project.index}
            </span>

            <h3
              className="font-display font-bold leading-tight transition-colors duration-300 group-hover:text-(--p-accent)"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                color: "var(--p-text)",
              }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--p-text-muted)" }}
            >
              {project.description}
            </p>

            <p
              className="text-xs mt-1 font-mono"
              style={{ color: "var(--p-text-faint)" }}
            >
              {project.tech}
            </p>

            {/* Outcome badges */}
            <ResultBadges results={project.results} />

            {isExternal && (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide mt-1 transition-colors duration-200"
                style={{ color: "var(--p-accent)" }}
              >
                View project
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </span>
            )}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

// ── List row ───────────────────────────────────────────────────
function ProjectRow({
  project,
  delay = 0,
}: {
  project: (typeof projects)[number];
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
          {/* Index */}
          <span
            className="text-xs font-bold shrink-0 w-8"
            style={{
              color: "var(--p-accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {project.index}
          </span>

          {/* Title + tech */}
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

          {/* Results preview — visible on md+ */}
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

          {/* Status + arrow */}
          <div className="flex items-center gap-4 shrink-0">
            <span
              className="text-xs hidden md:block"
              style={{ color: sc.color }}
            >
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

        {/* Expand panel */}
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
                {/* Image preview */}
                <div className="relative h-40 md:h-full md:col-span-1 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-2 p-6 flex flex-col justify-between">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--p-text-muted)" }}
                  >
                    {project.description}
                  </p>

                  {/* Outcome badges in expand */}
                  <ResultBadges results={project.results} />

                  <div className="mt-4">
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

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: "var(--p-bg)" }}
    >
      <div className="max-content">
        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-16">
          <span className="accent-line" />
          <span className="eyebrow">Work</span>
        </Reveal>

        {/* Heading */}
        <Reveal offset={24} className="mb-14">
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              color: "var(--p-text)",
            }}
          >
            Selected projects.
          </h2>
        </Reveal>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featured.map((p, i) => (
            <FeaturedCard key={p.index} project={p} delay={i * 0.08} />
          ))}
        </div>

        {/* List rows */}
        <div className="mt-4">
          {rest.map((p, i) => (
            <ProjectRow key={p.index} project={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
