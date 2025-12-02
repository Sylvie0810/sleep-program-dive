import { Shield, Lock, Users } from "lucide-react";

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
      icon: Users,
      title: "전문 기관 운영",
      description: "SOOMi Health에서 안전하게 관리합니다",
    },
  ];

  return (
    <section className="py-16 bg-sleep-soft/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center shrink-0 soft-shadow">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
