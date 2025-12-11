"use client";

import { Heart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { heroStats } from "@/data/stats";
import { GRADIENTS, SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: GRADIENTS.hero }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Badge icon={Heart} variant="primary" className="mb-4 sm:mb-6">
            {SITE_CONFIG.tagline}
          </Badge>

          <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold mb-4 sm:mb-6 text-foreground tracking-tight px-2">
            Your Complete{" "}
            <span className="text-primary">Healthcare Companion</span>
          </h1>

          <p className="text-[0.95rem] sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-4 sm:px-0">
            <Button
              href="#newsletter"
              variant="primary"
              size="lg"
              icon="arrow"
              fullWidth
              className="sm:w-auto"
            >
              Get Started Free
            </Button>
            <Button
              href="#features"
              variant="secondary"
              size="lg"
              fullWidth
              className="sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 px-2 sm:px-0">
            {heroStats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
