import {
  Hospital,
  Stethoscope,
  CalendarCheck,
  FlaskConical,
  Pill,
  Ambulance,
  Droplets,
  UserRound,
} from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: Hospital,
    title: "Find Hospitals",
    description:
      "Discover nearby hospitals with detailed info about departments and specializations.",
    variant: "primary",
  },
  {
    icon: Stethoscope,
    title: "Doctor Search",
    description:
      "Find specialists with their schedules, availability, and consultation timings.",
    variant: "secondary",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointments",
    description:
      "Schedule appointments with your preferred doctors at convenient time slots.",
    variant: "success",
  },
  {
    icon: FlaskConical,
    title: "Lab Services",
    description:
      "Locate diagnostic labs, compare prices, and book tests with home collection.",
    variant: "primary",
  },
  {
    icon: Pill,
    title: "Medical Stores",
    description:
      "Find pharmacies near you with medicine availability and doorstep delivery.",
    variant: "secondary",
  },
  {
    icon: Ambulance,
    title: "Emergency Services",
    description: "Quick access to ambulance services when every second counts.",
    variant: "emergency",
  },
  {
    icon: Droplets,
    title: "Blood Banks",
    description:
      "Search blood banks by blood group and connect instantly in emergencies.",
    variant: "emergency",
  },
  {
    icon: UserRound,
    title: "Video Consultation",
    description:
      "Connect with doctors virtually from the comfort of your home.",
    variant: "success",
  },
];
