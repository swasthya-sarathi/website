import type { LucideIcon } from "lucide-react";

type BadgeVariant = "primary" | "secondary" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export function Badge({
  children,
  icon: Icon,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
      {children}
    </div>
  );
}
