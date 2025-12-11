import type { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "default" | "footer";
}

export function SocialLinks({ links, variant = "default" }: SocialLinksProps) {
  const containerStyles =
    variant === "footer"
      ? "w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-primary active:bg-primary"
      : "w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white";

  return (
    <nav aria-label="Social media links" className="flex gap-3 sm:gap-4">
      {links.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          rel="noopener noreferrer"
          target="_blank"
          className={`${containerStyles} flex items-center justify-center transition-colors duration-200`}
        >
          <social.icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
