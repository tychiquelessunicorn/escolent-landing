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
  Wand2,
  Check,
  RefreshCw,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";
import { LiveIframe } from "./ui/LiveIframe";

const EASING = [0.22, 1, 0.36, 1] as const;

export function MisconceptionSection() {
  const [activeTab, setActiveTab] = useState<"equation" | "spaces">("equation");
  const [spacesReloadKey, setSpacesReloadKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked switching between Error Pattern Flow and Space Creator Shell
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.5) {
      if (activeTab !== "equation") setActiveTab("equation");
    } else {
      if (activeTab !== "spaces") setActiveTab("spaces");
    }
  });

  const spacesUrl = "https://demo.escolent.com/teacher/spaces?embed=1";

  return (
    <section
      ref={containerRef}
      id="misconceptions"
      className="relative min-h-[190vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[var(--brand-text)]">
                Cognitive Diagnostic
              </span>
              <SparkMotif size={16} />
            </div>

            <StaggeredWords
              as="h2"
              text="Struggle caught in silence, before frustration sets in."
              highlightWords={["caught", "silence,"]}
              highlightColor="var(--brand-text)"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
              Not every struggling student clicks "I need help." When a student submits a wrong answer matching a recognized misconception, the system{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">identifies the underlying logic error</ScrollHighlightWord> and surfaces it directly to the teacher's active Space — without waiting for a child to raise their hand.
            </p>

            {/* Toggle View */}
            <div className="mt-6 inline-flex items-center p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("equation")}
                className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 ${
                  activeTab === "equation"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Automatic Error Pattern Flow
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("spaces")}
                className={`px-4 py-1.5 rounded-[8px] text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "spaces"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <FolderTree className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span>Live Space Creator Shell</span>
              </motion.button>
            </div>
          </div>

          {/* TAB 1: Abstract Motion Graphic of Pattern Match */}
          <AnimatePresence mode="wait">
            {activeTab === "equation" && (
              <motion.div
                key="equation"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="w-full max-w-4xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-5 sm:p-8 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2.5 h-2.5 rounded-full bg-[var(--brand-base)] shadow-[0_0_8px_rgba(30,107,255,0.6)]"
                      />
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        Live Problem: Solve for x: 5x + 3 = 2x + 18
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Student silently submits: <strong className="text-[var(--text-primary)] font-mono">3x = 21</strong> (incorrect)
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--brand-text)] border border-[var(--brand-border)] self-start md:self-auto">
                    No Help Button Pressed
                  </span>
                </div>

                {/* Step-by-Step Graphic Chain with animated pulse flow */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch relative">
                  {/* Step 1: Raw Student Attempt */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-3.5 rounded-[16px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full"
                  >
                    <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-1.5">
                      1. Silent Attempt
                    </div>
                    <div className="font-mono text-sm text-[var(--text-primary)] bg-[var(--bg-surface)] p-2 rounded-[10px] border border-[var(--border-subtle)] font-bold">
                      3x = 21
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      Student subtracted 2x from both sides, but added 3 to 18 instead of subtracting 3.
                    </p>
                  </motion.div>

                  {/* Step 2: Diagnostic Engine Match */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-3.5 rounded-[16px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] flex flex-col justify-between h-full shadow-md relative"
                  >
                    <div className="text-[10px] font-semibold uppercase text-[var(--brand-text)] mb-1.5 flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                      <span>2. Pattern Identified</span>
                    </div>
                    <div className="text-xs font-semibold text-[var(--brand-highlight)] bg-[var(--brand-subtle)] p-2 rounded-[10px] border border-[var(--brand-border)] flex items-center justify-between">
                      <span>Sign Inversion on Transposition</span>
                      <SparkMotif size={10} />
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      Classified against known error graph: inverse operation applied incorrectly to constant.
                    </p>
                  </motion.div>

                  {/* Step 3: Teacher View Surfacing */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-3.5 rounded-[16px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex flex-col justify-between h-full"
                  >
                    <div className="text-[10px] font-semibold uppercase text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                      <span>3. Surfaced to Space</span>
                    </div>
                    <div className="text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] p-2 rounded-[10px] border border-[var(--border-subtle)]">
                      Alert: Needs 10s check-in on constant subtraction
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      Appears in the teacher's active Space without the student ever feeling publicly exposed.
                    </p>
                  </motion.div>
                </div>

                {/* Dual Signal Explanation */}
                <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-[12px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                    <span className="font-semibold text-[var(--brand-text)] block mb-0.5">
                      Signal 1 · Affective Safety Net
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed text-[11px]">
                      Catches emotional distress, explicit help requests, and feelings of being overwhelmed.
                    </span>
                  </div>
                  <div className="p-3 rounded-[12px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                    <span className="font-semibold text-[var(--brand-text)] block mb-0.5">
                      Signal 2 · Cognitive Misconception Detection
                    </span>
                    <span className="text-[var(--text-secondary)] leading-relaxed text-[11px]">
                      Catches silent, specific reasoning errors and flags them directly to the educator.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Live Embedded Spaces Shell with Interactive Co-Authoring */}
            {activeTab === "spaces" && (
              <motion.div
                key="spaces"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="w-full max-w-4xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--brand-border)] shadow-2xl overflow-hidden"
              >
                {/* Shell Header Bar */}
                <div className="p-4 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[10px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0">
                      <FolderTree className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                          Teacher Space Creator Shell
                        </h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[6px] bg-[var(--teal-subtle)] text-[var(--teal-text)] border border-[var(--teal-border)]">
                          Live Interactive Embed
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        Type natural language instructions to generate targeted cohorts and practice spaces in seconds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <motion.button
                      whileTap={{ scale: 0.9, rotate: 180 }}
                      onClick={() => setSpacesReloadKey((k) => k + 1)}
                      title="Reload live instance"
                      className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </motion.button>
                    <a
                      href={spacesUrl}
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

                {/* Real Live Iframe Container */}
                <LiveIframe
                  src={spacesUrl}
                  title="Live Demo - Teacher Spaces Shell"
                  reloadKey={spacesReloadKey}
                  height="h-[440px]"
                />

                {/* Shell Footer Notes */}
                <div className="p-3 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--text-secondary)] gap-2">
                  <span>
                    Teachers retain complete authority over every generated Space proposal before it goes live to students.
                  </span>
                  <a
                    href={spacesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0"
                  >
                    <span>Open Space Creator directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
