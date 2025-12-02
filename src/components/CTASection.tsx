import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl sleep-gradient p-8 md:p-12 lg:p-16 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">약 5분 소요</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              수면은 더 나은 내일을 위한<br />
              <span className="text-sleep-highlight">회복의 시간</span>입니다
            </h2>
            
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              '최고의 수면'을 통해 '최고의 자신'을 만들어가시는<br className="hidden md:block" />
              여러분의 여정을 응원합니다.
            </p>
            
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-lg"
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
