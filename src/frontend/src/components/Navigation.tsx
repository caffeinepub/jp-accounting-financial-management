import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/mission-vision', label: 'Mission & Vision' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/95 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/logo-jpglobal.dim_200x80.png"
            alt="JP Global Accounting Logo"
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-gold lg:text-2xl">
              JP Global Accounting
            </span>
            <span className="hidden text-xs text-gray-300 lg:block">
              International Bookkeeping & Taxation Experts | US, UK & Australia
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-gold'
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gold lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gold/20 bg-navy lg:hidden">
          <div className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-gold/10 py-3 font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
