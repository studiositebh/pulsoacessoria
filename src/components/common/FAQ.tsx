import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";
import { cn } from "@/lib/cn";

interface FAQProps {
  items: FAQItem[];
}

/** Acordeão acessível de perguntas frequentes. */
export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-xl border border-brand-100 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={index}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-50/60 sm:px-6"
              >
                <span className="text-base font-semibold text-brand-900 sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent-600 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-base leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
