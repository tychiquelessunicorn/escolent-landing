"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaggeredWords } from "./ui/TextReveal";

export function ProblemSection() {
  return (
    <section
      id="the-problem"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 bg-[var(--bg-canvas)]"
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

        {/* Motion Graphic: Rigid Broadcast Vector vs Actual Divergent Understanding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="relative h-64 sm:h-72 w-full flex flex-col justify-between py-2">
            {/* The Relentless Broadcast Vector */}
            <div className="relative w-full">
              <div className="flex justify-between items-center text-[11px] font-medium text-[var(--text-muted)] mb-2">
                <span>Fixed Classroom Velocity (1.0x)</span>
                <span className="text-[var(--text-secondary)]">Advances regardless of comprehension</span>
              </div>
              <div className="relative h-1.5 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-[var(--border-strong)] to-[var(--text-primary)]"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Visualizing Divergent Student Realities */}
            <div className="relative h-44 w-full flex flex-col justify-around">
              {/* Path 1: Advanced student finished early, idle */}
              <div className="relative h-1 w-full bg-[var(--border-subtle)]/40 rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--text-primary)] shadow-sm"
                  animate={{
                    left: ["0%", "85%", "85%", "0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.35, 0.85, 1],
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute -top-5 right-4 text-[10px] font-medium text-[var(--text-muted)]">
                  Mastered concept · Waiting in idle
                </span>
              </div>

              {/* Path 2: Student stalled on unseen prerequisite */}
              <div className="relative h-1 w-full bg-[var(--border-subtle)]/40 rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--text-secondary)]"
                  animate={{
                    left: ["0%", "28%", "30%", "24%", "0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.4, 0.7, 0.85, 1],
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute -top-5 left-[24%] text-[10px] font-medium text-[var(--text-muted)]">
                  Missing prerequisite · Stalled
                </span>
              </div>

              {/* Path 3: Student in silent hesitation */}
              <div className="relative h-1 w-full bg-[var(--border-subtle)]/40 rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-[var(--text-muted)]"
                  animate={{
                    left: ["0%", "45%", "46%", "0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    times: [0, 0.5, 0.8, 1],
                    ease: "easeInOut",
                  }}
                />
                <span className="absolute -top-5 left-[42%] text-[10px] font-medium text-[var(--text-muted)]">
                  Hesitation in silence
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Poetic Takeaway */}
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span>The curriculum moves on schedule. Real understanding does not.</span>
            <a
              href="#branching-path"
              className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-medium transition-colors"
            >
              See the adaptation ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
