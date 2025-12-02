import { Coffee, Gift } from "lucide-react";

const RewardSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-warm-cream/50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-warm-coral/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Coffee className="w-8 h-8 text-orange-500" />
        </div>

        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          "참여해주신 분들께, 따뜻한 휴식의 여유를 드립니다 ☕"
        </h2>

        {/* Body */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          수면건강 체크에 참여하신 분들 중 <span className="text-primary font-semibold">20분을 추첨해</span>
          <br />
          스타벅스 기프티콘 1만원권을 드립니다.
        </p>

        {/* Highlight card */}
        <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 soft-shadow">
          <Gift className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">
            "푹 자고, 더 활기찬 하루를 위한 커피 한 잔 ☕"
          </span>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
