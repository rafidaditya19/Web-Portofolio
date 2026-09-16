import type { Metadata } from "next";
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
  title: "Nur Rafid Aditya | Electrical & Industrial Automation Engineer",
  description:
    "Portfolio of Nur Rafid Aditya - BNSP Certified in Electrical Engineering & Industrial Automation. Featuring Smart Office installations, OJT Smart Building, Huawei BTS L0, and IoT integrations.",
  keywords: [
    "Nur Rafid Aditya",
    "Electrical Engineering",
    "Industrial Automation",
    "BNSP",
    "Smart Building",
    "Tuya",
    "Home Assistant",
    "Huawei BTS",
    "IoT",
    "Bandung",
  ],
  authors: [{ name: "Nur Rafid Aditya" }],
  openGraph: {
    title: "Nur Rafid Aditya | Electrical & Industrial Automation Engineer",
    description:
      "BNSP Certified Electrical Engineering & Industrial Automation. Explore projects, certifications, and technical capabilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
