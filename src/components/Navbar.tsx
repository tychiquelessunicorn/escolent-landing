"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#09090d] rounded-[7px] flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tighter font-mono">E</span>
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-lg -z-10 group-hover:bg-cyan-400/40 transition-colors" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight flex items-center gap-2">
            Escolent
            <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.06]">
              Live
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#the-problem" className="hover:text-white transition-colors duration-200">
            The Reality
          </a>
          <a href="#branching-path" className="hover:text-white transition-colors duration-200">
            The Branch
          </a>
          <a href="#three-roles" className="hover:text-white transition-colors duration-200">
            Unified Truth
          </a>
          <a href="#safety-net" className="hover:text-white transition-colors duration-200">
            Safety Net
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors duration-200">
            Ethical Design
          </a>
          <a href="#origins" className="hover:text-white transition-colors duration-200">
            Origins
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://demo.escolent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full text-white bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-500/40 hover:border-sky-400 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/25 transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span>Try Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090d]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
              <a
                href="#the-problem"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                The Reality
              </a>
              <a
                href="#branching-path"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                The Branch
              </a>
              <a
                href="#three-roles"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                Unified Truth
              </a>
              <a
                href="#safety-net"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                Safety Net
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                Ethical Design
              </a>
              <a
                href="#origins"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-white border-b border-white/[0.04]"
              >
                Origins
              </a>
              <a
                href="https://demo.escolent.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-sm"
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
