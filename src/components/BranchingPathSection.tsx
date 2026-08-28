"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitFork,
  ArrowUpRight,
  RefreshCw,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  ShieldAlert,
  Maximize2,
} from "lucide-react";

export function BranchingPathSection() {
  const [scaffoldKey, setScaffoldKey] = useState(0);
  const [masteryKey, setMasteryKey] = useState(0);
  const [activeView, setActiveView] = useState<"both" | "scaffold" | "mastery">("both");

  const scaffoldUrl = "https://demo.escolent.com/student/practice?demo=1&problemDemo=wrong_answer_scaffold";
  const masteryUrl = "https://demo.escolent.com/student/practice?demo=1";

  return (
    <section
      id="branching-path"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <GitFork className="w-3.5 h-3.5" />
            <span>The Signature Branch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            One shared question. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-cyan-400">
              Two live, divergent journeys.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            When understanding falters, the interface dynamically constructs a scaffold ladder. When mastery is instant, it accelerates without artificial friction. Both are live product instances below.
          </p>

          {/* View Switcher Controls */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => setActiveView("both")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "both"
                  ? "bg-white/[0.12] text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Side-by-Side Live Proof
            </button>
            <button
              onClick={() => setActiveView("scaffold")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "scaffold"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Focus: Scaffold Ladder
            </button>
            <button
              onClick={() => setActiveView("mastery")}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === "mastery"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Focus: Instant Mastery
            </button>
          </div>
        </motion.div>

        {/* Central Origin Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl mx-auto mb-10 text-center"
        >
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#050507] border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Common Starting Point · Grade 8 Math
            </div>
            <p className="text-sm sm:text-base font-mono text-zinc-200 mt-1">
              Problem: Factorise <span className="text-cyan-400 font-semibold">2x² + 7x + 3</span>
            </p>
          </div>

          {/* Fork Light Beams */}
          <div className="relative h-12 w-full flex items-center justify-center">
            <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-rose-500/40 via-white/20 to-cyan-500/40" />
          </div>
        </motion.div>

        {/* Side-by-Side Real Live Product Embeds */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT PATH: Scaffold Ladder for Struggling Student */}
          {(activeView === "both" || activeView === "scaffold") && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col rounded-3xl bg-[#09090f] border border-rose-500/30 shadow-2xl shadow-rose-950/20 overflow-hidden transition-all duration-300 ${
                activeView === "scaffold" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
              }`}
            >
              {/* Card Header */}
              <div className="px-5 py-3.5 bg-gradient-to-r from-rose-950/40 via-zinc-900 to-zinc-900 border-b border-rose-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      Path A: Struggling Student
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      Live Scaffold Ladder
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setScaffoldKey((k) => k + 1)}
                    title="Reload live instance"
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={scaffoldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live in new tab"
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Live Iframe Wrapper */}
              <div className="relative w-full h-[520px] bg-[#050508]">
                <iframe
                  key={scaffoldKey}
                  src={scaffoldUrl}
                  title="Live Demo - Scaffold Ladder Mode"
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  loading="lazy"
                />
              </div>

              {/* Card Footer Insights */}
              <div className="p-4 bg-zinc-950/80 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                  <span>Real live student view: Step-down scaffolding activated upon wrong attempt</span>
                </div>
                <a
                  href={scaffoldUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Interact full screen</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}

          {/* RIGHT PATH: Accelerated Mastery for Advanced Student */}
          {(activeView === "both" || activeView === "mastery") && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col rounded-3xl bg-[#09090f] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 overflow-hidden transition-all duration-300 ${
                activeView === "mastery" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
              }`}
            >
              {/* Card Header */}
              <div className="px-5 py-3.5 bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-zinc-900 border-b border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      Path B: Advanced Student
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Uninhibited Velocity
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMasteryKey((k) => k + 1)}
                    title="Reload live instance"
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={masteryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live in new tab"
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Live Iframe Wrapper */}
              <div className="relative w-full h-[520px] bg-[#050508]">
                <iframe
                  key={masteryKey}
                  src={masteryUrl}
                  title="Live Demo - Mastery Flow Mode"
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  loading="lazy"
                />
              </div>

              {/* Card Footer Insights */}
              <div className="p-4 bg-zinc-950/80 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Real live student view: Mastery unlocks enriched problem sets without busywork</span>
                </div>
                <a
                  href={masteryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Interact full screen</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Proof Statement below the windows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 max-w-2xl text-center"
        >
          <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
            Zero simulations. Pure production telemetry.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Dynamic Sub-Skill Decomposition
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Preserves Grade-Level Dignity
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Zero Punitive Penalties
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
