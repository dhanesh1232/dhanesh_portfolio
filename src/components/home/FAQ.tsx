"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

/* ──────────────────────────────────────────────────────────────────
   FAQ — answers the questions every cross-border buyer asks before
   booking a call. Keeps the conversation off the discovery call so
   it stays focused on scope.
─────────────────────────────────────────────────────────────────── */

const FAQS: { id: string; q: string; a: string }[] = [
  {
    id: "01",
    q: "How do you handle timezone differences with US / EU clients?",
    a: "I work IST 09:00–22:00, which gives clean overlap with EU mornings and US evenings. Most communication is async (Notion, Loom, Slack, email), and we hold one weekly sync at a time that works for both sides. I respond to messages within 4 hours during working days.",
  },
  {
    id: "02",
    q: "What payment methods do you accept? Is it safe for international clients?",
    a: "Stripe, Wise, and SWIFT for international clients. Razorpay, UPI, and direct bank transfer for India. Crypto via USDC on request. All projects start with a signed contract on DocuSign and a 30–50% milestone-based payment structure — never lump sum upfront.",
  },
  {
    id: "03",
    q: "Do you sign NDAs before discovery calls?",
    a: "Yes. I'll sign your NDA before any technical discussion if you have one ready, or send mine. Confidential code, credentials, and client data are treated with care — work happens on isolated branches in your repo, never mine.",
  },
  {
    id: "04",
    q: "Who owns the code and IP at the end of the project?",
    a: "You do. Every project ships with a clean, transferable repository — your domain, your hosting, your accounts. I keep zero ongoing access unless you specifically retain me for support. Documentation and handover walkthroughs are part of every engagement.",
  },
  {
    id: "05",
    q: "What's your typical engagement model and minimum project size?",
    a: "Three formats: fixed-scope projects (most builds), retainers for ongoing work (typically 20–40h/month), and consulting hours for architecture review. Minimum project size starts at $1.5K USD or ₹1.2L INR — I focus on substantive work, not micro-tasks.",
  },
  {
    id: "06",
    q: "How do you guarantee quality? What if I'm not happy with the work?",
    a: "Every milestone is shippable, reviewable, and shown via Loom before sign-off. If the first milestone doesn't meet expectations, the milestone payment is refunded — no questions, no friction. After that, scope changes follow a clear change-request flow.",
  },
  {
    id: "07",
    q: "Do you provide invoices with GST? Are you registered in India?",
    a: "Yes — GST-registered, invoices issued for every payment with full tax breakdown. Indian clients get fully compliant invoices for ITC claims. International clients receive USD invoices via Wise / Stripe with proper tax classification.",
  },
  {
    id: "08",
    q: "What's NOT in scope? When are you not the right fit?",
    a: "I don't take on: WordPress / theme customisation, pure logo or brand-identity design (handled by partners), projects under $1.5K, anything requiring dedicated 40h/week (I run a portfolio of clients), or work that conflicts with my existing engagements.",
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState<string | null>("01");

  return (
    <section
      id="faq"
      className="section-pad"
      style={{ background: "var(--p-bg)" }}
    >
      <div className="max-content">
        {/* Eyebrow */}
        <Reveal className="flex items-center gap-3 mb-12">
          <span className="accent-line" />
          <span className="eyebrow">FAQ</span>
        </Reveal>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-6">
            <Reveal offset={24}>
              <h2
                className="font-display font-bold leading-[1.05]"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  color: "var(--p-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Things clients ask{" "}
                <span style={{ color: "var(--p-accent)" }}>
                  before booking.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-8 flex items-end">
            <Reveal offset={20} delay={0.1}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--p-text-muted)" }}
              >
                Eight answers covering payments, IP, timezones, NDAs, and the
                fine print. Anything else, ask on the discovery call —
                it&apos;s on me.
              </p>
            </Reveal>
          </div>
        </div>

        {/* FAQ list */}
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <Reveal key={f.id} delay={i * 0.04} offset={16}>
                <div
                  className="service-row"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  role="button"
                  aria-expanded={isOpen}
                >
                  {/* Row */}
                  <div className="flex items-start gap-6 px-4 py-5 group">
                    <span
                      className="text-xs font-bold shrink-0 w-8 mt-1"
                      style={{
                        color: "var(--p-accent)",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {f.id}
                    </span>

                    <span
                      className="flex-1 font-display font-semibold text-base md:text-lg leading-snug transition-colors duration-200"
                      style={{
                        color: isOpen ? "var(--p-accent)" : "var(--p-text)",
                      }}
                    >
                      {f.q}
                    </span>

                    <span
                      className="text-lg font-light shrink-0 transition-all duration-300 mt-0.5"
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

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="ans"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 pb-7 pt-1">
                          <div className="md:col-span-1 md:col-start-2">
                            {/* spacer to align with index column */}
                          </div>
                          <p
                            className="md:col-span-9 text-sm leading-[1.8]"
                            style={{ color: "var(--p-text-muted)" }}
                          >
                            {f.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
