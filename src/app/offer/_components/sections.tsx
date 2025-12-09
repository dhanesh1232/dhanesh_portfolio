import {
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
        className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
      >
        Get a professional, lead-focused website with WhatsApp chat and
        mobile-first design — without paying agency prices.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
      >
        <Link
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
          href="#form"
          className="group relative px-8 py-2 rounded-full cursor-pointer bg-linear-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 group-hover:scale-[1.05] transition-transform" />{" "}
            Claim ₹2,999 Offer
            <Sparkles className="w-5 h-5 group-hover:scale-[1.05] group-hover:text-yellow-500 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

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
          className="group px-8 py-2 rounded-full border-2 border-border hover:border-blue-600 dark:hover:border-blue-400 text-lg font-semibold hover:bg-blue-100/20 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" /> Book a Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 text-sm text-gray-300 flex items-center justify-center gap-2"
      >
        <CheckCircle2 className="w-4 h-4 text-green-500" />
        No advance required — pay only after confirmation
      </motion.p>
    </motion.section>
  );
};
