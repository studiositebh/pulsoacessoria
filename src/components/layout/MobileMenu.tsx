import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X, MessageCircle } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Trava o scroll do body e move o foco quando o menu abre.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.default);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-brand-950/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Painel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-brand-100 px-5 py-4">
          <Logo />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="rounded-md p-2 text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-900"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Navegação principal">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-brand-50 text-brand-900"
                        : "text-ink-soft hover:bg-brand-50 hover:text-brand-900",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-brand-100 p-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com um consultor
          </a>
        </div>
      </div>
    </div>
  );
}
