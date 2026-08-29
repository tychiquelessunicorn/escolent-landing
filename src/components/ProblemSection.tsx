"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { StaggeredWords } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";

export function ProblemSection() {
  const [hoveredStudent, setHoveredStudent] = useState<number | null>(null);

  return (
    <section
      id="the-problem"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 bg-[var(--bg-canvas)] overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Minimal Word-Staggered Headline */}
        <div className="mb-12 sm:mb-16">
          <StaggeredWords
            as="h2"
            text="One lesson. Thirty different realities."
            highlightWords={["Thirty", "realities."]}
            highlightColor="var(--text-secondary)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />
        </div>

        {/* Motion Graphic: Fixed Curriculum Pace vs Actual Student Understanding */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle background grid sheen */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,107,255,0.05),transparent_70%)] pointer-events-none" />

          <div className="relative h-72 sm:h-80 w-full flex flex-col justify-between py-2">
            {/* The Fixed Curriculum Pace */}
            <div className="relative w-full">
              <div className="flex justify-between items-center text-[11px] font-medium text-[var(--text-muted)] mb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-pulse" />
                  <span className="font-semibold text-[var(--text-primary)]">Fixed Classroom Pace</span>
                </div>
                <span className="text-[var(--text-secondary)]">Advances on schedule regardless of mastery</span>
              </div>
              <div className="relative h-2 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden">
                {/* Moving curriculum pulse beam */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-[var(--brand-text)] to-[var(--text-primary)] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  animate={{ x: ["-100%", "150%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Visualizing Divergent Student Realities */}
            <div className="relative h-48 w-full flex flex-col justify-around my-2">
              {/* Student 1: Understood immediately, waiting idle */}
              <div
                className="relative h-1.5 w-full bg-[var(--border-subtle)]/40 rounded-full cursor-pointer transition-colors hover:bg-[var(--border-subtle)]"
                onMouseEnter={() => setHoveredStudent(1)}
                onMouseLeave={() => setHoveredStudent(null)}
              >
                {/* Track progress fill */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-[var(--teal-accent)]/30 rounded-full"
                  animate={{ width: ["0%", "85%", "85%", "0%"] }}
                  transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.35, 0.85, 1], ease: "easeInOut" }}
                />
                {/* Animated Node */}
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--teal-accent)] ring-4 ring-[var(--teal-subtle)] shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                  animate={{
                    left: ["0%", "85%", "85%", "0%"],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    times: [0, 0.35, 0.85, 1],
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -top-6 right-4 text-[10px] font-medium text-[var(--teal-text)] bg-[var(--teal-subtle)] px-2 py-0.5 rounded-[6px] border border-[var(--teal-border)]"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Understood in 2 mins · Bored & idling
                </motion.div>
              </div>

              {/* Student 2: Stalled on prior foundation */}
              <div
                className="relative h-1.5 w-full bg-[var(--border-subtle)]/40 rounded-full cursor-pointer transition-colors hover:bg-[var(--border-subtle)]"
                onMouseEnter={() => setHoveredStudent(2)}
                onMouseLeave={() => setHoveredStudent(null)}
              >
                {/* Track progress fill */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-[var(--brand-base)]/30 rounded-full"
                  animate={{ width: ["0%", "28%", "30%", "24%", "0%"] }}
                  transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.4, 0.7, 0.85, 1], ease: "easeInOut" }}
                />
                {/* Animated Node with struggle oscillation */}
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--brand-text)] ring-4 ring-[var(--brand-subtle)] shadow-[0_0_10px_rgba(30,107,255,0.4)]"
                  animate={{
                    left: ["0%", "28%", "30%", "24%", "0%"],
                    x: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    times: [0, 0.4, 0.7, 0.85, 1],
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute -top-6 left-[20%] text-[10px] font-medium text-[var(--brand-highlight)] bg-[var(--brand-subtle)] px-2 py-0.5 rounded-[6px] border border-[var(--brand-border)]">
                  Stuck on Step 2 · Needs scaffold
                </span>
              </div>

              {/* Student 3: Silent hesitation */}
              <div
                className="relative h-1.5 w-full bg-[var(--border-subtle)]/40 rounded-full cursor-pointer transition-colors hover:bg-[var(--border-subtle)]"
                onMouseEnter={() => setHoveredStudent(3)}
                onMouseLeave={() => setHoveredStudent(null)}
              >
                {/* Track progress fill */}
                <motion.div
                  className="absolute top-0 bottom-0 left-0 bg-[var(--text-muted)]/30 rounded-full"
                  animate={{ width: ["0%", "45%", "46%", "0%"] }}
                  transition={{ duration: 6.5, repeat: Infinity, times: [0, 0.5, 0.8, 1], ease: "easeInOut" }}
                />
                {/* Animated Node with hesitant pause */}
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--text-secondary)] ring-4 ring-[var(--border-subtle)]"
                  animate={{
                    left: ["0%", "45%", "46%", "0%"],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    times: [0, 0.5, 0.8, 1],
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute -top-6 left-[38%] text-[10px] font-medium text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] px-2 py-0.5 rounded-[6px] border border-[var(--border-subtle)]">
                  Silent hesitation · Won't raise hand
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Takeaway */}
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
            <span className="font-medium">The curriculum moves on schedule. Real understanding does not.</span>
            <motion.a
              href="#branching-path"
              whileHover={{ x: 3 }}
              className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <span>See how Escolent adapts</span>
              <span>↓</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
