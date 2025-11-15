"use client";
import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, stagger, hoverScale } from "@/utils/motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiVercel,
  SiPrisma,
  SiGraphql,
  SiJest,
  SiJavascript,
  SiGoogle,
  SiGooglemarketingplatform,
  SiMeta,
  SiGoogleanalytics,
  SiOpenai,
  SiN8N,
  SiChatbot,
  SiRobotframework,
  SiGoogleads,
  SiOpensearch,
} from "react-icons/si";
import { Loader2, Search } from "lucide-react";
import Logomarquee from "./Marquee";
import { Shimmer } from "../shimmer";
import { IconType } from "react-icons";

// An enum for all skill category groups
export type SkillCategory =
  | "Frontend Mastery"
  | "Backend & Databases"
  | "Cloud & DevOps"
  | "Tools & Testing"
  | "Marketing & Growth"
  | "Automation & AI";

// Skill entry structure, adjust Icon type as needed (usually React.FC or string if SVG component)
export interface Skill {
  id: string;
  name: string;
  Icon: IconType;
  level: number; // Should be 0-100
  color: string; // Tailwind color class
  relay: string; // Theme relay (color)
}

// Record mapping skill category to array of skills
export type SkillsRecord = Record<SkillCategory, Skill[]>;

const skills: SkillsRecord = {
  "Frontend Mastery": [
    {
      id: "REACT",
      name: "React",
      Icon: SiReact,
      level: 95,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "NEXT_JS",
      name: "Next.js",
      Icon: SiNextdotjs,
      level: 90,
      color: "text-white",
      relay: "white",
    },
    {
      id: "TYPESCRIPT",
      name: "TypeScript",
      Icon: SiTypescript,
      level: 88,
      color: "text-blue-500",
      relay: "blue",
    },
    {
      id: "JAVASCRIPT",
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

  "Backend & Databases": [
    {
      id: "NODE",
      name: "Node.js",
      Icon: SiNodedotjs,
      level: 85,
      color: "text-green-500",
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
      id: "POSTGRESQL",
      name: "PostgreSQL",
      Icon: SiPostgresql,
      level: 80,
      color: "text-blue-300",
      relay: "blue",
    },
    {
      id: "MONGODB",
      name: "MongoDB",
      Icon: SiMongodb,
      level: 78,
      color: "text-green-400",
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

  "Cloud & DevOps": [
    {
      id: "AWS",
      name: "AWS",
      Icon: SiAmazonaws,
      level: 75,
      color: "text-orange-400",
      relay: "orange",
    },
    {
      id: "DOCKER",
      name: "Docker",
      Icon: SiDocker,
      level: 70,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "VERCEL",
      name: "Vercel",
      Icon: SiVercel,
      level: 85,
      color: "text-white",
      relay: "white",
    },
    {
      id: "GITHUB_ACTIONS",
      name: "G - Actions",
      Icon: SiGithubactions,
      level: 72,
      color: "text-gray-300",
      relay: "gray",
    },
  ],

  "Tools & Testing": [
    {
      id: "GIT",
      name: "Git",
      Icon: SiGit,
      level: 90,
      color: "text-orange-500",
      relay: "orange",
    },
    {
      id: "GRAPHQL",
      name: "GraphQL",
      Icon: SiGraphql,
      level: 68,
      color: "text-pink-500",
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
    {
      id: "REST_API",
      name: "REST APIs",
      Icon: SiNodedotjs,
      level: 88,
      color: "text-green-300",
      relay: "green",
    },
  ],

  "Marketing & Growth": [
    {
      id: "SEO",
      name: "SEO",
      Icon: Search, // replace with proper icon if needed
      level: 92,
      color: "text-green-500",
      relay: "green",
    },
    {
      id: "GOOGLE_ADS",
      name: "Google Ads",
      Icon: SiGoogleads,
      level: 88,
      color: "text-blue-500",
      relay: "blue",
    },
    {
      id: "META_ADS",
      name: "Meta Ads",
      Icon: SiMeta,
      level: 84,
      color: "text-blue-400",
      relay: "blue",
    },
    {
      id: "ANALYTICS",
      name: "Analytics",
      Icon: SiGoogleanalytics,
      level: 90,
      color: "text-orange-500",
      relay: "orange",
    },
  ],

  "Automation & AI": [
    {
      id: "AI_TOOLS",
      name: "AI Tools",
      Icon: SiOpenai,
      level: 85,
      color: "text-purple-400",
      relay: "purple",
    },
    {
      id: "N8N",
      name: "Automation",
      Icon: SiN8N,
      level: 80,
      color: "text-orange-500",
      relay: "orange",
    },
    {
      id: "CHATBOT_DEV",
      name: "Chatbot Dev",
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
      color: "text-gray-200",
      relay: "gray",
    },
  ],
};

export function Skills() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <section id="skills" className="py-6 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">
                Technical Expertise
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
              variants={fadeUp as Variants}
            >
              Tech Stack &
              <span className="bg-gradient-to-r inline from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Skills
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeUp as Variants}
            >
              Mastering modern technologies to build{" "}
              <span className="text-cyan-300 font-semibold">
                scalable applications
              </span>{" "}
              and
              <span className="text-cyan-300 font-semibold">
                {" "}
                exceptional user experiences
              </span>
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={fadeUp as Variants}
                className="relative"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -m-0.5 blur-sm"></div>

                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">
                      {category}
                    </h3>
                    <div className="text-slate-400 text-sm font-medium px-3 py-1 bg-slate-700/50 rounded-full">
                      {items.length} skills
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {items.map(({ name, Icon, level, color, relay }) => (
                      <motion.div
                        key={name}
                        variants={hoverScale as Variants}
                        className="group relative p-0.5"
                        transition={{ type: "spring", stiffness: 300 }}
                        onMouseEnter={() => setHovered(name)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {hovered === name && <Shimmer color={relay} />}

                        {/* Skill Card */}
                        <div className="flex items-center z-10 justify-between p-4 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 group-hover:bg-slate-700/40 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 backdrop-blur-sm">
                          {/* Left: Icon and Name */}
                          <div className="flex items-center gap-4 flex-1">
                            <div className="relative">
                              <Icon
                                className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform duration-300`}
                              />
                              <div className="absolute inset-0 bg-current opacity-10 rounded-lg blur-sm"></div>
                            </div>
                            <span className="font-semibold text-white text-lg">
                              {name}
                            </span>
                          </div>

                          {/* Right: Level Indicator */}
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-slate-600 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${level}%` }}
                                transition={{
                                  duration: 1.5,
                                  delay: 0.2,
                                  ease: "easeOut",
                                }}
                                className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full`}
                              />
                            </div>
                            <span className="text-sm font-bold text-cyan-300 min-w-8">
                              {level}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Logomarquee className="mt-10" skills={skills} />

          {/* Call to Action */}
          <motion.div
            variants={fadeUp as Variants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-slate-400 mb-6">
              Continuously learning and adapting to new technologies
            </p>
            <Loader2
              className="animate-[spin_3s_linear_infinite] mx-auto w-10 h-10 my-4 border-cyan-400"
              color="cyan"
            />
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-cyan-300">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Always exploring new tools and frameworks
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
function SiAmazonaws({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#252f3e"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
      ></path>
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
      ></path>
    </svg>
  );
}
