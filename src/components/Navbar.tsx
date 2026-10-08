import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { Logo } from './Logo';
import { downloadCv } from '../utils/downloadCv';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name & AR Monogram */}
        <a
          href="#home"
          className="group flex items-center transition-colors"
          aria-label="Abu Raihan Home"
        >
          <Logo variant="full" theme="dark" size={30} showSubtitle={false} />
        </a>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action: Download CV (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => downloadCv()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors group cursor-pointer"
            title="Download CV"
          >
            <FileDown className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Toggle & Direct Download */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => downloadCv()}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-md cursor-pointer"
            title="Download CV"
          >
            <FileDown className="w-3 h-3 text-red-500" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090b10] border-b border-zinc-800 px-6 py-5">
          <nav className="flex flex-col gap-3.5 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-red-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadCv();
                }}
                className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
