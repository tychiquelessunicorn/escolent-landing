"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  HeartHandshake,
  Activity,
  ShieldCheck,
  AlertTriangle,
  UserCheck,
  Lock,
  Eye,
  Clock,
  ArrowUpRight,
  Users,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { SparkMotif } from "./motifs/SparkMotif";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

const EASING = [0.22, 1, 0.36, 1] as const;

interface SignalCase {
  id: string;
  category: string;
  studentView: string;
  trigger: string;
  humanMeaning: string;
  traditionalReaction: string;
  escolentResponse: string;
}

const cases: SignalCase[] = [
  {
    id: "stuck",
    category: "Stuck on what we're learning",
    studentView: "I need help: Stuck on what we're learning",
    trigger: "Student taps 'I need help' and chooses 'Stuck on what we're learning'",
    humanMeaning: "A specific conceptual hurdle on current question",
    traditionalReaction: "Ignored or requires raising a hand publicly in the room",
    escolentResponse:
      "Instantly provides private reassurance on screen and alerts the teacher with question context.",
  },
  {
    id: "behind",
    category: "Behind on assignments",
    studentView: "I need help: Behind on assignments",
    trigger: "Student flags growing backlog before it becomes overwhelming",
    humanMeaning: "Anxiety about falling behind classroom pacing",
    traditionalReaction: "Automated zero marks or penalty warnings",
    escolentResponse:
      "Reassures the student and highlights catch-up pathways on teacher dashboard.",
  },
  {
    id: "directions",
    category: "Don't understand instructions",
    studentView: "I need help: Don't understand what to do",
    trigger: "Student asks for procedural clarification on instructions",
    humanMeaning: "Friction with format rather than math ability",
    traditionalReaction: "Ignored until submission when format is penalized",
    escolentResponse:
      "Clarifies the immediate objective simply and flags brief procedural guidance.",
  },
  {
    id: "overwhelmed",
    category: "Feeling overwhelmed",
    studentView: "I need help: Feeling overwhelmed",
    trigger: "Student signals emotional fatigue or enters 'I am too stupid for this'",
    humanMeaning: "A child quietly giving up on themselves",
    traditionalReaction: "Treated as standard incorrect submission",
    escolentResponse:
      "Provides immediate, calming reassurance and alerts the teacher for human check-in.",
  },
];

export function SafetyNetSection() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extended mobile-safe scroll track giving each distress case ample dwell time
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 -> 0.32: Case 0 (Wide initial dwell buffer)
    if (progress < 0.32) {
      if (selectedCase !== 0) setSelectedCase(0);
    } else if (progress < 0.55) {
      if (selectedCase !== 1) setSelectedCase(1);
    } else if (progress < 0.78) {
      if (selectedCase !== 2) setSelectedCase(2);
    } else {
      if (selectedCase !== 3) setSelectedCase(3);
    }
  });

  return (
    <section
      ref={containerRef}
      id="safety-net"
      className="relative min-h-[420vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-4 sm:py-8 md:py-12 px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-2.5 sm:mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--brand-text)]">
                The Safety Net
              </span>
              <SparkMotif size={13} />
            </div>

            <StaggeredWords
              as="h2"
              text="A system that notices distress, not just incorrect answers."
              highlightWords={["distress,", "answers."]}
              highlightColor="var(--text-secondary)"
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed hidden xs:block">
              Academic struggle is rarely intellectual; it begins as emotional overwhelm. Escolent gives students a safe, private way to reach out, passively catches expressions of despair, and connects them directly to human care.
            </p>
          </div>

          {/* Real Student Help Options & System Response Grid */}
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-6 items-stretch mb-2 sm:mb-3">
            {/* Left Column: Real Categories a Student Sees */}
            <div className="lg:col-span-5 grid grid-cols-2 lg:flex lg:flex-col justify-between gap-1.5 sm:gap-2">
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-[var(--text-muted)] px-1 col-span-2 lg:col-span-1">
                What a Student Actually Sees
              </div>
              {cases.map((c, i) => (
                <motion.button
                  key={c.id}
                  onClick={() => setSelectedCase(i)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-2 sm:p-2.5 md:p-3 rounded-[12px] sm:rounded-[14px] text-left border transition-all duration-200 flex flex-col gap-0.5 ${
                    selectedCase === i
                      ? "bg-[var(--bg-surface-elevated)] border-[var(--escalation-border)] shadow-md"
                      : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-primary)] truncate">
                      {c.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ml-1 ${
                        selectedCase === i ? "bg-[var(--escalation-red)] ring-4 ring-[var(--escalation-subtle)]" : "bg-[var(--border-strong)]"
                      }`}
                    />
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[var(--text-secondary)] font-medium truncate hidden sm:block">
                    {c.humanMeaning}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Column: Contrast Card with Smooth Motion Transition */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASING }}
              className="lg:col-span-7 rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-3 sm:p-4 md:p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Activity className="w-3.5 h-3.5 text-[var(--escalation-red)]" />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      Real-Time Triage & Human Connection
                    </span>
                  </div>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-[6px] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    Live Flow
                  </span>
                </div>

                {/* Selected Case Deep Dive */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCase}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: EASING }}
                    className="mt-2.5 sm:mt-3 space-y-2 sm:space-y-2.5"
                  >
                    <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                      <div className="text-[9px] font-semibold uppercase text-[var(--text-muted)]">
                        Student Prompt
                      </div>
                      <div className="text-xs sm:text-sm text-[var(--text-primary)] mt-0.5 font-medium font-mono">
                        "{cases[selectedCase].studentView}"
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {/* Flawed Conventional Default */}
                      <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[var(--text-muted)]">
                          <AlertTriangle className="w-3 h-3 text-amber-500/70 shrink-0" />
                          <span>Conventional Software</span>
                        </div>
                        <p className="text-[10px] text-[var(--text-muted)] mt-1 leading-relaxed">
                          {cases[selectedCase].traditionalReaction}
                        </p>
                      </div>

                      {/* Escolent Safety Net */}
                      <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)]">
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[var(--brand-text)]">
                          <ShieldCheck className="w-3 h-3 shrink-0" />
                          <span>Escolent Safety Net</span>
                        </div>
                        <p className="text-[10px] text-[var(--text-primary)] mt-1 leading-relaxed font-medium">
                          {cases[selectedCase].escolentResponse}
                        </p>
                      </div>
                    </div>

                    {/* Live Shared Presence Proof (record_views) */}
                    <div className="p-2 sm:p-2.5 rounded-[10px] sm:rounded-[12px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-[var(--text-secondary)] truncate">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0" />
                        <span className="text-[10px] truncate"><strong>Live Presence:</strong> Sarah M. (Teacher) · Admin 4m ago</span>
                      </div>
                      <span className="text-[9px] text-[var(--text-muted)] shrink-0 ml-1">Coordinated care</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* School Trust Core Tenet */}
              <div className="mt-2.5 sm:mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] sm:text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-[var(--text-muted)] shrink-0" />
                  <span className="truncate">Zero automated therapy. 100% human teacher triage.</span>
                </div>
                <motion.a
                  href="https://demo.escolent.com/teacher/escalations?embed=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Inspect Escalations</span>
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
