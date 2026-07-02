import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/cn";

interface NoticeProps {
  children: ReactNode;
  className?: string;
}

/** Aviso discreto e informativo (usado para ressalvas sobre coberturas/apólice). */
export function Notice({ children, className }: NoticeProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-brand-100 bg-brand-50/70 px-4 py-3 text-sm leading-relaxed text-ink-soft",
        className,
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
