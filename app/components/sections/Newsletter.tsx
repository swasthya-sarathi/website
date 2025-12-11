"use client";

import { Mail, Send } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GRADIENTS } from "@/lib/constants";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ background: GRADIENTS.newsletter }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 sm:left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 sm:right-1/3 w-36 sm:w-56 h-36 sm:h-56 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge icon={Mail} variant="primary" className="mb-3 sm:mb-4">
          Newsletter
        </Badge>

        <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
          Stay Updated with Health Tips
        </h2>

        <p className="text-muted-foreground text-[0.875rem] sm:text-[1rem] mb-6 sm:mb-8 px-2 leading-relaxed">
          Subscribe to our newsletter for health tips, new features, and
          exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3.5 sm:py-3 rounded-xl sm:rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
            required
          />
          <button
            type="submit"
            className="px-6 py-3.5 sm:py-3 rounded-xl sm:rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark active:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
