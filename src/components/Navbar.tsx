"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#the-problem", label: "The Reality" },
  { href: "#branching-path", label: "Two Paths" },
  { href: "#pedagogy", label: "Teaching Method" },
  { href: "#three-roles", label: "Unified System" },
  { href: "#safety-net", label: "Safety Net" },
  { href: "#misconceptions", label: "Error Detection" },
  { href: "#curriculum-lead", label: "Curriculum Lead" },
  { href: "#philosophy", label: "Ethical Design" },
  { href: "#origins", label: "Infrastructure" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-[var(--text-secondary)] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Live CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://demo.escolent.com?embed=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px -2px rgba(30, 107, 255, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex group items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] shadow-sm transition-all duration-200"
          >
            <span>Try Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)] px-6 py-4 flex flex-col gap-4 text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <a
                href="https://demo.escolent.com?embed=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] shadow-sm transition-all duration-200"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
