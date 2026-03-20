import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – Marcus Grönnå | Fullstack .NET Developer",
  description:
    "Projects and case studies by Marcus Grönnå — C# / .NET / React / Azure. Includes AI-integrated apps, fullstack web products, and cloud infrastructure work.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "https://marcusgronna.com/portfolio",
    title: "Portfolio – Marcus Grönnå",
    description:
      "Projects and case studies by Marcus Grönnå — C# / .NET / React / Azure.",
    siteName: "marcusgronna.com",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
