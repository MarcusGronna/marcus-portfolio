// Helper: export function openGraph({title,description,url}): Metadata { return { title, description, openGraph:{ title, description, url } }; }

import type { Metadata } from "next";

export function openGraph({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
  };
}
