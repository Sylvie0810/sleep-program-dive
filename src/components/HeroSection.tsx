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
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Bayer Logo */}
      <div className="absolute top-4 left-4 animate-fade-up">
        <img src={bayerLogo} alt="Bayer" className="h-10 w-auto" />
      </div>

      {/* Decorative shapes - smaller and more subtle */}
      <div className="absolute top-16 left-[10%] w-16 h-16 rounded-full bg-warm-lavender animate-float opacity-20" />
      <div className="absolute top-24 right-[15%] w-12 h-12 rounded-full bg-warm-coral animate-float delay-200 opacity-15" />
      <div className="absolute bottom-24 left-[15%] w-14 h-14 rounded-full bg-warm-yellow animate-float delay-300 opacity-15" />
      <div className="absolute bottom-32 right-[10%] w-10 h-10 rounded-full bg-warm-mint animate-float delay-100 opacity-20" />
      
      {/* Main Content - Horizontal Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-4xl mx-auto">
        {/* Illustration */}
        <div className="animate-fade-up w-full max-w-[280px] md:max-w-[320px]">
          <img 
            src={familyIllustration} 
            alt="건강한 일상" 
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center md:text-left max-w-md">
          {/* Badge */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1.5 mb-3">
            <span className="text-xs font-medium text-foreground/80">Bayer 임직원 수면건강 프로그램</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-200 text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
            아침에 개운하게 일어나는
            <br />
            <span className="text-primary">건강한 하루의 시작</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-300 text-sm text-muted-foreground mb-5 leading-relaxed">
            참여자 49%가 선택한 회복 목표!
            <br />
            5분 체크로 나의 수면 상태를 확인하고
            <br />
            맞춤 솔루션을 받아보세요
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up delay-400">
            <Button variant="warm" size="lg" className="group">
              수면 체크 시작하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Trust indicator */}
            <p className="mt-3 text-xs text-muted-foreground">
              ⏱️ 약 5분 소요 · 👥 57명 참여 완료
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave animation */}
      <BottomWave />
    </section>
  );
};

export default HeroSection;
