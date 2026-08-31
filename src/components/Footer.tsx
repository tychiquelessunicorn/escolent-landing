"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-16 px-6 sm:px-8 text-[var(--text-muted)] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Purpose */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center shrink-0">
              <Image
                src="/logo-icon.png"
                alt="Escolent Logo"
                width={22}
                height={23}
                className="w-5.5 h-auto object-contain"
              />
            </div>
            <span className="text-sm font-display font-semibold text-[var(--text-primary)] tracking-tight">
              Escolent
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-xs max-w-sm leading-relaxed">
            One curriculum. Every student’s real pace. A real-time intelligence layer adapting to cognitive struggle and emotional distress.
          </p>
        </div>

        {/* Real Live Links */}
        <div className="flex flex-wrap gap-8 text-xs font-medium">
          <div className="flex flex-col gap-2">
            <span className="text-[var(--text-primary)] font-semibold text-xs">Live Sandbox Shells</span>
            <a
              href="https://demo.escolent.com/student/today?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Student Practice Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <a
              href="https://demo.escolent.com/teacher/escalations?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Teacher Escalations Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <a
              href="https://demo.escolent.com/pedlead/briefing?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Pedagogical Lead Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
            <a
              href="https://demo.escolent.com/admin/briefing?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-text)] transition-colors flex items-center gap-1"
            >
              <span>Admin Briefing Shell</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:items-end text-[11px] text-[var(--text-muted)]">
          <div>© {new Date().getFullYear()} Escolent. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
