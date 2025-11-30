'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, NAVIGATION_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              {SITE_CONFIG.name}
            </div>
            <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.22_25)] opacity-80 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-gray-700 hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">{CONTACT_INFO.phone}</span>
            </a>
            <Button asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center text-gray-700 hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">{CONTACT_INFO.phone}</span>
                </a>
                <Button asChild className="w-full">
                  <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                    Solicitar Cotización
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
