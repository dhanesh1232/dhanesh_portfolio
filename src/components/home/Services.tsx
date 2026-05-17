"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    engagement: "Fixed scope · Retainer",
    priceFrom: "$2.5K",
    priceFromINR: "₹2L",
    timeline: "2 – 6 weeks",
    description:
      "Crafting blazing-fast, scalable applications using Next.js, TypeScript, Node.js, and modern database systems. From MVP to production-ready — performance and scalability are non-negotiable.",
    deliverables: [
      "Next.js / React Apps",
      "REST & GraphQL APIs",
      "Database Design",
      "Performance Optimization",
    ],
  },
  {
    id: "02",
    title: "UI/UX & Frontend Engineering",
    engagement: "Fixed scope · Consulting",
    priceFrom: "$1.5K",
    priceFromINR: "₹1.2L",
    timeline: "1 – 3 weeks",
    description:
      "Designing refined interfaces with consistent design systems, smooth interactions, and pixel-perfect execution. Clean code that translates complex requirements into intuitive user experiences.",
    deliverables: [
      "Design Systems",
      "Responsive Layouts",
      "Motion & Interaction",
      "Accessibility",
    ],
  },
  {
    id: "03",
    title: "AI & Workflow Automation",
    engagement: "Retainer · Fixed scope",
    priceFrom: "$1.8K",
    priceFromINR: "₹1.5L",
    timeline: "1 – 4 weeks",
    description:
      "Building n8n flows, LLM-powered chatbot agents, custom integrations, and automation pipelines that eliminate manual work, save hours, and run 24/7.",
    deliverables: [
      "n8n Workflows",
      "AI Chatbots",
      "Webhook Systems",
      "CRM Automation",
    ],
  },
  {
    id: "04",
    title: "SEO, Ads & Growth Systems",
    engagement: "Retainer · Performance",
    priceFrom: "$1.2K/mo",
    priceFromINR: "₹1L/mo",
    timeline: "Ongoing",
    description:
      "Creating high-converting landing pages, technical SEO audits, and automated Google/Meta ad funnels that turn traffic into qualified leads at scale.",
    deliverables: [
      "Technical SEO",
      "Google Ads",
      "Meta Ads",
      "Conversion Funnels",
    ],
  },
  {
    id: "05",
    title: "SaaS MVP & Platform Development",
    engagement: "Fixed scope · Equity",
    priceFrom: "$5K",
    priceFromINR: "₹4L",
    timeline: "4 – 10 weeks",
    description:
      "Transforming raw ideas into full SaaS platforms: user auth, billing with Stripe, team management, admin dashboards, API design, and cloud deployment pipelines.",
    deliverables: [
      "Auth & Billing",
      "Multi-tenancy",
      "Admin Panels",
      "API Architecture",
    ],
  },
  {
    id: "06",
    title: "API Integrations & Backend Systems",
    engagement: "Fixed scope · Consulting",
    priceFrom: "$1.5K",
    priceFromINR: "₹1.2L",
    timeline: "1 – 3 weeks",
    description:
      "Connecting systems with custom APIs, webhook handlers, third-party integrations, and secure backend infrastructure designed for reliability and scale.",
    deliverables: [
      "API Design",
      "Webhook Systems",
      "Cloud Services",
      "Backend Infra",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = React.useState<string | null>(null);
  const [currency, setCurrency] = React.useState<"USD" | "INR">("USD");

  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "var(--p-elevated)" }}
    >
      <div className="max-content">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="accent-line" />
          <span className="eyebrow">Services</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            color: "var(--p-text)",
          }}
        >
          What I offer.
        </motion.h2>

        {/* Currency toggle + lead text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex items-end justify-between gap-6 mb-12 flex-wrap"
        >
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: "var(--p-text-muted)" }}
          >
            Indicative pricing — every project is scoped after a discovery
            call. Domestic clients invoiced with GST.
          </p>

          <div
            className="inline-flex items-center text-[10px] font-mono uppercase tracking-widest"
            style={{ border: "1px solid var(--p-border-mid)" }}
            role="tablist"
            aria-label="Currency"
          >
            {(["USD", "INR"] as const).map((c) => {
              const active = currency === c;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCurrency(c)}
                  className="px-3 py-1.5 transition-colors duration-200"
                  style={{
                    background: active
                      ? "var(--p-accent)"
                      : "transparent",
                    color: active
                      ? "var(--p-bg)"
                      : "var(--p-text-muted)",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Accordion list */}
        <div>
          {SERVICES.map((service, i) => {
            const isOpen = open === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className="service-row"
                  onClick={() => setOpen(isOpen ? null : service.id)}
                  role="button"
                  aria-expanded={isOpen}
                  id={`service-${service.id}`}
                >
                  {/* Row header */}
                  <div className="flex items-center gap-6 px-4 py-5 group">
                    <span
                      className="text-xs font-bold shrink-0 w-8"
                      style={{
                        color: "var(--p-accent)",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {service.id}
                    </span>

                    <span
                      className="flex-1 font-display font-semibold text-base md:text-xl leading-tight transition-colors duration-200"
                      style={{
                        color: isOpen ? "var(--p-accent)" : "var(--p-text)",
                      }}
                    >
                      {service.title}
                    </span>

                    {/* Price + timeline (desktop) */}
                    <div className="hidden md:flex items-center gap-4 shrink-0">
                      <span
                        className="text-xs font-mono"
                        style={{ color: "var(--p-text-faint)" }}
                      >
                        {service.timeline}
                      </span>
                      <span
                        className="text-xs font-mono uppercase tracking-widest px-2.5 py-1"
                        style={{
                          color: "var(--p-accent)",
                          background: "rgba(245,158,11,0.06)",
                          border: "1px solid rgba(245,158,11,0.18)",
                        }}
                      >
                        From{" "}
                        {currency === "USD"
                          ? service.priceFrom
                          : service.priceFromINR}
                      </span>
                    </div>

                    {/* Toggle indicator */}
                    <span
                      className="text-lg font-light shrink-0 transition-all duration-300"
                      style={{
                        color: isOpen
                          ? "var(--p-accent)"
                          : "var(--p-text-muted)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </div>

                  {/* Expanded panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-8 pt-2">
                          {/* Description */}
                          <div className="md:col-span-2">
                            <p
                              className="text-sm leading-relaxed mb-5"
                              style={{ color: "var(--p-text-muted)" }}
                            >
                              {service.description}
                            </p>

                            {/* Engagement model row */}
                            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-widest">
                              <span style={{ color: "var(--p-text-faint)" }}>
                                Engagement
                              </span>
                              <span style={{ color: "var(--p-text-muted)" }}>
                                {service.engagement}
                              </span>
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <p
                              className="text-xs uppercase tracking-widest mb-3"
                              style={{
                                color: "var(--p-text-faint)",
                                fontFamily: "var(--font-geist-mono)",
                              }}
                            >
                              Includes
                            </p>
                            <ul className="space-y-1.5">
                              {service.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="flex items-center gap-2 text-xs"
                                  style={{ color: "var(--p-text-muted)" }}
                                >
                                  <span style={{ color: "var(--p-accent)" }}>
                                    —
                                  </span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid var(--p-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--p-text-muted)" }}>
            Not sure which fits? Let&apos;s figure it out together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-90 shrink-0"
            style={{ background: "var(--p-accent)", color: "var(--p-bg)" }}
          >
            Start a project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
