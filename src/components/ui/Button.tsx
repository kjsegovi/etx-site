import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "gold" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-bold transition-all duration-150 focus-visible:outline-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // ASU maroon fill
  primary: "bg-ember-500 text-white hover:bg-ember-600",
  // outline maroon
  secondary:
    "border-2 border-ember-500 text-ember-500 hover:bg-ember-500 hover:text-white",
  // ASU gold fill with rich-black text
  gold: "bg-aqua-500 text-star hover:bg-aqua-600",
  ghost: "text-ember-500 hover:text-ember-600 underline underline-offset-4 decoration-2",
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
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <a href={rest.href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={(rest as LinkProps).to} className={classes}>
      {children}
    </Link>
  );
}
