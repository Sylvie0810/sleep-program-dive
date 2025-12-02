import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sleepIllustration from "@/assets/sleep-illustration.png";

const SleepCycleWave = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 400 300" 
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Deep sleep wave */}
      <path
        d="M0,150 Q50,120 100,180 T200,140 T300,190 T400,150"
        fill="none"
        stroke="hsl(var(--sleep-deep))"
        strokeWidth="3"
        className="animate-sleep-wave"
        strokeLinecap="round"
      />
      {/* REM sleep wave */}
      <path
        d="M0,130 Q50,160 100,110 T200,150 T300,100 T400,140"
        fill="none"
        stroke="hsl(var(--sleep-rem))"
        strokeWidth="2"
        className="animate-sleep-wave-reverse"
        strokeLinecap="round"
        strokeDasharray="8 4"
      />
      {/* Light sleep wave */}
      <path
        d="M0,170 Q50,140 100,160 T200,130 T300,170 T400,145"
        fill="none"
        stroke="hsl(var(--sleep-light))"
        strokeWidth="2"
        className="animate-sleep-wave-slow"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-warm-gradient px-6">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-warm-lavender animate-float opacity-40" />
      <div className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-warm-mint animate-float delay-200 opacity-40" />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 rounded-full bg-warm-yellow animate-float delay-300 opacity-30" />
      <div className="absolute bottom-48 right-[10%] w-12 h-12 rounded-full bg-warm-peach animate-float delay-100 opacity-50" />
      
      {/* Main illustration with sleep cycle animation */}
      <div className="animate-fade-up relative mb-6 w-full max-w-xs mx-auto">
        <SleepCycleWave />
        <img 
          src={sleepIllustration} 
          alt="편안하게 잠자는 모습" 
          className="w-full h-auto rounded-3xl relative z-10"
        />
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
