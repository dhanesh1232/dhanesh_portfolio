/**
 * useScrollDirection
 * Returns 'down' | 'up' based on current scroll velocity.
 * Lightweight — uses a single passive scroll listener shared via a
 * module-level singleton so multiple consumers don't each add their own.
 */
"use client";

import * as React from "react";

type Direction = "down" | "up";

let _lastY = 0;
let _direction: Direction = "down";
const _listeners = new Set<(d: Direction) => void>();
let _attached = false;

function _handleScroll() {
  const y = window.scrollY;
  const next: Direction = y >= _lastY ? "down" : "up";
  if (next !== _direction) {
    _direction = next;
    _listeners.forEach((fn) => fn(_direction));
  }
  _lastY = y;
}

function attachGlobal() {
  if (_attached || typeof window === "undefined") return;
  _attached = true;
  window.addEventListener("scroll", _handleScroll, { passive: true });
}

export function useScrollDirection(): Direction {
  const [direction, setDirection] = React.useState<Direction>("down");

  React.useEffect(() => {
    attachGlobal();
    _listeners.add(setDirection);
    return () => {
      _listeners.delete(setDirection);
    };
  }, []);

  return direction;
}
