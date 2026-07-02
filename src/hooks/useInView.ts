import { useEffect, useRef, useState } from "react";

/**
 * Observa quando um elemento entra na viewport para disparar animações de
 * entrada. Usado com cuidado para respeitar prefers-reduced-motion (o CSS
 * neutraliza as animações quando o usuário prefere movimento reduzido).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
