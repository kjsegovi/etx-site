import { Link } from "react-router-dom";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md border-2 font-display font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:shadow-md active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // ASU gold fill with rich black text
  primary:
    "border-transparent bg-aqua-500 text-star hover:border-aqua-600 hover:bg-aqua-600",
  // outline maroon
  secondary:
    "border-ember-500 text-ember-500 hover:border-ember-600 hover:bg-ember-500 hover:text-white",
  // ASU gold fill with rich-black text
  gold:
    "border-transparent bg-aqua-500 text-star hover:border-aqua-600 hover:bg-aqua-600",
  ghost:
    "border-transparent text-ember-500 underline decoration-aqua-500 decoration-[3px] underline-offset-4 hover:text-ember-600",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface LinkProps extends CommonProps {
  to: string;
  href?: never;
}

interface AnchorProps extends CommonProps {
  href: string;
  to?: never;
}

type ButtonProps = LinkProps | AnchorProps;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <a
        href={rest.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
        <span className="sr-only"> opens in a new tab</span>
      </a>
    );
  }

  return (
    <Link
      to={(rest as LinkProps).to}
      className={classes}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
