"use client";

import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const answerId = `faq-answer-${question.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <h3>
        <button
          onClick={onClick}
          className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 active:bg-muted/50 transition-colors gap-3"
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          <span className="font-semibold text-foreground text-[0.9rem] sm:text-[1rem]">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={answerId}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
        hidden={!isOpen}
      >
        <p className="px-4 sm:px-6 pb-4 text-muted-foreground text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
