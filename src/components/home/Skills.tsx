"use client";
import * as React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiJest,
  SiMeta,
  SiGoogleanalytics,
  SiOpenai,
  SiN8N,
  SiChatbot,
  SiRobotframework,
  SiGoogleads,
} from "react-icons/si";
import { IconType } from "react-icons";
import { Search } from "lucide-react";
import Logomarquee from "./Marquee";

// ── Skill data ────────────────────────────────────────────────────
const skills: SkillsRecord = {
  Frontend: [
    {
      id: "REACT",
      name: "React",
      Icon: SiReact,
      level: 95,
      color: "text-sky-400",
      relay: "sky",
    },
    {
      id: "NEXT",
      name: "Next.js",
      Icon: SiNextdotjs,
      level: 90,
      color: "text-white",
      relay: "white",
    },
    {
      id: "TS",
      name: "TypeScript",
      Icon: SiTypescript,
      level: 88,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "JS",
      name: "JavaScript",
      Icon: SiJavascript,
      level: 95,
      color: "text-yellow-400",
      relay: "yellow",
    },
    {
      id: "TAILWIND",
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      level: 92,
      color: "text-cyan-400",
      relay: "cyan",
    },
  ],
  "Backend & DB": [
    {
      id: "NODE",
      name: "Node.js",
      Icon: SiNodedotjs,
      level: 85,
      color: "text-green-400",
      relay: "green",
    },
    {
      id: "EXPRESS",
      name: "Express",
      Icon: SiExpress,
      level: 82,
      color: "text-gray-300",
      relay: "gray",
    },
    {
      id: "PG",
      name: "PostgreSQL",
      Icon: SiPostgresql,
      level: 80,
      color: "text-blue-300",
      relay: "blue",
    },
    {
      id: "MONGO",
      name: "MongoDB",
      Icon: SiMongodb,
      level: 78,
      color: "text-green-500",
      relay: "green",
    },
    {
      id: "PRISMA",
      name: "Prisma",
      Icon: SiPrisma,
      level: 75,
      color: "text-white",
      relay: "white",
    },
  ],
  DevOps: [
    {
      id: "GIT",
      name: "Git",
      Icon: SiGit,
      level: 90,
      color: "text-orange-400",
      relay: "orange",
    },
    {
      id: "DOCKER",
      name: "Docker",
      Icon: SiDocker,
      level: 72,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "VERCEL",
      name: "Vercel",
      Icon: SiVercel,
      level: 88,
      color: "text-white",
      relay: "white",
    },
    {
      id: "GHA",
      name: "GH Actions",
      Icon: SiGithubactions,
      level: 72,
      color: "text-gray-300",
      relay: "gray",
    },
    {
      id: "GRAPHQL",
      name: "GraphQL",
      Icon: SiGraphql,
      level: 68,
      color: "text-pink-400",
      relay: "pink",
    },
    {
      id: "JEST",
      name: "Jest",
      Icon: SiJest,
      level: 75,
      color: "text-red-400",
      relay: "red",
    },
  ],
  Marketing: [
    {
      id: "SEO",
      name: "SEO",
      Icon: Search,
      level: 92,
      color: "text-green-400",
      relay: "green",
    },
    {
      id: "GADS",
      name: "Google Ads",
      Icon: SiGoogleads,
      level: 88,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "META",
      name: "Meta Ads",
      Icon: SiMeta,
      level: 84,
      color: "text-blue-500",
      relay: "blue",
    },
    {
      id: "GA",
      name: "Analytics",
      Icon: SiGoogleanalytics,
      level: 90,
      color: "text-orange-400",
      relay: "orange",
    },
  ],
  "AI & Automation": [
    {
      id: "AI",
      name: "AI / LLMs",
      Icon: SiOpenai,
      level: 85,
      color: "text-purple-400",
      relay: "purple",
    },
    {
      id: "N8N",
      name: "n8n",
      Icon: SiN8N,
      level: 82,
      color: "text-orange-400",
      relay: "orange",
    },
    {
      id: "CHATBOT",
      name: "Chatbots",
      Icon: SiChatbot,
      level: 88,
      color: "text-cyan-400",
      relay: "cyan",
    },
    {
      id: "RPA",
      name: "RPA",
      Icon: SiRobotframework,
      level: 72,
      color: "text-gray-300",
      relay: "gray",
    },
  ],
};

function tagSize(level: number) {
  if (level >= 90) return "text-sm px-3 py-1.5";
  if (level >= 80) return "text-xs px-2.5 py-1";
  return "text-xs px-2 py-0.5 opacity-80";
}

const CATEGORIES = Object.keys(skills) as SkillCategory[];

export function Skills() {
  const [active, setActive] = React.useState<SkillCategory>(CATEGORIES[0]);
  const activeSkills = skills[active];

  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: "var(--p-elevated)" }}
    >
      <div className="max-content">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="accent-line" />
          <span className="eyebrow">Stack</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold leading-tight mb-12"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            color: "var(--p-text)",
          }}
        >
          Tools I build with.
        </motion.h2>

        {/* Category tabs + skill tags */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: category pills */}
          <div className="md:col-span-3 flex md:flex-col gap-2 flex-wrap">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setActive(cat)}
                className="text-left px-4 py-2 text-sm font-medium transition-all duration-200 border"
                style={{
                  borderColor:
                    active === cat
                      ? "var(--p-accent-border)"
                      : "var(--p-border)",
                  background:
                    active === cat ? "var(--p-accent-dim)" : "transparent",
                  color:
                    active === cat ? "var(--p-accent)" : "var(--p-text-muted)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Right: skill tags for active category */}
          <div className="md:col-span-9">
            <div className="flex flex-wrap gap-3 items-start content-start min-h-[180px]">
              {activeSkills.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`skill-tag font-medium ${tagSize(skill.level)}`}
                >
                  <skill.Icon
                    className={`flex-shrink-0 ${skill.color}`}
                    style={{ width: "1em", height: "1em" }}
                  />
                  {skill.name}
                </motion.div>
              ))}
            </div>

            {/* Proficiency legend */}
            <div
              className="mt-10 flex items-center gap-6 text-xs"
              style={{
                color: "var(--p-text-muted)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              <span className="flex items-center gap-1.5">
                <span
                  className="block w-3 h-3"
                  style={{ background: "var(--p-accent)", opacity: 0.9 }}
                />
                Expert ≥90%
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="block w-3 h-3"
                  style={{ background: "var(--p-accent)", opacity: 0.5 }}
                />
                Proficient 80–89%
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="block w-3 h-3"
                  style={{ background: "var(--p-accent)", opacity: 0.25 }}
                />
                Working 70–79%
              </span>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16">
          <Logomarquee skills={skills} />
        </div>

        {/* Download CV CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-12 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--p-border)", paddingTop: "2rem" }}
        >
          <span
            className="text-xs uppercase tracking-widest font-mono"
            style={{ color: "var(--p-text-faint)" }}
          >
            Full credentials available
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}
