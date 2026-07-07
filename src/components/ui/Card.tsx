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
          ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-ember-500/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
