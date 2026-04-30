"use client";

import * as React from "react";
import { useInView } from "framer-motion";

/**
 * CountUp — Animates a number from 0 to `target` when scrolled into view.
 * Replays every time it re-enters the viewport (once: false behavior).
 * Supports suffix like "+" or "k" appended after the number.
 */
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
  style?: React.CSSProperties;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 900,
  className,
  style,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once: false,
    amount: 0.5,
  });
  const [count, setCount] = React.useState(0);
  const frameRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </span>
  );
}
