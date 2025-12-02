import { ClipboardCheck, Stethoscope, MessageCircleHeart } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "1단계",
    title: "수면건강 체크",
    description: "온라인 설문으로 나의 수면 리듬을 점검합니다.",
    subDescription: "참여자 모두에게 개인 리포트와 맞춤 가이드 제공.",
    color: "bg-warm-lavender/30",
    iconColor: "text-purple-500",
  },
  {
    icon: Stethoscope,
    step: "2단계",
    title: "수면검사 + 코칭",
    description: "체크 결과, 정밀 검사가 권장된 분 중 선착순 신청 15분께",
    subDescription: "수면검사와 전문 코칭을 제공합니다. (비용 전액 회사 지원)",
    color: "bg-warm-blue/30",
    iconColor: "text-blue-500",
  },
  {
    icon: MessageCircleHeart,
    step: "3단계",
    title: "코칭권 제공",
    description: "수면검사가 필요하지만 선착순 기회를 놓치셨거나",
    subDescription: "코칭만 받고 싶으신 50분께 코칭권 제공.",
    color: "bg-warm-mint/30",
    iconColor: "text-green-500",
  },
];

const ThreeStepSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-3">
          "당신의 밤을 바꾸는 3단계 회복 루틴"
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-10">
          나를 위한 수면 회복 프로그램
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.color} rounded-2xl p-6 text-center transition-transform hover:scale-105`}
            >
              <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center mx-auto mb-4 soft-shadow">
                <step.icon className={`w-7 h-7 ${step.iconColor}`} />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {step.description}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {step.subDescription}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          "모든 단계는 자율 참여이며, 결과는 오직 본인에게만 제공됩니다."
        </p>
      </div>
    </section>
  );
};

export default ThreeStepSection;
