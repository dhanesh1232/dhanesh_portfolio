"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-inherit relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-300/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.8, 0.3, 1] }}
          className="text-center lg:text-left space-y-2"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-[length:200%_200%] animate-gradient">
                Dhanesh
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Full-Stack Developer &{" "}
              <span className="text-blue-600 font-bold">Entrepreneur </span>
              <span className="text-cyan-300 font-medium">
                & SaaS Builder
              </span>{" "}
              crafting fast, scalable, and modern digital experiences with
              cutting-edge technologies.
            </motion.p>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map(
              (tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-1 md:py-2 bg-slate-800/40 border border-slate-700/30 rounded-lg text-slate-300 text-sm backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="hover:scale-105">View My Work</span>
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-4 border border-slate-600 rounded-xl text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
              <svg
                className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.8, 0.3, 1] }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-400/10 rounded-full blur-sm animate-float-slower"></div>

          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50 group">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -m-0.5 blur-sm"></div>

              {/* Inner Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border border-white/5"></div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_70%)]"></div>
              <Image
                alt="Dhanesh - Full Stack Developer"
                src="https://res.cloudinary.com/dhzw6k0vc/image/upload/v1763133090/DN_u5rrpd.png"
                fill
                sizes="(max-width: 768px) 320px, 384px"
                priority
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-200">
                  Open to Work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
