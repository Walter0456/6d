'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Our Story', href: '#story' },
  { label: 'Find Us', href: '#location' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'nav-blur border-b border-espresso/10 bg-cream/90 shadow-warm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="6D Cafe homepage">
          <AppLogo
            size={36}
            className="text-gold transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-base font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-espresso' : 'text-white'
              }`}
            >
              6D Cafe
            </span>
            <span
              className={`text-[10px] font-medium tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              {'\uCE74\uD398'}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`hand-underline text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-espresso/80 hover:text-espresso'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#location"
            className="hidden items-center gap-2 rounded-sketch bg-gold px-5 py-2.5 text-sm font-semibold text-espresso shadow-sketch transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-sketch-gold md:flex"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Visit Us
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`rounded-sketch p-2 transition-colors md:hidden ${
              isScrolled ? 'text-espresso' : 'text-white'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-espresso/10 bg-cream/95 transition-all duration-300 nav-blur md:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-espresso/10 py-3 text-base font-medium text-espresso transition-colors last:border-0 hover:text-bark"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#location"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 rounded-sketch bg-gold px-5 py-3 text-center text-sm font-semibold text-espresso shadow-sketch"
          >
            Visit Us
          </a>
        </div>
      </div>
    </header>
  );
}
