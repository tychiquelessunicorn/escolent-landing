"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  AlertCircle,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  FolderTree,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";

export function MisconceptionSection() {
  const [activeTab, setActiveTab] = useState<"equation" | "spaces">("equation");

  return (
    <section
      id="misconceptions"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Cognitive Diagnostic
            </span>
            <SparkMotif size={16} />
          </div>

          <StaggeredWords
            as="h2"
            text="Struggle caught in silence, before frustration sets in."
            highlightWords={["caught", "silence,"]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Not every struggling student clicks "I need help." When a student submits a wrong answer matching a recognized misconception, the system{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">identifies the underlying logic error</ScrollHighlightWord> and surfaces it directly to the teacher's active Space — without waiting for a child to raise their hand.
          </p>

          {/* Toggle View */}
          <div className="mt-8 inline-flex items-center p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
            <button
              onClick={() => setActiveTab("equation")}
              className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                activeTab === "equation"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Automatic Error Pattern Flow
            </button>
            <button
              onClick={() => setActiveTab("spaces")}
              className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                activeTab === "spaces"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Teacher Spaces & Scope
            </button>
          </div>
        </div>

        {/* TAB 1: Abstract Motion Graphic of Pattern Match */}
        {activeTab === "equation" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-10 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-base)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    Live Problem: Solve for x: 5x + 3 = 2x + 18
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Student silently submits: <strong className="text-[var(--text-primary)] font-mono">3x = 21</strong> (incorrect)
                </p>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--brand-text)] border border-[var(--brand-border)] self-start md:self-auto">
                No Help Button Pressed
              </span>
            </div>

            {/* Step-by-Step Graphic Chain */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Step 1: Raw Student Attempt */}
              <div className="p-4 rounded-[16px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full">
                <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-2">
                  1. Silent Attempt
                </div>
                <div className="font-mono text-sm text-[var(--text-primary)] bg-[var(--bg-surface)] p-2.5 rounded-[10px] border border-[var(--border-subtle)]">
                  3x = 21
                </div>
                <p className="text-[11px] text-[var(--text-muted)] mt-2 leading-relaxed">
                  Student subtracted 2x from both sides, but added 3 to 18 instead of subtracting 3.
                </p>
              </div>

              {/* Step 2: Diagnostic Engine Match */}
              <div className="p-4 rounded-[16px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] flex flex-col justify-between h-full shadow-md">
                <div className="text-[10px] font-semibold uppercase text-[var(--brand-text)] mb-2 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                  <span>2. Pattern Identified</span>
                </div>
                <div className="text-xs font-semibold text-[var(--brand-highlight)] bg-[var(--brand-subtle)] p-2.5 rounded-[10px] border border-[var(--brand-border)]">
                  Sign Inversion on Transposition
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Classified against known error graph: inverse operation applied incorrectly to constant.
                </p>
              </div>

              {/* Step 3: Teacher View Surfacing */}
              <div className="p-4 rounded-[16px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full">
                <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                  <span>3. Surfaced to Space</span>
                </div>
                <div className="text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] p-2.5 rounded-[10px] border border-[var(--border-subtle)]">
                  Alert: Needs 10s check-in on constant subtraction
                </div>
                <p className="text-[11px] text-[var(--text-muted)] mt-2 leading-relaxed">
                  Appears in the teacher's active Space without the student ever feeling publicly exposed.
                </p>
              </div>
            </div>

            {/* Dual Signal Explanation */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <span className="font-semibold text-[var(--brand-text)] block mb-1">
                  Signal 1 · Affective Safety Net
                </span>
                <span className="text-[var(--text-secondary)] leading-relaxed">
                  Catches emotional distress, explicit help requests, and feelings of being overwhelmed.
                </span>
              </div>
              <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <span className="font-semibold text-[var(--brand-text)] block mb-1">
                  Signal 2 · Cognitive Misconception Detection
                </span>
                <span className="text-[var(--text-secondary)] leading-relaxed">
                  Catches silent, specific reasoning errors and flags them directly to the educator.
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Teacher Spaces and Scoped Cohorts */}
        {activeTab === "spaces" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-10 shadow-xl"
          >
            <div className="flex items-center gap-3 pb-6 border-b border-[var(--border-subtle)]">
              <div className="w-10 h-10 rounded-[12px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)]">
                <FolderTree className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Organized into Real Spaces — Never One Undifferentiated Pool
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Teachers manage classrooms through dedicated, scoped cohorts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="p-4 rounded-[16px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <div className="text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Scoped Context
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Each teacher only receives misconception flags and escalation events for students enrolled in their assigned Spaces.
                </p>
              </div>

              <div className="p-4 rounded-[16px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <div className="text-xs font-semibold text-[var(--text-primary)] mb-1">
                  No Notification Noise
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Teachers aren't inundated with alerts from other classes. Diagnostic insights stay focused on the students in front of them.
                </p>
              </div>

              <div className="p-4 rounded-[16px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <div className="text-xs font-semibold text-[var(--text-primary)] mb-1">
                  Flexible Grouping
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Supports period-by-period classes, intervention cohorts, and cross-grade focus groups with independent diagnostic histories.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span>Every signal is contextualized within the educator's active teaching group.</span>
              <a
                href="https://demo.escolent.com/teacher/escalations?embed=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1"
              >
                <span>Open Teacher Space Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
