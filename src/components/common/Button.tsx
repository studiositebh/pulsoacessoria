import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:-translate-y-0.5 focus-visible:ring-brand-400",
  secondary:
    "bg-accent-500 text-white shadow-sm hover:bg-accent-600 hover:-translate-y-0.5 focus-visible:ring-accent-300",
  outline:
    "border border-brand-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-brand-50 focus-visible:ring-brand-300",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:bg-whatsapp-dark hover:-translate-y-0.5 focus-visible:ring-green-300",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = CommonProps & {
  as: "link";
  to: string;
};

type ButtonAsAnchor = CommonProps & {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    children,
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if (props.as === "link") {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { href, target, rel, "aria-label": ariaLabel } = props;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    fullWidth: _fw,
    className: _c,
    children: _ch,
    as: _a,
    ...buttonProps
  } = props;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
