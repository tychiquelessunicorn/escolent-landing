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
    humanMeaning: "A specific conceptual hurdle on the current question",
    traditionalReaction: "Nonexistent or requires raising a hand publicly in front of the whole room",
    escolentResponse:
      "Instantly provides private reassurance on screen and alerts the teacher with the exact question context.",
  },
  {
    id: "behind",
    category: "Behind on assignments",
    studentView: "I need help: Behind on assignments",
    trigger: "Student flags growing backlog before it becomes overwhelming",
    humanMeaning: "Anxiety about falling behind classroom pacing",
    traditionalReaction: "Automated zero marks or punitive deadline penalty warnings",
    escolentResponse:
      "Reassures the student and highlights prioritized catch-up pathways on the teacher's dashboard.",
  },
  {
    id: "directions",
    category: "Don't understand what I'm supposed to do",
    studentView: "I need help: Don't understand what to do",
    trigger: "Student asks for procedural clarification on instructions",
    humanMeaning: "Friction with format or expectation rather than math ability",
    traditionalReaction: "Ignored until submission when the wrong format is penalized",
    escolentResponse:
      "Clarifies the immediate objective simply and flags the need for brief procedural guidance.",
  },
  {
    id: "overwhelmed",
    category: "Feeling overwhelmed",
    studentView: "I need help: Feeling overwhelmed",
    trigger: "Student signals emotional fatigue or enters 'I am too stupid for this'",
    humanMeaning: "A child quietly giving up on themselves",
    traditionalReaction: "Treated as standard incorrect submission or missed deadline",
    escolentResponse:
      "Provides immediate, calming reassurance and alerts the teacher confidentially for a human check-in.",
  },
];

export function SafetyNetSection() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked advancement through the 4 distress signal cases
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const caseIndex = Math.min(Math.floor(progress / 0.25), cases.length - 1);
    if (selectedCase !== caseIndex) {
      setSelectedCase(caseIndex);
    }
  });

  return (
    <section
      ref={containerRef}
      id="safety-net"
      className="relative min-h-[200vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[var(--brand-text)]">
                The Safety Net
              </span>
              <SparkMotif size={16} />
            </div>

            <StaggeredWords
              as="h2"
              text="A system that notices distress, not just incorrect answers."
              highlightWords={["distress,", "answers."]}
              highlightColor="var(--text-secondary)"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
              Academic struggle is rarely intellectual; it begins as emotional overwhelm. Escolent gives students a safe, private way to reach out, passively catches expressions of despair, and connects them directly to human care.
            </p>
          </div>

          {/* Real Student Help Options & System Response Grid */}
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
            {/* Left Column: Real Categories a Student Sees */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
              <div className="text-xs font-semibold uppercase text-[var(--text-muted)] px-1 mb-1">
                What a Student Actually Sees
              </div>
              {cases.map((c, i) => (
                <motion.button
                  key={c.id}
                  onClick={() => setSelectedCase(i)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3.5 rounded-[18px] text-left border transition-all duration-200 flex flex-col gap-1 ${
                    selectedCase === i
                      ? "bg-[var(--bg-surface-elevated)] border-[var(--escalation-border)] shadow-md"
                      : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {c.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedCase === i ? "bg-[var(--escalation-red)] ring-4 ring-[var(--escalation-subtle)]" : "bg-[var(--border-strong)]"
                      }`}
                    />
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)] font-medium">
                    {c.humanMeaning}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Column: Contrast Card with Smooth Motion Transition */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="lg:col-span-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-5 sm:p-7 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Activity className="w-4 h-4 text-[var(--escalation-red)]" />
                    </motion.div>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      Real-Time Triage & Human Connection
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    Live Flow
                  </span>
                </div>

                {/* Selected Case Deep Dive */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: EASING }}
                    className="mt-4 space-y-4"
                  >
                    <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                      <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)]">
                        Student Prompt
                      </div>
                      <div className="text-xs sm:text-sm text-[var(--text-primary)] mt-1 font-medium font-mono">
                        "{cases[selectedCase].studentView}"
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Flawed Conventional Default */}
                      <div className="p-3.5 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500/70" />
                          <span>Conventional Software</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                          {cases[selectedCase].traditionalReaction}
                        </p>
                      </div>

                      {/* Escolent Safety Net */}
                      <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)]">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-text)]">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Escolent Safety Net</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-primary)] mt-1.5 leading-relaxed font-medium">
                          {cases[selectedCase].escolentResponse}
                        </p>
                      </div>
                    </div>

                    {/* Live Shared Presence Proof (record_views) */}
                    <div className="p-3 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        <span className="text-[11px]"><strong>Live Staff Presence:</strong> Opened by Sarah Mokoena · Viewed by Admin 4m ago</span>
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)]">Coordinated care</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* School Trust Core Tenet */}
              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span className="text-[11px]">Zero automated therapy. 100% human teacher triage.</span>
                </div>
                <motion.a
                  href="https://demo.escolent.com/teacher/escalations?embed=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1"
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
