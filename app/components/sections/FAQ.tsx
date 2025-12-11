"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQItem } from "@/components/ui/FAQItem";
import { faqs } from "@/data/faqs";
import { GRADIENTS } from "@/lib/constants";

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-20 overflow-hidden"
      style={{ background: GRADIENTS.faq }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 sm:right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 sm:left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked"
          highlight="Questions"
          description="Find answers to common questions about Swasthya Sarathi"
        />

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
