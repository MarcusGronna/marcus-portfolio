// Root "/" — redirected to /sv by middleware.
// This file is kept as a fallback but should never be rendered directly
// since the middleware intercepts all non-locale-prefixed routes first.
import { redirect } from "next/navigation";

export default function RootPage() {
  // Middleware handles the redirect, but if somehow this is reached, fallback to /sv.
  redirect("/sv");
}
