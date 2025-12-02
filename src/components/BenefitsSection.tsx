import BenefitCard from "./BenefitCard";
import { ClipboardCheck, Stethoscope, Brain, Gift } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: ClipboardCheck,
      title: "내 수면 건강 점검",
      description: "5분 간단 체크로 수면 건강 상태와 피로 원인을 분석하고, 맞춤 가이드를 받아보세요.",
      highlight: "전 임직원 대상",
      featured: true,
    },
    {
      icon: Stethoscope,
      title: "전문 수면 검사",
      description: "체크 결과 검사 추천을 받은 분께 전문 병원 1박 수면 검사와 1개월 코칭을 제공합니다.",
      highlight: "선착순 15명",
    },
    {
      icon: Brain,
      title: "심화 코칭 프로그램",
      description: "수면 전문가와 함께하는 1개월 심화 코칭으로 수면 습관을 개선하세요.",
      highlight: "최대 50명",
    },
    {
      icon: Gift,
      title: "참여 감사 이벤트",
      description: "참여해주신 분들 중 추첨을 통해 스타벅스 기프티콘을 드립니다.",
      highlight: "추첨 20명",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sleep-soft rounded-full text-sm font-medium text-primary mb-4">
            프로그램 혜택
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            당신의 수면을 위한<br />
            <span className="text-primary">특별한 혜택</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            바이엘은 임직원 여러분의 건강한 수면을 위해 다양한 프로그램을 준비했습니다.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
