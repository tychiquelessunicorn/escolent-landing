"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
import { RefreshCw, Maximize2, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { SparkMotif } from "./motifs/SparkMotif";
import { LiveIframe } from "./ui/LiveIframe";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

const EASING = [0.22, 1, 0.36, 1] as const;

const masteryStages = [
  { id: "not_attempted", label: "1. Not Started", desc: "Fresh syllabus concept", color: "bg-[var(--border-strong)]/40 text-[var(--text-muted)]" },
  { id: "struggling", label: "2. Needs Help", desc: "Step-down ladder engaged", color: "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]" },
  { id: "emerging", label: "3. Emerging", desc: "Core steps clicking", color: "bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]" },
  { id: "tentative", label: "4. Practicing", desc: "Solving with light hints", color: "bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]" },
  { id: "durable", label: "5. Mastered", desc: "Consistent & durable", color: "bg-[var(--teal-base)] text-white shadow-sm" },
];

export function BranchingPathSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scaffoldKey, setScaffoldKey] = useState(0);
  const [masteryKey, setMasteryKey] = useState(0);
  const [activeTab, setActiveTab] = useState<"both" | "scaffold" | "mastery">("both");
  const [activeStageIndex, setActiveStageIndex] = useState<number>(4);

  // Extended scroll track allowing full reading and dwell time for each tab
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 -> 0.38: Side-by-Side Proof (Fully visible, plenty of time to view both paths)
    if (progress < 0.38) {
      if (activeTab !== "both") setActiveTab("both");
    } 
    // 0.38 -> 0.72: Scaffold Ladder Path (Focused single view)
    else if (progress < 0.72) {
      if (activeTab !== "scaffold") setActiveTab("scaffold");
    } 
    // 0.72 -> 1.00: Moving Ahead Path (Focused single view before exiting section)
    else {
      if (activeTab !== "mastery") setActiveTab("mastery");
    }
  });

  const branchSpread = useTransform(scrollYProgress, [0.02, 0.18], [0.96, 1]);
  const forkLineProgress = useTransform(scrollYProgress, [0.01, 0.15], [0, 1]);
  const originOpacity = useTransform(scrollYProgress, [0.01, 0.12], [0, 1]);

  const scaffoldUrl = "https://demo.escolent.com/student/practice?embed=1&problemDemo=wrong_answer_scaffold";
  const masteryUrl = "https://demo.escolent.com/student/practice?embed=1&skill=variables_both_sides";

  return (
    <section
      ref={containerRef}
      id="branching-path"
      className="relative min-h-[340vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Headline */}
          <div className="text-center max-w-3xl mb-4 sm:mb-5">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="text-xs font-semibold text-[var(--brand-text)]">
                Two Real Paths
              </span>
              <SparkMotif size={14} />
            </div>

            <StaggeredWords
              as="h2"
              text="One shared question. Two real, divergent paths."
              highlightWords={["divergent", "paths."]}
              highlightColor="var(--brand-text)"
              className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              When understanding falters, the interface dynamically constructs a{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">scaffold ladder</ScrollHighlightWord>.
              When mastery is proven across multiple problem types, a student{" "}
              <ScrollHighlightWord targetColor="var(--teal-text)">races ahead</ScrollHighlightWord> to the next skill.
              Measured by genuine consistency across time — never penalized for a slip, never advanced on a lucky guess.
            </p>

            {/* View Mode Controls */}
            <div className="mt-3.5 inline-flex items-center p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("both")}
                className={`px-3.5 py-1 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                  activeTab === "both"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Side-by-Side Proof
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("scaffold")}
                className={`px-3.5 py-1 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                  activeTab === "scaffold"
                    ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Scaffold Ladder Path
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("mastery")}
                className={`px-3.5 py-1 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                  activeTab === "mastery"
                    ? "bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Moving Ahead Path
              </motion.button>
            </div>
          </div>

          {/* Compact Origin Chip */}
          <motion.div
            style={{ opacity: originOpacity }}
            className="w-full max-w-sm mx-auto mb-3 text-center"
          >
            <div className="py-1 px-3 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-medium)] inline-flex items-center gap-2 shadow-sm text-xs">
              <span className="text-[10px] uppercase font-semibold text-[var(--text-muted)]">Starting Equation:</span>
              <span className="text-[var(--brand-highlight)] font-semibold font-mono">5x + 3 = 2x + 18</span>
            </div>
          </motion.div>

          {/* Side-by-Side Live Production Frames */}
          <motion.div
            style={{ scale: branchSpread }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start mb-3"
          >
            {/* PATH A: Scaffold Ladder for Struggling Student */}
            {(activeTab === "both" || activeTab === "scaffold") && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASING }}
                className={`flex flex-col rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--brand-border-strong)] transition-all duration-300 ${
                  activeTab === "scaffold" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
                }`}
              >
                {/* Shell Header */}
                <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        Path A: Struggling Student
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)] ml-2">
                        (Dynamic Scaffold Ladder)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <motion.button
                      whileTap={{ scale: 0.9, rotate: 180 }}
                      onClick={() => setScaffoldKey((k) => k + 1)}
                      title="Reload live instance"
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[6px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </motion.button>
                    <a
                      href={scaffoldUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open live in new tab"
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[6px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Real Live Iframe Container */}
                <LiveIframe
                  src={scaffoldUrl}
                  title="Live Demo - Scaffold Ladder Mode"
                  reloadKey={scaffoldKey}
                  height={activeTab === "both" ? "h-[300px] sm:h-[340px]" : "h-[380px]"}
                />

                {/* Shell Footer Notes */}
                <div className="p-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="text-[11px]">Step-down scaffolding activates on incorrect attempt</span>
                  <a
                    href={scaffoldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-medium inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Open directly</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* PATH B: Accelerated Mastery Flow */}
            {(activeTab === "both" || activeTab === "mastery") && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASING }}
                className={`flex flex-col rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--teal-border)] transition-all duration-300 ${
                  activeTab === "mastery" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
                }`}
              >
                {/* Shell Header */}
                <div className="px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        Path B: Advanced Student
                      </span>
                      <span className="text-[11px] text-[var(--teal-text)] font-medium ml-2">
                        (Mastered — moving to next skill)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <motion.button
                      whileTap={{ scale: 0.9, rotate: 180 }}
                      onClick={() => setMasteryKey((k) => k + 1)}
                      title="Reload live instance"
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[6px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </motion.button>
                    <a
                      href={masteryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open live in new tab"
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[6px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Real Live Iframe Container */}
                <LiveIframe
                  src={masteryUrl}
                  title="Live Demo - Accelerated Mastery Mode"
                  reloadKey={masteryKey}
                  height={activeTab === "both" ? "h-[300px] sm:h-[340px]" : "h-[380px]"}
                />

                {/* Shell Footer Notes */}
                <div className="p-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span className="text-[11px]">Mastery confirmed across checks, advancing instantly</span>
                  <a
                    href={masteryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--teal-text)] hover:text-white font-medium inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Open directly</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* 5-Stage Cognitive Mastery Strip */}
          <div className="w-full max-w-5xl p-3 sm:p-4 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[var(--border-subtle)] gap-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  5-Stage Progression Engine: Measuring Understanding Across Time
                </span>
              </div>
              <span className="text-[10px] font-semibold text-[var(--text-muted)]">
                No single test scores · Probabilistic mastery
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
              {masteryStages.map((stage, idx) => (
                <motion.div
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-2 rounded-[10px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${stage.color} ${
                    activeStageIndex === idx ? "ring-2 ring-[var(--brand-border-strong)] shadow-md" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  <div className="text-[10px] font-bold flex items-center justify-between">
                    <span>{stage.label}</span>
                    {activeStageIndex === idx && <SparkMotif size={8} />}
                  </div>
                  <div className="text-[9px] opacity-80 mt-0.5 leading-tight">
                    {stage.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
