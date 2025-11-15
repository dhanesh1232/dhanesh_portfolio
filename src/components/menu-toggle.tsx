"use client";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";

interface ToggleMeunuProps {
  isToggled?: boolean;
  onToggle?: (isOpen: boolean) => void;
}
export const MenuToggle: React.FC<ToggleMeunuProps> = ({
  onToggle,
  isToggled,
  ...props
}) => {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: 6 },
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0, x: 50 },
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: -6 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.button
        onClick={() => onToggle?.(!isToggled)}
        className="text-gray-700 md:hidden dark:text-gray-50 cursor-pointer rounded-sm outline-none hover:bg-muted/30 p-1 focus:ring-0 focus:outline-none ring-0 transform transition-all ease-in-out duration-300 hover:text-background"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
        aria-expanded={isToggled}
        {...props}
      >
        <motion.svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          initial={false}
          animate={isToggled ? "open" : "closed"}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Top line */}
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            variants={topVariants}
            transition={{ duration: 0.4 }}
            strokeLinecap="round"
          />
          {/* Middle line */}
          <motion.line
            x1="12"
            y1="12"
            x2="20"
            y2="12"
            variants={middleVariants}
            transition={{ duration: 0.5 }}
            strokeLinecap="round"
          />
          {/* Bottom line */}
          <motion.line
            x1={isToggled ? "4" : "8"}
            y1="18"
            x2="20"
            y2="18"
            variants={bottomVariants}
            transition={{ duration: 0.4 }}
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.button>
    </AnimatePresence>
  );
};
