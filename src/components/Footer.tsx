"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-16 px-6 sm:px-8 text-[var(--text-muted)] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Purpose */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-[8px] bg-[var(--brand-base)] flex items-center justify-center text-white font-display font-bold text-xs">
              E
            </div>
            <span className="text-sm font-display font-semibold text-[var(--text-primary)] tracking-tight">
              Escolent
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-xs max-w-sm">
            Built to adapt: differentiated instruction, affective safety, and seamless LMS integration.
          </p>
        </div>

        {/* Real Live Links */}
        <div className="flex flex-wrap gap-8 text-xs font-medium">
          <div className="flex flex-col gap-2">
            <span className="text-[var(--text-primary)] font-semibold text-xs">Live Sandbox Shells</span>
            <a
              href="https://demo.escolent.com/student/today?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Student Practice Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <a
              href="https://demo.escolent.com/teacher/escalations?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Teacher Escalations Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <a
              href="https://demo.escolent.com/admin/briefing?demo=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Admin Briefing Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--text-primary)] font-semibold text-xs">Architecture</span>
            <a href="#the-problem" className="hover:text-[var(--text-primary)] transition-colors">
              The Reality
            </a>
            <a href="#branching-path" className="hover:text-[var(--text-primary)] transition-colors">
              Two Real Paths
            </a>
            <a href="#pedagogy" className="hover:text-[var(--text-primary)] transition-colors">
              Teaching Method
            </a>
            <a href="#three-roles" className="hover:text-[var(--text-primary)] transition-colors">
              Unified System
            </a>
            <a href="#safety-net" className="hover:text-[var(--text-primary)] transition-colors">
              Affective Safety Net
            </a>
            <a href="#philosophy" className="hover:text-[var(--text-primary)] transition-colors">
              Ethical Design
            </a>
            <a href="#origins" className="hover:text-[var(--text-primary)] transition-colors">
              South Africa Pilot
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:items-end gap-1 text-[11px] text-[var(--text-muted)]">
          <div>© {new Date().getFullYear()} Escolent (Pty) Ltd.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
