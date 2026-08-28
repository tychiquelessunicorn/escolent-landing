"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe2, Network, CheckCircle2, ArrowUpRight, Compass } from "lucide-react";

export function OriginsSection() {
  return (
    <section
      id="origins"
      className="relative min-h-[90vh] py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rooted in Real Classrooms</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Built for South Africa. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-sky-400">
              Engineered for the world.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Escolent wasn’t born in a theoretical Silicon Valley vacuum. It is anchored directly in the live reality of South African schools — beginning with our active Grade 8 pilot alongside Teneo.
          </p>
        </motion.div>

        {/* The Concrete Story Card Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: The South African Foundation (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/20 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300">
                    The Ground Truth · Teneo Grade 8 Pilot
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  South Africa
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-200 mt-6 leading-relaxed">
                South African classrooms represent one of the most intellectually demanding test environments on earth: wide socio-economic diversity, multi-tier language backgrounds, and rigorous national curricula (CAPS & IEB).
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Curriculum Rigor (CAPS / IEB / Cambridge)
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Aligned directly to foundational diagnostic standards rather than superficial quiz banks.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Bandwidth & Latency Conscious Architecture
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Optimized down to raw bytecode payloads so real-time scaffolding functions reliably anywhere.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-400">
              When an adaptive engine works reliably in Johannesburg and Durban, it can scale anywhere in the world without friction.
            </div>
          </motion.div>

          {/* Right: The Natural Global Extension (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-sky-950/[0.12] border border-sky-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sky-500/20">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-300">
                    The Universal Vector
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                  Global Scale
                </span>
              </div>

              <p className="text-sm text-zinc-300 mt-6 leading-relaxed">
                The struggle with one-size-fits-all instruction is universal. A 13-year-old in London, Toronto, Nairobi, or Singapore experiences the exact same silent panic when falling behind a classroom lecture.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-sky-300 uppercase">
                  Our Uncompromising Principle
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Start where the need is deepest. Build the toughest, most empathetic core. Then open the standard to educators worldwide.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-sky-500/20 flex items-center justify-between text-xs">
              <span className="text-zinc-400">Explore live curriculum matrix</span>
              <a
                href="https://demo.escolent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
