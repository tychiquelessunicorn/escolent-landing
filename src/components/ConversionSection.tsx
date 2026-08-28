"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Calendar,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  UserCheck,
  Building2,
  Lock,
} from "lucide-react";

export function ConversionSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="convert"
      className="relative min-h-[90vh] py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050507] overflow-hidden"
    >
      {/* Radiant ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-indigo-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10">
            Experience It Real-Time
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            See the living system in action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            No signup barriers. No gated marketing videos. Open the live production sandbox and experience all three vantage points right now.
          </p>
        </motion.div>

        {/* TIER 1: DOMINANT CTA — Launch Live Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl shadow-cyan-950/30 relative mb-12"
        >
          <div className="flex flex-col items-center">
            <a
              href="https://demo.escolent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span>Launch Live Interactive Demo</span>
              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>

            <p className="mt-4 text-xs font-mono text-zinc-400">
              Opens instant sandbox at <span className="text-zinc-300">demo.escolent.com</span> · No credentials needed
            </p>

            {/* Quick jump links to individual shells */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://demo.escolent.com/student?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 flex items-center justify-center gap-2 text-xs text-zinc-300 transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-rose-400" />
                <span>Student Practice Shell</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://demo.escolent.com/teacher?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 flex items-center justify-center gap-2 text-xs text-zinc-300 transition-colors"
              >
                <UserCheck className="w-4 h-4 text-sky-400" />
                <span>Teacher Escalation Shell</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://demo.escolent.com/admin?demo=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 flex items-center justify-center gap-2 text-xs text-zinc-300 transition-colors"
              >
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Admin Intelligence Shell</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* TIER 2 & TIER 3 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
          {/* TIER 2: Lightweight Early Access Email Capture */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                  Tier 2 · Stay Informed
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">Get Early Access Updates</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Receive confidential briefings on pilot milestones, curriculum additions, and cognitive research releases.
              </p>

              {/* Form */}
              <div className="mt-6">
                {submitted ? (
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3 text-xs text-cyan-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>Thank you. Your email has been added to our pilot briefing list.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="educator@school.org"
                      required
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 rounded-xl bg-white/[0.1] hover:bg-white/[0.15] border border-white/10 text-xs font-medium text-white transition-colors"
                    >
                      {loading ? "Registering..." : "Join List"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-zinc-500 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-zinc-600" />
              <span>Zero marketing spam. Only engineering & pilot releases.</span>
            </div>
          </div>

          {/* TIER 3: Book a Direct School Call */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                  Tier 3 · Institutional
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">Book a School Walkthrough</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                For principals, department heads, and academic directors exploring pilot integration for Grade 7–12 cohorts.
              </p>

              <div className="mt-6">
                <a
                  href="mailto:ty@escolent.com?subject=Escolent%20School%20Walkthrough%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-200 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Schedule Consultation with Founding Team</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-zinc-500 flex items-center gap-1.5">
              <span>Direct conversation with the engineering and pedagogical leads.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
