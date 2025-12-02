import { Button } from "@/components/ui/button";
import { Moon, Sparkles } from "lucide-react";
import sleepHero from "@/assets/sleep-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sleepHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Bayer Logo Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 mb-8 soft-shadow">
          <div className="w-8 h-8 rounded-full sleep-gradient flex items-center justify-center">
            <Moon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium text-foreground">Bayer Korea</span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-up animation-delay-200 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          오늘 밤,<br />
          <span className="text-sleep-highlight">최고의 수면</span>을 시작하세요
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animation-delay-400 text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          5분 체크로 나만의 수면 건강 상태를 확인하고<br className="hidden md:block" />
          전문가 맞춤 솔루션을 받아보세요
        </p>

        {/* CTA Button - 상단에 배치! */}
        <div className="animate-fade-up animation-delay-600">
          <Button variant="hero" size="xl" className="mb-4">
            <Sparkles className="w-5 h-5" />
            무료 수면 체크 시작하기
          </Button>
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-sleep-calm rounded-full animate-pulse" />
            지금 149명이 참여 중
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
