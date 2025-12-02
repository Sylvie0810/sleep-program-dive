import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import familyIllustration from "@/assets/happy-family.png";

const BottomWave = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
      <svg 
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z"
          fill="hsl(var(--warm-lavender) / 0.25)"
          className="animate-wave"
        />
        <path
          d="M0,120 C240,80 480,160 720,120 C960,80 1200,160 1440,120 L1440,200 L0,200 Z"
          fill="hsl(var(--warm-coral) / 0.15)"
          className="animate-wave-slow"
        />
        <path
          d="M0,140 C240,170 480,110 720,140 C960,170 1200,110 1440,140 L1440,200 L0,200 Z"
          fill="hsl(var(--warm-yellow) / 0.2)"
          className="animate-wave-slower"
        />
      </svg>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-gradient px-6 pt-8">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-warm-lavender animate-float opacity-50" />
      <div className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-warm-coral animate-float delay-200 opacity-40" />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-warm-yellow animate-float delay-300 opacity-40" />
      <div className="absolute bottom-48 right-[10%] w-12 h-12 rounded-full bg-warm-mint animate-float delay-100 opacity-50" />
      
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
        <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-5 soft-shadow">
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
