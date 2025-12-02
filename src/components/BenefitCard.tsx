import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const BenefitCard = ({ icon: Icon, title, description, color, delay = 0 }: BenefitCardProps) => {
  return (
    <div 
      className="animate-fade-up flex items-center gap-4 p-4 bg-card rounded-2xl soft-shadow hover:scale-[1.02] transition-transform duration-200"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-6 h-6 text-foreground/70" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
