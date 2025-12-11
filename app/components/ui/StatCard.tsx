"use client";

import { useInView } from "@/hooks/useInView";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`text-center p-3 sm:p-4 rounded-xl bg-white/60 backdrop-blur-sm transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-bold text-primary mb-0.5 sm:mb-1 tracking-tight">
        {value}
      </div>
      <div className="text-muted-foreground text-[0.7rem] sm:text-[0.8rem] font-medium">
        {label}
      </div>
    </div>
  );
}
