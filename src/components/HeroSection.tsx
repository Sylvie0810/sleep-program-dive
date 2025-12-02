import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import familyIllustration from "@/assets/happy-family.png";
import bayerLogo from "@/assets/bayer-logo.png";
const BottomWave = () => {
  return <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,200 L0,200 Z" fill="hsl(270 40% 85% / 0.35)" className="animate-wave" />
        <path d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,120 L1440,200 L0,200 Z" fill="hsl(210 50% 80% / 0.3)" className="animate-wave-slow" />
        <path d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 L1440,200 L0,200 Z" fill="hsl(15 70% 75% / 0.25)" className="animate-wave-slower" />
      </svg>
    </div>;
};
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
      {/* Bayer Logo */}
      <div className="absolute top-4 left-4 animate-fade-up">
        <img src={bayerLogo} alt="Bayer" className="h-10 w-auto" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-16 left-[10%] w-16 h-16 rounded-full bg-warm-lavender animate-float opacity-20" />
      <div className="absolute top-24 right-[15%] w-12 h-12 rounded-full bg-warm-coral animate-float delay-200 opacity-15" />
      <div className="absolute bottom-40 left-[15%] w-14 h-14 rounded-full bg-warm-yellow animate-float delay-300 opacity-15" />
      <div className="absolute bottom-48 right-[10%] w-10 h-10 rounded-full bg-warm-mint animate-float delay-100 opacity-20" />
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto">
        {/* Illustration */}
        <div className="animate-fade-up flex-shrink-0">
          <img src={familyIllustration} alt="건강한 일상" className="w-[220px] md:w-[280px] lg:w-[320px] h-auto" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center lg:text-left flex-1 max-w-xl">
          {/* Badge */}
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-warm-mint/50 rounded-full px-3 py-1.5 mb-4">
            <span className="text-xs font-medium text-foreground/80">Bayer Sleep Health Program by K-SleepCare</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-200 text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            한 해 동안 수고하셨습니다
          </h1>
          
          {/* Subheadline */}
          <p className="animate-fade-up delay-300 text-base md:text-lg text-foreground/90 mb-2 leading-relaxed">
            바이엘이 준비한 작은 휴식의 선물,
            <br />
            <span className="text-primary font-semibold">'수면 건강 케어 프로그램'</span>에 초대합니다.
          </p>

          {/* Sub message */}
          <p className="animate-fade-up delay-300 text-sm text-muted-foreground mb-6">
            올해의 마지막 복지는, '잘 자는 밤'입니다.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 items-center lg:items-start">
            <Button 
              variant="warm" 
              size="lg" 
              className="w-full sm:w-56 transition-transform duration-200 hover:scale-105"
              onClick={() => document.getElementById('three-step-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              프로그램 혜택
            </Button>
            <Link to="/sleep-strategy" className="w-full sm:w-56">
              <Button variant="secondary" size="lg" className="w-full bg-warm-coral hover:bg-warm-coral/90 text-white transition-transform duration-200 hover:scale-105">
                24시간 수면 전략
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave animation */}
      <BottomWave />
    </section>;
};
export default HeroSection;