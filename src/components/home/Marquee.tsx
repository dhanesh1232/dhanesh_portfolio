"use client";
import { extractSkills } from "@/hooks/object-extractor";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeUp } from "@/utils/motion";

interface LogomarqueeProps {
  className?: string;
  skills?: SkillsRecord;
}

function Logomarquee({ skills, className }: LogomarqueeProps) {
  const logos = extractSkills(skills!);

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeUp as Variants}
        className={cn("items-center overflow-hidden", className)}
      >
        <div className="w-full max-w-7xl flex flex-col gap-y-6">
          <MarqueeTrack logos={logos} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const MarqueeTrack = ({
  logos,
  direction = "forwards",
}: {
  logos: Skill[];
  direction?: string;
}) => {
  const numItems = logos.length;
  const speed = "28s";
  const itemWidth = "76px";
  const itemGap = "16px";

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
            "linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent)",
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
        {[...logos, ...logos].map(({ Icon, color }, index) => (
          <div
            key={index}
            className="shrink-0 group flex justify-center items-center transition-all duration-300"
            style={
              {
                width: "var(--item-width)",
                aspectRatio: "1 / 1",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
                border: "1px solid var(--p-border)",
                background: "var(--p-elevated)",
              } as React.CSSProperties
            }
          >
            <Icon
              className={`w-2/5 h-auto ${color} group-hover:scale-110 transition-transform ease-out duration-200`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logomarquee;
