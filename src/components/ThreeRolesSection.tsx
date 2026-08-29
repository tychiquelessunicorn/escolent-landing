"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  Building2,
  RefreshCw,
  Maximize2,
  Clock,
  Shield,
  FileCheck,
  CheckCircle2,
  Lock,
  BarChart3,
  Users,
  EyeOff,
  MessageSquare,
  LayoutGrid,
  Search,
  Sparkles,
  Sparkle,
  ArrowUpRight,
} from "lucide-react";
import { LiveIframe } from "./ui/LiveIframe";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";

const EASING = [0.22, 1, 0.36, 1] as const;

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
    iframeUrl: "https://demo.escolent.com/student/today?embed=1",
  },
  {
    id: "teacher",
    stepNumber: "02",
    roleName: "Teacher Escalations",
    headline: "Targeted Daily Triage",
    mechanism:
      "Surfaces exactly what needs attention today — not a dense dashboard to dig through, but a focused triage queue. Teachers spend less time manually checking homework and more time giving direct 1-on-1 support to students who need it.",
    timingTruth: "Queue polls the server every 15–20 seconds to balance freshness with network efficiency.",
    privacyBoundary: "Visible only to verified educators responsible for that classroom.",
    iframeUrl: "https://demo.escolent.com/teacher/escalations?embed=1",
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
    iframeUrl: "https://demo.escolent.com/admin/briefing?embed=1",
  },
];

const mockStudents = [
  { name: "Amara K.", status: [4, 4, 3, 4, 5] },
  { name: "Bongani S.", status: [3, 2, 2, 1, 2] },
  { name: "Chloe V.", status: [5, 5, 4, 5, 5] },
  { name: "Devon P.", status: [4, 3, 4, 3, 4] },
];

const statusColors = [
  "bg-[var(--border-strong)]/40", // 1
  "bg-[var(--brand-base)]", // 2
  "bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)]", // 3
  "bg-[var(--teal-subtle)] border border-[var(--teal-border)]", // 4
  "bg-[var(--teal-accent)]", // 5
];

export function ThreeRolesSection() {
  const [activeTab, setActiveTab] = useState<"student" | "teacher" | "admin">("student");
  const [frameKey, setFrameKey] = useState(0);
  const [queryStep, setQueryStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked tab switching across student, teacher, and admin roles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.35) {
      if (activeTab !== "student") setActiveTab("student");
    } else if (progress < 0.70) {
      if (activeTab !== "teacher") setActiveTab("teacher");
    } else {
      if (activeTab !== "admin") setActiveTab("admin");
    }
  });

  const activeStep = steps.find((s) => s.id === activeTab) || steps[0];

  const queries = [
    { q: "Who hasn't completed two-step linear equations?", a: "3 students: Bongani S., Devon P., Lerato N." },
    { q: "Show escalations unresolved past 30 minutes", a: "1 item: Sarah M. (Stuck on Step 3) — Flagged 34m ago" },
    { q: "Space 'Grade 8 Catch-up' mastery average", a: "Overall 78% durable mastery (+14% this week)" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setQueryStep((prev) => (prev + 1) % queries.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [queries.length]);

  return (
    <section
      ref={containerRef}
      id="three-roles"
      className="relative min-h-[220vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[var(--brand-text)]">
                Unified System
              </span>
              <SparkMotif size={16} />
            </div>

            <StaggeredWords
              as="h2"
              text="One connected event. Three real perspectives."
              highlightWords={["Three", "real", "perspectives."]}
              highlightColor="var(--brand-text)"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
              When a student signals distress, it travels through an unbroken chain:{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">immediate reassurance</ScrollHighlightWord> for the child,{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">timely triage</ScrollHighlightWord> for the teacher, and{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">aggregate oversight</ScrollHighlightWord> for leadership.
            </p>
          </div>

          {/* Step Navigation Tabs */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {steps.map((step) => {
              const isActive = activeTab === step.id;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-3.5 sm:p-4 rounded-[18px] border transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                    isActive
                      ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                      : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
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
                    <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">{step.roleName}</h4>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{step.headline}</p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeRoleBar"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-base)]"
                      transition={{ duration: 0.3, ease: EASING }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Connected Live Shell Container */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASING }}
            className="w-full max-w-5xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden mb-6"
          >
            {/* Header Bar */}
            <div className="p-4 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-7 h-7 rounded-[8px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] text-[var(--brand-text)] flex items-center justify-center font-semibold text-xs shrink-0 mt-0.5 sm:mt-0">
                  {activeStep.stepNumber}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {activeStep.roleName}: {activeStep.headline}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)]">
                      Live Demo State
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 max-w-2xl truncate sm:whitespace-normal">
                    {activeStep.mechanism}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  onClick={() => setFrameKey((k) => k + 1)}
                  title="Reload live instance"
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </motion.button>
                <a
                  href={activeStep.iframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open live shell in new tab"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-[14px] bg-[var(--bg-surface-highlight)] hover:bg-[var(--border-strong)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
                >
                  <span>Direct Shell</span>
                  <Maximize2 className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Real Live Iframe with graceful loading & error fallback */}
            <LiveIframe
              src={activeStep.iframeUrl}
              title={`Live Demo - ${activeStep.roleName}`}
              reloadKey={frameKey}
              height="h-[440px]"
            />

            {/* Factual Mechanics & Privacy Footer */}
            <div className="p-3 sm:p-4 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-semibold uppercase text-[var(--text-muted)] block">
                    How Updates Travel
                  </span>
                  <span className="text-[var(--text-secondary)] mt-0.5 block leading-tight text-[11px]">
                    {activeStep.timingTruth}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2">
                <Shield className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-semibold uppercase text-[var(--text-muted)] block">
                    Who Sees What
                  </span>
                  <span className="text-[var(--text-secondary)] mt-0.5 block leading-tight text-[11px]">
                    {activeStep.privacyBoundary}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
