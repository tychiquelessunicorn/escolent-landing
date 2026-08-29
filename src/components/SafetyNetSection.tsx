"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { SparkMotif } from "./motifs/SparkMotif";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

interface SignalCase {
  title: string;
  trigger: string;
  affectiveSignal: string;
  traditionalReaction: string;
  escolentResponse: string;
}

const cases: SignalCase[] = [
  {
    title: "Explicit Help Request",
    trigger: "Student presses the built-in 'I need help' button during practice",
    affectiveSignal: "Active Request for Support / Academic Vulnerability",
    traditionalReaction: "Nonexistent or forces student to raise hand publicly in front of peers",
    escolentResponse:
      "Displays immediate private reassurance on screen and enqueues an escalation record on the teacher's dashboard.",
  },
  {
    title: "Concerning Language in Reflection",
    trigger: "Student types 'I am too stupid for this' or expressions of severe distress",
    affectiveSignal: "Cognitive Resignation & Self-Efficacy Breakdown",
    traditionalReaction: "Ignored by automated graders or marked as standard incorrect text",
    escolentResponse:
      "Classifier flags the emotional distress signal confidentially to the teacher while reassuring the student calmly.",
  },
  {
    title: "Persistent Foundational Deadlock",
    trigger: "Multiple consecutive incorrect attempts on the same sub-concept",
    affectiveSignal: "Cognitive Overwhelm / Prerequisite Barrier",
    traditionalReaction: "Penalizes score, locks out attempt, or moves on to next question unresolved",
    escolentResponse:
      "Activates the step-down scaffold ladder to isolate the missing prerequisite without public shaming.",
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
            <span className="text-xs font-semibold text-[var(--escalation-text)]">
              The Safety Net
            </span>
            <SparkMotif size={16} />
          </div>

          <StaggeredWords
            as="h2"
            text="A system that notices distress, not just incorrect answers."
            highlightWords={["distress,", "answers."]}
            highlightColor="var(--escalation-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Academic struggle is rarely intellectual; it begins as emotional overwhelm. Escolent recognizes{" "}
            <ScrollHighlightWord targetColor="var(--escalation-text)">emotional distress</ScrollHighlightWord> through explicit signals and language classification, connecting students to genuine human support.
          </p>
        </div>

        {/* The Two-Sided Architectural Comparison */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Interactive Scenario Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="text-xs font-semibold uppercase text-[var(--text-muted)] px-1 mb-1">
              Select Distress Trigger
            </div>
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`p-5 rounded-[18px] text-left border transition-all duration-200 flex flex-col gap-2 ${
                  selectedCase === i
                    ? "bg-[var(--bg-surface-elevated)] border-[var(--escalation-border)] shadow-md"
                    : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--text-primary)]">{c.title}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedCase === i ? "bg-[var(--escalation-red)]" : "bg-[var(--border-strong)]"
                    }`}
                  />
                </div>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{c.trigger}</p>
                <div className="text-[11px] text-[var(--escalation-text)] mt-1 font-medium">
                  Signal: {c.affectiveSignal}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Deep Architectural Contrast Card */}
          <div className="lg:col-span-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--escalation-red)]" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Real Distress Detection & Triage
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                  Real Protocol
                </span>
              </div>

              {/* Selected Case Deep Dive */}
              <div className="mt-6 space-y-5">
                <div className="p-4 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <div className="text-[11px] font-semibold uppercase text-[var(--text-muted)]">
                    Observed Trigger
                  </div>
                  <div className="text-sm text-[var(--text-primary)] mt-1 font-mono">
                    "{cases[selectedCase].trigger}"
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Flawed Conventional Default */}
                  <div className="p-4 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Conventional EdTech</span>
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
              </div>
            </div>

            {/* School Trust Core Tenet */}
            <div className="mt-8 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <span>Zero AI therapy. 100% human-in-the-loop teacher triage.</span>
              </div>
              <a
                href="https://demo.escolent.com/teacher/escalations?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1"
              >
                <span>Inspect Escalations</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards on Trust */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] mb-4">
                <Eye className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">Private Reassurance</h4>
              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Struggling students are never publicly exposed or ranked. Reassurance appears privately on their screen.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] mb-4">
                <UserCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">Human Teacher Action</h4>
              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Teachers receive actionable triage alerts with student context to conduct targeted 1-on-1 check-ins.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">Institutional Accountability</h4>
              <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                Admins monitor aggregate escalation counts and age thresholds so no student request remains unaddressed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
