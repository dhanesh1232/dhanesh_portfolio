"use client";

import React from "react";

interface StarProps {
  size?: number;
  fillPercentage: number; // 0 to 100 representing star fill %
}

export function Star({ size = 16, fillPercentage }: StarProps) {
  const fillId = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="1" y2="0">
          <stop offset={`${fillPercentage}%`} stopColor="gold" />
          <stop offset={`${fillPercentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Base star shape */}
      <path
        fill={`url(#${fillId})`}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 
           5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        stroke="none"
      />
      {/* Stroke to outline star */}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 
           5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        fill="none"
      />
    </svg>
  );
}

export function StarRating({
  value,
  size = 16,
}: {
  value?: number | string | null | undefined;
  size?: number;
}) {
  if (!value) return <span className="text-muted-foreground">-</span>;
  const n = Number(value);
  const stars = [];

  // For each star index, calculate how much fill it should get (0 to 100)
  for (let i = 0; i < 5; i++) {
    const starValue = Math.min(Math.max(n - i, 0), 1) * 100;
    stars.push(<Star key={i} size={size} fillPercentage={starValue} />);
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-xs text-muted-foreground ml-1">{n.toFixed(1)}</span>
    </div>
  );
}
