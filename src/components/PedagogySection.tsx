"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Layers,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Compass,
  Lightbulb,
  FileText,
  UserCheck,
  Maximize2,
  RefreshCw,
  ArrowUpRight,
  Scale,
  GitBranch,
  BookmarkCheck,
  ExternalLink,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";
import { LiveIframe } from "./ui/LiveIframe";

const EASING = [0.22, 1, 0.36, 1] as const;

const ladderSteps = [
  {
    step: "1",
    title: "Full Worked Example",
    stageName: "Step 1 · Complete Worked Solution",
    badge: "Step-by-Step",
    explanation:
      "Shows the entire problem solved cleanly from start to finish, explaining why each step was taken so the student sees the full picture.",
    studentViewText:
      "Example: Solve for x: 4x + 7 = x + 19 → Subtract x from both sides: 3x + 7 = 19. Subtract 7: 3x = 12. Divide by 3: x = 4. Check: 4(4) + 7 = 23, (4) + 19 = 23 (Balanced).",
  },
  {
    step: "2",
    title: "Guided Step",
    stageName: "Step 2 · One Focused Operation",
    badge: "Guided Support",
    explanation:
      "Breaks the problem down into a single micro-step so the student doesn't have to carry the whole problem in their head at once.",
    studentViewText:
      "Let's take the first step together on 5x + 3 = 2x + 18. Subtract 2x from both sides to collect variable terms on the left. What is (5x - 2x)? Enter below.",
  },
  {
    step: "3",
    title: "Targeted Hint",
    stageName: "Step 3 · Conceptual Reminder",
    badge: "Light Hint",
    explanation:
      "Gives a gentle nudge pointing to the core rule without revealing the answer, letting the student discover the solution on their own.",
    studentViewText:
      "Hint: After collecting variables on the left (3x + 3 = 18), look at the constant (+3). What inverse operation undoes adding 3?",
  },
  {
    step: "4",
    title: "Try Alone",
    stageName: "Step 4 · Independent Practice",
    badge: "Independent Practice",
    explanation:
      "Gives the student a fresh, parallel problem to solve independently with newfound confidence, confirming real understanding.",
    studentViewText:
      "Now try solving a parallel problem on your own: Solve for x: 6x + 5 = 2x + 29. Enter your final value: x = [   ].",
  },
];

const explanationModes = [
  {
    id: "visual",
    title: "Visual Balance Scale",
    badge: "For Visual Thinkers",
    conceptTitle: "Keeping both sides level like a physical scale",
    description:
      "Shows the equals sign as a balanced scale with 5 bags of x and 3 weights on the left, and 2 bags of x and 18 weights on the right. Removing 2 bags from both pans leaves 3x + 3 = 18 in perfect balance.",
    citation: "Aligned to Standard Curriculum Chapter 4: Algebraic Equations & Balance Models",
  },
  {
    id: "algebraic",
    title: "Symmetric Inverse Operations",
    badge: "For Structural Thinkers",
    conceptTitle: "Applying matching operations to both sides",
    description:
      "Breaks down equation solving into inverse pairings: subtraction undoes addition (-2x on both sides), and division undoes multiplication (÷3 on both sides), maintaining mathematical balance at each line.",
    citation: "Aligned to Standard Curriculum Chapter 4: Properties of Equality & Inverse Operations",
  },
  {
    id: "intuitive",
    title: "Applied Rate Comparison",
    badge: "For Practical Intuition",
    conceptTitle: "Finding when two growing quantities equal",
    description:
      "Frames the problem as two rates: Account A starts with $3 and gains $5/week; Account B starts with $18 and gains $2/week. Solving for x finds the exact week they hold identical totals.",
    citation: "Aligned to Standard Curriculum Chapter 4: Linear Modeling & Real-World Rates",
  },
];

export function PedagogySection() {
  const [activeTab, setActiveTab] = useState<"ladder" | "explanations" | "live_learn">("ladder");
  const [activeLadderStep, setActiveLadderStep] = useState(0);
  const [activeExplanation, setActiveExplanation] = useState(0);
  const [learnReloadKey, setLearnReloadKey] = useState(0);

  const currentStep = ladderSteps[activeLadderStep];
  const currentExp = explanationModes[activeExplanation];
  const learnUrl = "https://demo.escolent.com/student/today?embed=1";

  return (
    <section
      id="pedagogy"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Teaching Method
            </span>
            <SparkMotif size={16} />
          </div>

          <StaggeredWords
            as="h2"
            text="How something is taught matters as much as how fast."
            highlightWords={["taught", "matters", "fast."]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Adapting is not just about moving fast or slow. It means giving students{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">genuinely different ways to understand</ScrollHighlightWord>, verified lessons directly linked to school textbooks, and a graduated ladder of support — never just marked wrong with nothing in between.
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab("ladder")}
              className={`px-4 py-2 rounded-[8px] text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "ladder"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[var(--brand-text)]" />
              <span>Graduated Support Ladder</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab("explanations")}
              className={`px-4 py-2 rounded-[8px] text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "explanations"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[var(--brand-text)]" />
              <span>Mental Models</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab("live_learn")}
              className={`px-4 py-2 rounded-[8px] text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "live_learn"
                  ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[var(--brand-text)]" />
              <span>Live Learn Shell</span>
            </motion.button>
          </div>
        </div>

        {/* TAB 1: THE GRADUATED SUPPORT LADDER */}
        {activeTab === "ladder" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="w-full max-w-5xl flex flex-col gap-8"
          >
            {/* Step Selection Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ladderSteps.map((step, idx) => {
                const isActive = activeLadderStep === idx;
                return (
                  <motion.button
                    key={step.step}
                    onClick={() => setActiveLadderStep(idx)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-[18px] border text-left transition-all duration-200 relative flex flex-col justify-between ${
                      isActive
                        ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                        : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`w-6 h-6 rounded-[8px] flex items-center justify-center text-xs font-bold transition-colors ${
                          isActive
                            ? "bg-[var(--brand-base)] text-white shadow-[0_0_8px_rgba(30,107,255,0.4)]"
                            : "bg-[var(--bg-canvas)] text-[var(--text-muted)]"
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="text-[10px] font-semibold text-[var(--text-muted)]">
                        {step.badge}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeLadderBar"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-base)]"
                        transition={{ duration: 0.3, ease: EASING }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLadderStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-8 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[8px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] text-[var(--brand-text)] flex items-center justify-center font-bold text-xs">
                      {currentStep.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {currentStep.stageName}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        {currentStep.explanation}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-elevated)] text-[var(--brand-text)] border border-[var(--brand-border)] self-start sm:self-auto">
                    Graduated Step
                  </span>
                </div>

                {/* What the student sees */}
                <div className="mt-6 p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)]">
                  <div className="text-[10px] font-semibold uppercase text-[var(--brand-text)] mb-2 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>On the student's screen right now:</span>
                  </div>
                  <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed font-mono">
                    {currentStep.studentViewText}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--text-muted)] gap-3">
                  <span>
                    Traditional apps simply display a red cross and deduct points. Escolent steps down the difficulty ladder to protect confidence and build real mastery.
                  </span>
                  <a
                    href="https://demo.escolent.com/student/practice?embed=1&problemDemo=wrong_answer_scaffold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0"
                  >
                    <span>See Live in Action</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* TAB 2: MULTIPLE EXPLANATION MODELS */}
        {activeTab === "explanations" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASING }}
            className="w-full max-w-5xl flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {explanationModes.map((mode, idx) => {
                const isActive = activeExplanation === idx;
                return (
                  <motion.button
                    key={mode.id}
                    onClick={() => setActiveExplanation(idx)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 sm:p-5 rounded-[18px] border text-left transition-all duration-200 relative flex flex-col justify-between ${
                      isActive
                        ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                        : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-[var(--text-muted)] block mb-1">
                        {mode.badge}
                      </span>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                        {mode.title}
                      </h4>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeExpBar"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--brand-base)]"
                        transition={{ duration: 0.3, ease: EASING }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Explanation Model Preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExplanation}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASING }}
                className="rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] p-6 sm:p-8 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {currentExp.title}: {currentExp.conceptTitle}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                      {currentExp.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-text)] border border-[var(--brand-border)] self-start sm:self-auto shrink-0">
                    Alternative Mental Model
                  </span>
                </div>

                {/* Graphical demonstration block with interactive animation */}
                <div className="mt-6 p-6 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-semibold text-[var(--brand-text)] mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interactive Concept Demonstration</span>
                  </div>

                  {/* Mode-specific interactive graphic */}
                  {currentExp.id === "visual" && (
                    <div className="p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] w-full max-w-lg">
                      <div className="flex items-center justify-between text-xs font-mono mb-3 px-2 text-[var(--text-secondary)]">
                        <span className="text-[var(--brand-text)] font-semibold">Left Pan: 5x + 3</span>
                        <Scale className="w-5 h-5 text-[var(--text-muted)] animate-bounce" />
                        <span className="text-[var(--teal-text)] font-semibold">Right Pan: 2x + 18</span>
                      </div>
                      <div className="h-2 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden relative">
                        <motion.div
                          animate={{ scaleX: [0.95, 1.05, 1], rotate: [-1, 1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-[var(--brand-base)] via-[var(--teal-accent)] to-[var(--brand-base)]"
                        />
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-2">
                        Remove 2x weights from both pans → Remaining: <strong className="text-[var(--text-primary)]">3x + 3 = 18</strong>
                      </div>
                    </div>
                  )}

                  {currentExp.id === "algebraic" && (
                    <div className="p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] w-full max-w-lg text-left space-y-1.5 font-mono text-xs">
                      <div className="text-[var(--text-muted)]">Given: 5x + 3 = 2x + 18</div>
                      <div className="text-[var(--brand-highlight)] bg-[var(--brand-subtle)] px-2 py-1 rounded-[6px]">
                        Step 1: (5x - 2x) + 3 = (2x - 2x) + 18 → 3x + 3 = 18
                      </div>
                      <div className="text-[var(--teal-text)] bg-[var(--teal-subtle)] px-2 py-1 rounded-[6px]">
                        Step 2: 3x + (3 - 3) = 18 - 3 → 3x = 15
                      </div>
                      <div className="text-[var(--text-primary)] font-bold px-2 py-1">
                        Step 3: (3x ÷ 3) = (15 ÷ 3) → x = 5
                      </div>
                    </div>
                  )}

                  {currentExp.id === "intuitive" && (
                    <div className="p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] w-full max-w-lg text-xs">
                      <div className="flex justify-between items-center mb-2 text-[11px] text-[var(--text-muted)]">
                        <span>Account A: $3 + $5/week</span>
                        <span>Account B: $18 + $2/week</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-3 rounded-full bg-[var(--border-subtle)] overflow-hidden relative">
                          <motion.div
                            className="h-full bg-[var(--brand-base)]"
                            animate={{ width: ["15%", "85%", "85%", "15%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                        <div className="h-3 rounded-full bg-[var(--border-subtle)] overflow-hidden relative">
                          <motion.div
                            className="h-full bg-[var(--teal-accent)]"
                            animate={{ width: ["45%", "85%", "85%", "45%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                      <div className="text-[11px] text-[var(--text-secondary)] mt-2 font-mono">
                        Intersection reached at exactly <strong className="text-[var(--text-primary)]">Week 5 (x = 5)</strong>: Both totals = $28
                      </div>
                    </div>
                  )}
                </div>

                {/* Syllabus Source Citation Proof */}
                <div className="mt-4 p-3 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <BookmarkCheck className="w-4 h-4 text-[var(--brand-text)]" />
                    <span className="text-[11px]">{currentExp.citation}</span>
                  </div>
                  <span className="text-[10px] font-medium text-[var(--text-secondary)]">Verified Syllabus Source</span>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>
                    Students can browse full Course Maps in the Learn shell before practicing, with verified references to school-approved curricula.
                  </span>
                  <a
                    href="https://demo.escolent.com/student/today?embed=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0 ml-4"
                  >
                    <span>Open Learn Shell Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* TAB 3: LIVE LEARN SHELL & COURSE MAP EMBED */}
        {activeTab === "live_learn" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASING }}
            className="w-full max-w-5xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--brand-border)] shadow-2xl overflow-hidden"
          >
            {/* Shell Header Bar */}
            <div className="p-5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      Student Learn Shell & Daily Overview
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[6px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]">
                      Live Interactive Embed
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Course maps, assigned practice spaces, and learning objectives directly mapped to school curricula.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  onClick={() => setLearnReloadKey((k) => k + 1)}
                  title="Reload live instance"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-[8px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.button>
                <a
                  href={learnUrl}
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

            {/* Real Live Iframe Container */}
            <LiveIframe
              src={learnUrl}
              title="Live Demo - Student Learn Shell"
              reloadKey={learnReloadKey}
              height="h-[520px]"
            />

            {/* Shell Footer Notes */}
            <div className="p-4 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--text-secondary)] gap-2">
              <span>
                Students can browse full Course Maps in the Learn shell before practicing, with verified references to school-approved curricula.
              </span>
              <a
                href={learnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0"
              >
                <span>Open Learn Shell directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
