import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Escolent — One Curriculum. Every Student's Real Pace.",
  description:
    "An intelligent learning platform that adapts in real time to cognitive struggle and emotional distress. No gamification. No one-size-fits-all.",
  keywords: [
    "Adaptive learning",
    "Education intelligence",
    "Differentiated instruction",
    "South Africa EdTech",
    "School safety net",
    "Escolent",
  ],
  openGraph: {
    title: "Escolent — Adaptive Learning Architecture",
    description:
      "One curriculum. Every student's real pace. Experience the live product demo.",
    url: "https://escolent.com",
    siteName: "Escolent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escolent — Adaptive Learning Architecture",
    description:
      "One curriculum. Every student's real pace. Experience the live product demo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] font-body antialiased overflow-x-hidden selection:bg-[var(--brand-subtle)] selection:text-[var(--brand-highlight)]">
        {children}
      </body>
    </html>
  );
}
