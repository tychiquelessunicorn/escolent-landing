"use client";

import React from "react";
import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section
      id="the-problem"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 overflow-hidden bg-[#050507]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Minimal Wordless Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            One lesson. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-600">
              Thirty different realities.
            </span>
          </h2>
        </motion.div>

        {/* Pure Motion Graphic: The Rigid Fixed Pace vs Actual Human Minds */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-3xl rounded-3xl bg-[#09090e]/80 border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl"
        >
          {/* Visual tracks */}
          <div className="relative h-64 sm:h-72 w-full flex flex-col justify-between py-2">
            {/* The Relentless Broadcast Vector */}
            <div className="relative w-full">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
                <span>Fixed Classroom Velocity</span>
                <span className="text-rose-400/80">Advances Regardless</span>
              </div>
              <div className="relative h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-white/10 via-white/50 to-white"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Visualizing divergent student trajectories */}
            <div className="relative h-44 w-full flex flex-col justify-around">
              {/* Path 1: Advanced student ahead, waiting / disengaged */}
              <div className="relative h-1 w-full bg-white/[0.02] rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-sky-400/90 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
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
                <span className="absolute -top-5 right-4 text-[9px] font-mono text-sky-300/80 tracking-wider">
                  Finished early · Idle
                </span>
              </div>

              {/* Path 2: Student falling behind due to an unseen prerequisite */}
              <div className="relative h-1 w-full bg-white/[0.02] rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-rose-400/90 shadow-[0_0_12px_rgba(251,113,133,0.8)]"
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
                <span className="absolute -top-5 left-[24%] text-[9px] font-mono text-rose-300/80 tracking-wider">
                  Missing foundation · Stalled
                </span>
              </div>

              {/* Path 3: Student struggling in silent hesitation */}
              <div className="relative h-1 w-full bg-white/[0.02] rounded-full">
                <motion.div
                  className="absolute -top-1.5 w-4 h-4 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
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
                <span className="absolute -top-5 left-[42%] text-[9px] font-mono text-amber-300/80 tracking-wider">
                  Silent hesitation
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Poetic Conclusion */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
            <span>The curriculum moves on schedule. Real understanding does not.</span>
            <a
              href="#branching-path"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              See the adaptation ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
