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
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
    <div className={`w-full flex justify-center py-16 pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-[var(--border-medium)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-2.5 h-2.5 rounded-full bg-[var(--brand-base)] ring-4 ring-[var(--brand-subtle)] shadow-[0_0_12px_rgba(30,107,255,0.35)]"
        />
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--border-medium)] to-transparent" />
      </motion.div>
    </div>
  );
}
