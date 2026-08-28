import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escolent — One Curriculum. Every Student's Real Pace.",
  description:
    "An intelligent learning platform that adapts in real time to both cognitive struggle and emotional distress. No gamification. No one-size-fits-all.",
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
  themeColor: "#050507",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased selection:bg-cyan-500/30 selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-[#f4f4f6] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
