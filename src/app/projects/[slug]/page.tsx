// Projects are now served at /sv/projects/[slug] and /en/projects/[slug].
// Middleware redirects /projects/[slug] → /sv/projects/[slug].
import { redirect } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function ProjectRedirect({ params }: { params: Params }) {
  const { slug } = await params;
  redirect(`/sv/projects/${slug}`);
}
