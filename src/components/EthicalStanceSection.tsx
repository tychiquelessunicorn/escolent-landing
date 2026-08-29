"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Coins,
  Trophy,
  CheckCircle2,
  XCircle,
  Shield,
  Smile,
  BookOpen,
} from "lucide-react";
import { StaggeredWords, ScrollHighlightWord } from "./ui/TextReveal";

export function EthicalStanceSection() {
  return (
    <section
      id="philosophy"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-8 bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[var(--brand-text)]">
              Ethical Design
            </span>
          </div>

          <StaggeredWords
            as="h2"
            text="No streaks. No gems. No casino tricks in the classroom."
            highlightWords={["casino", "tricks"]}
            highlightColor="var(--text-secondary)"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
          />

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We refuse to turn classroom learning into an addictive game. Learning is not a casino; it is the{" "}
            <ScrollHighlightWord targetColor="var(--brand-text)">deliberate construction of mental clarity</ScrollHighlightWord>.
          </p>
        </div>

        {/* Visual Contrast: Addictive App Pattern vs Calm Classroom Sanctuary */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Left: The Addictive App Trap */}
          <div className="rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-[var(--text-muted)]" />
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    The Addictive App Trap
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--text-muted)] px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  Pressure & Anxiety
                </span>
              </div>

              {/* Visual chaotic elements */}
              <div className="mt-6 space-y-3.5">
                <div className="p-3.5 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[var(--text-muted)]" />
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-secondary)]">
                        3-Day Streak at Risk
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        Practice in 12m or lose your streak multipliers
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">11:59</span>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[var(--text-muted)]" />
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      Unlock Hint: 50 Gems or Watch Video
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--text-muted)] px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)]">
                    Artificial Barrier
                  </span>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[var(--text-muted)]" />
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      Public Rank #28 of 30
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--text-muted)] px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)]">
                    Public Ranking
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed">
              Creates artificial anxiety, rewards superficial guessing over deep thinking, and discourages students who need time to reflect.
            </div>
          </div>

          {/* Right: The Calm Classroom Sanctuary */}
          <div className="rounded-[22px] p-6 sm:p-8 bg-[var(--bg-surface-elevated)] border border-[var(--brand-border)] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--brand-text)]" />
                  <span className="text-xs font-semibold text-[var(--brand-text)]">
                    The Escolent Sanctuary
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-[var(--brand-highlight)] px-2 py-0.5 rounded-[8px] bg-[var(--brand-subtle)] border border-[var(--brand-border)]">
                  Real Understanding
                </span>
              </div>

              {/* Calm sanctuary elements */}
              <div className="mt-6 space-y-3.5">
                <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[var(--brand-text)]" />
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-primary)]">
                        Learn at Your Own Pace
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        No countdown timers. No penalties for thinking carefully.
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--brand-text)]">Focused Flow</span>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[var(--brand-text)]" />
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      Private Support When Stuck
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--text-secondary)] px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)]">
                    Zero Shaming
                  </span>
                </div>

                <div className="p-3.5 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-[var(--brand-text)]" />
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      Genuine Pride in Getting It Right
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--text-secondary)] px-2 py-0.5 rounded-[8px] bg-[var(--bg-surface-elevated)]">
                    True Growth
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed">
              Built around how children actually learn: students thrive when they experience genuine understanding, not when they are pressured by countdown timers or cartoon streaks.
            </div>
          </div>
        </div>

        {/* 3 Core Ethical Commitments */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-5 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">No Manipulative Tricks</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1.5">No artificial urgency or guilt-driven reminders.</p>
          </div>
          <div className="p-5 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">No Public Scoreboards</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1.5">Students master skills for themselves, not a leaderboard.</p>
          </div>
          <div className="p-5 rounded-[18px] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">Respect for the Student</h4>
            <p className="text-xs text-[var(--text-muted)] mt-1.5">Every screen treats student intelligence with dignity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
