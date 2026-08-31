"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-canvas)]/95 border-b border-[var(--border-subtle)] py-3 shadow-md backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center shrink-0"
          >
            <Image
              src="/logo-icon.png"
              alt="Escolent Logo"
              width={28}
              height={29}
              className="w-7 h-auto object-contain drop-shadow-[0_0_12px_rgba(30,107,255,0.4)]"
              priority
            />
          </motion.div>
          <span className="text-[var(--text-primary)] font-display font-semibold text-lg tracking-tight">
            Escolent
          </span>
        </Link>

        {/* Live CTA Button */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://demo.escolent.com?embed=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px -2px rgba(30, 107, 255, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] shadow-sm transition-all duration-200"
          >
            <span>Try Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
