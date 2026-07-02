import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import Home from "@/pages/Home";

// A home é carregada de imediato (rota principal); as demais são divididas
// em chunks separados via lazy loading para reduzir o bundle inicial.
const CondoInsurance = lazy(() => import("@/pages/CondoInsurance"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" aria-busy="true">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-700" />
      <span className="sr-only">Carregando…</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seguro-condominio" element={<CondoInsurance />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
