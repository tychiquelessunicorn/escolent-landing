"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface PathMotifProps {
  className?: string;
  progress?: MotionValue<number>;
  points?: number;
  direction?: "vertical" | "horizontal" | "branch";
  activeColor?: string;
}

export function PathMotif({
  className = "",
  points = 5,
  direction = "vertical",
  activeColor = "var(--brand-base)",
}: PathMotifProps) {
  return (
    <div className={`flex ${direction === "vertical" ? "flex-col items-center gap-3" : "items-center gap-3"} ${className}`}>
      {Array.from({ length: points }).map((_, i) => {
        const isDestination = i === points - 1;
        const size = isDestination ? "w-3 h-3" : "w-1.5 h-1.5";
        return (
          <React.Fragment key={i}>
            <div
              className={`rounded-full transition-all duration-300 ${size} ${
                isDestination
                  ? "bg-[var(--brand-text)] ring-4 ring-[var(--brand-subtle)]"
                  : "bg-[var(--border-medium)]"
              }`}
            />
            {i < points - 1 && (
              <div
                className={`${
                  direction === "vertical" ? "w-[1.5px] h-4" : "h-[1.5px] w-4"
                } bg-[var(--border-subtle)]`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function SectionConnectingPath({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full flex justify-center py-8 pointer-events-none ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-[var(--border-medium)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--brand-base)] ring-2 ring-[var(--brand-subtle)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--border-medium)] to-transparent" />
      </div>
    </div>
  );
}
