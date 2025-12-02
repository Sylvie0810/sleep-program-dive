import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-warm-gradient">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-warm-yellow/50 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-warm-orange" />
          <span className="text-sm font-medium text-foreground">지금 바로 시작하세요</span>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-3">
          오늘 밤부터 달라지는
          <br />
          나의 수면 습관
        </h2>
        
        <p className="text-muted-foreground mb-8">
          5분 투자로 숙면의 첫걸음을 시작하세요
        </p>
        
        <Button variant="warm" size="xl" className="group">
          수면 체크 시작하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
