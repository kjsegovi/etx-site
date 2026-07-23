import { motion, useReducedMotion } from "framer-motion";

interface GoldBarProps {
  className?: string;
}

export function GoldBar({ className = "" }: GoldBarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`etx-goldbar origin-left ${className}`}
      aria-hidden="true"
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
    />
  );
}
