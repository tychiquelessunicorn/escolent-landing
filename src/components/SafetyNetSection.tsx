"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section
      id="safety-net"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
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

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Academic struggle is rarely intellectual; it begins as emotional overwhelm. Escolent gives students a safe, private way to reach out, passively catches expressions of despair, and connects them directly to human care.
          </p>
        </div>

        {/* Real Student Help Options & System Response Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
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
                className={`p-4 rounded-[18px] text-left border transition-all duration-200 flex flex-col gap-1.5 ${
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASING }}
            className="lg:col-span-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
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
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
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
                  className="mt-6 space-y-5"
                >
                  <div className="p-4 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                    <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)]">
                      Student Prompt
                    </div>
                    <div className="text-sm text-[var(--text-primary)] mt-1 font-medium font-mono">
                      "{cases[selectedCase].studentView}"
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Flawed Conventional Default */}
                    <div className="p-4 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500/70" />
                        <span>Conventional Software</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                        {cases[selectedCase].traditionalReaction}
                      </p>
                    </div>

                    {/* Escolent Safety Net */}
                    <div className="p-4 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)]">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-text)]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Escolent Safety Net</span>
                      </div>
                      <p className="text-xs text-[var(--text-primary)] mt-2 leading-relaxed font-medium">
                        {cases[selectedCase].escolentResponse}
                      </p>
                    </div>
                  </div>

                  {/* Live Shared Presence Proof (record_views) */}
                  <div className="p-3.5 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <span><strong>Live Staff Presence:</strong> Opened by Sarah Mokoena (Teacher) · Viewed by David Chen (Admin) 4m ago</span>
                    </div>
                    <span className="text-[10px] text-[var(--text-muted)]">Coordinated care</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* School Trust Core Tenet */}
            <div className="mt-8 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>Zero automated therapy. 100% human teacher triage.</span>
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

        {/* Two Fundamental Trust Pillars */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trust Pillar 1: Teacher's Judgment Always Overrules */}
          <motion.div
            whileHover={{ y: -3, borderColor: "var(--brand-border)" }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-9 h-9 rounded-[10px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-semibold text-[var(--text-primary)]">
                A teacher's professional judgment always overrules the system
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                A teacher can manually mark any skill as mastered or flag it for reconfirmation, with a required written reason and an immutable permanent record. If an educator determines a student is ready to move ahead or needs additional reinforcement, their professional judgment overrules the algorithm every time — supporting teacher authority rather than replacing or second-guessing it.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--brand-text)] font-medium">
              Permanent record required · Algorithm supports, never replaces
            </div>
          </motion.div>

          {/* Trust Pillar 2: No Student Falls Through the Cracks */}
          <motion.div
            whileHover={{ y: -3, borderColor: "var(--brand-border)" }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-9 h-9 rounded-[10px] bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--brand-text)] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-display font-semibold text-[var(--text-primary)]">
                No student falls through the cracks
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                When a student reaches out or is flagged, the system visibly shows whether another staff member has already opened or acted on the notification. Shared care never quietly becomes nobody's responsibility.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] font-medium">
              Multi-staff awareness · Real-time visibility across roles
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
