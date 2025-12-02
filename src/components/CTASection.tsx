import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-warm-gradient">
      <div className="max-w-lg mx-auto text-center">
        {/* Emotional copy */}
        <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed mb-6">
          "올해의 피로를 내려놓고,
          <br />
          내일의 컨디션을 회복하세요."
        </p>
        
        <p className="text-sm md:text-base text-muted-foreground mb-8">
          당신의 건강한 수면이,
          <br />
          바이엘이 바라는 최고의 선물입니다.
        </p>
        
        {/* CTA Button */}
        <Button variant="warm" size="lg" className="w-full sm:w-52 transition-transform duration-200 hover:scale-105 mb-8">
          수면건강 체크 시작하기
        </Button>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground">
          본 프로그램은 Bayer 임직원 전용으로, K-SleepCare 서비스를 통해 진행됩니다.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
