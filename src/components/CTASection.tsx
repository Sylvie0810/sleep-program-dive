import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-deep p-10 md:p-16 text-center max-w-4xl mx-auto">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sleep-light/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sleep-glow/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-sleep-glow" />
              <span className="text-sm font-medium text-primary-foreground/90">지금 시작하세요</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              '최고의 수면'을 통해
              <br />
              <span className="text-sleep-glow">'최고의 자신'</span>을 만들어가세요
            </h2>
            
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              수면은 더 나은 내일을 위한 회복의 시간입니다.
              <br />
              여러분의 여정을 응원합니다.
            </p>
            
            <Button 
              size="xl" 
              className="bg-primary-foreground text-sleep-deep hover:bg-primary-foreground/90 font-bold shadow-xl"
            >
              수면건강 체크하고 혜택 받기
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
