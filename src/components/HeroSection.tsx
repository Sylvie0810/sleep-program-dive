import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Moon } from "lucide-react";
import sleepHero from "@/assets/sleep-hero-v2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sleepHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sleep-deep/80 via-sleep-deep/40 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sleep-light/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-sleep-glow/10 blur-3xl animate-float delay-200" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
            <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center">
              <Moon className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-primary-foreground/90">Bayer Korea Sleep Health Program</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            더 나은 내일을 위한
            <br />
            <span className="text-sleep-glow text-glow">숙면의 시작</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 text-lg text-primary-foreground/80 mb-10 max-w-lg mx-auto leading-relaxed">
            5분 체크만으로 나의 수면 건강 상태를 확인하고
            <br className="hidden sm:block" />
            전문가 맞춤 솔루션을 무료로 받아보세요
          </p>

          {/* CTA */}
          <div className="animate-fade-up delay-300 space-y-4">
            <Button variant="hero" size="xl">
              무료 수면 체크 시작하기
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>약 5분 소요</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>149명 참여 중</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
