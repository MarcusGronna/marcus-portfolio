import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Experience – Marcus Grönnå",
  description:
    "Education and professional journey of Marcus Grönnå — fullstack .NET developer. Study at School of Applied Technology, prior career as a train driver and instructor.",
  alternates: { canonical: "/education" },
  openGraph: {
    type: "website",
    url: "https://marcusgronna.com/education",
    title: "Education & Experience – Marcus Grönnå",
    description:
      "Education and professional journey of Marcus Grönnå — fullstack .NET developer.",
    siteName: "marcusgronna.com",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
