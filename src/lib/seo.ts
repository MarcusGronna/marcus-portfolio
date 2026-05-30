// src/lib/seo.ts
export const site = {
  name: "Marcus Grönnå",
  url: "https://marcusgronna.com",
  email: "hi@marcusgronna.com",
  locale: "sv-SE",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Fullstack .NET Developer",
    description:
      "Fullstack .NET developer in Stockholm. C#, .NET, React, TypeScript, Azure. Builds web applications with a focus on clear architecture and practical AI integration.",
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
    sameAs: [
      "https://github.com/MarcusGronna",
      "https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/",
    ],
    knowsAbout: ["C#", ".NET", "ASP.NET Core", "React", "TypeScript", "Azure", "PostgreSQL"],
  };
}

export function projectJsonLd({ name, url, about }: { name: string; url?: string; about: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    ...(url ? { url } : {}),
    about,
    creator: { "@type": "Person", name: site.name, url: site.url },
  };
}
