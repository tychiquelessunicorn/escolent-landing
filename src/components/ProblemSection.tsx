"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Clock, Zap, HelpCircle, EyeOff, Play, Pause } from "lucide-react";

interface StudentNode {
  id: string;
  name: string;
  profile: string;
  gap: string;
  state: "lost" | "bored" | "anxious" | "pacing";
  progressAtFixedSpeed: number; // what they actually comprehend (0-100)
  actualNeed: string;
  color: string;
}

const students: StudentNode[] = [
  {
    id: "s1",
    name: "Student A",
    profile: "Foundational Gap",
    gap: "Missed factoring basics in Grade 7",
    state: "lost",
    progressAtFixedSpeed: 24,
    actualNeed: "Needs 1 scaffold step on prime factors",
    color: "#f43f5e", // Rose
  },
  {
    id: "s2",
    name: "Student B",
    profile: "Already Mastered",
    gap: "Finished concept 15 minutes ago",
    state: "bored",
    progressAtFixedSpeed: 100,
    actualNeed: "Needs non-routine challenge & synthesis",
    color: "#38bdf8", // Sky
  },
  {
    id: "s3",
    name: "Student C",
    profile: "Silent Anxiety",
    gap: "Too intimidated to raise hand",
    state: "anxious",
    progressAtFixedSpeed: 38,
    actualNeed: "Needs private emotional reassurance",
    color: "#fbbf24", // Amber
  },
  {
    id: "s4",
    name: "Student D",
    profile: "Visual Learner",
    gap: "Abstract formula without geometric intuition",
    state: "lost",
    progressAtFixedSpeed: 45,
    actualNeed: "Needs geometric area model representation",
    color: "#a855f7", // Purple
  },
  {
    id: "s5",
    name: "Student E",
    profile: "Speed Overwhelmed",
    gap: "Pacing is 1.4x faster than cognitive processing",
    state: "anxious",
    progressAtFixedSpeed: 52,
    actualNeed: "Needs self-paced reflection latency",
    color: "#f97316", // Orange
  },
];

export function ProblemSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<StudentNode | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="the-problem"
      className="relative min-h-[95vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-[#050507]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        {/* Minimal wordless statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
            The Structural Failure
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            One lesson. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500">
              Thirty different realities.
            </span>
          </h2>
        </motion.div>

        {/* The Animated Simulation Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative shadow-2xl shadow-black/80"
        >
          {/* Header of the Simulation: The Rigid Broadcast Pace */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
              <div className="text-left">
                <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Traditional Classroom Velocity (Fixed 1.0x)
                </div>
                <div className="text-sm font-medium text-white">
                  Topic: Quadratic Factorisation · Step {Math.floor(activeStep / 20) + 1} of 5
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-zinc-300 font-mono transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause Stream" : "Resume Stream"}</span>
              </button>
            </div>
          </div>

          {/* Broadcast Progress Beam (The rigid one-size pace) */}
          <div className="mt-6 relative">
            <div className="flex justify-between text-[11px] font-mono text-zinc-500 mb-2">
              <span>Start: Concept Intro</span>
              <span>Step 3: Algebraic Expansion</span>
              <span>End: Independent Quiz</span>
            </div>

            {/* Rigid Track */}
            <div className="relative h-2 w-full bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-red-500/40 via-amber-500/60 to-red-500"
                style={{ width: `${activeStep}%` }}
              />
            </div>
            <div
              className="absolute top-6 w-0.5 h-36 bg-red-400/40 border-r border-dashed border-red-400 pointer-events-none transition-all duration-75"
              style={{ left: `${activeStep}%` }}
            >
              <span className="absolute -top-5 -translate-x-1/2 text-[9px] font-mono bg-red-500/20 text-red-300 border border-red-500/30 px-1.5 py-0.5 rounded whitespace-nowrap">
                Classroom Marker
              </span>
            </div>
          </div>

          {/* Student Desks / Real Internal Friction Grid */}
          <div className="mt-12 space-y-4 text-left">
            {students.map((st) => {
              const comprehensionGap = activeStep - st.progressAtFixedSpeed;
              const isFailingToKeepUp = comprehensionGap > 15;
              const isBored = st.state === "bored";

              return (
                <div
                  key={st.id}
                  onClick={() => setSelectedStudent(st)}
                  className={`relative p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    selectedStudent?.id === st.id
                      ? "bg-white/[0.08] border-white/30 shadow-lg"
                      : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold"
                        style={{
                          backgroundColor: `${st.color}15`,
                          color: st.color,
                          border: `1px solid ${st.color}40`,
                        }}
                      >
                        {st.name.replace("Student ", "")}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">{st.name}</span>
                          <span className="text-xs text-zinc-400">({st.profile})</span>
                          <span
                            className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: `${st.color}10`,
                              borderColor: `${st.color}30`,
                              color: st.color,
                            }}
                          >
                            {st.state}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5">{st.gap}</p>
                      </div>
                    </div>

                    {/* Comprehension vs Pacing Metric */}
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-right hidden sm:block">
                        <div className="text-[11px] font-mono text-zinc-400">Comprehension Level</div>
                        <div
                          className="font-mono font-medium"
                          style={{ color: st.progressAtFixedSpeed < 50 ? "#f87171" : "#4ade80" }}
                        >
                          {st.progressAtFixedSpeed}% vs {activeStep}% pace
                        </div>
                      </div>

                      {/* Visual state indicator */}
                      <div className="flex items-center gap-2">
                        {isBored ? (
                          <div className="flex items-center gap-1 text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-lg text-[11px]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Disengaged (Checked out)</span>
                          </div>
                        ) : isFailingToKeepUp ? (
                          <div className="flex items-center gap-1 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-lg text-[11px]">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Silent Breakdown</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg text-[11px]">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Anxious Gap</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Individual Comprehension Bar */}
                  <div className="mt-3 relative h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(activeStep, st.progressAtFixedSpeed)}%`,
                        backgroundColor: st.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-zinc-500" />
              <span>In a standard lecture, 78% of distress happens in complete silence.</span>
            </div>
            <a
              href="#branching-path"
              className="mt-3 sm:mt-0 font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <span>See the dynamic alternative below</span>
              <span>↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
