"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Layers,
  WifiOff,
  Globe,
  BookOpen,
  Cpu,
  ShieldCheck,
  Lock,
  RefreshCw,
  Maximize2,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { LiveIframe } from "./ui/LiveIframe";

const EASING = [0.22, 1, 0.36, 1] as const;

export function OriginsSection() {
  const [showIframe, setShowIframe] = useState(false);
  const [lmsReloadKey, setLmsReloadKey] = useState(0);

  const lmsUrl = "https://demo.escolent.com?embed=1";

  return (
    <section
      id="origins"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Infrastructure Ground Truth
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="Built for the real conditions of schools."
            highlightWords={["real", "conditions"]}
            highlightColor="var(--brand-text)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Escolent is engineered from the ground up for environments with{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">unstable power, intermittent connections,</ScrollHighlightWord> and strict institutional data compliance.
          </p>
        </div>

        {/* LMS Integration Pillar — Crucial Objection Killer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASING }}
          className="w-full max-w-5xl rounded-[22px] bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] shadow-xl mb-8 overflow-hidden transition-all duration-300"
        >
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[14px] bg-[var(--brand-subtle)] border border-[var(--brand-border)] flex items-center justify-center text-[var(--brand-text)] shrink-0 mt-1">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    Opens right inside Canvas, Google Classroom, or Moodle — no new app, no new login.
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]">
                    3-Minute Setup
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2 max-w-2xl leading-relaxed">
                  Students and teachers access lessons directly inside their existing school portal. Zero roster spreadsheets to re-upload and zero switching friction. Full support for LTI 1.3 Advantage and Google Workspace authentication.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center shrink-0">
              <motion.button
                onClick={() => setShowIframe(!showIframe)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2.5 rounded-[14px] border text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  showIframe
                    ? "bg-[var(--brand-base)] text-white border-[var(--brand-border-strong)] shadow-md"
                    : "bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] border-[var(--border-subtle)] text-[var(--text-primary)]"
                }`}
              >
                <span>{showIframe ? "Close Live Frame" : "Preview Inside LMS"}</span>
                <Layers className="w-3.5 h-3.5" />
              </motion.button>
              <a
                href={lmsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[14px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                title="Open in new tab"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Collapsible Live LMS Portal Embed */}
          <AnimatePresence>
            {showIframe && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]"
              >
                <div className="p-3.5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[var(--text-secondary)] font-medium">LTI 1.3 Advantage Embed Preview</span>
                  </div>
                  <button
                    onClick={() => setLmsReloadKey((k) => k + 1)}
                    className="hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reload Portal</span>
                  </button>
                </div>
                <LiveIframe
                  src={lmsUrl}
                  title="Live Demo - LMS Portal Integration"
                  reloadKey={lmsReloadKey}
                  height="h-[520px] sm:h-[560px]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Real Engineering Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASING }}
          className="w-full max-w-5xl rounded-[22px] p-6 sm:p-10 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xl mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--border-subtle)] gap-3">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-[var(--brand-text)]" />
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  Engineered for Low-Resource Environments & Strict Governance
                </h3>
                <span className="text-xs text-[var(--text-muted)]">Built for real classroom and administrative constraints</span>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-[var(--brand-text)] bg-[var(--brand-subtle)] border border-[var(--brand-border)] px-3 py-1 rounded-[8px] self-start sm:self-auto">
              Hardware, Network & Data Security
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Fact 1: Real Curriculum Standards Capability */}
            <motion.div
              whileHover={{ y: -3, borderColor: "var(--brand-border)" }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Curriculum-Agnostic Standards Engine
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  The diagnostic skill graph maps directly to national and regional syllabus requirements (such as CAPS, IEB, Cambridge, and common core standards), keeping instruction aligned with mandated goals.
                </p>
              </div>
            </motion.div>

            {/* Fact 2: Offline & Load Shedding Resilience */}
            <motion.div
              whileHover={{ y: -3, borderColor: "var(--brand-border)" }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <WifiOff className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Works through power cuts and lost connections
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Engineered for load shedding and spotty 3G. The platform saves student progress locally on the device and resumes automatically the moment power or signal returns without lost work.
                </p>
              </div>
            </motion.div>

            {/* Fact 3: Strict Data Sovereignty, 72h Hold & 1-Click Export */}
            <motion.div
              whileHover={{ y: -3, borderColor: "var(--brand-border)" }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-[18px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-[10px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--brand-text)] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                  Data Portability & 72h Hold Vault
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Full POPIA and GDPR compliance. School admins retain 1-click complete data export (CSV/JSON performance histories and audit logs), while deletion requests enforce a mandatory 72-hour safety hold and written confirmation. Zero lock-in.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quiet Factual Global Note */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[var(--text-secondary)] shrink-0" />
              <span>
                Because the system is engineered to thrive under uneven power and connectivity constraints, the same resilient core operates reliably in any classroom worldwide.
              </span>
            </div>
            <motion.a
              href="https://demo.escolent.com?embed=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="text-[var(--brand-text)] hover:text-[var(--brand-highlight)] font-semibold inline-flex items-center gap-1 shrink-0"
            >
              <span>Try Live Sandbox</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
