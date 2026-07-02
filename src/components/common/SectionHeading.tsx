import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Nível do heading para manter a hierarquia semântica correta. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-600">
          {eyebrow}
        </p>
      )}
      <Tag className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
