import { GRADIENTS } from "@/lib/constants";

type GradientKey = keyof typeof GRADIENTS;

interface GlowConfig {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  color: "primary" | "secondary" | "accent";
  opacity?: number;
  size?: "sm" | "md" | "lg";
}

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  gradient?: GradientKey;
  glows?: GlowConfig[];
  className?: string;
  innerClassName?: string;
}

const positionStyles: Record<GlowConfig["position"], string> = {
  "top-left": "top-1/4 left-0 sm:left-1/4",
  "top-right": "top-1/4 right-0 sm:right-1/4",
  "bottom-left": "bottom-1/4 left-0 sm:left-1/3",
  "bottom-right": "bottom-1/4 right-0 sm:right-1/4",
  "center-left": "top-1/2 left-0 -translate-y-1/2",
  "center-right": "top-1/2 right-0 -translate-y-1/2",
};

const colorStyles: Record<GlowConfig["color"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const sizeStyles: Record<NonNullable<GlowConfig["size"]>, string> = {
  sm: "w-40 sm:w-64 h-40 sm:h-64",
  md: "w-48 sm:w-80 h-48 sm:h-80",
  lg: "w-64 sm:w-96 h-64 sm:h-96",
};

function Glow({ position, color, opacity = 15, size = "md" }: GlowConfig) {
  return (
    <div
      className={`absolute ${positionStyles[position]} ${sizeStyles[size]} ${colorStyles[color]}/${opacity} rounded-full blur-3xl pointer-events-none`}
    />
  );
}

export function SectionWrapper({
  children,
  id,
  gradient,
  glows = [],
  className = "",
  innerClassName = "",
}: SectionWrapperProps) {
  const bgStyle = gradient ? { background: GRADIENTS[gradient] } : undefined;

  return (
    <section
      id={id}
      className={`relative py-12 sm:py-20 overflow-hidden ${className}`}
      style={bgStyle}
    >
      {glows.map((glow, index) => (
        <Glow key={index} {...glow} />
      ))}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
