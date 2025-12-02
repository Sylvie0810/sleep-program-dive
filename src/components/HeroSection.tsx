import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import familyIllustration from "@/assets/happy-family.png";
import bayerLogo from "@/assets/bayer-logo.png";

const BottomWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden">
      <svg 
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 280" 
        preserveAspectRatio="none"
      >
        {/* 엄마 드레스 - 라벤더 */}
        <path
          d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,280 L0,280 Z"
          fill="hsl(270 40% 85% / 0.35)"
          className="animate-wave"
        />
        {/* 아빠 셔츠 - 블루 */}
        <path
          d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,120 L1440,280 L0,280 Z"
          fill="hsl(210 50% 80% / 0.3)"
          className="animate-wave-slow"
        />
        {/* 아들 셔츠 - 코랄 */}
        <path
          d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,280 L0,280 Z"
          fill="hsl(15 70% 75% / 0.25)"
          className="animate-wave-slower"
        />
        {/* 딸 원피스 - 옐로우 */}
        <path
          d="M0,200 C240,230 480,170 720,200 C960,230 1200,170 1440,200 L1440,280 L0,280 Z"
          fill="hsl(55 70% 80% / 0.3)"
          className="animate-wave-slowest"
        />
      </svg>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-8">
      {/* Bayer Logo */}
      <div className="absolute top-6 left-6 animate-fade-up">
        <img src={bayerLogo} alt="Bayer" className="h-12 w-auto" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-warm-lavender animate-float opacity-30" />
      <div className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-warm-coral animate-float delay-200 opacity-25" />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-warm-yellow animate-float delay-300 opacity-25" />
      <div className="absolute bottom-48 right-[10%] w-12 h-12 rounded-full bg-warm-mint animate-float delay-100 opacity-30" />
      
      {/* Main illustration */}
      <div className="animate-fade-up relative mb-4 w-full max-w-sm mx-auto">
        <img 
          src={familyIllustration} 
          alt="행복한 가족" 
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Badge */}
        <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-5">
          <span className="text-sm font-medium text-foreground/80">Bayer 수면건강 프로그램</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-200 text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
          온 가족의 건강한
          <br />
          <span className="text-primary">숙면을 위한 첫걸음</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-300 text-base text-muted-foreground mb-8 leading-relaxed">
          5분 체크만으로 우리 가족 수면 상태를 확인하고
          <br />
          맞춤 솔루션을 무료로 받아보세요
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-400">
          <Button variant="warm" size="xl" className="group">
            무료 수면 체크 시작하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Trust indicator */}
          <p className="mt-4 text-sm text-muted-foreground">
            ⏱️ 약 5분 소요 · 👥 149명 참여 중
          </p>
        </div>
      </div>

      {/* Bottom wave animation */}
      <BottomWave />
    </section>
  );
};

export default HeroSection;
