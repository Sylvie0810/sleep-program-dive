import { Shield, Lock, UserCheck } from "lucide-react";

const privacyPoints = [
  {
    icon: UserCheck,
    text: "본 프로그램은 100% 자율 참여형입니다.",
  },
  {
    icon: Lock,
    text: "수면 데이터 및 결과는 회사와 공유되지 않으며, 오직 개인 리포트 형태로 본인에게만 제공됩니다.",
  },
  {
    icon: Shield,
    text: "모든 데이터는 케이슬립케어(SOOMi Health)에서 관련 법규에 따라 안전하게 관리됩니다.",
  },
];

const PrivacySection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          "결과는 오직 본인만 볼 수 있습니다."
        </h2>

        {/* Privacy Points */}
        <div className="space-y-4">
          {privacyPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-4 soft-shadow"
            >
              <div className="w-10 h-10 bg-warm-mint/30 rounded-full flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed pt-2">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Sub text */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          안심하고 참여하세요
        </p>
      </div>
    </section>
  );
};

export default PrivacySection;
