import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic",
  description: "Experience exceptional dental care at BrightSmile Dental Clinic. We offer comprehensive dental services including cosmetic dentistry, implants, orthodontics, and emergency care. Book your appointment today!",
  keywords: "dental clinic, dentist, teeth whitening, dental implants, orthodontics, cosmetic dentistry, emergency dental care, New York dentist",
  authors: [{ name: "BrightSmile Dental Clinic" }],
  creator: "BrightSmile Dental Clinic",
  publisher: "BrightSmile Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brightsmiledental.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrightSmile Dental Clinic",
    description: "Experience exceptional dental care at BrightSmile Dental Clinic. Comprehensive services including cosmetic dentistry, implants, and emergency care.",
    url: "https://brightsmiledental.com",
    siteName: "BrightSmile Dental Clinic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSmile Dental Clinic",
    description: "Experience exceptional dental care at BrightSmile Dental Clinic. Book your appointment today!",
    creator: "@brightsmiledental",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
