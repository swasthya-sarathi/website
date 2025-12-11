"use client";

import { Building2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { providerStats, providerBenefits } from "@/data/stats";
import { GRADIENTS } from "@/lib/constants";

export function ForProviders() {
  return (
    <section
      id="for-providers"
      className="relative py-12 sm:py-20 overflow-hidden"
      style={{ background: GRADIENTS.providers }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 sm:right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 sm:left-1/3 w-40 sm:w-72 h-40 sm:h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge icon={Building2} variant="secondary" className="mb-3 sm:mb-4">
              For Healthcare Providers
            </Badge>

            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
              Grow Your Practice with{" "}
              <span className="text-primary">Swasthya Sarathi</span>
            </h2>

            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] mb-5 sm:mb-6 leading-relaxed">
              Join thousands of healthcare professionals who trust Swasthya
              Sarathi to manage their practice and reach more patients.
            </p>

            <BenefitsList
              items={providerBenefits}
              className="mb-6 sm:mb-8 text-left"
            />

            <Button
              href="#newsletter"
              variant="primary"
              size="md"
              icon="chevron"
              fullWidth
              className="sm:w-auto"
            >
              Register as Provider
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {providerStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md transition-shadow duration-300"
              >
                <div style={{ color: stat.color }}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                </div>
                <div className="text-[1.25rem] sm:text-[1.5rem] font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-[0.7rem] sm:text-[0.8rem] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
