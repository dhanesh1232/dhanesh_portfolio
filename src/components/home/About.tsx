"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, stagger } from "@/utils/motion";
import { Shimmer } from "../shimmer";

const highlights = [
  {
    title: "3+",
    subtitle: "Years of Craft",
    description:
      "Building clean, scalable applications, AI automations, and high-converting systems.",
    icon: "🛠️",
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
  },
  {
    title: "20+",
    subtitle: "Real Projects",
    description:
      "Web apps, automations, dashboards, landing pages, and open-source tools.",
    icon: "💼",
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
  },
  {
    title: "15+",
    subtitle: "Core Skills",
    description:
      "From full-stack engineering to SEO, ads, workflows, and AI integrations.",
    icon: "⚡",
    gradient: "from-green-500 to-emerald-500",
    color: "green",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 bg-inherit relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp as Variants}
              className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
              variants={fadeUp as Variants}
            >
              Building With Purpose,
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Crafting With Precision
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeUp as Variants}
            >
              {"I'm"} a{" "}
              <span className="text-cyan-300 font-semibold">
                full-stack engineer
              </span>{" "}
              and{" "}
              <span className="text-cyan-300 font-semibold">
                automation-driven creator
              </span>
              , blending development, AI, and marketing systems to build
              products that solve real business problems and drive results.
            </motion.p>
          </div>

          {/* Highlights */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
          >
            {highlights.map(
              (
                { title, subtitle, description, icon, gradient, color },
                index
              ) => (
                <motion.div
                  key={subtitle}
                  variants={fadeUp as Variants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-0.5"
                >
                  <Shimmer color={color} />
                  <div className="absolute z-10 inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5 blur-sm"></div>

                  <div className="relative z-10 bg-slate-800 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{icon}</div>
                      <div className="text-2xl text-slate-400 group-hover:text-cyan-400 transition-colors">
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Info */}
                    <motion.div
                      className={`text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {title}
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {subtitle}
                    </h3>

                    <p className="text-slate-400 text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={fadeUp as Variants}
            className="mt-20 text-center"
          >
            <div className="glow-outline bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/30 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Engineering with{" "}
                <span className="text-cyan-400">Precision & Impact</span>
              </h3>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                I bring together{" "}
                <span className="text-cyan-300">full-stack development</span>,{" "}
                <span className="text-purple-300">AI automations</span>,{" "}
                <span className="text-blue-300">SEO</span>, and{" "}
                <span className="text-orange-300">ad-driven growth</span> to
                build systems that don’t just look good—but work hard
                underneath.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
