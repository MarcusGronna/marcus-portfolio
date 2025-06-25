// Skapa en sticky sidomeny. Importera Link från 'next/link'. Lägg nav-lista ['/','/about','/portfolio','/contact'] vertikalt. Klassen 'bg-brand-600 text-surface-50 sticky top-0 p-4' + 'backdrop-blur'.
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/about", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function ChalkNav() {
  return (
    <nav className="bg-brand-600 text-surface-50 sticky top-0 p-6 z-50 backdrop-blur shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-4xl font-bold tracking-widest font-mono select-none">
          Marcus <span className="block md:inline">Grönnå</span>
        </span>
        <ul className="flex gap-8 text-lg font-mono">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline underline-offset-4 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
