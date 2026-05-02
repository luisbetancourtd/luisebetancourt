"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/mision", label: "MISION" },
  { href: "/blog", label: "ARCHIVO" },
  { href: "/portafolio", label: "PORTAFOLIO" },
  { href: "/arsenal", label: "ARSENAL" },
  { href: "/newsletter", label: "ENLISTARSE" },
  { href: "/sobre", label: "SOBRE" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[99] bg-[#131313]/90 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[var(--font-anton)] text-lg tracking-[0.15em] uppercase text-[#f2ca50] hover:text-[#ff5540] transition-colors"
          >
            LUIS E. BETANCOURT
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#131313]/95 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
