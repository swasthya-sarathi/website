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
      url: "https://swasthyasarathi.com/logo.svg",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://swasthyasarathi.com",
      },
    ],
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Swasthya Sarathi Healthcare Platform",
    description:
      "Your complete healthcare companion for booking doctor appointments, video consultations, lab tests, and medicine delivery.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "5000",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Swasthya Sarathi Healthcare Platform",
        },
        author: {
          "@type": "Person",
          name: "Priya Sharma",
        },
        datePublished: "2024-10-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Finally, a healthcare app that actually works! Booked my father's cardiology appointment in minutes. The video consultation feature saved us a 100km trip to the city.",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Swasthya Sarathi Healthcare Platform",
        },
        author: {
          "@type": "Person",
          name: "Rajesh Kumar",
        },
        datePublished: "2024-11-02",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "As a diabetic, I need regular checkups and medicines. This app reminds me of my appointments, delivers medicines on time, and keeps all my reports in one place.",
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Swasthya Sarathi Healthcare Platform",
        },
        author: {
          "@type": "Person",
          name: "Dr. Meera Patel",
        },
        datePublished: "2024-11-20",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "From a doctor's perspective, this platform is excellent. The patient management system is intuitive, and the video consultation quality is superb.",
      },
    ],
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
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
