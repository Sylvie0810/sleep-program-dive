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
      "group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2",
      featured 
        ? "bg-card soft-shadow border-2 border-primary/10" 
        : "bg-card/60 border border-border/50 hover:bg-card hover:soft-shadow",
      className
    )}>
      {featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 gradient-cta rounded-full text-xs font-semibold text-primary-foreground">
          추천
        </div>
      )}
      
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110",
        featured ? "gradient-cta shadow-lg" : "bg-sleep-soft"
      )}>
        <Icon className={cn(
          "w-7 h-7",
          featured ? "text-primary-foreground" : "text-primary"
        )} />
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      
      {highlight && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sleep-soft rounded-lg">
          <span className="w-2 h-2 bg-sleep-calm rounded-full animate-pulse-soft" />
          <span className="text-xs font-medium text-secondary-foreground">{highlight}</span>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
