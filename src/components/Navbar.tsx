"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
          ? "bg-[var(--bg-canvas)]/95 border-b border-[var(--border-subtle)] py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-[8px] bg-[var(--brand-base)] flex items-center justify-center text-white font-display font-bold text-base transition-transform duration-300 group-hover:scale-105">
            E
          </div>
          <span className="text-[var(--text-primary)] font-display font-semibold text-lg tracking-tight">
            Escolent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#the-problem" className="hover:text-[var(--text-primary)] transition-colors">
            The Reality
          </a>
          <a href="#branching-path" className="hover:text-[var(--text-primary)] transition-colors">
            The Branch
          </a>
          <a href="#three-roles" className="hover:text-[var(--text-primary)] transition-colors">
            Unified Truth
          </a>
          <a href="#safety-net" className="hover:text-[var(--text-primary)] transition-colors">
            Safety Net
          </a>
          <a href="#philosophy" className="hover:text-[var(--text-primary)] transition-colors">
            Ethical Stance
          </a>
          <a href="#origins" className="hover:text-[var(--text-primary)] transition-colors">
            Origins
          </a>
        </nav>

        {/* Live CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://demo.escolent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] shadow-sm transition-all duration-200"
          >
            <span>Try Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-medium)] px-6 py-6"
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--text-secondary)]">
              <a
                href="#the-problem"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                The Reality
              </a>
              <a
                href="#branching-path"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                The Branch
              </a>
              <a
                href="#three-roles"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Unified Truth
              </a>
              <a
                href="#safety-net"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Safety Net
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Ethical Stance
              </a>
              <a
                href="#origins"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Origins
              </a>
              <a
                href="https://demo.escolent.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[14px] bg-[var(--brand-base)] text-white font-semibold text-xs"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
