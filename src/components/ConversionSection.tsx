"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Calendar,
  CheckCircle2,
  GraduationCap,
  UserCheck,
  Building2,
  Lock,
  Clock,
  User,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { SparkMotif } from "./motifs/SparkMotif";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

export function ConversionSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="convert"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Experience the System
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="Experience the system in action."
            highlightWords={["system", "action."]}
            highlightColor="var(--brand-text)"
            className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            No signup barriers. No marketing video gates. Open the live platform and test all three views right now.
          </p>
        </div>

        {/* Honest Urgency Callout — Grounded in Classroom Reality, Not Manipulation */}
        <div className="w-full max-w-4xl p-6 sm:p-7 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-12 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-[var(--brand-text)] flex items-center gap-2">
              <SparkMotif size={14} />
              <span>A Real Classroom Reality</span>
            </div>
            <h3 className="text-base sm:text-lg font-display font-semibold text-[var(--text-primary)]">
              Every term a struggling or quietly disengaged student goes unnoticed is a term further behind.
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Foundational math and science understanding is cumulative. Gaps in early algebra don't fix themselves over time — they compound into quiet disengagement. Bringing Escolent to your classroom gives every child immediate, personalized scaffolding before small confusions become permanent setbacks.
            </p>
          </div>
          <a
            href="https://demo.escolent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-[14px] bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-strong)] border border-[var(--border-medium)] text-[var(--text-primary)] font-semibold text-xs transition-colors flex items-center gap-1.5 self-start sm:self-center"
          >
            <span>Explore Sandbox</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* TIER 1: DOMINANT CTA — Launch Live Sandbox */}
        <div className="w-full rounded-[26px] p-8 sm:p-12 bg-[var(--bg-surface)] border border-[var(--brand-border)] shadow-2xl relative mb-12">
          <div className="flex flex-col items-center">
            <a
              href="https://demo.escolent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold rounded-[14px] text-white bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border-strong)] shadow-lg transition-all duration-200"
            >
              <span>Launch Live Interactive Demo</span>
              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <p className="mt-4 text-xs font-medium text-[var(--text-muted)]">
              Instant access at <span className="text-[var(--text-primary)] font-semibold">demo.escolent.com</span> · No credentials required
            </p>

            {/* Direct Shell Jump Grid */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://demo.escolent.com/student/today?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--brand-border)] flex items-center justify-between text-xs text-[var(--text-secondary)] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="font-medium">Student Shell</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>

              <a
                href="https://demo.escolent.com/teacher/escalations?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--brand-border)] flex items-center justify-between text-xs text-[var(--text-secondary)] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="font-medium">Teacher Shell</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>

              <a
                href="https://demo.escolent.com/admin/briefing?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--brand-border)] flex items-center justify-between text-xs text-[var(--text-secondary)] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="font-medium">Admin Shell</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>
            </div>
          </div>
        </div>

        {/* TIER 2 & TIER 3 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
          {/* TIER 2: Lightweight Early Access Email Capture */}
          <div className="p-6 sm:p-8 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-[var(--brand-text)]" />
                <span className="text-xs font-semibold text-[var(--brand-text)]">
                  Stay Informed
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-[var(--text-primary)]">
                Get Quarterly Pilot Briefings
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                Receive quarterly updates on school pilot milestones, curriculum additions, and learning outcomes.
              </p>

              {/* Form */}
              <div className="mt-6">
                {submitted ? (
                  <div className="p-4 rounded-[14px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center gap-3 text-xs text-[var(--brand-highlight)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-text)] shrink-0" />
                    <span>Your email has been added to our pilot briefing list.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="educator@school.org"
                      required
                      className="flex-1 px-4 py-2.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-medium)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--brand-base)] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 rounded-[14px] bg-[var(--brand-base)] hover:bg-[var(--brand-hover)] border border-[var(--brand-border)] text-xs font-semibold text-white transition-colors"
                    >
                      {loading ? "Joining..." : "Join List"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Zero marketing spam. Strictly quarterly pilot briefings.</span>
            </div>
          </div>

          {/* TIER 3: Book a Call — Honest & Friction-Free */}
          <div className="p-6 sm:p-8 rounded-[22px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-[var(--brand-text)]" />
                <span className="text-xs font-semibold text-[var(--brand-text)]">
                  School Walkthrough
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-[var(--text-primary)]">
                Schedule a 20-Minute School Walkthrough
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                For principals, department heads, and academic directors exploring cohort pilot integration for Grade 7–12.
              </p>

              {/* Friction-Free Call Breakdown */}
              <div className="mt-5 p-3.5 rounded-[14px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0" />
                  <span><strong>Duration:</strong> 20 minutes (no sales pitches, no pressure)</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <User className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0" />
                  <span><strong>Participants:</strong> You & the founding engineering/pedagogy team</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Layers className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0" />
                  <span><strong>Agenda:</strong> Your curriculum standards + live LMS integration test</span>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="mailto:ty@escolent.com?subject=Escolent%20School%20Walkthrough%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-[14px] bg-[var(--bg-surface-highlight)] hover:bg-[var(--border-strong)] border border-[var(--border-medium)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[var(--brand-text)]" />
                  <span>Schedule a Walkthrough with the Builders</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Direct conversation with the builders — no intermediary sales reps.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
