"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Coins,
  Trophy,
  AlarmClock,
  Sparkles,
  CheckCircle2,
  XCircle,
  Shield,
  Compass,
  Smile,
  BookOpen,
} from "lucide-react";

export function EthicalStanceSection() {
  return (
    <section
      id="philosophy"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Ethical Stance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            No streaks. No gems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400">
              No casino mechanics in the classroom.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            We refuse to weaponize adolescent anxiety for session-length metrics. Learning is not a casino game; it is the deliberate construction of mental clarity.
          </p>
        </motion.div>

        {/* Visual Contrast: The Manipulative App vs The Escolent Sanctuary */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Left: The Manipulative EdTech Pattern */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-red-950/[0.12] border border-red-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-red-300">
                    The Dopamine Trap
                  </span>
                </div>
                <span className="text-[10px] font-mono text-red-400/80 px-2 py-0.5 rounded bg-red-500/10">
                  Extrinsic Anxiety
                </span>
              </div>

              {/* Visual chaotic mockup elements */}
              <div className="mt-6 space-y-3.5">
                {/* Flashing Streak on Fire */}
                <div className="p-3.5 rounded-2xl bg-red-950/40 border border-red-500/30 flex items-center justify-between animate-pulse">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-5 h-5 text-orange-400 animate-bounce" />
                    <div>
                      <div className="text-xs font-bold text-orange-200 uppercase tracking-wide">
                        3-DAY STREAK AT RISK! 🔥
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Practice in 12m or lose all your earned multiplier tokens!
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-400">11:59</span>
                </div>

                {/* Shaming Leaderboard & Gem Currencies */}
                <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Unlock Hint: 50 Gems or Watch Ad
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">
                    Pay / Grind
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Public Rank #28 of 30 (Danger Zone)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    Public Shame
                  </span>
                </div>
              </div>
            </div>

            {/* Critique summary */}
            <div className="mt-8 pt-4 border-t border-red-500/20 text-xs text-red-300/80 leading-relaxed">
              Manufactures artificial urgency, promotes superficial guessing over deep reasoning, and drives burnout among students who need time to reflect.
            </div>
          </motion.div>

          {/* Right: The Escolent Sanctuary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-6 sm:p-8 bg-cyan-950/[0.12] border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-cyan-950/20"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                    The Escolent Sanctuary
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  Intrinsic Clarity
                </span>
              </div>

              {/* Visual calm sanctuary elements */}
              <div className="mt-6 space-y-3.5">
                {/* Quiet Reflection Environment */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Self-Paced Cognitive Space
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        No countdown timers. No penalties for thinking deeply.
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">Active Flow</span>
                </div>

                {/* Dignified Sub-skill Breakdown */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Private Scaffolding When Stuck
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Zero Shaming
                  </span>
                </div>

                {/* Pure Mathematical & Conceptual Mastery */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-medium text-zinc-300">
                      Genuine Pride in Understanding
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    Authentic Growth
                  </span>
                </div>
              </div>
            </div>

            {/* Escolent summary */}
            <div className="mt-8 pt-4 border-t border-cyan-500/20 text-xs text-cyan-300/80 leading-relaxed">
              Designed around cognitive load theory and self-determination research: students learn because they experience genuine understanding, not because they fear losing a cartoon streak.
            </div>
          </motion.div>
        </div>

        {/* 3 Core Ethical Commitments */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <h4 className="text-sm font-semibold text-white">Zero Dark Patterns</h4>
            <p className="text-xs text-zinc-400 mt-1">No artificial FOMO or loss-aversion traps.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <h4 className="text-sm font-semibold text-white">Zero Public Ranking</h4>
            <p className="text-xs text-zinc-400 mt-1">Students master concepts for themselves, not a board.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <h4 className="text-sm font-semibold text-white">Cognitive Dignity</h4>
            <p className="text-xs text-zinc-400 mt-1">Every interface element respects adolescent intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
