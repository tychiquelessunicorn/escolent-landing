"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#the-problem" className="hover:text-[var(--text-primary)] transition-colors">
            The Reality
          </a>
          <a href="#branching-path" className="hover:text-[var(--text-primary)] transition-colors">
            Two Paths
          </a>
          <a href="#pedagogy" className="hover:text-[var(--text-primary)] transition-colors">
            Teaching Method
          </a>
          <a href="#three-roles" className="hover:text-[var(--text-primary)] transition-colors">
            Unified System
          </a>
          <a href="#safety-net" className="hover:text-[var(--text-primary)] transition-colors">
            Safety Net
          </a>
          <a href="#misconceptions" className="hover:text-[var(--text-primary)] transition-colors">
            Error Detection
          </a>
          <a href="#philosophy" className="hover:text-[var(--text-primary)] transition-colors">
            Ethical Design
          </a>
          <a href="#origins" className="hover:text-[var(--text-primary)] transition-colors">
            Infrastructure
          </a>
        </nav>

        {/* Live CTA Button */}
        <div className="hidden md:flex items-center gap-4">
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
                Two Paths
              </a>
              <a
                href="#pedagogy"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Teaching Method
              </a>
              <a
                href="#three-roles"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Unified System
              </a>
              <a
                href="#safety-net"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Safety Net
              </a>
              <a
                href="#misconceptions"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Error Detection
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Ethical Design
              </a>
              <a
                href="#origins"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[var(--text-primary)]"
              >
                Infrastructure
              </a>
              <motion.a
                href="https://demo.escolent.com?embed=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[14px] bg-[var(--brand-base)] text-white font-semibold text-xs"
              >
                <span>Launch Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
