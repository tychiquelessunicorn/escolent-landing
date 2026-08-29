"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Layers, WifiOff, Globe, BookOpen, Cpu } from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

export function OriginsSection() {
  return (
    <section
      id="origins"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Infrastructure Ground Truth
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="Built for the real conditions of schools."
            highlightWords={["real", "conditions"]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Escolent is engineered from the ground up for environments with{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">unstable power, intermittent connections,</ScrollHighlightWord> and strict curriculum requirements.
          </p>
        </div>

        {/* LMS Integration Pillar — Crucial Objection Killer */}
        <div className="w-full max-w-5xl rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 hover:border-[var(--brand-border-strong)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-[14px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0 mt-1">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Opens right inside Canvas, Google Classroom, or Moodle — no new app, no new login.
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]">
                  Zero Switching Cost
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-2 max-w-2xl leading-relaxed">
                Students and teachers access lessons directly inside their existing school portal. No new passwords to remember, no student roster spreadsheets to export and re-upload, and no need to replace your school's existing software.
                <span className="block mt-1 text-[11px] text-[var(--text-muted)]">
                  Standard compatibility: Native LTI 1.3 / 1.1 integration.
                </span>
              </p>
            </div>
          </div>

          <a
            href="https://demo.escolent.com?embed=1"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-[14px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
          >
            <span>Test Integration Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Real Engineering Facts Grid */}
        <div className="w-full max-w-5xl rounded-[22px] p-6 sm:p-10 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--border-subtle)] gap-3">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-[var(--brand-text)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  Engineered for Low-Resource Environments
                </h3>
                <span className="text-xs text-[var(--text-muted)]">Built for real classroom constraints</span>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-[var(--brand-text)] bg-[var(--brand-subtle)] border border-[var(--brand-border)] px-3 py-1 rounded-[8px] self-start sm:self-auto">
              Hardware & Network Resilience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Fact 1: Real Curriculum Standards Capability */}
            <div className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Curriculum-Agnostic Standards Engine
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  The diagnostic skill graph maps directly to national and regional syllabus requirements (such as CAPS, IEB, Cambridge, and common core standards), keeping instruction aligned with mandated goals.
                </p>
              </div>
            </div>

            {/* Fact 2: Offline & Load Shedding Resilience */}
            <div className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <WifiOff className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Works through power cuts and lost connections
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Engineered for load shedding and spotty 3G. The platform saves student progress locally on the device and resumes automatically the moment power or signal returns without lost work.
                </p>
              </div>
            </div>

            {/* Fact 3: Fast on Low Bandwidth */}
            <div className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Minimal data usage footprint
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Transfers lightweight bytecode payloads per problem so lessons open instantly on standard school tablets and mobile connections without wasting data.
                </p>
              </div>
            </div>
          </div>

          {/* Quiet Factual Global Note */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--text-secondary)] shrink-0" />
              <span>
                Because the system is engineered to thrive under uneven power and connectivity constraints, the same resilient core operates reliably in any classroom worldwide.
              </span>
            </div>
            <a
              href="https://demo.escolent.com?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0"
            >
              <span>Try Live Sandbox</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
