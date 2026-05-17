"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { FaGithub } from "react-icons/fa";

/* ──────────────────────────────────────────────────────────────────
   GitHubPulse — quiet "I'm actively shipping" widget.
   Pulls public GitHub data client-side. Falls back to static numbers
   if the API rate-limits or fails.
─────────────────────────────────────────────────────────────────── */

const GH_USER = "dhanesh1232";

type Stats = {
  publicRepos: number;
  followers: number;
  recentPushes: number;
  topLanguages: string[];
  loading: boolean;
};

const FALLBACK: Stats = {
  publicRepos: 42,
  followers: 18,
  recentPushes: 23,
  topLanguages: ["TypeScript", "Python", "JavaScript"],
  loading: false,
};

async function fetchGH(): Promise<Stats> {
  try {
    const [user, events, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${GH_USER}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${GH_USER}/events/public?per_page=100`).then(
        (r) => r.json(),
      ),
      fetch(
        `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
      ).then((r) => r.json()),
    ]);

    if (user?.message) throw new Error(user.message);

    const recentPushes = Array.isArray(events)
      ? events.filter((e: { type: string }) => e.type === "PushEvent").length
      : FALLBACK.recentPushes;

    const langCount: Record<string, number> = {};
    if (Array.isArray(repos)) {
      for (const r of repos) {
        if (r?.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1;
      }
    }
    const topLanguages = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k]) => k);

    return {
      publicRepos: user.public_repos ?? FALLBACK.publicRepos,
      followers: user.followers ?? FALLBACK.followers,
      recentPushes,
      topLanguages: topLanguages.length ? topLanguages : FALLBACK.topLanguages,
      loading: false,
    };
  } catch {
    return FALLBACK;
  }
}

function Tile({
  value,
  label,
  loading,
}: {
  value: string | number;
  label: string;
  loading: boolean;
}) {
  return (
    <div
      className="px-5 py-5 flex flex-col gap-1.5"
      style={{ borderRight: "1px solid var(--p-border)" }}
    >
      <span
        className="font-display font-bold leading-none tabular-nums"
        style={{
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          color: loading ? "var(--p-text-faint)" : "var(--p-text)",
        }}
      >
        {loading ? "—" : value}
      </span>
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--p-text-faint)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function GitHubPulse() {
  const [stats, setStats] = React.useState<Stats>({
    ...FALLBACK,
    loading: true,
  });

  React.useEffect(() => {
    let alive = true;
    fetchGH().then((s) => {
      if (alive) setStats(s);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <Reveal offset={24}>
      <div
        className="overflow-hidden"
        style={{ border: "1px solid var(--p-border)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid var(--p-border)" }}
        >
          <div className="flex items-center gap-2.5">
            <FaGithub
              size={14}
              style={{ color: "var(--p-text-muted)" }}
            />
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "var(--p-text-faint)" }}
            >
              GitHub Pulse
            </span>
          </div>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest hover:text-(--p-accent) transition-colors duration-200"
            style={{ color: "var(--p-text-muted)" }}
          >
            @{GH_USER} ↗
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3"
          style={{ borderBottom: "1px solid var(--p-border)" }}
        >
          <Tile value={stats.publicRepos} label="Repos" loading={stats.loading} />
          <Tile value={stats.followers} label="Followers" loading={stats.loading} />
          <Tile
            value={stats.recentPushes}
            label="Recent pushes"
            loading={stats.loading}
          />
        </div>

        {/* Languages + live dot */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "var(--p-text-faint)" }}
            >
              Top
            </span>
            {(stats.loading ? FALLBACK.topLanguages : stats.topLanguages).map(
              (lang) => (
                <span
                  key={lang}
                  className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5"
                  style={{
                    color: "var(--p-accent)",
                    background: "rgba(245,158,11,0.06)",
                    border: "1px solid rgba(245,158,11,0.18)",
                  }}
                >
                  {lang}
                </span>
              ),
            )}
          </div>

          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#4ade80" }}
            />
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "var(--p-text-muted)" }}
            >
              Active this week
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
