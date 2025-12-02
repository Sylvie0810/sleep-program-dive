import { Shield, Lock, Heart } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "100% 자율 참여",
      description: "자유롭게 원하실 때 참여하세요",
    },
    {
      icon: Lock,
      title: "개인정보 보호",
      description: "건강 정보는 회사와 공유되지 않습니다",
    },
    {
      icon: Heart,
      title: "전문 기관 운영",
      description: "SOOMi Health에서 안전하게 관리합니다",
    },
  ];

  return (
    <section className="py-16 bg-sleep-soft/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center mb-4 soft-shadow">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
