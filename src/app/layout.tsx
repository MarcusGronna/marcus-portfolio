import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChalkNav from "@/components/ChalkNav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Grönnå – Portfolio",
  description: "Nordisk, minimalistisk dev-portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface-50 text-brand-700 min-h-screen flex flex-col`}
      >
        <ChalkNav />
        <main className="flex-1 flex flex-col px-2 md:px-6 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
