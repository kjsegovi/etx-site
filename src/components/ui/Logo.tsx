import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * ETX wordmark, ASU-styled. "dark" = for light backgrounds (maroon text),
 * "light" = for dark backgrounds (white text). Swap for official ETX/ASU
 * lockup art when available.
 */
export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const titleColor = variant === "light" ? "text-white" : "text-ember-500";
  const subColor = variant === "light" ? "text-white/70" : "text-mist-2";

  return (
    <Link
      to="/"
      aria-label="ETX — Center for Education Through Exploration, home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded bg-ember-500 font-display text-sm font-bold text-white"
      >
        ETX
        <span className="ml-0.5 h-2 w-2 rounded-full bg-aqua-500" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-base font-bold tracking-tight ${titleColor}`}>
          Education Through Exploration
        </span>
        <span className={`block text-[0.7rem] ${subColor}`}>
          Arizona State University
        </span>
      </span>
    </Link>
  );
}
