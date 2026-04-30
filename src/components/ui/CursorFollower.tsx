"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CursorFollower
 * - Small amber dot that follows the cursor with spring lag
 * - On hover over any [data-cursor] element: expands to ring with label
 * - Desktop only, respects prefers-reduced-motion
 * - Add data-cursor="View" to any element to trigger the expanded state
 */
export function CursorFollower() {
  const [label, setLabel] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 0.3 });

  // Slower spring for the ring (lags more)
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 24, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 24, mass: 0.6 });

  React.useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Desktop only
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setLabel(target.getAttribute("data-cursor") || "");
        setIsHovering(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, [mouseX, mouseY, isVisible]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Dot — fast spring, amber */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "var(--p-accent)" }}
        />
      </motion.div>

      {/* Ring — slow spring, label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9998 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 80 : 36,
          height: isHovering ? 80 : 36,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center transition-all duration-350"
          style={{
            border: "1.5px solid var(--p-accent)",
            opacity: isHovering ? 0.9 : 0.35,
          }}
        />
        {isHovering && label && (
          <motion.span
            className="absolute text-[10px] font-semibold tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              color: "var(--p-accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
