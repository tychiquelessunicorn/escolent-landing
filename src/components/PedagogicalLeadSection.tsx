"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  FileSearch,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
  Maximize2,
  CheckCircle2,
  Split,
  GitMerge,
  BarChart3,
  Network,
  ExternalLink,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";
import { SparkMotif } from "./motifs/SparkMotif";
import { LiveIframe } from "./ui/LiveIframe";

const EASING = [0.22, 1, 0.36, 1] as const;

interface LeadTab {
  id: "briefing" | "coverage" | "lms" | "authoring";
  label: string;
  badge: string;
  title: string;
  description: string;
  iframeUrl: string;
  icon: React.ElementType;
  keyFeature: string;
  tagline: string;
}

const leadTabs: LeadTab[] = [
  {
    id: "briefing",
    label: "Morning Briefing",
    badge: "Cross-School Intelligence",
    title: "Daily Curriculum & Quality Briefing",
    description:
      "Synthesizes cross-school curriculum alerts: flags units with thin diagnostic coverage, triages pending teacher content reviews, and highlights misconception patterns appearing across multiple campuses at once.",
    iframeUrl: "https://demo.escolent.com/pedlead/briefing?embed=1",
    icon: Compass,
    keyFeature: "Cross-tenant pattern detection",
    tagline: "Prioritizes where academic oversight is needed each morning",
  },
  {
    id: "coverage",
    label: "Coverage Analytics",
    badge: "Curriculum Completeness",
    title: "Cross-Tenant Curriculum Coverage & Prioritization",
    description:
      "Provides academic directors with a global view of syllabus completeness and diagnostic misconception depth. Automatically identifies rich vs. thin skill coverage to direct instructional authoring effort.",
    iframeUrl: "https://demo.escolent.com/pedlead/coverage?embed=1",
    icon: BarChart3,
    keyFeature: "Rich, thin, and gap analysis",
    tagline: "Ensures no learning objective lacks diagnostic depth",
  },
  {
    id: "lms",
    label: "Diagram OCR Ingestion",
    badge: "Automated Course Parsing",
    title: "Canvas LMS Content & Diagram Vision OCR",
    description:
      "Ingests course materials directly from connected Canvas LMS modules. Built-in vision OCR reads textbook illustrations, trophic pyramids, and geometry charts, converting them into structured skill nodes with zero manual data entry.",
    iframeUrl: "https://demo.escolent.com/pedlead/lms?embed=1",
    icon: FileSearch,
    keyFeature: "Multi-tier diagram OCR extraction",
    tagline: "Translates school textbook illustrations into live evaluations",
  },
  {
    id: "authoring",
    label: "Diagnostic Authoring",
    badge: "Skill Graph Studio",
    title: "4-Level Rubrics & Misconception Taxonomies",
    description:
      "Dedicated workspace for curriculum specialists to author 4-level diagnostic rubrics, attach common student failure modes with sample answers, and split or merge interconnected skill nodes across curriculum standards.",
    iframeUrl: "https://demo.escolent.com/pedlead/authoring?embed=1",
    icon: Network,
    keyFeature: "Split, merge & rubric authoring",
    tagline: "Full pedagogical precision without writing code",
  },
];

export function PedagogicalLeadSection() {
  const [activeTab, setActiveTab] = useState<LeadTab["id"]>("briefing");
  const [frameKey, setFrameKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // 0.00 -> 0.30: Briefing
    if (progress < 0.30) {
      if (activeTab !== "briefing") setActiveTab("briefing");
    }
    // 0.30 -> 0.55: Coverage
    else if (progress < 0.55) {
      if (activeTab !== "coverage") setActiveTab("coverage");
    }
    // 0.55 -> 0.80: LMS OCR
    else if (progress < 0.80) {
      if (activeTab !== "lms") setActiveTab("lms");
    }
    // 0.80 -> 1.00: Authoring Studio
    else {
      if (activeTab !== "authoring") setActiveTab("authoring");
    }
  });

  const activeTabData = leadTabs.find((t) => t.id === activeTab) || leadTabs[0];

  return (
    <section
      ref={containerRef}
      id="curriculum-lead"
      className="relative min-h-[440vh] bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="sticky top-0 min-h-screen py-4 sm:py-8 md:py-12 px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-between">
          {/* Section Header */}
          <div className="text-center max-w-3xl mb-2.5 sm:mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--brand-text)]">
                Institutional Role 4 · Academic Leadership
              </span>
              <SparkMotif size={13} />
            </div>

            <StaggeredWords
              as="h2"
              text="Curriculum governance without touching student PII."
              highlightWords={["Curriculum", "governance", "without", "PII."]}
              highlightColor="var(--brand-text)"
              className="text-xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            />

            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed hidden xs:block">
              For curriculum directors and pedagogical leads:{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">morning briefing queues</ScrollHighlightWord>,{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">cross-school coverage analytics</ScrollHighlightWord>, and{" "}
              <ScrollHighlightWord targetColor="var(--brand-text)">automated diagram OCR ingestion</ScrollHighlightWord> — isolated by a strict zero-student-data firewall.
            </p>
          </div>

          {/* Interactive Role Tabs */}
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 mb-2.5 sm:mb-3.5">
            {leadTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-2 sm:p-2.5 rounded-[14px] sm:rounded-[16px] border transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                    isActive
                      ? "bg-[var(--bg-surface-elevated)] border-[var(--brand-border-strong)] shadow-md"
                      : "bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-[5px] sm:rounded-[6px] truncate ${
                        isActive
                          ? "bg-[var(--brand-subtle)] text-[var(--brand-highlight)] border border-[var(--brand-border)]"
                          : "bg-[var(--bg-surface)] text-[var(--text-muted)]"
                      }`}
                    >
                      {tab.badge}
                    </span>
                    <TabIcon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? "text-[var(--brand-text)]" : "text-[var(--text-muted)]"
                      }`}
                    />
                  </div>

                  <div>
                    <h4 className="text-[11px] sm:text-xs md:text-sm font-semibold text-[var(--text-primary)] truncate">
                      {tab.label}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-[var(--text-muted)] mt-0.5 hidden xs:block truncate">
                      {tab.keyFeature}
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="pedlead-active-pill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--brand-base)]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Main Showcase: Shell Header + Pre-Mounted Live Iframes */}
          <div className="w-full max-w-5xl rounded-[18px] sm:rounded-[20px] bg-[var(--bg-surface)] border border-[var(--brand-border)] shadow-2xl overflow-hidden flex flex-col mb-2.5 sm:mb-3">
            {/* Shell Header Bar */}
            <div className="bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] p-2.5 sm:p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-3.5 w-px bg-[var(--border-subtle)]" />
                <div className="flex items-center gap-1.5 min-w-0">
                  <Compass className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0" />
                  <span className="font-semibold text-[var(--text-primary)] text-[11px] sm:text-xs truncate">
                    Pedagogical Lead Shell · {activeTabData.title}
                  </span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-2 shrink-0 ml-auto">
                <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)]">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Req 21.5 · Zero Student Data Access</span>
                </div>
                <button
                  onClick={() => setFrameKey((k) => k + 1)}
                  className="p-1 sm:px-2 sm:py-1 rounded-[8px] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-highlight)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-[10px] border border-[var(--border-subtle)]"
                  title="Reload Live Shell"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="hidden sm:inline">Reload</span>
                </button>
                <a
                  href={activeTabData.iframeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 sm:px-2 sm:py-1 rounded-[8px] bg-[var(--brand-base)] text-white hover:bg-[var(--brand-hover)] transition-colors flex items-center gap-1 text-[10px] font-semibold shadow-sm"
                  title="Open live shell in new tab"
                >
                  <span>Open Full Sandbox</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Pre-mounted Persistent Iframes */}
            <div className="relative">
              {leadTabs.map((tab) => {
                const isCurrent = activeTab === tab.id;
                return (
                  <div key={tab.id} className={isCurrent ? "block" : "hidden"}>
                    <LiveIframe
                      src={tab.iframeUrl}
                      title={`Live Demo - ${tab.title}`}
                      reloadKey={frameKey}
                      height="h-[360px] xs:h-[400px] sm:h-[480px] lg:h-[560px]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Context Footer Strip */}
            <div className="bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] px-3 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-base)] shrink-0" />
                <span className="text-[var(--text-secondary)] font-medium">
                  {activeTabData.description}
                </span>
              </div>
              <span className="text-[var(--text-muted)] shrink-0 hidden md:inline">
                Curriculum Isolation · Multi-Tenant Graph
              </span>
            </div>
          </div>

          {/* Proof Callout Strip */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-left">
            <div className="p-2 sm:p-2.5 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold text-[var(--text-primary)] block">
                  Automated Diagram OCR
                </span>
                <span className="text-[10px] text-[var(--text-muted)] leading-tight block mt-0.5">
                  Parses textbook illustrations into diagnostic skill nodes directly from Canvas LMS.
                </span>
              </div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-text)] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold text-[var(--text-primary)] block">
                  Cross-School Completeness
                </span>
                <span className="text-[10px] text-[var(--text-muted)] leading-tight block mt-0.5">
                  Flags syllabus gaps and clusters misconception trends across all connected campuses.
                </span>
              </div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-[12px] sm:rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold text-[var(--text-primary)] block">
                  Strict Privacy Firewall
                </span>
                <span className="text-[10px] text-[var(--text-muted)] leading-tight block mt-0.5">
                  Academic leads only see anonymized curriculum taxonomy—never student personal data.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
