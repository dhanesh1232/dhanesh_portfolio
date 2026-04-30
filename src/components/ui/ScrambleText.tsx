"use client";

import * as React from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

/**
 * ScrambleText — Decodes random characters → real text on mount.
 * - Each letter cycles through random chars before settling
 * - Left-to-right reveal with staggered timing
 * - Single play only (not on scroll — this is a first-impression effect)
 */
interface ScrambleTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number; // total ms for entire word
  startDelay?: number; // ms before starting
}

export function ScrambleText({
  text,
  className,
  style,
  duration = 900,
  startDelay = 300,
}: ScrambleTextProps) {
  const [display, setDisplay] = React.useState<string[]>(() =>
    Array.from(
      { length: text.length },
      () => CHARS[Math.floor(Math.random() * CHARS.length)],
    ),
  );
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const letters = text.split("");
    const perLetter = duration / letters.length;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    letters.forEach((_, i) => {
      // Scramble phase — runs until this letter's settle time
      const settleAt = startDelay + i * perLetter;

      // Kick off rapid scramble for each letter
      const scrambleInterval = setInterval(() => {
        if (cancelled) {
          clearInterval(scrambleInterval);
          return;
        }
        setDisplay((prev) => {
          const next = [...prev];
          next[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          return next;
        });
      }, 40);

      // Settle this letter at its time
      const t = setTimeout(() => {
        if (cancelled) return;
        clearInterval(scrambleInterval);
        setDisplay((prev) => {
          const next = [...prev];
          next[i] = letters[i];
          return next;
        });
        if (i === letters.length - 1) setDone(true);
      }, settleAt);

      timeouts.push(t);
    });

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className} style={style} aria-label={text}>
      {display.map((char, i) => (
        <span
          key={i}
          style={{
            color: done || char === text[i] ? undefined : "var(--p-accent)",
            transition: "color 0.1s",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
