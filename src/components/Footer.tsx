// Enkel footer. social-länkar med aria-label, © {new Date().getFullYear()} Marcus Grönnå. Klassen 'mt-24 text-center text-sm text-brand-700'.
export default function Footer() {
  return (
    <footer className="mt-24 text-center text-sm text-brand-700">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://linkedin.com/in/marcusgronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/marcusgronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/marcusgronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:underline"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
