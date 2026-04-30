"use client";

/**
 * <Reveal> — Bidirectional scroll-triggered animation wrapper.
 *
 * - Scroll DOWN → element enters from below (y: +offset)
 * - Scroll UP   → element enters from above (y: -offset)
 * - Replays every time the element re-enters the viewport
 * - Supports slot-based stagger via `delay` prop
 * - Exposes `variant` for non-directional presets (fade, slide-left, slide-right, scale)
 */

import * as React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

type Variant =
  | "rise"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "clip";

interface RevealProps {
  children: React.ReactNode;
  /** Offset in px for directional rise animation (default 32) */
  offset?: number;
  /** Stagger delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Animation variant — "rise" uses direction-aware y, others are fixed */
  variant?: Variant;
  /** Fraction of element visible before triggering (default 0.12) */
  amount?: number;
  /** Extra className on the wrapper div */
  className?: string;
  /** Render as a different tag */
  as?: React.ElementType;
  /** Easing curve — cubic-bezier 4-tuple */
  ease?: [number, number, number, number];
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function buildVariants(
  direction: "down" | "up",
  variant: Variant,
  offset: number,
): Variants {
  switch (variant) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    case "slide-left":
      return {
        hidden: { opacity: 0, x: -offset },
        visible: { opacity: 1, x: 0 },
      };
    case "slide-right":
      return {
        hidden: { opacity: 0, x: offset },
        visible: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.88 },
        visible: { opacity: 1, scale: 1 },
      };
    case "clip":
      return {
        hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        visible: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
      };
    case "rise":
    default:
      // Direction-aware: entering from bottom when scrolling down, from top when scrolling up
      return {
        hidden: { opacity: 0, y: direction === "down" ? offset : -offset },
        visible: { opacity: 1, y: 0 },
      };
  }
}

export function Reveal({
  children,
  offset = 32,
  delay = 0,
  duration = 0.65,
  variant = "rise",
  amount = 0.12,
  className,
  as: Tag = "div",
  ease = EASE_OUT_EXPO,
}: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const direction = useScrollDirection();

  // once: false → replays every time element enters/leaves viewport
  const inView = useInView(ref as React.RefObject<Element>, {
    once: false,
    amount,
  });

  const variants = buildVariants(direction, variant, offset);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealGroup — wraps a set of children and staggers their Reveal animations.
 * Each child index gets `delay = index * stagger`.
 * Children must be React elements.
 */
export function RevealGroup({
  children,
  stagger = 0.07,
  offset = 28,
  duration = 0.6,
  variant = "rise",
  amount = 0.1,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  offset?: number;
  duration?: number;
  variant?: Variant;
  amount?: number;
  className?: string;
}) {
  const direction = useScrollDirection();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        const variants = buildVariants(direction, variant, offset);
        return (
          <motion.div
            key={i}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              duration,
              delay: i * stagger,
              ease: EASE_OUT_EXPO,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
