"use client";

import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 active:bg-muted/50 transition-colors gap-3"
      >
        <span className="font-semibold text-foreground text-[0.9rem] sm:text-[1rem]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <p className="px-4 sm:px-6 pb-4 text-muted-foreground text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
