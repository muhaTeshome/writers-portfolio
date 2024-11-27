'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg backdrop-blur-lg' 
          : 'bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link 
              href="/" 
              className="group text-xl md:text-2xl font-serif font-bold transition-all duration-300"
            >
              <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
                Mehammed T.
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white/60"></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 py-2 px-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Contact button (desktop) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center text-sm font-semibold text-slate-900 bg-white/90 px-6 py-2.5 rounded-md overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-white/10"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 w-full max-w-sm z-50">
          <div className="h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
              <Link
                href="/"
                className="text-xl font-serif font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
                  Mehammed T.
                </span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 py-8 overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-base font-medium rounded-lg px-4 py-3 transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/20'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center text-base font-medium text-slate-900 bg-white/90 rounded-lg px-4 py-3 hover:bg-white transition-colors duration-200 active:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
