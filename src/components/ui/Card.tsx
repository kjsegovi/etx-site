import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className = "", interactive = false }: CardProps) {
  return (
    <div
      className={`rounded-md border border-nebula-2 bg-white p-6 shadow-sm ${
        interactive
          ? "transition-all duration-200 group-hover:-translate-y-1 group-hover:border-aqua-600 group-hover:shadow-lg group-focus-visible:-translate-y-1 group-focus-visible:border-aqua-600 group-focus-visible:shadow-lg group-active:translate-y-0 group-active:scale-[0.99] motion-reduce:transform-none"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
