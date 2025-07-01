// Skapa en sticky sidomeny. Importera Link från 'next/link'. Lägg nav-lista ['/','/about','/portfolio','/contact'] vertikalt. Klassen 'bg-brand-600 text-surface-50 sticky top-0 p-4' + 'backdrop-blur'.

const navLinks = [
  { href: "#home", label: "Hem" },
  { href: "#about", label: "About Me" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function ChalkNav() {
  return (
    <nav className="bg-brand-600 text-surface-50 sticky top-0 p-6 z-50 backdrop-blur shadow-md border-b border-brand-700/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-4xl font-bold tracking-widest font-mono select-none">
          Marcus <span className="block md:inline">Grönnå</span>
        </span>
        <ul className="flex gap-8 text-lg font-mono items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline underline-offset-4 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
