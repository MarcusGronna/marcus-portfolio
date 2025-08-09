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
    jobTitle: "Fullstackutvecklare",
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
  };
}

export function projectJsonLd({ name, url, about }: { name: string; url: string; about: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    url,
    about,
    creator: { "@type": "Person", name: site.name },
  };
}
