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
  const [mobileActiveSide, setMobileActiveSide] = useState<"scaffold" | "mastery">("scaffold");
  const [activeStageIndex, setActiveStageIndex] = useState<number>(4);

  // Extended mobile-safe scroll track giving ample dwell time on mobile and desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 -> 0.44: Side-by-Side Proof (Generous reading dwell time)
    if (progress < 0.44) {
      if (activeTab !== "both") setActiveTab("both");
      // On mobile in 'both' mode, split the view smoothly halfway through
      if (progress < 0.22) {
        if (mobileActiveSide !== "scaffold") setMobileActiveSide("scaffold");
      } else {
        if (mobileActiveSide !== "mastery") setMobileActiveSide("mastery");
      }
    } 
    // 0.44 -> 0.74: Scaffold Ladder Path
    else if (progress < 0.74) {
      if (activeTab !== "scaffold") setActiveTab("scaffold");
      if (mobileActiveSide !== "scaffold") setMobileActiveSide("scaffold");
    } 
    // 0.74 -> 1.00: Moving Ahead Path
    else {
      if (activeTab !== "mastery") setActiveTab("mastery");
      if (mobileActiveSide !== "mastery") setMobileActiveSide("mastery");
    }
  });

  const branchSpread = useTransform(scrollYProgress, [0.02, 0.18], [0.96, 1]);
  const originOpacity = useTransform(scrollYProgress, [0.01, 0.12], [0, 1]);

  const scaffoldUrl = "https://demo.escolent.com/student/practice?embed=1&problemDemo=wrong_answer_scaffold";
  const masteryUrl = "https://demo.escolent.com/student/practice?embed=1&skill=variables_both_sides";

  const showScaffold = activeTab === "scaffold" || (activeTab === "both" && (typeof window === "undefined" || mobileActiveSide === "scaffold"));
  const showMastery = activeTab === "mastery" || (activeTab === "both" && (typeof window === "undefined" || mobileActiveSide === "mastery"));

  return (
    <section
      ref={containerRef}
      id="branching-path"
      className="relative min-h-[420vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Headline */}
          <div className="text-center max-w-3xl mb-2.5 sm:mb-3">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--brand-text)]">
                Two Real Paths
              </span>
              <SparkMotif size={13} />
            </div>

            <StaggeredWords
              as="h2"
              text="One shared question. Two real, divergent paths."
              highlightWords={["divergent", "paths."]}
              highlightColor="var(--brand-text)"
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed hidden xs:block">
              When understanding falters, the interface dynamically constructs a{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">scaffold ladder</ScrollHighlightWord>.
              When mastery is proven across multiple problem types, a student{" "}
              <ScrollHighlightWord targetColor="var(--teal-text)">races ahead</ScrollHighlightWord> to the next skill.
            </p>

            {/* View Mode Controls */}
            <div className="mt-2 sm:mt-2.5 inline-flex items-center p-0.5 sm:p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("both")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 ${
                  activeTab === "both"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Side-by-Side Proof
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveTab("scaffold");
                  setMobileActiveSide("scaffold");
                }}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 ${
                  activeTab === "scaffold"
                    ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Scaffold Ladder Path
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveTab("mastery");
                  setMobileActiveSide("mastery");
                }}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-medium transition-all duration-200 ${
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
            className="w-full max-w-sm mx-auto mb-2 sm:mb-2.5 text-center hidden xs:block"
          >
            <div className="py-0.5 px-2.5 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-medium)] inline-flex items-center gap-1.5 shadow-sm text-[11px]">
              <span className="text-[9px] uppercase font-semibold text-[var(--text-muted)]">Starting Equation:</span>
              <span className="text-[var(--brand-highlight)] font-semibold font-mono">5x + 3 = 2x + 18</span>
            </div>
          </motion.div>

          {/* Side-by-Side Live Production Frames */}
          <motion.div
            style={{ scale: branchSpread }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 items-start mb-2 sm:mb-3"
          >
            {/* PATH A: Scaffold Ladder for Struggling Student */}
            <div
              className={`flex flex-col rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--brand-border-strong)] transition-all duration-300 ${
                activeTab === "scaffold" ? "lg:col-span-2 max-w-4xl mx-auto w-full block" : ""
              } ${activeTab === "both" ? (mobileActiveSide === "mastery" ? "hidden lg:flex" : "flex") : ""} ${
                activeTab === "mastery" ? "hidden" : ""
              }`}
            >
              {/* Shell Header */}
              <div className="px-3.5 py-2 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      Path A: Struggling Student
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[var(--text-muted)] ml-1.5">
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
                height="h-[280px] xs:h-[310px] sm:h-[350px] md:h-[380px] lg:h-[400px]"
              />

              {/* Shell Footer Notes */}
              <div className="p-2 sm:p-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                <span className="truncate">Step-down scaffolding activates on incorrect attempt</span>
                <a
                  href={scaffoldUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-medium inline-flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Open directly</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* PATH B: Accelerated Mastery Flow */}
            <div
              className={`flex flex-col rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden hover:border-[var(--teal-border)] transition-all duration-300 ${
                activeTab === "mastery" ? "lg:col-span-2 max-w-4xl mx-auto w-full block" : ""
              } ${activeTab === "both" ? (mobileActiveSide === "scaffold" ? "hidden lg:flex" : "flex") : ""} ${
                activeTab === "scaffold" ? "hidden" : ""
              }`}
            >
              {/* Shell Header */}
              <div className="px-3.5 py-2 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                    <div className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      Path B: Advanced Student
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[var(--teal-text)] font-medium ml-1.5">
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
                height="h-[280px] xs:h-[310px] sm:h-[350px] md:h-[380px] lg:h-[400px]"
              />

              {/* Shell Footer Notes */}
              <div className="p-2 sm:p-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                <span className="truncate">Mastery confirmed across checks, advancing instantly</span>
                <a
                  href={masteryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--teal-text)] hover:text-white font-medium inline-flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>Open directly</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 5-Stage Cognitive Mastery Strip */}
          <div className="w-full max-w-5xl p-2.5 sm:p-3.5 rounded-[16px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1.5 border-b border-[var(--border-subtle)] gap-1">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-primary)]">
                  5-Stage Progression Engine: Measuring Understanding Across Time
                </span>
              </div>
              <span className="text-[9px] font-semibold text-[var(--text-muted)]">
                Probabilistic durable mastery
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 mt-1.5">
              {masteryStages.map((stage, idx) => (
                <motion.div
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-1.5 sm:p-2 rounded-[10px] flex flex-col justify-between cursor-pointer transition-all duration-200 ${stage.color} ${
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
