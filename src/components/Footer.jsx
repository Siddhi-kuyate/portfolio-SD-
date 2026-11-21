import React from 'react';
import { Shield, ChevronUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Sports & Hobbies', href: '#sports-hobbies' },
    { name: 'Interests', href: '#interests' },
    { name: 'Army Ethos', href: '#army-ethos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0a0d0a] text-military-ivory pt-16 pb-12 border-t-2 border-military-gold/30 overflow-hidden">
      {/* Background Camo Overlay */}
      <div className="absolute inset-0 camo-overlay opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-military-gold/15">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-military-dark border border-military-gold/40 flex items-center justify-center">
                <img
                  src="/shield-icon.svg"
                  alt="Emblem"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h3 className="font-military font-bold text-xl sm:text-2xl text-military-ivory tracking-wider">
                SHRAVAN SANJAY DESHMUKH
              </h3>
            </div>
            <p className="font-heading text-sm text-military-gold tracking-[0.2em] uppercase font-bold">
              “Dream. Prepare. Serve.”
            </p>
            <p className="text-xs text-military-ivory/60 max-w-md font-body">
              MBA Student • Botany Alumnus • Aspiring Indian Army Officer committed to leadership, discipline, and sovereign defense.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-heading font-semibold uppercase tracking-wider text-military-ivory/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-military-gold transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-military-dark border border-military-gold/40 text-military-gold hover:bg-military-gold hover:text-military-black transition-all duration-300 flex items-center justify-center shadow-lg group flex-shrink-0"
            title="Return to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar: Jai Hind, Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-military-ivory/60 font-heading">
          
          {/* Disclaimer */}
          <div className="max-w-xl">
            <p className="text-[11px] leading-relaxed">
              Personal portfolio for an aspiring Indian Army Officer. This is not an official Indian Army website and does not claim any military rank, commission, or medals. All defense themes reflect high respect, patriotism, and focused preparation for the armed services.
            </p>
          </div>

          {/* Jai Hind element */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="font-military font-black text-lg tracking-widest text-tiranga-gradient">
              JAI HIND 🇮🇳
            </span>
            <span className="text-[11px] text-military-ivory/50">
              © {new Date().getFullYear()} Shravan Sanjay Deshmukh. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
