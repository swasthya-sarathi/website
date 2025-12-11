"use client";

import { Smartphone, Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";
import { appFeatures } from "@/data/stats";
import { GRADIENTS, SITE_CONFIG } from "@/lib/constants";

export function AppDownload() {
  return (
    <section
      className="relative py-12 sm:py-20 overflow-hidden"
      style={{ background: GRADIENTS.appDownload }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 sm:left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 sm:right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Phone Mockup */}
          <div className="hidden sm:block order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-foreground text-base mb-2">
                        {SITE_CONFIG.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Healthcare at your fingertips
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <Badge icon={Smartphone} variant="accent" className="mb-3 sm:mb-4">
              Mobile App
            </Badge>

            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
              Healthcare in Your <span className="text-primary">Pocket</span>
            </h2>

            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] mb-5 sm:mb-6 leading-relaxed">
              Download our mobile app for the best experience. Book
              appointments, consult doctors, order medicines, and manage your
              health records on the go.
            </p>

            <BenefitsList
              items={appFeatures}
              className="mb-6 sm:mb-8 text-left"
            />

            <AppStoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
