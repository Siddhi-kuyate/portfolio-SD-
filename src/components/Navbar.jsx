import React, { useState, useEffect } from 'react';
import { Menu, X, Home, ChevronRight, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', hasIcon: true },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Hobbies & Interests', href: '#sports-hobbies' },
    { name: 'Army Ethos', href: '#army-ethos' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'education', 'skills', 'sports-hobbies', 'army-ethos', 'contact'];
      const currentPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E130E]/95 backdrop-blur-md border-b border-military-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-2.5'
          : 'bg-gradient-to-b from-[#0B0F0B]/95 via-[#0E130E]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand: Indian Army Crossed Swords Emblem & Motto */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center">
              <img
                src="/indian-army-emblem.svg"
                alt="Indian Army Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(201,164,92,0.4)] group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-military font-bold text-sm sm:text-base text-military-ivory tracking-[0.18em] group-hover:text-military-gold transition-colors leading-none">
                INDIAN ARMY
              </span>
              <span className="font-heading text-[9px] sm:text-[10px] tracking-[0.25em] text-military-goldLight uppercase font-medium mt-1">
                SERVICE • SACRIFICE • NATION
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Matching Uploaded Mockup Style) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isSectionActive = activeSection === link.href.substring(1) || (link.href === '#home' && activeSection === 'home');
              const isHome = link.name === 'Home';

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-heading tracking-wider rounded-md transition-all duration-200 flex items-center space-x-1.5 ${
                    isHome && isSectionActive
                      ? 'bg-military-gold/20 border border-military-gold text-military-gold shadow-[0_0_15px_rgba(201,164,92,0.25)] font-bold'
                      : isSectionActive
                      ? 'text-military-gold font-bold bg-military-dark/70 border border-military-gold/30'
                      : 'text-military-ivory/80 hover:text-military-gold hover:bg-military-dark/40 font-medium'
                  }`}
                >
                  {link.hasIcon && <Home className="w-3.5 h-3.5" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Brand: "Nation First" with Elegant Tricolor Swoosh */}
          <div className="hidden sm:flex flex-col items-end text-right group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center space-x-1.5">
              <span className="font-serif italic font-semibold text-base lg:text-lg text-military-ivory tracking-wide group-hover:text-military-gold transition-colors">
                Nation First
              </span>
            </div>
            {/* Elegant Tricolor Wave Underline */}
            <div className="w-20 h-1 rounded-full overflow-hidden flex shadow-sm mt-0.5">
              <div className="w-1/3 h-full bg-[#FF9933]" />
              <div className="w-1/3 h-full bg-white" />
              <div className="w-1/3 h-full bg-[#138808]" />
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-military-dark/80 border border-military-gold/40 text-military-gold hover:bg-military-olive/30 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C110C]/98 border-b border-military-gold/30 px-5 pt-4 pb-6 space-y-2 backdrop-blur-2xl animate-in slide-in-from-top duration-300">
          <div className="pb-3 border-b border-military-gold/20 flex items-center justify-between">
            <span className="font-heading text-xs tracking-widest text-military-gold uppercase font-bold">
              Command Menu
            </span>
            <span className="font-serif italic text-xs text-military-ivory">
              Nation First 🇮🇳
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-heading tracking-wider text-military-ivory/80 hover:text-military-gold hover:bg-military-dark/80 transition-colors"
            >
              <div className="flex items-center space-x-2">
                {link.hasIcon && <Home className="w-4 h-4 text-military-gold" />}
                <span>{link.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-military-gold/50" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
