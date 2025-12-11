import { Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
  variant?: "default" | "white";
  showText?: boolean;
  size?: "sm" | "md";
}

export function Logo({
  variant = "default",
  showText = true,
  size = "md",
}: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
  };

  const heartSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
  };

  const textColor = variant === "white" ? "text-white" : "text-foreground";

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${iconSizes[size]} rounded-lg bg-primary flex items-center justify-center`}
      >
        <Heart className={`${heartSizes[size]} text-white`} />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold ${textColor}`}>
          {SITE_CONFIG.name}
        </span>
      )}
    </div>
  );
}
