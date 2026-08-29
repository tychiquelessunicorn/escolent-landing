"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  Building2,
  ArrowRight,
  RefreshCw,
  Maximize2,
  Radio,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";

interface RoleStep {
  id: "student" | "teacher" | "admin";
  stepNumber: string;
  roleName: string;
  headline: string;
  mechanism: string;
  timingTruth: string;
  privacyBoundary: string;
  iframeUrl: string;
  accentColor: string;
  borderClass: string;
}

const steps: RoleStep[] = [
  {
    id: "student",
    stepNumber: "01",
    roleName: "Student Practice",
    headline: "The Distress Signal",
    mechanism:
      "When a student clicks 'I need help' or enters concerning language in free-form input, the system logs a confidential escalation event and displays an immediate, reassuring message on her screen.",
    timingTruth: "Instant response on student device; logged immediately to backend.",
    privacyBoundary: "100% private to the student and her assigned teacher. No peer visibility.",
    iframeUrl: "https://demo.escolent.com/student?demo=1",
    accentColor: "#fb7185", // Rose
    borderClass: "border-rose-500/40",
  },
  {
    id: "teacher",
    stepNumber: "02",
    roleName: "Teacher Escalations",
    headline: "The Triage Queue",
    mechanism:
      "The teacher's dashboard receives the student's name, timestamp, and trigger context on the active Escalations queue, enabling the teacher to acknowledge and conduct a timely 1-on-1 check-in.",
    timingTruth: "Queue polls the server every 15–20 seconds to balance freshness with network efficiency.",
    privacyBoundary: "Visible only to authorized educators responsible for that classroom.",
    iframeUrl: "https://demo.escolent.com/teacher/escalations?demo=1",
    accentColor: "#38bdf8", // Sky
    borderClass: "border-sky-500/40",
  },
  {
    id: "admin",
    stepNumber: "03",
    roleName: "Admin Briefing",
    headline: "Institutional Oversight",
    mechanism:
      "School leadership sees high-level aggregate indicators: total active escalations and age thresholds (e.g. unresolved items past 30 minutes) to ensure no child slips through the cracks.",
    timingTruth: "Aggregated institutional metrics compiled for morning and daily briefings.",
    privacyBoundary: "Zero access to private notes or personal transcripts — purely aggregate counts.",
    iframeUrl: "https://demo.escolent.com/admin/briefing?demo=1",
    accentColor: "#34d399", // Emerald
    borderClass: "border-emerald-500/40",
  },
];

export function ThreeRolesSection() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher" | "admin">("student");
  const [frameKey, setFrameKey] = useState(0);

  const activeStep = steps.find((s) => s.id === activeTab) || steps[0];

  return (
    <section
      id="three-roles"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Background glow */}
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
            <Radio className="w-3.5 h-3.5" />
            <span>Three Roles · One Truth</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            One connected event. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-sky-300 to-emerald-400">
              Three real perspectives.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            When a student signals distress, it travels through an unbroken chain of human care: immediate reassurance for the child, timely triage for the teacher, and aggregate oversight for school leadership.
          </p>
        </motion.div>

        {/* Step Navigation Tabs */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {steps.map((step) => {
            const isActive = activeTab === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? `bg-white/[0.08] ${step.borderClass} shadow-lg`
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${step.accentColor}15`,
                      color: step.accentColor,
                      border: `1px solid ${step.accentColor}30`,
                    }}
                  >
                    Step {step.stepNumber}
                  </span>
                  {step.id === "student" && <GraduationCap className="w-4 h-4 text-rose-400" />}
                  {step.id === "teacher" && <UserCheck className="w-4 h-4 text-sky-400" />}
                  {step.id === "admin" && <Building2 className="w-4 h-4 text-emerald-400" />}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">{step.roleName}</h4>
                  <p className="text-xs text-zinc-400 mt-1">{step.headline}</p>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeRoleIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: step.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Connected Live Shell Container */}
        <div className="w-full max-w-5xl rounded-3xl bg-[#08080d] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
          {/* Header Bar */}
          <div className="p-5 bg-zinc-950/90 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 sm:mt-0"
                style={{
                  backgroundColor: `${activeStep.accentColor}15`,
                  color: activeStep.accentColor,
                  border: `1px solid ${activeStep.accentColor}30`,
                }}
              >
                {activeStep.stepNumber}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    {activeStep.roleName}: {activeStep.headline}
                  </h3>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${activeStep.accentColor}20`,
                      color: activeStep.accentColor,
                    }}
                  >
                    Live Demo State
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 max-w-2xl">{activeStep.mechanism}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={() => setFrameKey((k) => k + 1)}
                title="Reload live instance"
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <a
                href={activeStep.iframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open live shell in new tab"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-zinc-200 transition-colors"
              >
                <span>Direct Shell</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Real Live Iframe Container */}
          <div className="relative w-full h-[520px] bg-[#050508]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeStep.id}-${frameKey}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full"
              >
                <iframe
                  src={activeStep.iframeUrl}
                  title={`Live Demo - ${activeStep.roleName}`}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Factual Mechanics & Privacy Footer */}
          <div className="p-4 sm:p-5 bg-zinc-950/90 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                  Delivery & Polling Mechanism
                </span>
                <span className="text-zinc-300 mt-0.5 block leading-relaxed">
                  {activeStep.timingTruth}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">
                  Privacy & Data Scope
                </span>
                <span className="text-zinc-300 mt-0.5 block leading-relaxed">
                  {activeStep.privacyBoundary}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
