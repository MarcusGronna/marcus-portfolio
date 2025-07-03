import type { Metadata } from "next";
import { Abel, Dosis } from "next/font/google";
import "./globals.css";
import LangProvider from "../components/LangProvider";
import ChalkNav from "../components/ChalkNav";
import Footer from "../components/Footer";

const abel = Abel({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const dosis = Dosis({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcus Grönnå – Portfolio",
  description: "Nordisk, minimalistisk dev-portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </head>
      <body className={`${abel.variable} ${dosis.variable} antialiased min-h-screen flex flex-col`}>
        <LangProvider>
          <ChalkNav />
          <main className="container mx-auto px-6 lg:px-8 flex flex-col">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
