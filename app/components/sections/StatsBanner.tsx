"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { bannerStats } from "@/data/stats";
import { GRADIENTS, COLORS } from "@/lib/constants";

export function StatsBanner() {
  return (
    <section
      className="relative py-12 sm:py-24 overflow-hidden"
      style={{ background: GRADIENTS.stats }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Trusted by"
          highlight="Millions"
          description="Join the healthcare revolution that's transforming how India accesses medical care"
          className="mb-8 sm:mb-16"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {bannerStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-sm hover:shadow-lg active:shadow-lg hover:border-primary-light active:border-primary-light transition-all duration-300 sm:hover:scale-105"
            >
              <div
                className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors"
                style={{ backgroundColor: COLORS.iconBgPrimary, color: stat.color }}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>

              <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-bold text-foreground mb-1 sm:mb-2 tracking-tight">
                {stat.value}
              </div>

              <div className="text-foreground font-medium text-[0.7rem] sm:text-[0.8rem] mb-0.5 sm:mb-1">
                {stat.label}
              </div>

              {stat.description && (
                <div className="text-muted-foreground text-[0.65rem] sm:text-[0.75rem] hidden sm:block">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-16 px-4 sm:px-0">
          <Button
            href="#newsletter"
            variant="primary"
            size="lg"
            icon="arrow"
            className="shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </section>
  );
}
