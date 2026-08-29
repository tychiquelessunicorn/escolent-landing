"use client";

import React, { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { BranchingPathSection } from "@/components/BranchingPathSection";
import { ThreeRolesSection } from "@/components/ThreeRolesSection";
import { SafetyNetSection } from "@/components/SafetyNetSection";
import { EthicalStanceSection } from "@/components/EthicalStanceSection";
import { OriginsSection } from "@/components/OriginsSection";
import { ConversionSection } from "@/components/ConversionSection";
import { Footer } from "@/components/Footer";
import { SectionConnectingPath } from "@/components/motifs/PathMotif";
import { SparkMotif } from "@/components/motifs/SparkMotif";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASING = [0.22, 1, 0.36, 1];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] relative">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section — Clean, Bold, Restrained */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 text-center border-b border-[var(--border-subtle)]"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="max-w-4xl flex flex-col items-center z-10"
        >
          {/* Subtle Product Category Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-base)]" />
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              Adaptive Learning Architecture
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
            One curriculum. <br />
            <span className="text-[var(--text-secondary)]">
              Every student’s real pace.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
            A real-time intelligence layer that adapts to cognitive struggle and emotional distress. No gamification. No one-size-fits-all.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://demo.escolent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] shadow-md transition-all duration-200"
            >
              <span>Experience Live Demo</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#the-problem"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] transition-colors"
            >
              <span>Explore the proof</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Path connecting thread down to the problem */}
      <SectionConnectingPath />

      {/* 1. Open Wordlessly on the Problem */}
      <ProblemSection />

      {/* Path connecting thread down to the signature branch */}
      <SectionConnectingPath />

      {/* 2. The Signature Moment: The Branching Path (Scroll-Linked + Live Real UI) */}
      <BranchingPathSection />

      {/* 3. Three Roles, One Truth (Unified nervous system) */}
      <ThreeRolesSection />

      {/* 4. The Safety-Net Story (Distress triage & human-in-the-loop care) */}
      <SafetyNetSection />

      {/* 5. The Ethical Stance (No gamification, calm sanctuary) */}
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
