"use client";

import React from "react";
import { motion } from "framer-motion";

interface SparkMotifProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function SparkMotif({
  size = 24,
  className = "",
  animate = true,
}: SparkMotifProps) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Center core */}
      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-highlight)]" />

      {/* Radiating geometric rays */}
      {rays.map((deg, i) => {
        const isCardinal = deg % 90 === 0;
        const length = isCardinal ? size * 0.42 : size * 0.28;
        return (
          <motion.div
            key={deg}
            className="absolute bg-[var(--brand-text)] origin-bottom rounded-full"
            style={{
              width: isCardinal ? "1.5px" : "1px",
              height: length,
              transform: `rotate(${deg}deg) translateY(-${length / 2 + 2}px)`,
            }}
            initial={animate ? { scaleY: 0.6, opacity: 0.6 } : undefined}
            animate={
              animate
                ? {
                    scaleY: [0.6, 1.2, 0.6],
                    opacity: [0.6, 1, 0.6],
                  }
                : undefined
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
          />
        );
      })}
    </div>
  );
}
