// This route is now served at /sv/about and /en/about.
// Middleware redirects /about → /sv/about, but this is a safety fallback.
import { redirect } from "next/navigation";
export default function AboutRedirect() {
  redirect("/sv/about");
}
