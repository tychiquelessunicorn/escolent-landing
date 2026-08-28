"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  GraduationCap,
  Building2,
  ArrowRight,
  ShieldAlert,
  BellRing,
  BarChart3,
  CheckCircle2,
  RefreshCw,
  Maximize2,
  Radio,
} from "lucide-react";

interface RoleStep {
  id: "student" | "teacher" | "admin";
  title: string;
  role: string;
  badge: string;
  description: string;
  actionText: string;
  url: string;
  metrics: { label: string; value: string }[];
  color: string;
  accentBorder: string;
}

const roleSteps: RoleStep[] = [
  {
    id: "student",
    title: "1. The Student Friction Event",
    role: "Student Surface",
    badge: "Origin Point",
    description:
      "A student in Grade 8 Algebra hits a 3rd consecutive misconception. The system senses latency and repeated backspacing, elevating a private 'Need Help' signal without public embarrassment.",
    actionText: "Live Student Practice Interface",
    url: "https://demo.escolent.com/student/practice?demo=1&problemDemo=wrong_answer_scaffold",
    metrics: [
      { label: "Trigger Event", value: "Scaffold Ladder Active" },
      { label: "Affective State", value: "Cognitive Friction (Mild)" },
      { label: "Privacy Status", value: "100% Confidential" },
    ],
    color: "#fb7185", // Rose
    accentBorder: "border-rose-500/40",
  },
  {
    id: "teacher",
    title: "2. The Teacher Escalation Queue",
    role: "Teacher Command",
    badge: "Real-Time Triage",
    description:
      "Within 300ms, the teacher's active dashboard flags the exact student, the specific prerequisite misconception (Factoring Binomials), and provides a 2-minute targeted dialogue script.",
    actionText: "Live Teacher Escalation Dashboard",
    url: "https://demo.escolent.com/teacher?demo=1",
    metrics: [
      { label: "Dispatch Latency", value: "< 400ms" },
      { label: "Root Misconception", value: "Sign inversion on step 2" },
      { label: "Suggested Action", value: "2-min Targeted Dialogue" },
    ],
    color: "#38bdf8", // Sky
    accentBorder: "border-sky-500/40",
  },
  {
    id: "admin",
    title: "3. The Admin Institutional Pulse",
    role: "Principal & Admin",
    badge: "Aggregate Truth",
    description:
      "At the institutional layer, leadership sees exact classroom pulse: zero unnoticed drop-offs, 100% intervention closure rate, and real-time curriculum pacing across the whole school.",
    actionText: "Live Admin Briefing Intelligence",
    url: "https://demo.escolent.com/admin?demo=1",
    metrics: [
      { label: "Institutional Health", value: "98.4% On Track" },
      { label: "Unaddressed Drop-offs", value: "0 Students" },
      { label: "Escalation Closure", value: "100% Resolved" },
    ],
    color: "#34d399", // Emerald
    accentBorder: "border-emerald-500/40",
  },
];

export function ThreeRolesSection() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher" | "admin">("student");
  const [frameKey, setFrameKey] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === "student") return "teacher";
        if (prev === "teacher") return "admin";
        return "student";
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentStep = roleSteps.find((s) => s.id === activeTab) || roleSteps[0];

  return (
    <section
      id="three-roles"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Three Roles · One Truth</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Not three disconnected apps. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-sky-300 to-emerald-400">
              One unbroken nervous system.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Watch how a single student’s silent moment of confusion propagates instantly into a teacher’s triage queue, and aggregates into the principal’s morning briefing.
          </p>
        </motion.div>

        {/* The Synchronized Pipeline Stepper Bar */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {roleSteps.map((step, idx) => {
            const isActive = activeTab === step.id;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveTab(step.id);
                  setAutoPlay(false);
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? `bg-white/[0.07] ${step.accentBorder} shadow-lg`
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    Step 0{idx + 1}
                  </span>
                  {idx < 2 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 hidden md:block" />
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">{step.role}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{step.title.split(". ")[1]}</p>
                </div>

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeRoleBar"
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: step.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Connected Telemetry Card & Real Live Shell Embed */}
        <div className="w-full max-w-5xl rounded-3xl bg-[#08080d] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
          {/* Header Bar */}
          <div className="p-5 bg-zinc-950/90 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold"
                style={{
                  backgroundColor: `${currentStep.color}15`,
                  color: currentStep.color,
                  border: `1px solid ${currentStep.color}30`,
                }}
              >
                {activeTab === "student" ? (
                  <GraduationCap className="w-4 h-4" />
                ) : activeTab === "teacher" ? (
                  <UserCheck className="w-4 h-4" />
                ) : (
                  <Building2 className="w-4 h-4" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">{currentStep.title}</h3>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${currentStep.color}20`,
                      color: currentStep.color,
                    }}
                  >
                    Live Sync
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{currentStep.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setFrameKey((k) => k + 1)}
                title="Reload live instance"
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <a
                href={currentStep.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Open live app directly"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-zinc-200 transition-colors"
              >
                <span>Direct Shell</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Real Live Iframe Container */}
          <div className="relative w-full h-[540px] bg-[#050508]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentStep.id}-${frameKey}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <iframe
                  src={currentStep.url}
                  title={`Live Demo - ${currentStep.role}`}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Telemetry Metrics Footer */}
          <div className="p-4 sm:p-5 bg-zinc-950/90 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentStep.metrics.map((m, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-between"
              >
                <span className="text-[11px] font-mono text-zinc-400">{m.label}</span>
                <span className="text-xs font-medium text-white mt-1">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
