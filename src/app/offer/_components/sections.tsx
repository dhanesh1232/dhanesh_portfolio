"use client";

import {
  Shield,
  Award,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { StarRating } from "./star-rating";
import { usePortfolio } from "@/context/parent";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const { handleToChangeState } = usePortfolio();

  return (
    <motion.section
      style={{ opacity }}
      className="relative max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20 text-center"
    >
      {/* Animated Background */}
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
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Shield className="w-4 h-4 text-green-500" />
          <span>Secure & Trusted</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Users className="w-4 h-4 text-blue-500" />
          <span>50+ Happy Clients</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Award className="w-4 h-4 text-yellow-500" />
          <span>4.5/5 Rating</span>
        </div>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex justify-center gap-1 mb-4"
      >
        <StarRating value={4.5} />
      </motion.div>

      {/* Offer Badge */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
                   bg-blue-600/10 text-blue-600 dark:text-blue-400 
                   font-semibold tracking-wide uppercase text-xs mb-3"
      >
        🎉 New Year 2026 Special
      </motion.span>

      {/* Offer Validity */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-gray-400 mb-6"
      >
        Valid from <span className="text-white font-medium">31 Dec 2025</span>{" "}
        to <span className="text-white font-medium">10 Jan 2026</span> • Limited
        slots
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
      >
        Grow Your Business With a{" "}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-teal-500 to-blue-700 dark:from-blue-400 dark:via-teal-400 dark:to-blue-500">
          High-Converting Website
        </span>{" "}
        to Start 2026 Strong
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
      >
        Get a professional, lead-focused website with WhatsApp chat and
        mobile-first design — without paying agency prices.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
      >
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
                content_name: "New Year 2026 Offer",
                content_type: "website",
              });
            }
          }}
          className="group relative px-8 py-2 rounded-full cursor-pointer 
                     bg-linear-to-r from-blue-600 to-blue-700 
                     text-white text-lg font-semibold shadow-lg 
                     hover:shadow-xl transition-all overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5" />
            Claim ₹2,999 New Year Offer
            <Sparkles className="w-5 h-5 group-hover:text-yellow-400" />
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        <button
          onClick={() => handleToChangeState?.("fillOut", true)}
          className="group px-8 py-2 rounded-full border-2 border-border 
                     hover:border-blue-600 dark:hover:border-blue-400 
                     text-lg font-semibold hover:bg-blue-100/20 
                     transition-all flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5" />
          Book a Free Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Assurance */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-sm text-gray-300 flex items-center justify-center gap-2"
      >
        <CheckCircle2 className="w-4 h-4 text-green-500" />
        No advance required — prices reset after 10 Jan 2026
      </motion.p>
    </motion.section>
  );
};
