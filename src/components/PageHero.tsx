import type { ReactNode } from "react";
import { Reveal } from "./ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}

/** ASU-style page header: maroon band, white headline, gold accent rule. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <header className="etx-maroon-band relative overflow-hidden">
      <div className="etx-container py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl text-white">
            {title}
          </h1>
          <span className="mt-6 block h-1.5 w-14 rounded bg-aqua-500" aria-hidden="true" />
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </header>
  );
}
