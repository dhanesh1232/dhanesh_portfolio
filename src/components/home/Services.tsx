"use client";
import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, stagger, hoverLift } from "@/utils/motion";
import {
  FaCode,
  FaPalette,
  FaCog,
  FaRocket,
  FaRobot,
  FaBullhorn,
} from "react-icons/fa";
import { Shimmer } from "../shimmer";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "FULLSTACK_WEB_DEV",
    title: "Full-Stack Web Development",
    description:
      "Crafting blazing-fast, scalable applications using Next.js, TypeScript, Node.js, and modern database systems.",
    Icon: FaCode,
    color: "gray",
    text: "text-gray-300",
    hover: "group-hover:text-gray-300",
    bg: "bg-gray-500/10",
    gradient: "from-gray-600 to-gray-400",
  },
  {
    id: "UIUX_ENGINEERING",
    title: "UI/UX & Frontend Engineering",
    description:
      "Designing refined interfaces with consistent systems, smooth interactions, and pixel-perfect execution.",
    Icon: FaPalette,
    color: "pink",
    text: "text-pink-300",
    hover: "group-hover:text-pink-300",
    bg: "bg-pink-500/10",
    gradient: "from-pink-500 to-purple-400",
  },
  {
    id: "AI_AUTOMATION",
    title: "AI & Workflow Automation",
    description:
      "Building n8n flows, chatbot agents, integrations, and custom automation pipelines that save time and boost efficiency.",
    Icon: FaRobot,
    color: "purple",
    text: "text-purple-300",
    hover: "group-hover:text-purple-300",
    bg: "bg-purple-500/10",
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    id: "SEO_ADS_GROWTH",
    title: "SEO, Ads & Growth Systems",
    description:
      "Creating high-converting landing pages, SEO optimization, and automated Google/Meta ad funnels that drive leads.",
    Icon: FaBullhorn,
    color: "blue",
    text: "text-blue-300",
    hover: "group-hover:text-blue-300",
    bg: "bg-blue-500/10",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "SAAS_PLATFORM_DEV",
    title: "SaaS MVP & Platform Development",
    description:
      "Transforming raw ideas into full SaaS platforms with user auth, billing, automation, and deployment pipelines.",
    Icon: FaRocket,
    color: "cyan",
    text: "text-cyan-300",
    hover: "group-hover:text-cyan-300",
    bg: "bg-cyan-500/10",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    id: "API_INTEGRATIONS",
    title: "API Integrations & Technical Setup",
    description:
      "Connecting systems with custom APIs, webhook handlers, cloud services, and secure backend infrastructure.",
    Icon: FaCog,
    color: "oklch(76.5% 0.177 163.223)",
    text: "text-emerald-300",
    hover: "group-hover:text-emerald-300",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-500 to-green-400",
  },
];

export default function Services() {
  const [hovered, setHovered] = React.useState<string | null>(null);
  return (
    <section id="services" className="py-24 px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger as Variants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
            variants={fadeUp as Variants}
          >
            What I Offer
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 text-center mb-16 max-w-2xl mx-auto"
            variants={fadeUp as Variants}
          >
            A blend of engineering, automation, and growth-focused execution —
            delivering systems that perform and scale with purpose.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(
              ({
                title,
                description,
                Icon,
                bg,
                color,
                text,
                hover,
                gradient,
                id,
              }) => (
                <motion.div
                  key={id}
                  className="rounded-2xl border p-0.5 border-slate-700 relative transition group"
                  variants={fadeUp as Variants}
                  whileHover="whileHover"
                  custom={hoverLift}
                  onHoverStart={() => setHovered(id)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <Shimmer
                    key={hovered ? `${id}-hover` : `${id}-idle`}
                    color={color}
                    duration={hovered === id ? "3.5s" : "2s"}
                  />
                  <div className="z-20 bg-slate-800 p-6 h-full rounded-2xl relative">
                    <div
                      className={`absolute inset-0 group-hover:bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition`}
                    />
                    <div className="flex items-center justify-between">
                      <div
                        className={`relative w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-6 transition`}
                      >
                        <Icon className={`w-7 h-7 ${text}`} />
                      </div>
                      <Icon
                        className={cn(
                          "opacity-0 group-hover:opacity-20 size-1 ease-in-out duration-500 transition-opacity",
                          text
                        )}
                      />
                    </div>

                    <h3
                      className={`text-xl font-semibold mb-3 ${hover} transition`}
                    >
                      {title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
