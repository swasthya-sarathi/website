import { CheckCircle2 } from "lucide-react";

interface BenefitsListProps {
  items: string[];
  className?: string;
}

export function BenefitsList({ items, className = "" }: BenefitsListProps) {
  return (
    <div className={`space-y-2 sm:space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 sm:gap-3">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
          <span className="text-foreground text-xs sm:text-sm">{item}</span>
        </div>
      ))}
    </div>
  );
}
