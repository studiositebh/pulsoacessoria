import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Atraso em ms para efeito escalonado. */
  delay?: number;
}

/**
 * Envolve conteúdo com uma animação de entrada suave (fade + subida leve)
 * quando entra na viewport. As animações são neutralizadas automaticamente
 * para usuários com prefers-reduced-motion (via CSS global).
 */
export function Reveal({ children, className, as: Tag = "div", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      style={inView && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-opacity",
        inView ? "animate-fade-up" : "opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
