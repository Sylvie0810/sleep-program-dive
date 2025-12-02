import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
  featured?: boolean;
  className?: string;
}

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlight,
  featured = false,
  className 
}: BenefitCardProps) => {
  return (
    <div className={cn(
      "group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1",
      featured 
        ? "bg-card soft-shadow glow-shadow border-2 border-primary/20" 
        : "bg-card/80 border border-border hover:soft-shadow",
      className
    )}>
      {featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 sleep-gradient rounded-full text-xs font-medium text-primary-foreground">
          추천
        </div>
      )}
      
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
        featured ? "sleep-gradient" : "bg-sleep-soft"
      )}>
        <Icon className={cn(
          "w-6 h-6",
          featured ? "text-primary-foreground" : "text-primary"
        )} />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      
      {highlight && (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-sleep-soft rounded-lg">
          <span className="w-2 h-2 bg-sleep-calm rounded-full" />
          <span className="text-xs font-medium text-secondary-foreground">{highlight}</span>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
