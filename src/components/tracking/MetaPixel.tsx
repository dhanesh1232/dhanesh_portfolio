"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.fbq) return;

    (function (f?: any, b?: any, e?: any, v?: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        (n.callMethod ? n.callMethod : n.queue.push).apply(
          n,
          Array.prototype.slice.call(arguments)
        );
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script");

    window.fbq("init", "767522571903226"); // your pixel id
    window.fbq("track", "PageView");
  }, []);

  return null; // This renders nothing, just loads tracking
}
