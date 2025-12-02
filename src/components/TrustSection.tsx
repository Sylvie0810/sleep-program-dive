import { Shield, Lock, Heart } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    { icon: Shield, text: "자발적 참여" },
    { icon: Lock, text: "개인정보 보호" },
    { icon: Heart, text: "무료 제공" },
  ];

  return (
    <section className="py-12 px-6 bg-warm-cream/50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center soft-shadow">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
