import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-gradient px-6">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-warm-lavender animate-float opacity-60" />
      <div className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-warm-mint animate-float delay-200 opacity-60" />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-warm-yellow animate-float delay-300 opacity-50" />
      <div className="absolute bottom-48 right-[10%] w-12 h-12 rounded-full bg-warm-peach animate-float delay-100 opacity-70" />
      
      {/* Main illustration circle */}
      <div className="animate-fade-up relative mb-8">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-warm-circle flex items-center justify-center animate-pulse-soft">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-warm-peach/50 flex items-center justify-center">
            <span className="text-6xl md:text-7xl">😴</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Badge */}
        <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-6 soft-shadow">
          <span className="text-sm font-medium text-foreground/80">Bayer 수면건강 프로그램</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-200 text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
          더 나은 내일을 위한
          <br />
          <span className="text-primary">숙면의 시작</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-300 text-base text-muted-foreground mb-8 leading-relaxed">
          5분 체크만으로 나의 수면 상태를 확인하고
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

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-peach/20 to-transparent" />
    </section>
  );
};

export default HeroSection;
