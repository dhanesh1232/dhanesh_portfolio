"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, Gift, Sparkles, LucideIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { usePortfolio } from "@/context/parent";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const baseBtn =
  "group relative p-3 rounded-full text-white shadow-lg backdrop-blur-md \
   transition-all duration-300 ease-out transform \
   hover:shadow-xl hover:scale-105 cursor-pointer";

const hiddenState = "opacity-0 translate-y-3 scale-90 pointer-events-none";
const visibleState = "opacity-100 translate-y-0 scale-100";

// Shared glow layer
const Glow = () => (
  <span className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
);

function CTAButton({
  icon: Icon,
  href,
  hovered,
  bg,
  label,
}: {
  icon: IconType | LucideIcon;
  href: string;
  hovered: boolean;
  bg: string;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(baseBtn, hovered ? visibleState : hiddenState, bg)}
        >
          <Glow />
          <Icon className="h-4 w-4 relative z-10" />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="left">{label}</TooltipContent>
    </Tooltip>
  );
}

function CTAActionButton({
  hovered,
  label,
  bg,
  icon: Icon,
  onClick,
}: {
  hovered: boolean;
  label: string;
  bg: string;
  icon: IconType | LucideIcon;
  onClick?: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          aria-label={label}
          onClick={onClick}
          className={cn(baseBtn, hovered ? visibleState : hiddenState, bg)}
        >
          <Glow />
          <Icon className="h-4 w-4 relative z-10" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="left">{label}</TooltipContent>
    </Tooltip>
  );
}

export const CTAFloat = () => {
  const [hovered, setHovered] = React.useState(false);
  const { setShowFill, setShowOffer, handleToChangeState } = usePortfolio();

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50"
      onMouseLeave={() => setHovered(false)}
    >
      <CTAButton
        icon={BsWhatsapp}
        href="https://wa.me/+918143963821"
        hovered={hovered}
        bg="bg-gradient-to-br from-green-500 to-green-600"
        label="Chat on WhatsApp"
      />

      {/* <CTAButton
        icon={Gift}
        href="https://www.notion.so/Offer-Letter-234bac2403aa80688e9ef71436fd7d0a"
        hovered={hovered}
        bg="bg-gradient-to-br from-orange-600 via-yellow-500 to-red-600"
        label="Special Offers"
      /> */}

      <CTAActionButton
        icon={Gift}
        hovered={hovered}
        bg="bg-gradient-to-br from-orange-600 via-yellow-500 to-red-600"
        label="Special Offers"
        onClick={() => handleToChangeState?.("offer", true)}
      />

      <CTAActionButton
        icon={Clock}
        hovered={hovered}
        bg="bg-gradient-to-br from-blue-500 to-indigo-600"
        label="Schedule a Call"
        onClick={() => handleToChangeState?.("fillOut", true)}
      />

      {/* Main Floating Button */}
      <button
        aria-label="Open Menu"
        onMouseEnter={() => setHovered(true)}
        className="relative p-3.5 rounded-full cursor-pointer bg-indigo-600 text-white shadow-xl
          hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
      >
        {!hovered && (
          <>
            <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-50"></span>
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-xl"></span>
          </>
        )}
        <Sparkles className="w-4 h-4 text-yellow-400" />
      </button>
    </div>
  );
};
