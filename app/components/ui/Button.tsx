import { ArrowRight, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";
type ButtonSize = "sm" | "md" | "lg";
type IconType = "arrow" | "chevron" | LucideIcon | null;

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: IconType;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark",
  secondary:
    "bg-white text-foreground border border-border hover:border-primary hover:text-primary active:bg-muted",
  outline:
    "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary",
  dark: "bg-foreground text-white hover:bg-foreground/90 active:bg-foreground/90 border border-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl",
  lg: "px-6 py-3.5 sm:px-8 sm:py-4 text-base rounded-xl",
};

function getIcon(icon: IconType) {
  if (icon === "arrow") return ArrowRight;
  if (icon === "chevron") return ChevronRight;
  if (icon === null) return null;
  return icon;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = null,
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const IconComponent = getIcon(icon);

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200";
  const widthStyles = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  const content = (
    <>
      {children}
      {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
