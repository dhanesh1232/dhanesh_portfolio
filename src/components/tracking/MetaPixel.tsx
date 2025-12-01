"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already initialized? stop
    if (window.fbq && typeof window.fbq === "function") return;

    // Load script
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.async = true;
    document.head.appendChild(script);

    // Define fbq
    window.fbq = function (...args: any[]) {
      if ((window.fbq as any).callMethod) {
        (window.fbq as any).callMethod(...args);
      } else {
        (window.fbq as any).queue.push(args);
      }
    };

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    // Init pixel + track
    window.fbq("init", "767522571903226");
    window.fbq("track", "PageView");
  }, []);

  return null;
}
