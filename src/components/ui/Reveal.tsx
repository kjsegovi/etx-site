import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type RevealPreset = "rise" | "slide" | "scale" | "stagger";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  preset?: RevealPreset;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

const presetInitial = {
  rise: { opacity: 0, y: 24 },
  slide: { opacity: 0, x: -28 },
  scale: { opacity: 0, scale: 0.96 },
  stagger: { opacity: 0, y: 18, scale: 0.985 },
} as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  preset = "rise",
  className = "",
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];
  const initial =
    preset === "rise" ? { ...presetInitial.rise, y } : presetInitial[preset];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : initial}
      whileInView={
        reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </MotionTag>
  );
}
