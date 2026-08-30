"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  Brain,
  AlertCircle,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  FolderTree,
  Eye,
  Layers,
  Sparkles,
  Users,
  Grid3X3,
  Check,
  RefreshCw,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";
import { LiveIframe } from "./ui/LiveIframe";

const EASING = [0.22, 1, 0.36, 1] as const;

interface ClassCluster {
  id: string;
  name: string;
  pattern: string;
  studentCount: number;
  students: string[];
  recommendedAction: string;
  status: "solid" | "attention" | "review";
}

const classClusters: ClassCluster[] = [
  {
    id: "mastered",
    name: "Independent Mastery",
    pattern: "Consistently applying inverse operations across variable sides",
    studentCount: 18,
    students: ["Sarah L.", "Tariq K.", "Elena R.", "+15 others"],
    recommendedAction: "Advanced to multi-step distributive equations.",
    status: "solid",
  },
  {
    id: "sign_inversion",
    name: "Sign Inversion on Constants",
    pattern: "Adding constants instead of subtracting (e.g. 5x + 3 = 2x + 18 → 3x = 21)",
    studentCount: 6,
    students: ["Marcus T.", "Aisha D.", "Liam P.", "Zoe M.", "Kabelo N.", "Fatima B."],
    recommendedAction: "3-minute warm-up on balancing constant terms before individual practice.",
    status: "attention",
  },
  {
    id: "variable_collection",
    name: "Variable Term Collection",
    pattern: "Combining unequal variable terms across the equals sign",
    studentCount: 4,
    students: ["Dev P.", "Grace M.", "Sipho Z.", "Ananya S."],
    recommendedAction: "Assign Balance Scale visual mental model.",
    status: "review",
  },
];

export function MisconceptionSection() {
  const [activeTab, setActiveTab] = useState<"equation" | "classroom_mastery" | "spaces">("equation");
  const [selectedCluster, setSelectedCluster] = useState<number>(1);
  const [spacesReloadKey, setSpacesReloadKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Extended mobile-safe scroll track giving ample dwell time across all 3 distinct views
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 -> 0.38: Single Student Error Pattern Flow
    if (progress < 0.38) {
      if (activeTab !== "equation") setActiveTab("equation");
    } 
    // 0.38 -> 0.72: Class-Wide Mastery Overview (Extending "surfaces to the teacher" to whole-class view)
    else if (progress < 0.72) {
      if (activeTab !== "classroom_mastery") setActiveTab("classroom_mastery");
    } 
    // 0.72 -> 1.00: Teacher Spaces & Cohort Management Live Embed
    else {
      if (activeTab !== "spaces") setActiveTab("spaces");
    }
  });

  const spacesUrl = "https://demo.escolent.com/teacher/spaces?embed=1";

  return (
    <section
      ref={containerRef}
      id="misconceptions"
      className="relative min-h-[460vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-4 sm:py-8 md:py-12 px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-2.5 sm:mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--brand-text)]">
                Cognitive Diagnostic & Classroom Mastery
              </span>
              <SparkMotif size={13} />
            </div>

            <StaggeredWords
              as="h2"
              text="Struggle caught in silence, before frustration sets in."
              highlightWords={["caught", "silence,"]}
              highlightColor="var(--brand-text)"
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed hidden xs:block">
              Not every struggling student clicks "I need help." When a student makes a specific mathematical error, the system{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">identifies the underlying misconception</ScrollHighlightWord> and aggregates those signals across the entire room — so a teacher sees both individual hurdles and class-wide patterns at a glance.
            </p>

            {/* Mode Controls */}
            <div className="mt-2.5 sm:mt-3 inline-flex items-center p-0.5 sm:p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("equation")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "equation"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Brain className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span>Single Error Pattern</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("classroom_mastery")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "classroom_mastery"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Grid3X3 className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span>Class-Wide Mastery View</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("spaces")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "spaces"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <FolderTree className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span>Teacher Spaces & Cohorts</span>
              </motion.button>
            </div>
          </div>

          {/* TAB 1: Abstract Motion Graphic of Pattern Match */}
          <AnimatePresence mode="wait">
            {activeTab === "equation" && (
              <motion.div
                key="equation"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="w-full max-w-4xl rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-3 sm:p-4 md:p-6 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-1.5 sm:gap-2.5 pb-2 sm:pb-3 border-b border-[var(--border-subtle)]">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-[var(--brand-base)] shadow-[0_0_8px_rgba(30,107,255,0.6)]"
                      />
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        Individual Student Diagnosis: Solve for x: 5x + 3 = 2x + 18
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] mt-0.5">
                      Student silently submits: <strong className="text-[var(--text-primary)] font-mono">3x = 21</strong> (incorrect)
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-[6px] bg-[var(--bg-surface-elevated)] text-[var(--brand-text)] border border-[var(--brand-border)] self-start md:self-auto">
                    No Help Button Pressed
                  </span>
                </div>

                {/* Step-by-Step Graphic Chain */}
                <div className="py-2.5 sm:py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 items-stretch relative">
                  {/* Step 1: Raw Student Attempt */}
                  <motion.div
                    whileHover={{ y: -1 }}
                    className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full"
                  >
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-0.5">
                      1. Silent Attempt
                    </div>
                    <div className="font-mono text-[11px] sm:text-xs text-[var(--text-primary)] bg-[var(--bg-surface)] p-1 sm:p-1.5 rounded-[6px] sm:rounded-[8px] border border-[var(--border-subtle)] font-bold">
                      3x = 21
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[var(--text-muted)] mt-1 leading-relaxed">
                      Subtracted 2x from both sides, but added 3 to 18 instead of subtracting 3.
                    </p>
                  </motion.div>

                  {/* Step 2: Diagnostic Engine Match */}
                  <motion.div
                    whileHover={{ y: -1 }}
                    className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] flex flex-col justify-between h-full shadow-md relative"
                  >
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-[var(--brand-text)] mb-0.5 flex items-center gap-1">
                      <Brain className="w-3 h-3 text-[var(--brand-text)]" />
                      <span>2. Pattern Identified</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-[var(--brand-highlight)] bg-[var(--brand-subtle)] p-1 sm:p-1.5 rounded-[6px] sm:rounded-[8px] border border-[var(--brand-border)] flex items-center justify-between">
                      <span>Sign Inversion</span>
                      <SparkMotif size={8} />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[var(--text-secondary)] mt-1 leading-relaxed">
                      Matched to error graph: inverse operation applied incorrectly to constant.
                    </p>
                  </motion.div>

                  {/* Step 3: Teacher View Surfacing */}
                  <motion.div
                    whileHover={{ y: -1 }}
                    className="p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full"
                  >
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-0.5 flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-[var(--text-secondary)]" />
                      <span>3. Surfaced to Space</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] p-1 sm:p-1.5 rounded-[6px] sm:rounded-[8px] border border-[var(--border-subtle)]">
                      Alert: 10s check-in on constant
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[var(--text-muted)] mt-1 leading-relaxed">
                      Appears in teacher's active Space without public student exposure.
                    </p>
                  </motion.div>
                </div>

                {/* Dual Signal Explanation */}
                <div className="pt-2 sm:pt-2.5 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 sm:p-2.5 rounded-[8px] sm:rounded-[10px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                    <span className="font-semibold text-[var(--brand-text)] block mb-0.5 text-[10px] sm:text-[11px]">
                      Signal 1 · Affective Safety Net
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed text-[9px] sm:text-[10px]">
                      Catches emotional distress, explicit help requests, and feelings of being overwhelmed.
                    </span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-[8px] sm:rounded-[10px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hidden xs:block">
                    <span className="font-semibold text-[var(--brand-text)] block mb-0.5 text-[10px] sm:text-[11px]">
                      Signal 2 · Cognitive Misconception Detection
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed text-[9px] sm:text-[10px]">
                      Catches silent, specific reasoning errors and flags them directly to the educator.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Class-Wide Mastery Matrix Overview */}
            {activeTab === "classroom_mastery" && (
              <motion.div
                key="classroom_mastery"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="w-full max-w-4xl rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-3 sm:p-4 md:p-6 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2.5 border-b border-[var(--border-subtle)] gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-[6px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)]">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                        Class-Wide Mastery Matrix · Grade 8 Algebra
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] mt-0.5">
                        28 Students Total · Live Misconception Clustering across Class Session
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[6px] bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]">
                    Classroom-Wide View
                  </span>
                </div>

                {/* Cohort Breakdown Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 my-3">
                  {classClusters.map((cluster, idx) => {
                    const isSelected = selectedCluster === idx;
                    return (
                      <motion.button
                        key={cluster.id}
                        onClick={() => setSelectedCluster(idx)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] text-left border transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                            : "bg-[var(--bg-canvas)] border-[var(--border-subtle)] opacity-80 hover:opacity-100"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-primary)]">
                              {cluster.name}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-[6px] ${
                                cluster.status === "solid"
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : cluster.status === "attention"
                                  ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              }`}
                            >
                              {cluster.studentCount} students
                            </span>
                          </div>
                          <p className="text-[10px] text-[var(--text-muted)] leading-relaxed line-clamp-2">
                            {cluster.pattern}
                          </p>
                        </div>

                        <div className="mt-2 pt-1.5 border-t border-[var(--border-subtle)] text-[9px] text-[var(--text-secondary)] font-mono truncate">
                          {cluster.students.join(", ")}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Selected Cluster Deep-Dive Bar */}
                <div className="p-3 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[var(--brand-text)] text-[11px] sm:text-xs">
                      Teacher Action for {classClusters[selectedCluster].name}:
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">
                      {classClusters[selectedCluster].studentCount} of 28 students
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-primary)] font-medium">
                    {classClusters[selectedCluster].recommendedAction}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[var(--text-muted)] gap-1.5">
                  <span className="truncate">
                    Spotting class patterns turns 6 isolated student struggles into one 3-minute mini-lesson.
                  </span>
                  <a
                    href="https://demo.escolent.com/teacher/spaces?embed=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0 ml-auto sm:ml-0"
                  >
                    <span>View in Teacher Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* TAB 3: Live Embedded Spaces Shell with Interactive Co-Authoring */}
            {activeTab === "spaces" && (
              <motion.div
                key="spaces"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="w-full max-w-4xl rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--brand-border)] shadow-2xl overflow-hidden"
              >
                {/* Shell Header Bar */}
                <div className="p-2.5 sm:p-3.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[7px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0">
                      <FolderTree className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                          Teacher Spaces & Cohort Management
                        </h3>
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-[5px] bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]">
                          Live Embed
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] mt-0.5 hidden xs:block">
                        Organize targeted cohorts, assign practice spaces, and monitor student progress groups across the classroom.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                    <motion.button
                      whileTap={{ scale: 0.9, rotate: 180 }}
                      onClick={() => setSpacesReloadKey((k) => k + 1)}
                      title="Reload live instance"
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[6px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </motion.button>
                    <a
                      href={spacesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open live shell in new tab"
                      className="flex items-center gap-1 px-2.5 py-1 rounded-[12px] bg-[var(--bg-surface-highlight)] hover:bg-[var(--border-strong)] text-[11px] font-semibold text-[var(--text-primary)] transition-colors"
                    >
                      <span>Direct Shell</span>
                      <Maximize2 className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Real Live Iframe Container */}
                <LiveIframe
                  src={spacesUrl}
                  title="Live Demo - Teacher Spaces Shell"
                  reloadKey={spacesReloadKey}
                  height="h-[360px] xs:h-[400px] sm:h-[480px] lg:h-[560px]"
                />

                {/* Shell Footer Notes */}
                <div className="p-2 sm:p-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[var(--text-secondary)] gap-1">
                  <span className="truncate">
                    Teachers organize targeted cohorts and monitor group mastery across active spaces.
                  </span>
                  <a
                    href={spacesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0 ml-auto sm:ml-0"
                  >
                    <span>Open Spaces directly</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
