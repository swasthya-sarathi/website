"use client";

import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  location,
  delay = 0,
}: TestimonialCardProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md transition-all duration-300">
        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-warning text-warning"
            />
          ))}
        </div>
        <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-[0.8rem] sm:text-[0.9rem]">
          {quote}
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-[0.7rem] sm:text-[0.8rem]">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground text-[0.8rem] sm:text-[0.875rem]">
              {author}
            </div>
            <div className="text-[0.65rem] sm:text-[0.75rem] text-muted-foreground">
              {role} • {location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
