"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { MenuToggle } from "../menu-toggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative text-3xl font-bold text-cyan-400 tracking-tighter ring-0 outline-0 focus:ring-0 focus:outline-0"
        >
          <span className="relative inline-block">
            Dhanesh
            <motion.span
              className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 blur-sm"
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <motion.div key={link.name}>
              <Link
                href={link.href}
                className={`relative text-slate-300 transition font-medium group navlink`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MenuToggle isToggled={isOpen} onToggle={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden backdrop-blur-xl bg-slate-900/80 border-t border-slate-800"
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 6 }}
              className="px-8 py-3 text-slate-300 hover:text-cyan-400 transition text-lg"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
