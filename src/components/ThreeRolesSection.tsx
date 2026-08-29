"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  Building2,
  RefreshCw,
  Maximize2,
  Clock,
  Shield,
  FileCheck,
} from "lucide-react";
import { LiveIframe } from "./ui/LiveIframe";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

interface RoleStep {
  id: "student" | "teacher" | "admin";
  stepNumber: string;
  roleName: string;
  headline: string;
  mechanism: string;
  timingTruth: string;
  privacyBoundary: string;
  iframeUrl: string;
}

const steps: RoleStep[] = [
  {
    id: "student",
    stepNumber: "01",
    roleName: "Student Practice",
    headline: "The Help Request",
    mechanism:
      "When a student clicks 'I need help' or enters concerning language in free-form input, the system logs a confidential request and displays an immediate, reassuring message on her screen.",
    timingTruth: "Instant reassurance on the student device; logged securely to backend.",
    privacyBoundary: "100% private between the student and her assigned teacher. No peer visibility.",
    iframeUrl: "https://demo.escolent.com/student/today?demo=1",
  },
  {
    id: "teacher",
    stepNumber: "02",
    roleName: "Teacher Escalations",
    headline: "The Active Queue",
    mechanism:
      "The teacher's dashboard receives the student's name, timestamp, and specific problem context on the active Escalations queue, enabling the teacher to conduct a timely, personal check-in.",
    timingTruth: "Queue polls the server every 15–20 seconds to balance freshness with network efficiency.",
    privacyBoundary: "Visible only to verified educators responsible for that classroom.",
    iframeUrl: "https://demo.escolent.com/teacher/escalations?demo=1",
  },
  {
    id: "admin",
    stepNumber: "03",
    roleName: "Admin Briefing & Governance",
    headline: "Institutional Oversight",
    mechanism:
      "School leadership sees high-level aggregate indicators: total active escalations and response times (e.g. unresolved items past 30 minutes) to ensure no child slips through the cracks.",
    timingTruth: "Aggregated oversight compiled for daily briefings; strict data policies enforced.",
    privacyBoundary: "Zero access to private student notes — leadership sees counts, not personal transcripts.",
    iframeUrl: "https://demo.escolent.com/admin/briefing?demo=1",
  },
];

export function ThreeRolesSection() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher" | "admin">("student");
  const [frameKey, setFrameKey] = useState(0);

  const activeStep = steps.find((s) => s.id === activeTab) || steps[0];

  return (
    <section
      id="three-roles"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Unified System
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="One connected event. Three real perspectives."
            highlightWords={["Three", "real", "perspectives."]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            When a student signals distress, it travels through an unbroken chain:{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">immediate reassurance</ScrollHighlightWord> for the child,{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">timely triage</ScrollHighlightWord> for the teacher, and{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">aggregate oversight</ScrollHighlightWord> for leadership.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {steps.map((step) => {
            const isActive = activeTab === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`text-left p-4 sm:p-5 rounded-[18px] border transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                    : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-[8px] ${
                      isActive
                        ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                        : "bg-[var(--bg-surface)] text-[var(--text-muted)]"
                    }`}
                  >
                    Step {step.stepNumber}
                  </span>
                  {step.id === "student" && (
                    <GraduationCap
                      className={`w-4 h-4 ${isActive ? "text-[var(--brand-text)]" : "text-[var(--text-muted)]"}`}
                    />
                  )}
                  {step.id === "teacher" && (
                    <UserCheck
                      className={`w-4 h-4 ${isActive ? "text-[var(--brand-text)]" : "text-[var(--text-muted)]"}`}
                    />
                  )}
                  {step.id === "admin" && (
                    <Building2
                      className={`w-4 h-4 ${isActive ? "text-[var(--brand-text)]" : "text-[var(--text-muted)]"}`}
                    />
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)]">{step.roleName}</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{step.headline}</p>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeRoleBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-base)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Connected Live Shell Container */}
        <div className="w-full max-w-5xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden mb-10">
          {/* Header Bar */}
          <div className="p-5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-8 h-8 rounded-[8px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] text-[var(--brand-text)] flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5 sm:mt-0">
                {activeStep.stepNumber}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {activeStep.roleName}: {activeStep.headline}
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)]">
                    Live Demo State
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl">
                  {activeStep.mechanism}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={() => setFrameKey((k) => k + 1)}
                title="Reload live instance"
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <a
                href={activeStep.iframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open live shell in new tab"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[14px] bg-[var(--bg-surface-highlight)] hover:bg-[var(--border-strong)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
              >
                <span>Direct Shell</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Real Live Iframe with graceful loading & error fallback */}
          <LiveIframe
            src={activeStep.iframeUrl}
            title={`Live Demo - ${activeStep.roleName}`}
            reloadKey={frameKey}
            height="h-[520px]"
          />

          {/* Factual Mechanics & Privacy Footer */}
          <div className="p-4 sm:p-5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-semibold uppercase text-[var(--text-muted)] block">
                  Delivery & Polling Mechanism
                </span>
                <span className="text-[var(--text-secondary)] mt-0.5 block leading-relaxed">
                  {activeStep.timingTruth}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-semibold uppercase text-[var(--text-muted)] block">
                  Privacy & Data Scope
                </span>
                <span className="text-[var(--text-secondary)] mt-0.5 block leading-relaxed">
                  {activeStep.privacyBoundary}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Data Governance & Privacy Guarantee */}
        <div className="w-full max-w-5xl rounded-[22px] p-6 sm:p-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-[10px] bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--brand-text)] shrink-0 mt-0.5">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                Strict Institutional Data Governance
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                School data is strictly governed with an enforced 72-hour hold and explicit written confirmation required before any student records can be permanently deleted. Access controls are mathematically enforced at the database level, not merely cosmetically hidden.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-3 py-1 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
            Enforced 72-Hour Hold
          </span>
        </div>
      </div>
    </section>
  );
}
