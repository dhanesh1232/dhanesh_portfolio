"use client";
import { extractSkills } from "@/hooks/object-extractor";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeUp } from "@/utils/motion";
import type { Skill, SkillsRecord } from "./Skills";

interface LogomarqueeProps {
  className?: string;
  skills?: SkillsRecord;
}

function Logomarquee({ skills, className }: LogomarqueeProps) {
  const logos = extractSkills(skills!);
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeUp as Variants}
        className={cn("items-center overflow-hidden", className)}
      >
        <div className="w-full max-w-7xl flex flex-col gap-y-6">
          <Marquee logos={logos} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const Marquee = ({
  logos,
  direction = "forwards",
}: {
  logos: Skill[];
  direction?: string;
}) => {
  const numItems = logos.length;
  const speed = "25s";
  const itemWidth = "80px";
  const itemGap = "25px";

  return (
    <div
      className="max-w-full overflow-hidden"
      style={
        {
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="w-max flex"
        style={
          {
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          } as React.CSSProperties
        }
      >
        {[...logos, ...logos].map(({ Icon, color }, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 group flex justify-center items-center bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              style={
                {
                  width: "var(--item-width)",
                  aspectRatio: "1 / 1.2",
                  marginRight: "var(--item-gap)",
                  animation: `marquee-move var(--speed) linear infinite ${direction}`,
                } as React.CSSProperties
              }
            >
              <Icon
                className={`w-3/5 h-auto ${color} group-hover:scale-110 transition-transform ease-in-out duration-150`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logomarquee;
