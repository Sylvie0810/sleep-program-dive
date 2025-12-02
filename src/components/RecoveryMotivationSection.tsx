import { Sunrise, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const goals = [
  {
    icon: Sunrise,
    text: "아침에 개운하게 일어나기",
    color: "bg-warm-coral/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Sun,
    text: "맑은 정신으로 활기찬 하루",
    color: "bg-warm-yellow/30",
    iconColor: "text-yellow-600",
  },
  {
    icon: Moon,
    text: "밤새 깨지 않고 푹 자기",
    color: "bg-warm-lavender/30",
    iconColor: "text-purple-500",
  },
];

const RecoveryMotivationSection = () => {
  return (
    <section className="py-16 px-6 bg-warm-gradient">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          "바이엘 직원들이 가장 많이 선택한 '회복 목표'는?"
        </h2>

        {/* Body */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          우리가 원하는 건 단순한 수면이 아니라,
          <br />
          <span className="text-foreground font-medium">"개운한 아침, 맑은 정신, 활기찬 하루"</span>입니다.
          <br />
          이번 프로그램은 당신의 <span className="text-primary font-semibold">'하루 리셋'</span>을 돕습니다.
        </p>

        {/* Goal Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`${goal.color} rounded-2xl px-5 py-3 md:px-6 md:py-4 flex items-center gap-3 transition-transform hover:scale-105`}
            >
              <goal.icon className={`w-5 h-5 md:w-6 md:h-6 ${goal.iconColor}`} />
              <span className="text-sm font-medium text-foreground">{goal.text}</span>
            </div>
          ))}
        </div>

        {/* Survey Caption */}
        <p className="text-xs text-muted-foreground mt-6">
          2025년 12월 2일 하루 간 설문 완료하신 57분의 의견
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link to="/sleep-strategy">
            <Button variant="secondary" size="lg" className="w-full sm:w-52 bg-warm-coral hover:bg-warm-coral/90 text-white transition-transform duration-200 hover:scale-105">
              24시간 수면 전략
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecoveryMotivationSection;
