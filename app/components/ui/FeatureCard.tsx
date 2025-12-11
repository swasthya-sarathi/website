"use client";

import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { COLOR_VARIANTS } from "@/lib/constants";
import type { ColorVariant } from "@/types";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: ColorVariant;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "primary",
  delay = 0,
}: FeatureCardProps) {
  const { ref, isInView } = useInView();
  const colors = COLOR_VARIANTS[variant];

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md hover:border-primary-light active:border-primary-light transition-all duration-300">
        <div
          className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl"
          style={{ backgroundColor: colors.bg, color: colors.color }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h3 className="text-[0.95rem] sm:text-[1.1rem] font-semibold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-[0.75rem] sm:text-[0.875rem] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
