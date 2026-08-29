"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Layers,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Compass,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

const ladderSteps = [
  {
    step: "1",
    title: "Full Worked Example",
    description: "Walks step-by-step through a parallel problem, making every hidden assumption and reasoning leap visible.",
    tag: "Concept Clarity",
  },
  {
    step: "2",
    title: "Guided Step",
    description: "Breaks the question down into a single manageable sub-task so the student only tackles one operation at a time.",
    tag: "Active Guidance",
  },
  {
    step: "3",
    title: "Targeted Hint",
    description: "Points directly to the underlying principle without giving away the answer, preserving cognitive ownership.",
    tag: "Independent Spark",
  },
  {
    step: "4",
    title: "Try Alone",
    description: "Gives the student a fresh opportunity to apply what they've just unlocked, building genuine confidence.",
    tag: "True Mastery",
  },
];

const explanationModes = [
  {
    id: "visual",
    title: "Visual & Geometric",
    subtitle: "Area models and grid decompositions",
    example: "Visualizing (2x + 1)(x + 3) as a rectangular area split into 2x², 6x, x, and 3 square units.",
  },
  {
    id: "algebraic",
    title: "Structural & Algebraic",
    subtitle: "Pattern matching and coefficient grouping",
    example: "Finding two factors of (2 × 3 = 6) that add to 7: splitting 7x into 6x + x and grouping terms.",
  },
  {
    id: "real-world",
    title: "Applied Context",
    subtitle: "Physical intuition and real-world dynamics",
    example: "Framing quadratic expressions through trajectory paths and rate-of-change models.",
  },
];

export function PedagogySection() {
  const [activeMode, setActiveMode] = useState(0);
  const [activeLadderStep, setActiveLadderStep] = useState(0);

  return (
    <section
      id="pedagogy"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Teaching Method
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="How something is taught matters as much as when."
            highlightWords={["taught", "matters"]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Adapting is more than speeding up or slowing down. It means giving students{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">genuinely different ways to understand</ScrollHighlightWord> and a graduated ladder of support — never just "right or wrong" with nothing in between.
          </p>
        </div>

        {/* Two Core Pedagogical Pillars Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Pillar 1: Multiple Ways to Explain the Same Idea (6 cols) */}
          <div className="lg:col-span-6 rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    Multiple Perspectives on One Concept
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded-[8px]">
                  Different Minds
                </span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mt-4 leading-relaxed">
                When a student doesn't grasp an explanation, repeating the exact same words louder or slower doesn't help. Escolent provides fundamentally different mental models for the same curriculum concept:
              </p>

              {/* Mode Selector Tabs */}
              <div className="mt-6 space-y-2.5">
                {explanationModes.map((mode, i) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(i)}
                    className={`w-full text-left p-3.5 rounded-[14px] border transition-all duration-200 ${
                      activeMode === i
                        ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border)] shadow-sm"
                        : "bg-[var(--bg-canvas)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        {mode.title}
                      </span>
                      {activeMode === i && (
                        <span className="text-[10px] font-semibold text-[var(--brand-text)]">
                          Active Model
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                      {mode.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Explanation Preview */}
              <div className="mt-5 p-4 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <div className="text-[10px] font-semibold uppercase text-[var(--brand-text)] mb-1">
                  How the student sees it:
                </div>
                <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                  {explanationModes[activeMode].example}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
              No single student gets stuck because an explanation didn't match their way of thinking.
            </div>
          </div>

          {/* Pillar 2: The Graduated Support Ladder (6 cols) */}
          <div className="lg:col-span-6 rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    The Graduated Support Ladder
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded-[8px]">
                  No Dead Ends
                </span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mt-4 leading-relaxed">
                In traditional software, a wrong answer shows a red cross. In Escolent, every struggle unlocks a graduated step of support designed to keep learning moving forward:
              </p>

              {/* Step Sequence */}
              <div className="mt-6 space-y-2.5">
                {ladderSteps.map((s, idx) => (
                  <div
                    key={s.step}
                    onClick={() => setActiveLadderStep(idx)}
                    className={`p-3.5 rounded-[14px] border transition-all duration-200 cursor-pointer ${
                      activeLadderStep === idx
                        ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border)] shadow-sm"
                        : "bg-[var(--bg-canvas)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-[6px] bg-[var(--brand-subtle)] text-[var(--brand-text)] flex items-center justify-center font-semibold text-xs">
                          {s.step}
                        </span>
                        <span className="text-xs font-semibold text-[var(--text-primary)]">
                          {s.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)] font-medium">
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
              Students build lasting understanding because support is removed gradually as confidence returns.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
