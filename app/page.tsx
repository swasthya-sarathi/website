"use client";

import {
  Stethoscope,
  Hospital,
  FlaskConical,
  CalendarCheck,
  Pill,
  Ambulance,
  Droplets,
  UserRound,
  MapPin,
  Shield,
  ChevronRight,
  ChevronDown,
  Heart,
  Phone,
  Mail,
  Star,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Smartphone,
  Clock,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { useState, useEffect } from "react";

// ============================================
// CUSTOM HOOKS
// ============================================

function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref);
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isInView };
}

// ============================================
// COMPONENTS
// ============================================

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
  variant = "primary",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  variant?: "primary" | "secondary" | "success" | "emergency";
}) {
  const { ref, isInView } = useInView();

  const colorMap = {
    primary: { bg: "#E6FAF8", color: "#34D5C5" },
    secondary: { bg: "#E6FAF8", color: "#1DAFA1" },
    success: { bg: "#DCFCE7", color: "#10B981" },
    emergency: { bg: "#FEE2E2", color: "#EF4444" },
  };

  const colors = colorMap[variant];

  return (
    <div
      ref={ref}
      className={`group transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md hover:border-primary-light active:border-primary-light transition-all duration-300">
        <div
          className="mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl"
          style={{ backgroundColor: colors.bg, color: colors.color }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h3 className="text-[0.95rem] sm:text-[1.1rem] font-semibold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-[0.75rem] sm:text-[0.875rem] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`text-center p-3 sm:p-4 rounded-xl bg-white/60 backdrop-blur-sm transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-bold text-primary mb-0.5 sm:mb-1 tracking-tight">
        {value}
      </div>
      <div className="text-muted-foreground text-[0.7rem] sm:text-[0.8rem] font-medium">{label}</div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  location,
  delay,
}: {
  quote: string;
  author: string;
  role: string;
  location: string;
  delay: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md transition-all duration-300">
        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-warning text-warning" />
          ))}
        </div>
        <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-[0.8rem] sm:text-[0.9rem]">{quote}</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-[0.7rem] sm:text-[0.8rem]">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground text-[0.8rem] sm:text-[0.875rem]">{author}</div>
            <div className="text-[0.65rem] sm:text-[0.75rem] text-muted-foreground">{role} • {location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 active:bg-muted/50 transition-colors gap-3"
      >
        <span className="font-semibold text-foreground text-[0.9rem] sm:text-[1rem]">{question}</span>
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

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Hospital,
      title: "Find Hospitals",
      description: "Discover nearby hospitals with detailed info about departments and specializations.",
      variant: "primary" as const,
    },
    {
      icon: Stethoscope,
      title: "Doctor Search",
      description: "Find specialists with their schedules, availability, and consultation timings.",
      variant: "secondary" as const,
    },
    {
      icon: CalendarCheck,
      title: "Book Appointments",
      description: "Schedule appointments with your preferred doctors at convenient time slots.",
      variant: "success" as const,
    },
    {
      icon: FlaskConical,
      title: "Lab Services",
      description: "Locate diagnostic labs, compare prices, and book tests with home collection.",
      variant: "primary" as const,
    },
    {
      icon: Pill,
      title: "Medical Stores",
      description: "Find pharmacies near you with medicine availability and doorstep delivery.",
      variant: "secondary" as const,
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "Quick access to ambulance services when every second counts.",
      variant: "emergency" as const,
    },
    {
      icon: Droplets,
      title: "Blood Banks",
      description: "Search blood banks by blood group and connect instantly in emergencies.",
      variant: "emergency" as const,
    },
    {
      icon: UserRound,
      title: "Video Consultation",
      description: "Connect with doctors virtually from the comfort of your home.",
      variant: "success" as const,
    },
  ];

  const testimonials = [
    {
      quote: "Swasthya Sarathi helped me find a specialist for my mother within minutes. The booking was seamless!",
      author: "Priya Sharma",
      role: "Patient",
      location: "Mumbai",
    },
    {
      quote: "As a doctor, this platform makes it easy to manage my schedule and connect with patients efficiently.",
      author: "Dr. Rajesh Kumar",
      role: "Cardiologist",
      location: "Delhi",
    },
    {
      quote: "The blood bank feature was a lifesaver during an emergency. Found donors within 30 minutes!",
      author: "Amit Patel",
      role: "Patient Family",
      location: "Ahmedabad",
    },
    {
      quote: "I use Swasthya Sarathi for all my family's healthcare needs. The lab booking feature is excellent!",
      author: "Sneha Reddy",
      role: "Regular User",
      location: "Hyderabad",
    },
    {
      quote: "Video consultations saved me multiple trips to the hospital. Very convenient for follow-ups.",
      author: "Vikram Singh",
      role: "Patient",
      location: "Jaipur",
    },
    {
      quote: "The medicine delivery is fast and reliable. I get reminders for my prescriptions too!",
      author: "Meera Nair",
      role: "Senior Citizen",
      location: "Kochi",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment with a doctor?",
      answer: "Simply search for doctors by specialty or name, view their available slots, and book your preferred time. You'll receive a confirmation via SMS and email with all the details.",
    },
    {
      question: "Is my medical data secure on Swasthya Sarathi?",
      answer: "Absolutely. We use bank-grade encryption and comply with all healthcare data protection regulations. Your data is never shared without your explicit consent.",
    },
    {
      question: "Can I get medicines delivered to my home?",
      answer: "Yes! Upload your prescription or share it from your digital records, and we'll deliver medicines to your doorstep within 2-4 hours in most cities.",
    },
    {
      question: "How does video consultation work?",
      answer: "Book a video consultation slot with your doctor. At the scheduled time, join the secure video call from our app or website. You can share reports and get e-prescriptions.",
    },
    {
      question: "Are the doctors on the platform verified?",
      answer: "Yes, all doctors are verified with their medical council registration, qualifications, and experience. We maintain a 100% verified provider network.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can cancel or reschedule appointments up to 2 hours before the scheduled time. Full refunds are processed for cancellations made within the policy window.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================ */}
      {/* NAVIGATION */}
      {/* ============================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
        } border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Swasthya Sarathi
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Features", "For Providers", "Testimonials", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="/app"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 bg-white border-t border-border space-y-1">
            {["Features", "For Providers", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-base font-medium active:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#newsletter"
                className="block w-full text-center px-5 py-3.5 rounded-xl bg-primary text-white font-semibold text-base active:bg-primary-dark"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #FFFFFF 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/4 left-0 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Your Health, Our Priority
            </div>

            <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold mb-4 sm:mb-6 text-foreground tracking-tight px-2">
              Your Complete{" "}
              <span className="text-primary">Healthcare Companion</span>
            </h1>

            <p className="text-[0.95rem] sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed">
              Find doctors, hospitals, labs, medical stores, ambulance services, and blood banks — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-4 sm:px-0">
              <a
                href="#newsletter"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl sm:rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark active:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2 text-base"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl sm:rounded-lg bg-white text-foreground font-semibold border border-border hover:border-primary hover:text-primary active:bg-muted transition-colors duration-200 text-base"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 px-2 sm:px-0">
              <StatCard value="5,000+" label="Verified Doctors" delay={0} />
              <StatCard value="500+" label="Partner Hospitals" delay={100} />
              <StatCard value="1,000+" label="Diagnostic Labs" delay={200} />
              <StatCard value="100K+" label="Happy Patients" delay={300} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES SECTION */}
      {/* ============================================ */}
      <section id="features" className="relative py-12 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground px-2 tracking-tight">
              Everything You Need for <span className="text-primary">Better Health</span>
            </h2>
            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] md:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              From finding doctors to emergency services, we&apos;ve got all your healthcare needs covered.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant={feature.variant}
                delay={index * 75}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS BANNER SECTION */}
      {/* ============================================ */}
      <section className="relative py-12 sm:py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-foreground mb-3 sm:mb-4 px-2 tracking-tight">
              Trusted by <span className="text-primary">Millions</span>
            </h2>
            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] md:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
              Join the healthcare revolution that&apos;s transforming how India accesses medical care
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {[
              { icon: Users, value: "2M+", label: "Registered Users", description: "Active patients & providers", color: "#34D5C5" },
              { icon: CalendarCheck, value: "5M+", label: "Appointments Booked", description: "Successful consultations", color: "#1DAFA1" },
              { icon: Clock, value: "24/7", label: "Support Available", description: "Round the clock assistance", color: "#34D5C5" },
              { icon: Award, value: "99%", label: "Satisfaction Rate", description: "Happy customers", color: "#1DAFA1" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-sm hover:shadow-lg active:shadow-lg hover:border-primary-light active:border-primary-light transition-all duration-300 sm:hover:scale-105"
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors"
                  style={{ backgroundColor: "#E6FAF8", color: stat.color }}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>

                {/* Value */}
                <div className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-bold text-foreground mb-1 sm:mb-2 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-foreground font-medium text-[0.7rem] sm:text-[0.8rem] mb-0.5 sm:mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-muted-foreground text-[0.65rem] sm:text-[0.75rem] hidden sm:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-16 px-4 sm:px-0">
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark active:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOR PROVIDERS SECTION */}
      {/* ============================================ */}
      <section id="for-providers" className="relative py-12 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDFA 0%, #E6FAF8 50%, #F0FDFA 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/4 right-0 sm:right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 sm:left-1/3 w-40 sm:w-72 h-40 sm:h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                For Healthcare Providers
              </div>
              <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
                Grow Your Practice with{" "}
                <span className="text-primary">Swasthya Sarathi</span>
              </h2>
              <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] mb-5 sm:mb-6 leading-relaxed">
                Join thousands of healthcare professionals who trust Swasthya Sarathi to manage their practice and reach more patients.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                {[
                  "Manage your profile and availability",
                  "Reach more patients in your area",
                  "Digital appointment management",
                  "Build reputation with reviews",
                  "Secure video consultations",
                  "Analytics and insights dashboard",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#newsletter"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark active:bg-primary-dark transition-colors duration-200"
              >
                Register as Provider
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Users, value: "50K+", label: "Registered Providers", color: "#34D5C5" },
                { icon: CalendarCheck, value: "1M+", label: "Appointments Booked", color: "#1DAFA1" },
                { icon: Star, value: "4.9/5", label: "Average Rating", color: "#F59E0B" },
                { icon: Shield, value: "100%", label: "Verified Profiles", color: "#10B981" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-md active:shadow-md transition-shadow duration-300"
                >
                  <div style={{ color: stat.color }}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                  </div>
                  <div className="text-[1.25rem] sm:text-[1.5rem] font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-muted-foreground text-[0.7rem] sm:text-[0.8rem] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* APP DOWNLOAD SECTION */}
      {/* ============================================ */}
      <section className="relative py-12 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 sm:left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 sm:right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="hidden sm:block order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-[500px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-foreground text-base mb-2">Swasthya Sarathi</h4>
                        <p className="text-xs text-muted-foreground">Healthcare at your fingertips</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Mobile App
              </div>
              <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
                Healthcare in Your <span className="text-primary">Pocket</span>
              </h2>
              <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] mb-5 sm:mb-6 leading-relaxed">
                Download our mobile app for the best experience. Book appointments, consult doctors, order medicines, and manage your health records on the go.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                {[
                  "Instant appointment booking",
                  "Video consultations on mobile",
                  "Medicine reminders & tracking",
                  "Digital health records",
                  "Emergency SOS feature",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-foreground text-white rounded-xl hover:bg-foreground/90 active:bg-foreground/90 transition-colors border border-white/10"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left min-w-0">
                    <div className="text-[0.6rem] sm:text-[0.65rem] opacity-70 leading-tight">Download on the</div>
                    <div className="font-semibold text-[0.8rem] sm:text-[0.9rem] leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-foreground text-white rounded-xl hover:bg-foreground/90 active:bg-foreground/90 transition-colors border border-white/10"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left min-w-0">
                    <div className="text-[0.6rem] sm:text-[0.65rem] opacity-70 leading-tight">Get it on</div>
                    <div className="font-semibold text-[0.8rem] sm:text-[0.9rem] leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section id="testimonials" className="relative py-12 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/3 left-0 sm:left-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 sm:right-1/3 w-40 sm:w-72 h-40 sm:h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
              Loved by <span className="text-primary">Thousands</span>
            </h2>
            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] max-w-2xl mx-auto px-2 leading-relaxed">
              See what our users have to say about their experience with Swasthya Sarathi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                location={testimonial.location}
                delay={index * 75}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section id="faq" className="relative py-12 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/4 right-0 sm:right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 sm:left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] leading-relaxed">
              Find answers to common questions about Swasthya Sarathi
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEWSLETTER SECTION */}
      {/* ============================================ */}
      <section id="newsletter" className="relative py-12 sm:py-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #E6FAF8 0%, #F0FDFA 50%, #E6FAF8 100%)" }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 sm:left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 sm:right-1/3 w-36 sm:w-56 h-36 sm:h-56 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Newsletter
          </div>
          <h2 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] font-bold mb-3 sm:mb-4 text-foreground tracking-tight">
            Stay Updated with Health Tips
          </h2>
          <p className="text-muted-foreground text-[0.875rem] sm:text-[1rem] mb-6 sm:mb-8 px-2 leading-relaxed">
            Subscribe to our newsletter for health tips, new features, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3.5 sm:py-3 rounded-xl sm:rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
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

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="bg-foreground text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-base sm:text-lg font-bold">Swasthya Sarathi</span>
              </div>
              <p className="text-white/70 text-[0.75rem] sm:text-[0.875rem] mb-4 sm:mb-6 max-w-xs leading-relaxed">
                Your complete healthcare companion. Find doctors, hospitals, labs, and more — all in one place.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary active:bg-primary transition-colors duration-200"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-white/90">Services</h4>
              <ul className="space-y-2">
                {["Find Doctors", "Book Appointments", "Lab Tests", "Medical Stores", "Emergency Services"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white active:text-white transition-colors text-[0.75rem] sm:text-[0.875rem]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-white/90">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Press", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white active:text-white transition-colors text-[0.75rem] sm:text-[0.875rem]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold mb-3 sm:mb-4 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-wider text-white/90">Contact</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>+91 1800-XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                  <span className="break-all">support@swasthyasarathi.com</span>
                </li>
                <li className="flex items-start gap-2 text-white/70 text-[0.75rem] sm:text-[0.875rem]">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>123 Healthcare Avenue, Medical District, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-[0.75rem] sm:text-[0.875rem] text-center md:text-left">
              &copy; {new Date().getFullYear()} Swasthya Sarathi. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[0.75rem] sm:text-[0.875rem]">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-white/60 hover:text-white active:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
