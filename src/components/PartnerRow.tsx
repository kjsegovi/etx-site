import { useId } from "react";
import type { Partner } from "../data/content";

interface PartnerRowProps {
  partners: Partner[];
  align?: "start" | "center";
  tone?: "strong" | "muted";
  className?: string;
}

export function PartnerRow({
  partners,
  align = "start",
  tone = "muted",
  className = "",
}: PartnerRowProps) {
  const labelId = useId();
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const textColor = tone === "strong" ? "text-star" : "text-mist";

  return (
    <div
      className={`flex flex-col gap-6 ${alignment} ${className}`}
      role="group"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="etx-eyebrow text-mist-2">
        Trusted by
      </p>
      <ul className="grid w-full grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {partners.map((partner) => (
          <li key={partner.name} className="flex min-w-0">
            <a
              href={partner.href}
              className={`group flex min-h-24 w-full items-center justify-center rounded-md border border-nebula-2 bg-void px-3 py-4 font-display text-base font-bold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-aqua-500 hover:bg-aqua-500/10 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:border-aqua-500 focus-visible:bg-aqua-500/10 active:translate-y-0 active:shadow-sm motion-reduce:transform-none motion-reduce:transition-none sm:px-4 sm:text-lg ${textColor}`}
            >
              {partner.logo ? (
                <img
                  src={partner.logo.src}
                  width={partner.logo.width}
                  height={partner.logo.height}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 w-auto max-w-full object-contain"
                />
              ) : (
                <span>{partner.name}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
