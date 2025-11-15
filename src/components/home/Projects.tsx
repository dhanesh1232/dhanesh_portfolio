"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fadeUp, stagger, hoverLift } from "@/utils/motion";
import { SiNextdotjs } from "react-icons/si";

const projects = [
  {
    title: "Ecodrix SaaS Platform",
    description:
      "Multi-tenant SaaS platform with AI chatbot, ads automation, and subscription management. Built with modern web technologies and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "AI",
    ],
    link: "#",
    github: "#",
    featured: true,
    category: "SaaS Platform",
    status: "Progress",
  },
  {
    title: "WhatsApp CMS Manager",
    description:
      "AI-powered WhatsApp management system with automated responses, analytics dashboard, and multi-user collaboration features.",
    image:
      "https://images.unsplash.com/photo-1636751364472-12bfad09b451?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "AI", "Redis"],
    link: "#",
    github: "#",
    featured: true,
    category: "AI Automation",
    status: "Progress",
  },
  {
    title: "Rich Text Editor Package",
    description:
      "Open-source npm package featuring a customizable TinyMCE-like rich text editor component with modern tooling and extensibility.",
    image:
      "https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?q=80&w=2069&auto=format&fit=crop",
    tech: ["TypeScript", "React", "Tailwind CSS", "NextJS", "npm"],
    link: "#",
    github: "#",
    featured: true,
    category: "Open Source",
    status: "Published",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description:
      "Real-time analytics dashboard for e-commerce businesses with advanced metrics and reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "Chart.js"],
    link: "#",
    github: "#",
    featured: false,
    category: "Dashboard",
    status: "In Development",
  },

  // ⭐ Replacement Project (Real)
  {
    title: "Client Lead Generation System",
    description:
      "A full-stack lead generation system integrating SEO-optimized landing pages, automated WhatsApp callbacks, AI pre-qualification, and analytics tracking. Built for service businesses to capture, nurture, and convert leads automatically.",
    image:
      "https://plus.unsplash.com/premium_photo-1756165389225-52ce93ec16bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "n8n",
      "Twilio/WhatsApp",
      "Google Analytics",
      "Meta Ads",
      "SEO",
    ],
    link: "#",
    github: "#",
    featured: false,
    category: "Growth Automation",
    status: "Live",
  },

  {
    title: "Design System Library",
    description:
      "Comprehensive design system and component library for consistent UI development across projects.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2000&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Figma"],
    link: "#",
    github: "#",
    featured: false,
    category: "UI/UX",
    status: "Published",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-6 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              variants={fadeUp as Variants}
              className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">
                Featured Work
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
              variants={fadeUp as Variants}
            >
              Selected
              <span className="inline bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Projects
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeUp as Variants}
            >
              A curated collection of{" "}
              <span className="text-cyan-300 font-semibold">
                production-ready applications
              </span>{" "}
              and
              <span className="text-cyan-300 font-semibold">
                {" "}
                innovative solutions
              </span>{" "}
              built with modern technologies
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp as Variants}
                whileHover="whileHover"
                custom={hoverLift}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5 blur-sm"></div>

                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : project.status === "Published"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            project.status === "Live"
                              ? "bg-green-400 animate-pulse"
                              : project.status === "Published"
                              ? "bg-blue-400"
                              : "bg-yellow-400"
                          }`}
                        ></div>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs font-medium border border-slate-700/50">
                        {project.category}
                      </span>
                    </div>

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-3">
                          <SiNextdotjs className="w-3 h-3" />
                          Featured Project
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-slate-700/50 text-cyan-300 text-xs font-medium border border-slate-600/30 backdrop-blur-sm group-hover:border-cyan-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View More CTA
          <motion.div variants={fadeUp as any} className="text-center mt-16">
            <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in seeing more?
              </h3>
              <p className="text-slate-300 mb-6">
                Explore more projects, case studies, and technical deep dives on
                my portfolio.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                View Full Portfolio
                <svg
                  className="w-5 h-5"
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
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
