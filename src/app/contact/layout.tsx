import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Marcus Grönnå – Fullstack .NET Developer",
  description:
    "Get in touch with Marcus Grönnå — fullstack .NET developer in Stockholm. Available for .NET consulting, fullstack product work, and roles that care about quality.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://marcusgronna.com/contact",
    title: "Contact Marcus Grönnå",
    description:
      "Get in touch with Marcus Grönnå — fullstack .NET developer in Stockholm.",
    siteName: "marcusgronna.com",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
