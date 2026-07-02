import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsappMessages.default);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-brand-100 bg-white/95 shadow-sm backdrop-blur"
            : "border-b border-transparent bg-white/80 backdrop-blur",
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Logo />

            <nav className="hidden lg:block" aria-label="Navegação principal">
              <ul className="flex items-center gap-7">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "link-underline text-sm font-medium transition-colors",
                          isActive
                            ? "text-brand-900"
                            : "text-ink-soft hover:text-brand-900",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Falar com um consultor
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                className="inline-flex items-center justify-center rounded-lg p-2 text-brand-900 transition-colors hover:bg-brand-50 lg:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
