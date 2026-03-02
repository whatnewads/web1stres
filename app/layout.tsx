import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "1st Response Occupational Health | Nationwide Industrial Health Services",
    template: "%s | 1st Response Occupational Health",
  },
  description:
    "The first mobile occupational health clinic to bring onsite telemedicine directly to your worksite. Drug testing, onsite clinics, emergency response, BLS/ALS, case management, and CPR training nationwide.",
  metadataBase: new URL("https://1stresponseoccupational.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://1stresponseoccupational.com",
    siteName: "1st Response Occupational Health",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1st Response Occupational Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollToTop />
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
