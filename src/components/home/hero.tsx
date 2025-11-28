"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { usePortfolio } from "@/context/parent";

export const Hero = () => {
  const [hidden, setHidden] = React.useState(false);
  const { handleToChangeState } = usePortfolio();

  React.useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 80); // hide when scrolled a bit
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Hi, {"I'm "}
              <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-[length:200%_200%] animate-gradient">
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
            {[
              { label: "Next.js", color: "from-slate-500 to-slate-300" },
              { label: "TypeScript", color: "from-blue-500 to-blue-300" },
              { label: "Tailwind", color: "from-cyan-400 to-cyan-300" },
              { label: "React", color: "from-blue-400 to-blue-300" },
              { label: "Node.js", color: "from-green-500 to-green-300" },
              { label: "Express", color: "from-gray-300 to-gray-500" },
              { label: "MongoDB", color: "from-green-400 to-green-300" },
            ].map((tech, index) => (
              <motion.span
                key={tech.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className={`
        relative px-4 py-1.5 md:py-2 rounded-lg text-sm font-medium
        text-white
        bg-slate-900/40 border border-slate-700/50
        backdrop-blur-sm
        shadow-[0_0_10px_rgba(0,0,0,0.3)]
        cursor-default
        group
        transition-all duration-300
        hover:scale-110 hover:bg-slate-800/60
      `}
              >
                {/* Glow Border Effect */}
                <span
                  className={`
          absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-gradient-to-r ${tech.color}
          blur-md
        `}
                ></span>

                {/* Inside Glow Ring */}
                <span
                  className={`
          absolute inset-0 rounded-lg opacity-0
          group-hover:opacity-40 transition-all duration-300
          bg-gradient-to-r ${tech.color}
          blur-xl
        `}
                />

                {/* Shine Line */}
                <span
                  className="
          absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px]
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          opacity-0 group-hover:opacity-70
          transition-all duration-500
        "
                />

                {/* Actual Label */}
                <span className="relative z-10">{tech.label}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Primary CTA – Neon Gradient */}
            <Link
              href="#projects"
              className="
      relative group inline-flex items-center justify-center
      px-7 md:px-10 py-2 md:py-3
      font-medium text-white rounded-xl
      bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
      shadow-lg shadow-cyan-500/20
      hover:shadow-blue-500/40
      transition-all duration-300
      hover:scale-[1.03]
      overflow-hidden
    "
            >
              {/* Glow sweep */}
              <span
                className="
        absolute inset-0 opacity-0 group-hover:opacity-20
        bg-gradient-to-r from-white/40 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700
      "
              />

              <span className="relative z-10 mr-2 group-hover:scale-105 transition">
                View My Work
              </span>

              {/* Arrow with trail */}
              <svg
                className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </Link>

            {/* Secondary CTA – Glass + Glow Border */}
            <button
              onClick={() => handleToChangeState?.("fillOut", true)}
              role="button"
              className="
      group relative inline-flex items-center justify-center
      px-7 md:px-10 py-2 md:py-3
      font-medium rounded-xl
      border border-slate-600 text-slate-300
      backdrop-blur-md bg-slate-900/40
      hover:text-white hover:border-cyan-400
      hover:bg-slate-800/50
      transition-all duration-300
      hover:scale-[1.03]
      overflow-hidden cursor-pointer
    "
            >
              {/* Glow Border Animation */}
              <span
                className="
        absolute inset-0 rounded-xl
        border border-transparent
        group-hover:border-cyan-400
        group-hover:shadow-[0_0_12px_3px_rgba(34,211,238,0.4)]
        transition-all duration-500
      "
              ></span>

              <span className="relative z-10 mr-2">Book</span>

              <Clock className="h-4 w-4 text-muted-foreground  group-hover:text-cyan-500" />
            </button>
            {/* <button
              onClick={() => handleToChangeState?.("offer", true)}
              className="
      group relative inline-flex items-center justify-center
      px-7 md:px-10 py-2 md:py-3
      font-medium rounded-xl
      border-0 outline-0 ring-0 border-gray-600
      backdrop-blur-md bg-blue-600/70
      hover:text-white hover:border-blue-400
      transition-all duration-300
      hover:scale-[1.03]
      overflow-hidden gap-2 text-white hover:bg-blue-500/70"
            >
              Offer
              <ArrowRight className="w-4 h-4 text-white  group-hover:text-cyan-600 group-hover:translate-x-2 transform transition-all ease-in-out duration-300" />
            </button> */}
            <Link href="/offer">
              <button
                className="
      group relative inline-flex items-center justify-center
      px-7 md:px-10 py-2 md:py-3
      font-medium rounded-xl
      border-0 outline-0 ring-0 border-gray-600
      backdrop-blur-md bg-blue-600/70
      hover:text-white hover:border-blue-400
      transition-all duration-300
      hover:scale-[1.03]
      overflow-hidden gap-2 text-white hover:bg-blue-500/70 cursor-pointer"
              >
                Offer
                <ArrowRight className="w-4 h-4 text-white  group-hover:text-cyan-600 group-hover:translate-x-2 transform transition-all ease-in-out duration-300" />
              </button>
            </Link>
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
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
