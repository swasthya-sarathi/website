export const GRADIENTS = {
  hero: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #FFFFFF 100%)",
  features: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)",
  stats: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)",
  providers: "linear-gradient(180deg, #F0FDFA 0%, #E6FAF8 50%, #F0FDFA 100%)",
  appDownload: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)",
  testimonials: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)",
  faq: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)",
  newsletter: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)",
} as const;

export const COLORS = {
  primary: "#14B8A6",
  primaryLight: "#34D5C5",
  primaryDark: "#0F766E",
  secondary: "#0D9488",
  secondaryLight: "#1DAFA1",
  accent: "#059669",
  accentLight: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  iconBgPrimary: "#E6FAF8",
  iconBgSuccess: "#DCFCE7",
  iconBgError: "#FEE2E2",
} as const;

export const COLOR_VARIANTS = {
  primary: { bg: "#E6FAF8", color: "#34D5C5" },
  secondary: { bg: "#E6FAF8", color: "#1DAFA1" },
  success: { bg: "#DCFCE7", color: "#10B981" },
  emergency: { bg: "#FEE2E2", color: "#EF4444" },
} as const;

export const SITE_CONFIG = {
  name: "Swasthya Sarathi",
  tagline: "Your Health, Our Priority",
  description:
    "Find doctors, hospitals, labs, medical stores, ambulance services, and blood banks — all in one place.",
} as const;
