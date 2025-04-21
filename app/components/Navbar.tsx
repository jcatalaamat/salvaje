import React, { useState } from 'react';
import { Link, usePathname } from 'one';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vision', href: '/vision' },
    { name: 'The Land', href: '/land' },
    { name: 'Programs', href: '/programs' },
    { name: 'Community', href: '/community' },
    { name: 'Join Us', href: '/join' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-earth-50/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-earth-900">
              Salvaje
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`${
                  pathname === link.href 
                    ? 'text-amber-700 border-b-2 border-amber-700' 
                    : 'text-gray-700 hover:text-amber-700'
                } text-sm font-medium transition duration-150`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-earth-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-white bg-amber-700 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 