import BenefitCard from "./BenefitCard";
import { FileText, Lightbulb, Gift } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: FileText,
      title: "수면 상태 리포트",
      description: "나의 수면 패턴과 문제점을 한눈에 파악",
      color: "bg-warm-lavender",
    },
    {
      icon: Lightbulb,
      title: "맞춤 솔루션",
      description: "전문가가 제안하는 나만의 수면 개선법",
      color: "bg-warm-mint",
    },
    {
      icon: Gift,
      title: "특별 혜택",
      description: "참여자 전원에게 수면 케어 가이드 제공",
      color: "bg-warm-yellow",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center mb-3">
          무엇을 받을 수 있나요?
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          체크 완료 후 바로 확인하세요
        </p>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
