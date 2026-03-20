import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Marcus Grönnå – Fullstack .NET Developer",
  description:
    "Learn about Marcus Grönnå — fullstack .NET developer in Stockholm. Background in C# / .NET / React / Azure, with 12 years in safety-critical operations.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "https://marcusgronna.com/about",
    title: "About Marcus Grönnå – Fullstack .NET Developer",
    description:
      "Learn about Marcus Grönnå — fullstack .NET developer in Stockholm.",
    siteName: "marcusgronna.com",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
