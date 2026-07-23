import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Accent } from "../data/projects";
import { Reveal } from "./ui/Reveal";

export type PageHeroSpaceVariant =
  | "constellation-clusters"
  | "orbital-rings"
  | "exploration-trajectories"
  | "star-trails"
  | "gold-network-constellation"
  | "panoramic-horizon-arc"
  | "project-nebula"
  | "adaptive-pathways"
  | "lost-signal";

export interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  spaceVariant?: PageHeroSpaceVariant;
  projectAccent?: Accent;
}

const projectAccentColor: Record<Accent, string> = {
  ember: "#c15b78",
  aqua: "#ffc627",
  iris: "#a83355",
};

type SpaceHeroStyle = CSSProperties & {
  "--space-accent"?: string;
};

interface SpaceBackdropProps {
  variant: PageHeroSpaceVariant | "home";
  projectAccent?: Accent;
}

const MAX_PARALLAX_PX = 8;

function useSpaceParallax() {
  const backdropRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;

    const motionTarget =
      backdrop.closest<HTMLElement>(".etx-space-hero") ??
      backdrop.parentElement;
    if (!motionTarget) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId: number | null = null;
    let nextX = 0;
    let nextY = 0;

    const applyPosition = () => {
      frameId = null;
      backdrop.style.setProperty(
        "--space-shift-far-x",
        `${nextX * 0.3}px`,
      );
      backdrop.style.setProperty(
        "--space-shift-far-y",
        `${nextY * 0.3}px`,
      );
      backdrop.style.setProperty(
        "--space-shift-mid-x",
        `${nextX * 0.6}px`,
      );
      backdrop.style.setProperty(
        "--space-shift-mid-y",
        `${nextY * 0.6}px`,
      );
      backdrop.style.setProperty("--space-shift-near-x", `${nextX}px`);
      backdrop.style.setProperty("--space-shift-near-y", `${nextY}px`);
    };

    const queuePosition = (x: number, y: number) => {
      nextX = x;
      nextY = y;
      if (frameId === null) {
        frameId = window.requestAnimationFrame(applyPosition);
      }
    };

    const resetPosition = () => queuePosition(0, 0);
    const motionIsEnabled = () =>
      finePointer.matches && !reducedMotion.matches;

    const handlePointerMove = (event: PointerEvent) => {
      if (!motionIsEnabled() || event.pointerType === "touch") {
        resetPosition();
        return;
      }

      const bounds = motionTarget.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;

      const horizontal =
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const vertical =
        ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      const clamp = (value: number) => Math.max(-1, Math.min(1, value));

      queuePosition(
        clamp(horizontal) * MAX_PARALLAX_PX,
        clamp(vertical) * MAX_PARALLAX_PX,
      );
    };

    const handlePreferenceChange = () => {
      if (!motionIsEnabled()) resetPosition();
    };

    motionTarget.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    motionTarget.addEventListener("pointerleave", resetPosition);
    motionTarget.addEventListener("pointercancel", resetPosition);
    finePointer.addEventListener("change", handlePreferenceChange);
    reducedMotion.addEventListener("change", handlePreferenceChange);

    return () => {
      motionTarget.removeEventListener("pointermove", handlePointerMove);
      motionTarget.removeEventListener("pointerleave", resetPosition);
      motionTarget.removeEventListener("pointercancel", resetPosition);
      finePointer.removeEventListener("change", handlePreferenceChange);
      reducedMotion.removeEventListener("change", handlePreferenceChange);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return backdropRef;
}

export function SpaceBackdrop({
  variant,
  projectAccent,
}: SpaceBackdropProps) {
  const backdropRef = useSpaceParallax();
  const style: SpaceHeroStyle | undefined = projectAccent
    ? { "--space-accent": projectAccentColor[projectAccent] }
    : undefined;

  return (
    <span
      ref={backdropRef}
      className={`etx-space-art etx-space-${variant}`}
      style={style}
      aria-hidden="true"
    >
      <span className="etx-space-layer etx-space-layer-a" />
      <span className="etx-space-layer etx-space-layer-b" />
      <span className="etx-space-layer etx-space-layer-c" />
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  spaceVariant = "constellation-clusters",
  projectAccent,
}: PageHeroProps) {
  return (
    <header className="etx-space-hero relative overflow-hidden">
      <SpaceBackdrop variant={spaceVariant} projectAccent={projectAccent} />
      <div className="etx-container relative z-10 py-16 sm:py-20">
        <Reveal preset="slide" className="max-w-3xl">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-aqua-500">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <span
            className="etx-rule-reveal mt-6 block h-1.5 w-14 rounded bg-aqua-500"
            aria-hidden="true"
          />
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
