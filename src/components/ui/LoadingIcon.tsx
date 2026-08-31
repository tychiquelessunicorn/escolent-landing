"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASING = [0.22, 1, 0.36, 1] as const;

export type LoadingIconSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeConfig: Record<
  LoadingIconSize,
  {
    container: string;
    iconSize: number;
    ringPadding: string;
    glowRadius: string;
    dotSize: string;
  }
> = {
  xs: {
    container: "w-5 h-5",
    iconSize: 14,
    ringPadding: "p-0.5",
    glowRadius: "drop-shadow-[0_0_8px_rgba(30,107,255,0.4)]",
    dotSize: "w-1 h-1",
  },
  sm: {
    container: "w-8 h-8",
    iconSize: 20,
    ringPadding: "p-1",
    glowRadius: "drop-shadow-[0_0_12px_rgba(30,107,255,0.5)]",
    dotSize: "w-1.5 h-1.5",
  },
  md: {
    container: "w-12 h-12",
    iconSize: 28,
    ringPadding: "p-2",
    glowRadius: "drop-shadow-[0_0_18px_rgba(30,107,255,0.6)]",
    dotSize: "w-2 h-2",
  },
  lg: {
    container: "w-16 h-16",
    iconSize: 40,
    ringPadding: "p-2.5",
    glowRadius: "drop-shadow-[0_0_24px_rgba(30,107,255,0.7)]",
    dotSize: "w-2.5 h-2.5",
  },
  xl: {
    container: "w-24 h-24",
    iconSize: 56,
    ringPadding: "p-3.5",
    glowRadius: "drop-shadow-[0_0_32px_rgba(30,107,255,0.8)]",
    dotSize: "w-3 h-3",
  },
};

interface LoadingIconProps {
  size?: LoadingIconSize;
  className?: string;
  showRing?: boolean;
}

/**
 * Animated Escolent Logo Loading Icon
 * Combines the official brand logo icon with a smooth orbital ring, breathing aura, and spark pulse.
 */
export function LoadingIcon({
  size = "md",
  className = "",
  showRing = true,
}: LoadingIconProps) {
  const config = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${config.container} ${className}`}
      role="status"
      aria-label="Loading"
    >
      {/* Ambient Pulsing Glow Aura */}
      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
          opacity: [0.35, 0.75, 0.35],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[var(--brand-base)]/25 blur-md pointer-events-none"
      />

      {/* Orbiting Ring (Concentric Track) */}
      {showRing && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Subtle Static Track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="currentColor"
            className="text-[var(--border-subtle)]"
            strokeWidth="3"
          />
          {/* Animated Orbiting Arc */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            stroke="var(--brand-base)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="60 220"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>
      )}

      {/* Central Escolent Logo with Gentle Breathing Physics */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: EASING,
        }}
        className={`relative flex items-center justify-center shrink-0 ${config.ringPadding}`}
      >
        <Image
          src="/logo-icon.png"
          alt="Escolent Loading"
          width={config.iconSize}
          height={config.iconSize}
          className={`w-auto h-auto object-contain ${config.glowRadius}`}
          priority
        />
      </motion.div>
    </div>
  );
}

interface LogoLoaderProps {
  size?: LoadingIconSize;
  title?: string;
  description?: string;
  className?: string;
  compact?: boolean;
}

/**
 * Standard Full/Section Level Escolent Loader Block
 */
export function LogoLoader({
  size = "md",
  title = "Loading Live Escolent Sandbox",
  description,
  className = "",
  compact = false,
}: LogoLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center select-none ${
        compact ? "gap-2 p-3" : "gap-3.5 p-6"
      } ${className}`}
    >
      <LoadingIcon size={size} showRing={true} />

      {(title || description) && (
        <div className="flex flex-col items-center gap-1 max-w-sm">
          {title && (
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-tight">
              {title}
            </span>
          )}
          {description && (
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
