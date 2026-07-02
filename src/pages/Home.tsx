import { SEO } from "@/components/common/SEO";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { CondoInsuranceSection } from "@/components/sections/CondoInsuranceSection";
import { RiskExamplesSection } from "@/components/sections/RiskExamplesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <>
      <SEO
        title="Pulso | Seguros, Proteção e Benefícios"
        description="Consultoria especializada em soluções de proteção, seguros, rastreamento e benefícios. Solicite uma análise de Seguro Condomínio com a Pulso."
        path="/"
        jsonLd={[organizationSchema(), websiteSchema()]}
      />
      <HomeHero />
      <TrustStrip />
      <AboutSection />
      <CondoInsuranceSection />
      <RiskExamplesSection />
      <SolutionsSection />
      <HowItWorksSection />
      <AudienceSection />
      <FinalCTA />
    </>
  );
}
