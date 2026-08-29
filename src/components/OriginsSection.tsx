"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe2, CheckCircle2, ArrowUpRight, Layers } from "lucide-react";
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
              Authentic Foundation
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="Built for South Africa. Engineered for the world."
            highlightWords={["South", "Africa.", "world."]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Escolent wasn’t born in a theoretical vacuum. It is anchored directly in the live reality of South African schools — beginning with our active{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">Grade 8 pilot alongside Teneo</ScrollHighlightWord>.
          </p>
        </div>

        {/* LMS Integration Pillar — Crucial Objection Killer */}
        <div className="w-full max-w-5xl rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-[14px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0 mt-1">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Runs inside the LMS you already use
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]">
                  Zero Switching Cost
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mt-1.5 max-w-2xl leading-relaxed">
                Native LTI 1.3 integration embeds seamlessly inside <strong className="text-[var(--text-primary)]">Canvas, Google Classroom, Moodle, and D2L Brightspace</strong>. No new student passwords, no roster CSV re-uploads, no rip-and-replace of your school's existing digital infrastructure.
              </p>
            </div>
          </div>

          <a
            href="https://demo.escolent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-[14px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
          >
            <span>Test Integration Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Concrete Story Card Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: The South African Foundation (7 cols) */}
          <div className="lg:col-span-7 rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-base)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    The Ground Truth · Teneo Grade 8 Pilot
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded-[8px]">
                  South Africa
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mt-6 leading-relaxed">
                South African classrooms represent one of the most demanding educational proving grounds: wide language diversity, rigorous national curricula (CAPS & IEB), and uneven device accessibility.
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-text)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      Curriculum Rigor (CAPS / IEB / Cambridge)
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">
                      Mapped directly to foundational diagnostic standards rather than superficial quiz banks.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-text)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      Bandwidth & Latency Conscious Architecture
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">
                      Lightweight bytecode payloads ensure real-time scaffolding operates reliably on any connection.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
              When an adaptive engine works reliably in Johannesburg and Durban, it can scale anywhere in the world without friction.
            </div>
          </div>

          {/* Right: The Natural Global Extension (5 cols) */}
          <div className="lg:col-span-5 rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    The Universal Vector
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--brand-text)] bg-[var(--brand-subtle)] px-2 py-0.5 rounded-[8px]">
                  Global Scale
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mt-6 leading-relaxed">
                The struggle with one-size-fits-all instruction is universal. A 13-year-old in London, Toronto, Nairobi, or Singapore experiences the exact same silent friction when falling behind a rigid lecture.
              </p>

              <div className="mt-6 p-4 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <div className="text-xs font-semibold text-[var(--text-primary)]">
                  Our Uncompromising Principle
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  Start where the need is deepest. Build the most resilient, empathetic core. Then open the standard to educators worldwide.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-muted)]">Live production sandbox</span>
              <a
                href="https://demo.escolent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1"
              >
                <span>Launch Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
