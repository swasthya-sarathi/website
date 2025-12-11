import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import type { SocialLink, FooterLinkGroup } from "@/types";

export const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Find Doctors", href: "#" },
      { label: "Book Appointments", href: "#" },
      { label: "Lab Tests", href: "#" },
      { label: "Medical Stores", href: "#" },
      { label: "Emergency Services", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export const contactInfo = {
  phone: "+91 1800-XXX-XXXX",
  email: "support@swasthyasarathi.com",
  address: "123 Healthcare Avenue, Medical District, India",
};
