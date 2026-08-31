import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://escolent.com"),
  title: {
    default: "Escolent — One Curriculum. Every Student's Real Pace.",
    template: "%s | Escolent",
  },
  description:
    "An intelligent learning platform that adapts in real time to cognitive struggle and emotional distress. Featuring dynamic scaffold ladders, class-wide misconception clustering, and native LTI 1.3 LMS integration.",
  applicationName: "Escolent",
  authors: [{ name: "Escolent (Pty) Ltd.", url: "https://escolent.com" }],
  generator: "Next.js",
  keywords: [
    "Escolent",
    "adaptive learning platform",
    "differentiated instruction",
    "intelligent tutoring system",
    "cognitive diagnostics",
    "scaffold ladder pedagogy",
    "student emotional distress detection",
    "affective safety net",
    "class-wide mastery matrix",
    "LTI 1.3 LMS integration",
    "Canvas LMS adaptive learning",
    "Google Classroom education integration",
    "Moodle adaptive learning",
    "curriculum agnostic standards",
    "South Africa EdTech",
    "low-bandwidth offline education software",
    "Bayesian knowledge tracing",
    "school learning intelligence layer",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Escolent (Pty) Ltd.",
  publisher: "Escolent (Pty) Ltd.",
  category: "Education Technology",
  classification: "Educational Software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://escolent.com",
  },
  openGraph: {
    title: "Escolent — One Curriculum. Every Student's Real Pace.",
    description:
      "A real-time intelligence layer that adapts to cognitive struggle and emotional distress. Experience the live interactive product demo.",
    url: "https://escolent.com",
    siteName: "Escolent",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Escolent — Adaptive Learning Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escolent — One Curriculum. Every Student's Real Pace.",
    description:
      "A real-time intelligence layer that adapts to cognitive struggle and emotional distress. No gamification. No one-size-fits-all.",
    creator: "@escolent",
    site: "@escolent",
    images: [{ url: "/opengraph-image", alt: "Escolent — Adaptive Learning Architecture" }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Escolent",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Escolent",
    legalName: "Escolent (Pty) Ltd.",
    url: "https://escolent.com",
    logo: "https://escolent.com/logo-icon.png",
    description:
      "Escolent builds adaptive learning architecture, real-time cognitive diagnostics, and affective safety nets for modern schools.",
    sameAs: ["https://demo.escolent.com"],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Escolent Adaptive Learning Platform",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, All modern browsers (Chrome, Safari, Firefox, Edge)",
    url: "https://escolent.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Interactive live sandbox demo available with zero barrier",
    },
    featureList: [
      "Dynamic Step-Down Scaffold Ladders",
      "Cognitive Misconception Detection & Clustering",
      "Real-Time Classroom Mastery Matrix",
      "Affective Safety Net & Distress Escalation Triage",
      "Curriculum-Agnostic Standards Skill Graph",
      "LTI 1.3 Advantage Portal Integration (Canvas, Google Classroom, Moodle)",
      "Offline & Low-Connectivity Resilience",
      "Strict Data Sovereignty & 72-Hour Hold Vault",
      "Conversational Command Layer with Grounded Precision",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Escolent",
    url: "https://escolent.com",
    description: "One curriculum. Every student's real pace.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Escolent adapt to individual student learning paces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Escolent continuously evaluates conceptual understanding in real time. When a student struggles, the interface dynamically constructs a graduated scaffold ladder (worked examples, micro-steps, targeted conceptual hints). When a student proves consistent mastery, the platform advances them instantly to higher-level concepts.",
        },
      },
      {
        "@type": "Question",
        name: "How does Escolent detect and respond to student emotional distress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Escolent recognizes that academic struggle often begins as emotional overwhelm. Through private 'I need help' options and passive linguistic sentiment detection, the system provides immediate reassurance to the student and triages confidential notifications to their teacher within 15–20 seconds.",
        },
      },
      {
        "@type": "Question",
        name: "Does Escolent integrate into existing school learning management systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Escolent natively supports LTI 1.3 Advantage and Google Workspace authentication, embedding directly inside Canvas, Google Classroom, and Moodle with zero roster spreadsheets to re-upload and zero switching friction.",
        },
      },
      {
        "@type": "Question",
        name: "Does Escolent work during power cuts or spotty internet connections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Engineered for low-resource environments and load shedding, Escolent saves student practice progress locally on the device and resumes automatically as soon as connection or power returns without lost work.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} dark h-full antialiased`}
    >
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] font-body antialiased overflow-x-hidden selection:bg-[var(--brand-subtle)] selection:text-[var(--brand-highlight)]">
        {children}
      </body>
    </html>
  );
}
