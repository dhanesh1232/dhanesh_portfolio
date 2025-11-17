"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, Gift, LucideIcon, Sparkles } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { IconType } from "react-icons";

function CTAIconButton({
  icon: Icon,
  href,
  hovered,
  bg = "bg-green-500",
  label,
}: {
  icon: IconType | LucideIcon;
  href: string;
  hovered: boolean;
  bg?: string;
  label?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`relative p-3 rounded-full text-white shadow-lg backdrop-blur-md
          transition-all duration-300 ease-out transform
          ${bg}
          ${
            hovered
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-90 pointer-events-none"
          }
          hover:shadow-xl hover:scale-105`}
        >
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-40"></span>

          <Icon className="h-4 w-4 relative z-10" />
        </Link>
      </TooltipTrigger>

      {label && <TooltipContent side="left">{label}</TooltipContent>}
    </Tooltip>
  );
}

export const CTAFloat = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp — Chat */}
      <CTAIconButton
        icon={BsWhatsapp}
        href="https://wa.me/1234567890"
        hovered={hovered}
        bg="bg-gradient-to-br from-green-500 to-green-600"
        label="Chat on WhatsApp"
      />

      {/* Offer Button */}
      <CTAIconButton
        icon={Gift}
        href="https://wa.me/+918143963821"
        hovered={hovered}
        bg="bg-gradient-to-br from-orange-600 via-yellow-500 to-red-600"
        label="Special Offers"
      />

      {/* Schedule Call */}
      <CTAIconButton
        icon={Clock}
        href="https://wa.me/1234567890"
        hovered={hovered}
        bg="bg-gradient-to-br from-blue-500 to-indigo-600"
        label="Schedule a Call"
      />

      {/* Main Floating Button */}
      <button
        aria-label="Open Menu"
        className="relative p-3.5 rounded-full cursor-pointer bg-indigo-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 focus:outline-none flex items-center justify-center"
      >
        {!hovered && (
          <>
            {/* Soft pulse */}
            <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-50"></span>
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-xl"></span>
          </>
        )}
        {/* Icon */}
        <Sparkles className="w-4 h-4 text-yellow-400" />
      </button>
    </div>
  );
};
