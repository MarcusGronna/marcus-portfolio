// Skapa en sticky sidomeny. Importera Link från 'next/link'. Lägg nav-lista ['/','/about','/portfolio','/contact'] vertikalt. Klassen 'bg-brand-600 text-surface-50 sticky top-0 p-4' + 'backdrop-blur'.
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/about", label: "Om mig" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Kontakt" },
];

export default function ChalkNav() {
  return (
    <nav className="bg-brand-600 text-surface-50 sticky top-0 p-4 backdrop-blur rounded-b-xl shadow-lg z-40">
      <ul className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
