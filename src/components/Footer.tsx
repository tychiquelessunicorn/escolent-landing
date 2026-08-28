"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030305] py-16 px-6 sm:px-8 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Purpose */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px]">
              <div className="w-full h-full bg-[#050507] rounded-[3px] flex items-center justify-center">
                <span className="text-white font-mono font-bold text-[10px]">E</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">Escolent</span>
          </div>
          <p className="text-zinc-400 text-xs max-w-sm">
            Adaptive learning infrastructure engineered for cognitive depth and affective dignity.
          </p>
        </div>

        {/* Real Live Links */}
        <div className="flex flex-wrap gap-8 text-xs font-medium">
          <div className="flex flex-col gap-2">
            <span className="text-white font-mono uppercase text-[10px] tracking-wider">Live Demo</span>
            <a
              href="https://demo.escolent.com/student?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Student Practice</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
            <a
              href="https://demo.escolent.com/teacher?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Teacher Command</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
            <a
              href="https://demo.escolent.com/admin?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Admin Briefing</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-mono uppercase text-[10px] tracking-wider">Architecture</span>
            <a href="#the-problem" className="hover:text-white transition-colors">
              The Problem
            </a>
            <a href="#branching-path" className="hover:text-white transition-colors">
              Branching Scaffold
            </a>
            <a href="#three-roles" className="hover:text-white transition-colors">
              Unified Truth
            </a>
            <a href="#safety-net" className="hover:text-white transition-colors">
              Affective Safety Net
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors">
              Ethical Stance
            </a>
            <a href="#origins" className="hover:text-white transition-colors">
              South Africa Pilot
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:items-end gap-1 text-[11px] text-zinc-400 font-mono">
          <div>© {new Date().getFullYear()} Escolent (Pty) Ltd.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
