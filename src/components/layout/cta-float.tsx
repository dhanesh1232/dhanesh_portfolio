"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, Gift, Sparkles, LucideIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { usePortfolio } from "@/context/parent";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

/* ──────────────────────────────────────────────────────────────────
   Industrial editorial style: sharp corners, amber-system colors,
   no rounded-full blobs.
─────────────────────────────────────────────────────────────────── */

const baseBtn =
  "group relative p-3 shadow-lg backdrop-blur-sm \
   transition-all duration-300 ease-out transform \
   hover:scale-105 cursor-pointer text-sm leading-none";

const hiddenState = "opacity-0 translate-y-3 scale-90 pointer-events-none";
const visibleState = "opacity-100 translate-y-0 scale-100";

/** Tooltip content using brand tokens */
function BrandTooltip({ label }: { label: string }) {
  return (
    <TooltipContent
      side="left"
      className="text-xs font-mono tracking-wide border px-2 py-1"
      style={{
        background: "var(--p-elevated)",
        borderColor: "var(--p-border-mid)",
        color: "var(--p-text-muted)",
        borderRadius: 0,
      }}
    >
      {label}
    </TooltipContent>
  );
}

/** Link-based action button */
function CTALink({
  icon: Icon,
  href,
  hovered,
  label,
  btnStyle,
}: {
  icon: IconType | LucideIcon;
  href: string;
  hovered: boolean;
  label: string;
  btnStyle: React.CSSProperties;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            baseBtn,
            "flex items-center justify-center",
            hovered ? visibleState : hiddenState,
          )}
          style={btnStyle}
        >
          <Icon className="h-4 w-4 relative z-10" />
        </Link>
      </TooltipTrigger>
      <BrandTooltip label={label} />
    </Tooltip>
  );
}

/** Button-based action */
function CTAAction({
  icon: Icon,
  hovered,
  label,
  btnStyle,
  onClick,
}: {
  icon: IconType | LucideIcon;
  hovered: boolean;
  label: string;
  btnStyle: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          aria-label={label}
          onClick={onClick}
          className={cn(
            baseBtn,
            "flex items-center justify-center",
            hovered ? visibleState : hiddenState,
          )}
          style={btnStyle}
        >
          <Icon className="h-4 w-4 relative z-10" />
        </button>
      </TooltipTrigger>
      <BrandTooltip label={label} />
    </Tooltip>
  );
}

/* ── Shared button styles ────────────────────────────────────────── */
const whatsappStyle: React.CSSProperties = {
  background: "#25d366",
  color: "#fff",
};

const dimStyle: React.CSSProperties = {
  background: "var(--p-elevated)",
  border: "1px solid var(--p-border-mid)",
  color: "var(--p-accent)",
};

const mutedStyle: React.CSSProperties = {
  background: "var(--p-elevated)",
  border: "1px solid var(--p-border-mid)",
  color: "var(--p-text-muted)",
};

/* ── Main component ──────────────────────────────────────────────── */
export const CTAFloat = () => {
  const [hovered, setHovered] = React.useState(false);
  const { handleToChangeState } = usePortfolio();

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center gap-2.5 z-50"
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp */}
      <CTALink
        icon={BsWhatsapp}
        href="https://wa.me/+918143963821"
        hovered={hovered}
        label="Chat on WhatsApp"
        btnStyle={whatsappStyle}
      />

      {/* Ecodrix platform */}
      <CTALink
        icon={Gift}
        href="https://ecodrix.com"
        hovered={hovered}
        label="Explore Ecodrix"
        btnStyle={dimStyle}
      />

      {/* Book a call */}
      <CTAAction
        icon={Clock}
        hovered={hovered}
        label="Book a Call"
        btnStyle={mutedStyle}
        onClick={() => handleToChangeState?.("fillOut", true)}
      />

      {/* ── Main trigger — amber square ───────────────────── */}
      <button
        aria-label="Open quick actions"
        onMouseEnter={() => setHovered(true)}
        className="relative flex items-center justify-center p-3.5 cursor-pointer transition-all duration-200 hover:brightness-90"
        style={{
          background: "var(--p-accent)",
          color: "var(--p-bg)",
        }}
      >
        {/* Amber ping ring when idle */}
        {!hovered && (
          <span
            className="absolute inset-0 animate-ping opacity-25"
            style={{ background: "var(--p-accent)" }}
          />
        )}
        <Sparkles className="w-4 h-4 relative z-10" />
      </button>
    </div>
  );
};
