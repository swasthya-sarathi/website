import {
  Users,
  CalendarCheck,
  Clock,
  Award,
  Star,
  Shield,
} from "lucide-react";
import type { Stat } from "@/types";
import { COLORS } from "@/lib/constants";

export const heroStats = [
  { value: "5,000+", label: "Verified Doctors" },
  { value: "500+", label: "Partner Hospitals" },
  { value: "1,000+", label: "Diagnostic Labs" },
  { value: "100K+", label: "Happy Patients" },
];

export const bannerStats: Stat[] = [
  {
    icon: Users,
    value: "2M+",
    label: "Registered Users",
    description: "Active patients & providers",
    color: COLORS.primaryLight,
  },
  {
    icon: CalendarCheck,
    value: "5M+",
    label: "Appointments Booked",
    description: "Successful consultations",
    color: COLORS.secondaryLight,
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Round the clock assistance",
    color: COLORS.primaryLight,
  },
  {
    icon: Award,
    value: "99%",
    label: "Satisfaction Rate",
    description: "Happy customers",
    color: COLORS.secondaryLight,
  },
];

export const providerStats: Stat[] = [
  {
    icon: Users,
    value: "50K+",
    label: "Registered Providers",
    color: COLORS.primaryLight,
  },
  {
    icon: CalendarCheck,
    value: "1M+",
    label: "Appointments Booked",
    color: COLORS.secondaryLight,
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    color: COLORS.warning,
  },
  {
    icon: Shield,
    value: "100%",
    label: "Verified Profiles",
    color: COLORS.accentLight,
  },
];

export const providerBenefits = [
  "Manage your profile and availability",
  "Reach more patients in your area",
  "Digital appointment management",
  "Build reputation with reviews",
  "Secure video consultations",
  "Analytics and insights dashboard",
];

export const appFeatures = [
  "Instant appointment booking",
  "Video consultations on mobile",
  "Medicine reminders & tracking",
  "Digital health records",
  "Emergency SOS feature",
];
