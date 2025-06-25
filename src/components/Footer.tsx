// Enkel footer. social-länkar med aria-label, © {new Date().getFullYear()} Marcus Grönnå. Klassen 'mt-24 text-center text-sm text-brand-700'.
export default function Footer() {
  return (
    <footer className="mt-24 text-center text-sm text-brand-700 bg-brand-600/80 py-4">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://github.com/MarcusGronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
      © {new Date().getFullYear()} Marcus Grönnå.
    </footer>
  );
}
