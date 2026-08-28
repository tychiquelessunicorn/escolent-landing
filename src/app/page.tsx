"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { BranchingPathSection } from "@/components/BranchingPathSection";
import { ThreeRolesSection } from "@/components/ThreeRolesSection";
import { SafetyNetSection } from "@/components/SafetyNetSection";
import { EthicalStanceSection } from "@/components/EthicalStanceSection";
import { OriginsSection } from "@/components/OriginsSection";
import { ConversionSection } from "@/components/ConversionSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f6] selection:bg-cyan-500/30 selection:text-white relative">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Ultra-Minimalist Apple-style Opening Viewport */}
      <section className="relative h-[85vh] sm:h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-[160px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-zinc-300 uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Adaptive Learning Architecture</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            One curriculum. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
              Every student’s real pace.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            A real-time intelligence layer that dynamically adapts to both cognitive struggle and emotional distress.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://demo.escolent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
            >
              <span>Experience Live Demo</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#the-problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            >
              <span>See the proof</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 1. Open Wordlessly on the Problem */}
      <ProblemSection />

      {/* 2. The Signature Moment: The Branching Path (Live iframes) */}
      <BranchingPathSection />

      {/* 3. Three Roles, One Truth (Unified nervous system) */}
      <ThreeRolesSection />

      {/* 4. The Safety-Net Story (Affective intelligence & human-in-the-loop dispatch) */}
      <SafetyNetSection />

      {/* 5. The Ethical Stance (No gamification, calm sanctuary vs casino EdTech) */}
      <EthicalStanceSection />

      {/* 6. Where This Starts, and Where It Goes (South Africa / Teneo pilot -> Global) */}
      <OriginsSection />

      {/* 7. Convert (Three Tiers) */}
      <ConversionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
