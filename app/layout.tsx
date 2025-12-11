import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://swasthyasarathi.com";
const siteName = "Swasthya Sarathi";
const siteDescription =
  "Find doctors, hospitals, labs, medical stores, ambulance services, and blood banks near you. Book appointments, consult online, and manage your health effortlessly. Your complete healthcare companion in India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Swasthya Sarathi - Your Complete Healthcare Companion",
    template: "%s | Swasthya Sarathi",
  },
  description: siteDescription,
  keywords: [
    "healthcare",
    "doctors",
    "hospitals",
    "medical",
    "appointments",
    "labs",
    "pharmacy",
    "ambulance",
    "blood bank",
    "health",
    "online consultation",
    "video consultation",
    "book doctor appointment",
    "find doctors near me",
    "medical stores",
    "diagnostic labs",
    "emergency services",
    "healthcare India",
    "telemedicine",
    "health records",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteName,
    title: "Swasthya Sarathi - Your Complete Healthcare Companion",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Swasthya Sarathi - Healthcare Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Swasthya Sarathi - Your Complete Healthcare Companion",
    description: siteDescription,
    images: ["/twitter-image"],
    creator: "@swasthyasarathi",
    site: "@swasthyasarathi",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14B8A6" },
    { media: "(prefers-color-scheme: dark)", color: "#0F766E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
