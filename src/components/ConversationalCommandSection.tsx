"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  ArrowUpRight,
  Send,
  Database,
  Filter,
  Users,
  Check,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";

const EASING = [0.22, 1, 0.36, 1] as const;

interface CommandExample {
  id: "grounded" | "clarification";
  modeLabel: string;
  badge: string;
  badgeColor: string;
  userPrompt: string;
  assistantReply: {
    lead: string;
    items?: string[];
    actionSuggestion?: string;
    truthFooter: string;
  };
  keyPrinciple: {
    title: string;
    description: string;
  };
}

const examples: CommandExample[] = [
  {
    id: "grounded",
    modeLabel: "1. Factual Grounding",
    badge: "Zero Speculation",
    badgeColor: "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border-[var(--brand-border)]",
    userPrompt: "Which students struggled with variables on both sides in Period 3 today?",
    assistantReply: {
      lead: "3 students flagged in Period 3 section based on session diagnostics:",
      items: [
        "Marcus T. — 3 attempts with Sign Inversion on linear constants (3x = 21).",
        "Amara K. — 2 attempts omitting variable division step.",
        "Dev P. — Raised silent 'I need help' flag during independent practice.",
      ],
      actionSuggestion: "Proposed Action: Generate a 10-minute targeted review space on inverse operations for these 3 students.",
      truthFooter: "Grounded directly in 28 real-time student session records. Zero hallucination.",
    },
    keyPrinciple: {
      title: "Grounded in Real Records",
      description: "When asked a factual question, the system answers only with verified telemetry from actual problem attempts and recorded misconception graphs.",
    },
  },
  {
    id: "clarification",
    modeLabel: "2. Honest Clarification",
    badge: "Refuses to Guess",
    badgeColor: "bg-[var(--teal-subtle)] text-[var(--teal-text)] border-[var(--teal-border)]",
    userPrompt: "Create a catch-up group for the students falling behind.",
    assistantReply: {
      lead: "To make sure the cohort is accurate, please select the criteria you want to use:",
      items: [
        "Option A: Students with mastery below 60% on Linear Equations (4 students)",
        "Option B: Students with unresolved help flags from this week (2 students)",
        "Option C: Students with incomplete problem sets from Chapter 4 (5 students)",
      ],
      actionSuggestion: "Reply with A, B, or C — or provide custom mastery thresholds.",
      truthFooter: "Never assumes teacher intent. Asks for explicit parameters rather than inventing groupings.",
    },
    keyPrinciple: {
      title: "Refusal to Hallucinate Intent",
      description: "When a request is ambiguous or subjective ('falling behind'), the system never guesses what a teacher means. It presents clear, factual options for human confirmation.",
    },
  },
];

export function ConversationalCommandSection() {
  const [activeTab, setActiveTab] = useState<"grounded" | "clarification">("grounded");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.5) {
      if (activeTab !== "grounded") setActiveTab("grounded");
    } else {
      if (activeTab !== "clarification") setActiveTab("clarification");
    }
  });

  const activeExample = examples.find((e) => e.id === activeTab) || examples[0];

  return (
    <section
      ref={containerRef}
      id="command-layer"
      className="relative min-h-[320vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-6 sm:py-10 md:py-14 px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-3 sm:mb-5">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--brand-text)]">
                Conversational Command Layer
              </span>
              <SparkMotif size={13} />
            </div>

            <StaggeredWords
              as="h2"
              text="Plain questions. Grounded answers. Zero guesswork."
              highlightWords={["Grounded", "answers.", "guesswork."]}
              highlightColor="var(--brand-text)"
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed hidden xs:block">
              Teachers and school leaders can query the system in natural language. The model speaks in Escolent's calm, factual voice: strictly{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">grounded in real student records</ScrollHighlightWord>, and honestly{" "}
              <ScrollHighlightWord targetColor="var(--teal-text)">asking for clarification</ScrollHighlightWord> instead of guessing when a request is ambiguous.
            </p>

            {/* Mode Controls */}
            <div className="mt-2.5 sm:mt-3 inline-flex items-center p-0.5 sm:p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[14px]">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("grounded")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "grounded"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Database className="w-3.5 h-3.5 text-[var(--brand-text)]" />
                <span>Grounded Precision</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab("clarification")}
                className={`px-2.5 sm:px-3.5 py-1 rounded-[8px] text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === "clarification"
                    ? "bg-[var(--bg-surface-highlight)] text-[var(--text-primary)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-[var(--teal-text)]" />
                <span>Honest Clarification</span>
              </motion.button>
            </div>
          </div>

          {/* Real Exchange Dialogue Frame */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="w-full max-w-4xl rounded-[18px] sm:rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-xl overflow-hidden mb-2 sm:mb-3"
          >
            {/* Header */}
            <div className="px-3.5 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-[6px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)]">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    Teacher Command Interface
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] ml-2 hidden sm:inline">
                    Natural Language Telemetry Query
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-[6px] border ${activeExample.badgeColor}`}>
                {activeExample.badge}
              </span>
            </div>

            {/* Conversation Flow */}
            <div className="p-3.5 sm:p-5 flex flex-col gap-3 sm:gap-4 bg-[var(--bg-canvas)]">
              {/* User Message Bubble */}
              <div className="flex items-start gap-2.5 max-w-2xl self-end">
                <div className="p-2.5 sm:p-3 rounded-[16px] rounded-tr-[4px] bg-[var(--brand-base)] text-white text-xs sm:text-sm font-medium shadow-md">
                  {activeExample.userPrompt}
                </div>
                <div className="w-6 h-6 rounded-full bg-[var(--bg-surface-highlight)] border border-[var(--border-strong)] flex items-center justify-center text-[10px] font-bold text-[var(--text-primary)] shrink-0 mt-1">
                  T
                </div>
              </div>

              {/* Assistant Grounded Response */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExample.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASING }}
                  className="flex items-start gap-2.5 max-w-3xl self-start"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0 mt-1">
                    <SparkMotif size={10} />
                  </div>

                  <div className="p-3 sm:p-4 rounded-[16px] rounded-tl-[4px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] shadow-sm space-y-2.5">
                    <p className="font-semibold text-[var(--text-primary)] text-xs sm:text-sm">
                      {activeExample.assistantReply.lead}
                    </p>

                    {activeExample.assistantReply.items && (
                      <div className="space-y-1.5 pl-1">
                        {activeExample.assistantReply.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-[var(--text-secondary)] font-mono">
                            <span className="text-[var(--brand-text)] font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeExample.assistantReply.actionSuggestion && (
                      <div className="p-2 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] text-[11px] sm:text-xs text-[var(--brand-highlight)] font-medium">
                        {activeExample.assistantReply.actionSuggestion}
                      </div>
                    )}

                    <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center gap-1.5 text-[10px] text-[var(--text-muted)]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>{activeExample.assistantReply.truthFooter}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Factual Principle Bar */}
            <div className="px-3.5 py-2.5 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[var(--text-secondary)] gap-1.5">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--text-primary)]">{activeExample.keyPrinciple.title}:</span>
                <span className="text-[var(--text-muted)]">{activeExample.keyPrinciple.description}</span>
              </div>
              <a
                href="https://demo.escolent.com/teacher/spaces?embed=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0 ml-auto sm:ml-0 text-[10px] sm:text-[11px]"
              >
                <span>Try Command Layer</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
