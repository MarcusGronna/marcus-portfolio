export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      {/* TODO: Lägg in riktiga kontaktuppgifter */}
      <p className="mb-4">
        <a
          href="mailto:hi@marcusgronna.com"
          className="text-accent-700 underline hover:text-accent-800"
        >
          hi@marcusgronna.com
        </a>
      </p>
      <div className="flex justify-center gap-6 text-2xl mt-6">
        <a
          href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent-700"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MarcusGronna"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent-700"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
