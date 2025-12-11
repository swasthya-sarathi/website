import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import {
  socialLinks,
  footerLinks,
  legalLinks,
  contactInfo,
} from "@/data/footer";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-3 sm:mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-white/70 text-[0.75rem] sm:text-[0.875rem] mb-4 sm:mb-6 max-w-xs leading-relaxed">
              Your complete healthcare companion. Find doctors, hospitals, labs,
              and more — all in one place.
            </p>
            <SocialLinks links={socialLinks} variant="footer" />
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-white/90">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white active:text-white transition-colors text-[0.75rem] sm:text-[0.875rem]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-[0.75rem] sm:text-[0.875rem] text-center md:text-left">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[0.75rem] sm:text-[0.875rem]">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white active:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
