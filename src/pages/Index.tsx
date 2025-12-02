import HeroSection from "@/components/HeroSection";
import ProgramIntroSection from "@/components/ProgramIntroSection";
import ThreeStepSection from "@/components/ThreeStepSection";
import RecoveryMotivationSection from "@/components/RecoveryMotivationSection";
import RewardSection from "@/components/RewardSection";
import PrivacySection from "@/components/PrivacySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <RecoveryMotivationSection />
      <ProgramIntroSection />
      <ThreeStepSection />
      <RewardSection />
      <PrivacySection />
      <CTASection />
    </main>
  );
};

export default Index;
