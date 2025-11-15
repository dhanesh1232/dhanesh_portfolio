"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-32 px-8 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-32 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
            variants={fadeUp as Variants}
          >
            Let’s Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp as Variants}
          >
            Have an idea? A startup concept? A system that needs automation?
            Let’s shape it with clean engineering, AI-powered workflows, and
            thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={fadeUp as Variants}
          >
            {/* Primary Button */}
            <Link
              href="mailto:dhaneshreddy980@gmail.com"
              className="relative group px-12 py-2 rounded-xl text-lg font-semibold text-slate-900 bg-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>

            {/* Ghost Button */}
            <Link
              href="#projects"
              className="relative px-12 py-2 rounded-xl border border-cyan-500 text-cyan-400 hover:text-slate-900 hover:bg-cyan-400 transition font-semibold text-lg group"
            >
              <span className="relative z-10">View Projects</span>

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-cyan-500 blur-xl transition"></div>
            </Link>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            variants={fadeUp as Variants}
            className="mt-6 h-[3px] w-40 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60"
          />
        </motion.div>
      </div>
    </section>
  );
}
