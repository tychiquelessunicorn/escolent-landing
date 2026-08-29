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
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-rose-500/[0.03] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>The Safety Net</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            A system that notices distress, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-emerald-400">
              not just incorrect answers.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Academic failure is rarely intellectual; it begins as emotional overwhelm. Escolent recognizes emotional distress and cognitive friction through explicit signals and language classification, connecting students to human support.
          </p>
        </motion.div>

        {/* The Two-Sided Architectural Comparison */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Interactive Scenario Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1 px-1">
              Select Distress Trigger
            </div>
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col gap-2 ${
                  selectedCase === i
                    ? "bg-rose-500/[0.08] border-rose-500/40 shadow-lg shadow-rose-950/20"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">{c.title}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedCase === i ? "bg-rose-400 animate-ping" : "bg-zinc-600"
                    }`}
                  />
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2">{c.trigger}</p>
                <div className="text-[11px] font-mono text-rose-300/80 mt-1">
                  Signal: {c.affectiveSignal}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Deep Architectural Contrast Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-rose-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">
                    Real Distress Detection & Triage
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/[0.05] text-zinc-400 border border-white/10">
                  Real Protocol
                </span>
              </div>

              {/* Selected Case Deep Dive */}
              <div className="mt-6 space-y-5">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-[11px] font-mono uppercase text-zinc-400">
                    Observed Trigger
                  </div>
                  <div className="text-sm text-zinc-200 mt-1 font-mono">
                    "{cases[selectedCase].trigger}"
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Flawed Industry Default */}
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Conventional EdTech</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {cases[selectedCase].traditionalReaction}
                    </p>
                  </div>

                  {/* Escolent Safety Net */}
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Escolent Safety Net</span>
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      {cases[selectedCase].escolentResponse}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Trust Core Tenet */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Zero AI therapy. 100% human-in-the-loop teacher triage.</span>
              </div>
              <a
                href="https://demo.escolent.com/teacher?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
              >
                <span>Inspect Escalations</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards on Trust */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                <Eye className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Private Reassurance</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Struggling students are never publicly exposed or ranked. Reassurance appears privately on their screen.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                <UserCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Human Teacher Action</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Teachers receive actionable triage alerts with student context to conduct targeted 1-on-1 check-ins.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white">Institutional Accountability</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Admins monitor aggregate escalation counts and age thresholds so no student request remains unaddressed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
