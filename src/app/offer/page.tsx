"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";
import { StarRating } from "./_components/star-rating";
import PricingPlans from "./_components/packages";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function StarterOfferLanding() {
  const { handleToChangeState, slotsLeft } = usePortfolio();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Head>
        <title>
          Professional Website at ₹2,999 | 48-Hour Delivery | WhatsApp-Enabled
        </title>
        <meta
          name="description"
          content="Get a high-converting, mobile-first website with WhatsApp automation in just 48 hours for ₹2,999. Secure, SEO-ready, and delivered by trusted experts. Limited slots!"
        />
        <meta
          name="keywords"
          content="affordable website design, WhatsApp website integration, 48-hour website delivery, small business website India, mobile-first landing page, SEO-ready website, ₹2999 website offer"
        />
        <meta
          property="og:title"
          content="Professional Website at ₹2,999 | 48-Hour Delivery | WhatsApp-Enabled"
        />
        <meta
          property="og:description"
          content="Launch your business online with a stunning, WhatsApp-integrated website in 48 hours. Only ₹2,999 — no advance, pay after confirmation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.ecodrix.com/offer" />
        <meta
          property="og:image"
          content="https://portfolio.ecodrix.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="₹2,999 Website Offer | 48-Hour Delivery"
        />
        <meta
          name="twitter:description"
          content="Get a lead-generating website with WhatsApp automation in 3 days. Limited slots at ₹2,999 — price increases soon!"
        />
        <link rel="canonical" href="https://portfolio.ecodrix.com/offer" />
      </Head>
      <div className="w-full bg-background text-foreground overflow-x-hidden">
        {/* ================= HERO SECTION ================= */}
        <motion.header
          style={{ opacity }}
          className="relative max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20 text-center"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-blue-500" />
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4 text-yellow-500" />
              <span>4.5/5 Rating</span>
            </div>
          </motion.div>

          {/* Trust Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center gap-1 mb-4"
          >
            <StarRating value={4.5} />
          </motion.div>

          {/* Label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-xs mb-6"
          >
            ⚡ Limited Time Starter Offer
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Grow Your Business With a{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500">
              High-Converting Website
            </span>{" "}
            in 48 Hours
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Professional website with WhatsApp automation, responsive UI, and
            conversion-focused structure — without paying agency-level costs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  (window as unknown as { fbq?: unknown }).fbq
                ) {
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq("track", "Schedule");
                }
                handleToChangeState?.("fillOut", true);
              }}
              className="group relative px-8 py-2 rounded-full cursor-pointer bg-linear-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Book a Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <Link
              href="#form"
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  (window as unknown as { fbq?: unknown }).fbq
                ) {
                  (
                    window as Window &
                      typeof globalThis & {
                        fbq?: (event: string, ...args: unknown[]) => void;
                      }
                  ).fbq("track", "ViewLeadForm", {
                    content_name: "Offer",
                    content_type: "website",
                    content_ids: ["offer"],
                  });
                }
              }}
              className="group px-8 py-2 rounded-full border-2 border-border hover:border-blue-600 dark:hover:border-blue-400 text-lg font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
            >
              ⚡ Claim ₹2,999 Offer
              <Sparkles className="w-5 h-5 group-hover:rotate-12 group-hover:text-yellow-400 transition-transform" />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            No advance required — pay only after confirmation
          </motion.p>
        </motion.header>

        {/* ================= URGENT BANNER ================= */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-50 py-3 text-center font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 dark:from-yellow-600 dark:via-yellow-500 dark:to-yellow-600 text-black text-sm md:text-base shadow-lg"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ✨ Only {slotsLeft}/100 slots left at ₹2,999 — Price increases to
            ₹4,999 soon!
          </motion.span>
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          className="fixed bottom-6 right-6 bg-linear-to-r from-blue-600 hover:ring-2 transform transition ease-in-out duration-300 ring-blue-500 to-blue-700 text-white py-2.5 px-6 rounded-2xl shadow-2xl cursor-pointer text-sm md:text-base z-50 max-w-xs overflow-hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            document
              .getElementById("form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {/* Ripple pulse animation */}
          <span className="absolute inset-0 rounded-2xl bg-blue-600 border-blue-400 animate-ping" />
          <span className="absolute inset-0 rounded-2xl bg-blue-600 border-blue-400 animate-ping" />

          <div className="relative flex items-center gap-3">
            <div className="absolute w-full h-full rounded-2xl border-2 border-blue-800 animate-ping opacity-75"></div>
            <Timer className="w-5 h-5 animate-pulse" />
            <div>
              <div className="font-bold">Limited Slots!</div>
              <div className="text-xs opacity-90">{slotsLeft} spots left</div>
            </div>
          </div>
        </motion.div>

        {/* ================= VALUE STACK ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl font-bold mb-0.5"
            >
              Everything You Need to Get Online
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground max-w-2xl mx-auto"
            >
              Launch your business with a complete web presence in just 3 days
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Mobile-First Landing Page",
                subtitle: "Looks stunning on phone, tablet and desktop",
                icon: Smartphone,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "WhatsApp Click-to-Chat",
                subtitle: "Visitors contact you directly in 1 tap",
                icon: Zap,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Lead Capture Form",
                subtitle: "Collect name, phone & details instantly",
                icon: LayoutDashboard,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Free Hosting Included",
                subtitle: "Live on our subdomain — no extra cost",
                icon: Globe,
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "SEO-Ready Structure",
                subtitle: "Optimized for Google ranking from day one",
                icon: TrendingUp,
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                title: "Fast 48-Hour Delivery",
                subtitle: "From content to live website in 3 days",
                icon: Timer,
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-card border transform ease-in-out border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 group-hover:rounded-full rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform transform ease-in-out duration-2000`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-0.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto"
          >
            Need your own domain, business email,{" "}
            <span className="text-blue-500">CMS</span>, or advanced features?{" "}
            <span className="font-semibold text-foreground">
              Available as optional add-ons after setup.
            </span>
          </motion.p>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1"
              >
                Why{" "}
                <span className="text-purple-500 font-stretch-50% font-extrabold">
                  50+
                </span>{" "}
                Businesses Choose Us
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base lg:text-lg text-muted-foreground"
              >
                Fast, affordable, and results-driven
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Fastest Delivery in Market",
                  desc: "Most agencies take 2–3 weeks. We build and launch in just 48 hours — without compromising quality.",
                  icon: Timer,
                  stat: "48 Hours",
                },
                {
                  title: "Affordable + Premium Quality",
                  desc: "Get agency-level output at a price small businesses can actually afford. No hidden costs.",
                  icon: Award,
                  stat: "₹2,999/-",
                },
                {
                  title: "Lead-Focused Strategy",
                  desc: "Every website is structured to generate WhatsApp leads and conversions — not just look pretty.",
                  icon: Zap,
                  stat: "100% ROI",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl group p-4 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-blue-600 transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl group-hover:rounded-full bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center transform transition ease-in-out duration-5000">
                      <item.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 truncate">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <PricingPlans />

        {/* ================= PORTFOLIO ================= */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"
              >
                Recent Client Projects
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-bas lg:text-lg text-muted-foreground"
              >
                Real websites launched for real businesses
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Real Estate Landing Page",
                  category: "Property Sales",
                  img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Gym & Fitness Website",
                  category: "Health & Wellness",
                  img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Service Business Page",
                  category: "Professional Services",
                  img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-0.5">
                      {item.category}
                    </p>
                    <h3 className="font-bold text-base lg:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= OPTIONAL UPGRADES ================= */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"
              >
                Optional{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500">
                  Upgrades
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Start with ₹2,999 — and scale as you grow. No forced bundles or
                hidden charges.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Domain + Hosting",
                  price: "₹1,499 – ₹2,999/year",
                  desc: "Get your own .com/.in domain with fast, secure hosting.",
                  features: [
                    "Professional URL",
                    "HTTPS Security",
                    "Business Email Setup",
                  ],
                  icon: Globe,
                },
                {
                  title: "Admin Panel (CMS)",
                  price: "₹999 – ₹2,999",
                  desc: "Edit content yourself — no technical skills needed.",
                  features: [
                    "Add/Edit Text & Images",
                    "Update Services",
                    "Manage Products",
                  ],
                  icon: LayoutDashboard,
                },
                {
                  title: "Google Business Setup",
                  price: "₹999",
                  desc: "Appear on Google Maps and attract local customers.",
                  features: [
                    "Complete Profile Setup",
                    "Optimized Listing",
                    "Local SEO Boost",
                  ],
                  icon: TrendingUp,
                },
                {
                  title: "SEO Optimization",
                  price: "₹2,999/month",
                  desc: "Rank higher in Google for your target keywords.",
                  features: [
                    "Keyword Research",
                    "On-page SEO",
                    "Speed Optimization",
                  ],
                  icon: TrendingUp,
                },
                {
                  title: "Lead Ads Campaign",
                  price: "₹3,999/month + Ad Budget",
                  desc: "Run high-converting ads on Meta and Google.",
                  features: [
                    "Campaign Setup",
                    "Daily Optimization",
                    "Performance Reports",
                  ],
                  icon: Zap,
                },
                {
                  title: "Smart CRM System",
                  price: "Starts ₹799/month",
                  desc: "Track leads, automate follow-ups, and close more deals.",
                  features: [
                    "Lead Pipeline",
                    "Auto Follow-ups",
                    "WhatsApp Integration",
                  ],
                  icon: LayoutDashboard,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-card border group hover:-translate-y-0.5 hover:ring-cyan-500 hover:ring-1 border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-xl group-hover:rounded-full bg-linear-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-3">
                    {item.price}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-1">
                    {item.features.map((f, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <Check
                          strokeWidth="3px"
                          className="w-4 h-4 font-extrabold text-green-500 shrink-0 mt-0.5"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8 text-sm text-muted-foreground"
            >
              💡 All upgrades are completely optional — choose only what you
              need
            </motion.p>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center flex flex-col items-center mb-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl flex items-center gap-2 text-center md:text-4xl lg:text-5xl font-bold mb-2"
              >
                What{" "}
                <span className="flex items-center gap-1">
                  <BsHeartFill className="text-red-500" />{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-red-500 to-pink-500">
                    Our
                  </span>
                </span>
                Clients Say
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base lg:text-lg text-muted-foreground"
              >
                Real feedback from real businesses
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                {
                  name: "Rohan Sharma",
                  role: "Real Estate Broker",
                  review:
                    "Got my landing page in 48 hours. Now I get 3-4 WhatsApp leads daily. Best investment I made for my business!",
                  avatar: "RS",
                  rating: 4.5,
                },
                {
                  name: "Prakash Reddy",
                  role: "Gym Owner",
                  review:
                    "Affordable and super professional. My website looks premium and clients trust me more now. Highly recommend!",
                  avatar: "PR",
                  rating: 4,
                },
                {
                  name: "Ayesha Khan",
                  role: "Coaching Center Owner",
                  review:
                    "Very smooth process. The WhatsApp automation is a game changer! Parents can contact us instantly.",
                  avatar: "AK",
                  rating: 5,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all hover:ring-1 ring-cyan-500 duration-300"
                >
                  <Card className="p-4">
                    <div className="flex gap-1">
                      <StarRating value={item.rating} />
                    </div>

                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-6 line-clamp-4">
                      {`"${item.review}"`}
                    </p>

                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="font-bold">
                          {item.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground/70">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground"
              >
                Everything you need to know
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <Accordion type="single" collapsible className="w-full space-y-2">
                {[
                  {
                    q: "Do I need to pay in advance?",
                    a: "No. We collect your requirements first, confirm the project scope, and only then request payment after mutual agreement.",
                  },
                  {
                    q: "Can I upgrade to advanced features later?",
                    a: "Absolutely! Start with the ₹2,999 base package and add domain, SEO, CRM, ads, or any other service whenever you're ready.",
                  },
                  {
                    q: "Is this a template or custom design?",
                    a: "We customize the design based on your business type, brand colors, content, and specific requirements — not a generic template.",
                  },
                  {
                    q: "Can I edit the website content myself later?",
                    a: "Yes — if you choose the optional CMS upgrade. Otherwise, we handle all updates on request at no extra cost for minor changes.",
                  },
                  {
                    q: "How do I provide content for my website?",
                    a: "After you fill the form, we'll send you a simple questionnaire. Share your business details, images, and text — we'll handle the rest.",
                  },
                  {
                    q: "What if I need revisions after launch?",
                    a: "We offer 1 round of free revisions within 7 days of launch. Additional changes can be made at nominal costs.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-card border border-border px-3 py-2 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <AccordionItem value={item.q}>
                      <AccordionTrigger className="hover:cursor-pointer">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-base">{item.q}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground pl-7">
                          {item.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ================= LEAD FORM ================= */}
        <section id="form" className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Reserve Your ₹2,999 Slot
              </h2>
              <p className="text-lg text-muted-foreground">
                Takes less than 60 seconds. No payment required now.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </section>

        {/* ================= TRUST FOOTER ================= */}
        <footer className="border-t border-border py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-green-500" />
                </div>
                <p className="font-semibold">Secure & Trusted</p>
                <p className="text-sm text-muted-foreground">
                  Your data is safe with us. No spam, ever.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-yellow-500" />
                </div>
                <p className="font-semibold">50+ Happy Clients</p>
                <p className="text-sm text-muted-foreground">
                  Trusted by businesses across India
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Timer className="w-7 h-7 text-blue-500" />
                </div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-muted-foreground">
                  {`We're with you throughout the build process`}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
