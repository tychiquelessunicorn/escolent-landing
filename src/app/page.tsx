"use client";

import React, { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { BranchingPathSection } from "@/components/BranchingPathSection";
import { PedagogySection } from "@/components/PedagogySection";
import { ThreeRolesSection } from "@/components/ThreeRolesSection";
import { SafetyNetSection } from "@/components/SafetyNetSection";
import { MisconceptionSection } from "@/components/MisconceptionSection";
import { PedagogicalLeadSection } from "@/components/PedagogicalLeadSection";
import { EthicalStanceSection } from "@/components/EthicalStanceSection";
import { OriginsSection } from "@/components/OriginsSection";
import { ConversationalCommandSection } from "@/components/ConversationalCommandSection";
import { ConversionSection } from "@/components/ConversionSection";
import { Footer } from "@/components/Footer";
import { SectionConnectingPath } from "@/components/motifs/PathMotif";
import { StaggeredWords } from "@/components/ui/TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Layers } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] relative">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section — Clean, Bold, Restrained */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 text-center border-b border-[var(--border-subtle)] overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroTranslateY }}
          className="max-w-4xl flex flex-col items-center z-10"
        >
          {/* Plain Language Category Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 px-3 py-1 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-base)] shadow-[0_0_8px_rgba(30,107,255,0.6)]" />
            <span className="text-xs font-semibold text-[var(--text-secondary)]">
              Built to Adapt
            </span>
          </motion.div>

          {/* Staggered Word Headline */}
          <StaggeredWords
            as="h1"
            text="One curriculum. Every student’s real pace."
            highlightWords={["student’s", "real", "pace."]}
            highlightColor="var(--text-secondary)"
            className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed"
          >
            A real-time intelligence layer that adapts to cognitive struggle and emotional distress. No gamification. No one-size-fits-all.
          </motion.p>

          {/* Primary Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href="https://demo.escolent.com?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 28px -4px rgba(30, 107, 255, 0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border-strong)] shadow-md transition-all duration-200"
            >
              <span>Experience Live Demo</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#the-problem"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] transition-colors"
            >
              <span>Explore the proof</span>
              <ArrowDown className="w-4 h-4 text-[var(--text-muted)]" />
            </motion.a>
          </motion.div>

          {/* Prominent LMS Objection Killer Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] shadow-sm"
          >
            <span className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
              <Layers className="w-3.5 h-3.5 text-[var(--brand-text)]" />
              Opens right inside Canvas, Google Classroom, or Moodle:
            </span>
            <span className="text-[var(--text-muted)]">No new app</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="text-[var(--text-muted)]">No new login</span>
            <span className="text-[var(--border-strong)]">·</span>
            <span className="text-[var(--text-muted)]">Zero switching friction</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Path connecting thread down to the problem */}
      <SectionConnectingPath />

      {/* 1. Open Wordlessly on the Problem */}
      <ProblemSection />

      {/* Path connecting thread down to the signature branch */}
      <SectionConnectingPath />

      {/* 2. The Signature Moment: Two Real Paths (Scroll-Linked + Live Real UI) */}
      <BranchingPathSection />

      {/* Path connecting thread down to the pedagogy spotlight */}
      <SectionConnectingPath />

      {/* 3. The Pedagogy: Teaching Method (Multiple explanations & graduated support ladder) */}
      <PedagogySection />

      {/* Path connecting thread down to the three roles */}
      <SectionConnectingPath />

      {/* 4. Three Roles, One Truth (Unified system & teacher workload relief) */}
      <ThreeRolesSection />

      {/* Path connecting thread down to the safety net */}
      <SectionConnectingPath />

      {/* 5. The Safety-Net Story (Distress triage & teacher trust) */}
      <SafetyNetSection />

      {/* Path connecting thread down to the misconception engine */}
      <SectionConnectingPath />

      {/* 6. Misconception Detection & Class Mastery Overview */}
      <MisconceptionSection />

      {/* Path connecting thread down to pedagogical lead & curriculum intelligence */}
      <SectionConnectingPath />

      {/* 7. Pedagogical Lead & Curriculum Intelligence (Briefing, Coverage Analytics & Diagram OCR) */}
      <PedagogicalLeadSection />

      {/* Path connecting thread down to ethical stance */}
      <SectionConnectingPath />

      {/* 8. The Ethical Stance (No gamification, calm sanctuary) */}
      <EthicalStanceSection />

      {/* Path connecting thread down to infrastructure */}
      <SectionConnectingPath />

      {/* 9. Where This Runs (Engineering ground truth & infrastructure resilience) */}
      <OriginsSection />

      {/* Path connecting thread down to conversational command layer */}
      <SectionConnectingPath />

      {/* 10. Conversational Command Layer (Plain questions, grounded answers, zero guesswork) */}
      <ConversationalCommandSection />

      {/* 11. Convert (Three Tiers) */}
      <ConversionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
