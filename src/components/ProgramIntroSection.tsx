import { Clock, FileText, Sparkles } from "lucide-react";

const ProgramIntroSection = () => {
  return (
    <section className="py-16 px-6 bg-warm-cream/30">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          "좋은 하루의 시작은, 잘 잔 밤에서 옵니다."
        </h2>
        
        {/* Body */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          5분 만에 간단히 나의 수면 상태를 점검해보세요.
          <br />
          참여자 전원에게 <span className="text-primary font-semibold">개인별 분석 리포트와 맞춤형 수면 건강 가이드</span>를 제공합니다.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 soft-shadow">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">약 5분 소요</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 soft-shadow">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">개인 리포트 제공</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 soft-shadow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">맞춤 가이드</span>
          </div>
        </div>

        {/* Sub message */}
        <p className="text-sm text-muted-foreground italic">
          "나의 회복 루틴을 과학적으로 확인하는 시간"
        </p>
      </div>
    </section>
  );
};

export default ProgramIntroSection;
