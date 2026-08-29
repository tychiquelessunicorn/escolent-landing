"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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

  // Continuous scroll-linked interpolation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const branchSpread = useTransform(scrollYProgress, [0.15, 0.45], [0.94, 1]);
  const forkLineProgress = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const originOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  const scaffoldUrl = "https://demo.escolent.com/student/practice?embed=1&problemDemo=wrong_answer_scaffold";
  const masteryUrl = "https://demo.escolent.com/student/practice?embed=1&skill=variables_both_sides";

  return (
    <section
      ref={containerRef}
      id="branching-path"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Two Real Paths
            </span>
            <SparkMotif size={16} />
          </div>

          <StaggeredWords
            as="h2"
            text="One shared question. Two real, divergent paths."
            highlightWords={["divergent", "paths."]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            When understanding falters, the interface dynamically constructs a{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">scaffold ladder</ScrollHighlightWord>.
            When mastery is proven across multiple problem types, a student{" "}
            <ScrollHighlightWord targetColor="var(--teal-text)">races ahead</ScrollHighlightWord> to the next skill.
            Measured by genuine consistency across time — never penalized for a slip, never advanced on a lucky guess.
          </p>

          {/* View Mode Controls */}
          <div className="mt-8 inline-flex items-center p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                activeTab === "both"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Side-by-Side Proof
            </button>
            <button
              onClick={() => setActiveTab("scaffold")}
              className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                activeTab === "scaffold"
                  ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Scaffold Ladder Path
            </button>
            <button
              onClick={() => setActiveTab("mastery")}
              className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                activeTab === "mastery"
                  ? "bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              Moving Ahead Path
            </button>
          </div>
        </div>

        {/* Scroll-Linked Origin Node & Connecting Path Motif */}
        <motion.div
          style={{ opacity: originOpacity }}
          className="w-full max-w-xl mx-auto mb-10 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-medium)] relative shadow-lg"
          >
            <div className="text-xs font-semibold text-[var(--text-muted)] mb-1">
              Common Starting Point · Multi-Step Linear Equation
            </div>
            <p className="text-sm sm:text-base font-display font-medium text-[var(--text-primary)]">
              Problem: Solve for x: <span className="text-[var(--brand-highlight)] font-semibold font-mono">5x + 3 = 2x + 18</span>
            </p>
          </motion.div>

          {/* Real Connecting Guide Thread */}
          <div className="relative h-14 w-full flex items-center justify-center">
            <motion.div
              style={{ scaleY: forkLineProgress }}
              className="w-[1.5px] h-full bg-gradient-to-b from-[var(--border-strong)] to-[var(--brand-border)] origin-top"
            />
            <div className="absolute bottom-0 left-[20%] right-[20%] h-[1.5px] bg-[var(--border-medium)] flex justify-between items-center">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-[var(--brand-text)] ring-2 ring-[var(--brand-subtle)] -translate-y-1/2"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-2.5 h-2.5 rounded-full bg-[var(--teal-accent)] ring-2 ring-[var(--teal-subtle)] -translate-y-1/2"
              />
            </div>
          </div>
        </motion.div>

        {/* Side-by-Side Live Production Frames */}
        <motion.div
          style={{ scale: branchSpread }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10"
        >
          {/* PATH A: Scaffold Ladder for Struggling Student */}
          {(activeTab === "both" || activeTab === "scaffold") && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASING }}
              className={`flex flex-col rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--brand-border-strong)] transition-all duration-300 ${
                activeTab === "scaffold" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
              }`}
            >
              {/* Shell Header */}
              <div className="px-5 py-3.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      Path A: Struggling Student
                    </span>
                    <span className="text-xs text-[var(--text-muted)] ml-2">
                      (Dynamic Scaffold Ladder)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    onClick={() => setScaffoldKey((k) => k + 1)}
                    title="Reload live instance"
                    className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </motion.button>
                  <a
                    href={scaffoldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live in new tab"
                    className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Real Live Iframe Container with graceful loading & fallback */}
              <LiveIframe
                src={scaffoldUrl}
                title="Live Demo - Scaffold Ladder Mode"
                reloadKey={scaffoldKey}
                height="h-[520px]"
              />

              {/* Shell Footer Notes */}
              <div className="p-4 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>Real live student view: Step-down scaffolding activated upon wrong attempt</span>
                <a
                  href={scaffoldUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-medium inline-flex items-center gap-1"
                >
                  <span>Open directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}

          {/* PATH B: Accelerated Mastery Flow */}
          {(activeTab === "both" || activeTab === "mastery") && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASING }}
              className={`flex flex-col rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--teal-border)] transition-all duration-300 ${
                activeTab === "mastery" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""
              }`}
            >
              {/* Shell Header */}
              <div className="px-5 py-3.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      Path B: Advanced Student
                    </span>
                    <span className="text-xs text-[var(--teal-text)] font-medium ml-2">
                      (Mastered — moving to the next skill)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    onClick={() => setMasteryKey((k) => k + 1)}
                    title="Reload live instance"
                    className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </motion.button>
                  <a
                    href={masteryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live in new tab"
                    className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Real Live Iframe Container with graceful loading & fallback */}
              <LiveIframe
                src={masteryUrl}
                title="Live Demo - Accelerated Mastery Mode"
                reloadKey={masteryKey}
                height="h-[520px]"
              />

              {/* Shell Footer Notes */}
              <div className="p-4 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>Real live student view: Mastery confirmed across multiple checks, advancing instantly</span>
                <a
                  href={masteryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal-text)] hover:text-white font-medium inline-flex items-center gap-1"
                >
                  <span>Open directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* 5-Stage Cognitive Mastery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASING }}
          className="w-full max-w-5xl p-5 sm:p-6 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[var(--brand-text)]" />
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                5-Stage Progression Engine: Measuring Understanding Across Time
              </span>
            </div>
            <span className="text-[10px] font-semibold text-[var(--text-muted)]">
              No single test scores · Probabilistic mastery
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-4">
            {masteryStages.map((stage, idx) => (
              <motion.div
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3 rounded-[14px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${stage.color} ${
                  activeStageIndex === idx ? "ring-2 ring-[var(--brand-border-strong)] shadow-md" : "opacity-85 hover:opacity-100"
                }`}
              >
                <div className="text-[11px] font-bold flex items-center justify-between">
                  <span>{stage.label}</span>
                  {activeStageIndex === idx && <SparkMotif size={10} />}
                </div>
                <div className="text-[10px] opacity-80 mt-1 leading-tight">
                  {stage.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Factual Reassurance Point */}
        <div className="mt-8 text-center text-xs text-[var(--text-muted)] max-w-xl">
          <span>
            Every path transition is deterministic and pedagogical. Teachers maintain complete visibility and override control over all skill progression.
          </span>
        </div>
      </div>
    </section>
  );
}
