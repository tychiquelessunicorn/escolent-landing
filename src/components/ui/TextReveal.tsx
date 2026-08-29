"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const EASING = [0.22, 1, 0.36, 1] as const;

interface StaggeredWordsProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export function StaggeredWords({
  text,
  className = "",
  highlightWords = [],
  highlightColor = "var(--brand-text)",
  as = "h2",
}: StaggeredWordsProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 140,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASING,
      },
    },
  };

  return (
    <Tag
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord) || highlightWords.includes(word);

        return (
          <motion.span
            key={idx}
            variants={childVariants}
            className={`inline-block mr-[0.26em] last:mr-0 ${
              isHighlighted ? "font-semibold" : ""
            }`}
            style={isHighlighted ? { color: highlightColor } : undefined}
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
}

export function ScrollHighlightWord({
  children,
  targetColor = "var(--brand-text)",
}: {
  children: React.ReactNode;
  targetColor?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 45%"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["var(--text-secondary)", targetColor]
  );

  return (
    <motion.span ref={ref} style={{ color }} className="font-semibold transition-colors">
      {children}
    </motion.span>
  );
}
