export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://swasthyasarathi.com/#organization",
    name: "Swasthya Sarathi",
    alternateName: "Swasthya Sarathi Healthcare Platform",
    url: "https://swasthyasarathi.com",
    logo: {
      "@type": "ImageObject",
      url: "https://swasthyasarathi.com/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Your complete healthcare companion. Find doctors, hospitals, labs, medical stores, ambulance services, and blood banks near you. Book appointments, consult online, and manage your health effortlessly.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        contactType: "emergency",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://facebook.com/swasthyasarathi",
      "https://twitter.com/swasthyasarathi",
      "https://instagram.com/swasthyasarathi",
      "https://linkedin.com/company/swasthyasarathi",
    ],
    medicalSpecialty: [
      "GeneralPractice",
      "Cardiology",
      "Pediatrics",
      "Dermatology",
      "Orthopedics",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Healthcare Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Doctor Appointments",
            description: "Book appointments with verified doctors",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Consultation",
            description: "Online video consultations with doctors",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lab Test Booking",
            description: "Book diagnostic tests with home collection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medicine Delivery",
            description: "Order medicines with home delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Services",
            description: "Ambulance services and emergency care",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://swasthyasarathi.com/#website",
    url: "https://swasthyasarathi.com",
    name: "Swasthya Sarathi",
    description: "Your complete healthcare companion",
    publisher: {
      "@id": "https://swasthyasarathi.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://swasthyasarathi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book an appointment with a doctor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply search for doctors by specialty or name, view their available slots, and book your preferred time. You'll receive a confirmation via SMS and email with all the details.",
        },
      },
      {
        "@type": "Question",
        name: "Is my medical data secure on Swasthya Sarathi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We use bank-grade encryption and comply with all healthcare data protection regulations. Your data is never shared without your explicit consent.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get medicines delivered to my home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Upload your prescription or share it from your digital records, and we'll deliver medicines to your doorstep within 2-4 hours in most cities.",
        },
      },
      {
        "@type": "Question",
        name: "How does video consultation work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a video consultation slot with your doctor. At the scheduled time, join the secure video call from our app or website. You can share reports and get e-prescriptions.",
        },
      },
      {
        "@type": "Question",
        name: "Are the doctors on the platform verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all doctors are verified with their medical council registration, qualifications, and experience. We maintain a 100% verified provider network.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need to cancel or reschedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can cancel or reschedule appointments up to 2 hours before the scheduled time. Full refunds are processed for cancellations made within the policy window.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
