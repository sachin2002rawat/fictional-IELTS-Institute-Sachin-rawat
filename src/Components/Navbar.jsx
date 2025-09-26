// Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg backdrop-blur-md transition-all duration-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                     transition-all duration-500 transform hover:scale-110 hover:rotate-3 
                     hover:tracking-wider hover:shadow-lg"
        >
          IELTS Pro
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-white font-medium transition-all duration-300"
              >
                {item.name}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
            </li>
          ))}
        </ul>

        {/* Right: Enroll & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Modern Animated Enroll Button */}
          <button
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
                       text-black font-bold px-6 py-2 rounded-2xl shadow-lg 
                       transform transition-all duration-300 hover:scale-110 
                       hover:shadow-2xl hover:animate-pulse active:scale-95"
          >
            Enroll Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {/* Hamburger / Close Icon using divs */}
            <div className="relative w-6 h-5">
              <span
                className={`block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'top-2.5'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100 py-2' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-4 border-t border-white/30 pt-2 bg-gradient-to-b from-indigo-600 to-purple-600">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 text-base font-medium text-white 
                           hover:bg-yellow-400 hover:text-black rounded-md 
                           transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
