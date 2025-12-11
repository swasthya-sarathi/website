import type { LucideIcon } from "lucide-react";

export type ColorVariant = "primary" | "secondary" | "success" | "emergency";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: ColorVariant;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  color: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
