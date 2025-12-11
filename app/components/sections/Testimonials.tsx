"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      gradient="testimonials"
      glows={[
        { position: "top-left", color: "primary", opacity: 15, size: "md" },
        { position: "bottom-right", color: "secondary", opacity: 10, size: "md" },
      ]}
    >
      <SectionHeader
        title="Loved by"
        highlight="Thousands"
        description="See what our users have to say about their experience with Swasthya Sarathi"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            location={testimonial.location}
            delay={index * 75}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
