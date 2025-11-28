"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/context/parent";
import LeadForm from "./_components/form";
import {
  Star,
  Check,
  Shield,
  Award,
  Timer,
  Zap,
  Globe,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";

export default function StarterOfferLanding() {
  const { handleToChangeState } = usePortfolio();
  const [slotsLeft, setSlotsLeft] = useState(72);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 65 ? prev - 1 : prev));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      {/* ================= HERO ================= */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">
        {/* Trust Stars */}
        <div className="flex justify-center gap-1 mb-3 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-500" />
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Grow Your Business With a{" "}
          <span className="text-blue-600">High-Converting Website</span> in 72
          Hours.
        </motion.h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional website with WhatsApp automation, responsive UI, and
          conversion-focused structure — without paying agency-level costs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <button
            onClick={() => handleToChangeState?.("fillOut", true)}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            📞 Book a Free Call
          </button>

          <a
            href="#form"
            className="px-6 py-3 rounded-lg border border-border text-lg font-semibold hover:bg-accent transition"
          >
            ⚡ Claim ₹2,999 Offer
          </a>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          No advance required — pay only after confirmation.
        </p>
      </header>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-4 right-4 bg-blue-600 text-white py-3 px-5 rounded-xl shadow-lg cursor-pointer text-sm md:text-base"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          document
            .getElementById("form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        🔥 Limited: ₹{slotsLeft < 70 ? 2999 : 2999} (Upgrade → ₹4,999 soon)
      </motion.div>

      {/* ================= SLOT BANNER ================= */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="py-3 text-center font-semibold bg-yellow-300 dark:bg-yellow-500 dark:text-black text-sm"
      >
        ✨ {slotsLeft}/100 discounted slots left — price increases once full.
      </motion.div>

      {/* ================= VALUE STACK ================= */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Everything You Need to Get Online
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-3xl">
          {[
            { title: "Fully Mobile Responsive", icon: Smartphone },
            { title: "WhatsApp Button & Leads", icon: Zap },
            { title: "Free Hosting (1 Month)", icon: Globe },
            { title: "Admin Panel Upgrade Ready", icon: LayoutDashboard },
            { title: "Google Search Ready Structure", icon: Check },
            { title: "Priority 72hr Delivery", icon: Timer },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-lg"
            >
              <item.icon className="text-green-500" /> {item.title}
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= WHY US ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why People Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Fastest Delivery in Market",
                desc: "Most agencies take 2–3 weeks. We build and launch in just 72 hours.",
                icon: Timer,
              },
              {
                title: "Affordable + High Quality",
                desc: "You get agency-level output at a price small businesses can afford.",
                icon: Award,
              },
              {
                title: "Lead-Focused Approach",
                desc: "Every website is structured to bring WhatsApp leads. Not just look good.",
                icon: Zap,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-card border border-border shadow-sm rounded-lg p-6 space-y-3"
              >
                <item.icon className="text-blue-600 w-6 h-6" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Recent Completed Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate Landing Page",
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Gym & Fitness Website",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Service Business Page",
                img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-card border shadow rounded-md overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <p className="px-3 py-2 text-sm font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs mt-4 text-muted-foreground">
            Full portfolio available during consultation.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="form" className="w-full mx-auto px-6 py-20 bg-muted/30">
        <h3 className="text-center text-2xl font-semibold mb-6">
          Reserve Your Offer
        </h3>
        <LeadForm />
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rohan Sharma",
                role: "Real Estate Broker",
                review:
                  "Got my landing page in 48 hours. Now I get WhatsApp leads daily. Amazing experience!",
              },
              {
                name: "Prakash Fitness",
                role: "Gym Owner",
                review:
                  "Affordable and professional. My website looks premium and clients trust me more.",
              },
              {
                name: "Ayesha Academy",
                role: "Coaching Center",
                review:
                  "Very smooth process. The WhatsApp automation is a game changer!",
              },
            ].map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={i}
                className="bg-card border border-border shadow-sm rounded-lg p-5 text-left space-y-3"
              >
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  “{item.review}”
                </p>

                <p className="font-semibold text-sm">
                  {item.name}{" "}
                  <span className="text-muted-foreground">· {item.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I need to pay in advance?",
                a: "No. We collect details first, confirm scope, and only then take payment.",
              },
              {
                q: "Can I upgrade later?",
                a: "Yes. You can start with ₹2,999 and later add domain, SEO, CRM, and ads anytime.",
              },
              {
                q: "Is this a template or custom design?",
                a: "We customize based on your business type, branding, and content.",
              },
              {
                q: "Can I edit the site later?",
                a: "Yes — if you choose the CMS upgrade plan. Otherwise, we make changes on request.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-lg p-4"
              >
                <p className="font-semibold">{item.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST FOOTER ================= */}
      <footer className="pb-14 pt-6 text-center text-sm text-muted-foreground space-y-2">
        <p className="flex justify-center gap-2 items-center">
          <Shield className="w-4 h-4" /> Secure lead submission — no spam.
        </p>
        <p className="flex justify-center gap-2 items-center">
          <Award className="w-4 h-4" /> Experienced team with 100+ projects.
        </p>
        <p className="flex justify-center gap-2 items-center">
          <Timer className="w-4 h-4" /> 24/7 support during build.
        </p>
      </footer>
    </div>
  );
}
