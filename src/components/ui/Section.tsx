import type { ReactNode } from "react";
import { GoldBar } from "./GoldBar";
import { Reveal } from "./Reveal";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  cosmos?: boolean;
}

export function Section({ children, id, className = "", cosmos = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 ${cosmos ? "etx-cosmos" : ""} ${className}`}
    >
      <div className="etx-container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  goldbar?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  goldbar = true,
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal
      preset="slide"
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && <span className="etx-eyebrow">{eyebrow}</span>}
      <h2 className="text-balance text-3xl text-star sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {goldbar && <GoldBar />}
      {intro && (
        <p className="text-pretty text-lg leading-relaxed text-mist">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
