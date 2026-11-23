'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            AY
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['Work', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 rounded-lg bg-accent text-background font-semibold hover:bg-accent-secondary transition-colors">
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {['Work', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-foreground hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
