import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <TrustSection />
      <CTASection />
    </main>
  );
};

export default Index;
