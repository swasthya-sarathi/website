"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export function Features() {
  return (
    <SectionWrapper
      id="features"
      gradient="features"
      glows={[
        { position: "center-left", color: "primary", opacity: 10, size: "md" },
        { position: "top-right", color: "secondary", opacity: 10, size: "sm" },
      ]}
    >
      <SectionHeader
        title="Everything You Need for"
        highlight="Better Health"
        description="From finding doctors to emergency services, we've got all your healthcare needs covered."
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant={feature.variant}
            delay={index * 75}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
