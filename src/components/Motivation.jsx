import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart, Flag } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Motivation() {
  const [saluted, setSaluted] = useState(false);

  const handleJaiHindClick = () => {
    setSaluted(true);

    // Fire tricolor confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FF9933', '#FFFFFF', '#138808', '#C9A45C']
    });

    setTimeout(() => setSaluted(false), 3000);
  };

  const values = ['DISCIPLINE', 'COURAGE', 'DEDICATION', 'SERVICE', 'SACRIFICE'];

  return (
    <section className="relative py-28 overflow-hidden bg-military-black">
      {/* Background Cinematic Mountain & Indian Flag Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/indian-tricolor-outpost.jpg"
          alt="Himalayan Outpost and Indian Flag"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125"
        />
        {/* Dark Vignettes & Military Green Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101410] via-[#101410]/75 to-[#101410]" />
        <div className="absolute inset-0 bg-[#17251B]/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Crest / Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-military-dark/90 border-2 border-military-gold shadow-[0_0_30px_rgba(201,164,92,0.4)] mb-8"
        >
          <img
            src="/shield-icon.svg"
            alt="Emblem"
            className="w-9 h-9 object-contain"
          />
        </motion.div>

        {/* The Exact Quote Mandated in Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-military font-bold text-military-ivory leading-tight max-w-4xl mx-auto drop-shadow-lg">
            “Some dreams are bigger than personal success. <br />
            <span className="text-gold-gradient font-black">
              They are about serving something greater than yourself.
            </span>”
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto my-6" />

          {/* The Mandated Core Words */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 py-4 font-heading font-black text-sm sm:text-base md:text-lg tracking-[0.25em] text-military-goldLight">
            {values.map((word, idx) => (
              <React.Fragment key={word}>
                <span className="hover:text-white transition-colors duration-200">
                  {word}
                </span>
                {idx < values.length - 1 && (
                  <span className="text-military-gold/40">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Interactive "JAI HIND" Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center space-y-4"
        >
          <button
            onClick={handleJaiHindClick}
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-b from-military-dark to-[#0f1a12] border-2 border-military-gold shadow-[0_0_35px_rgba(201,164,92,0.3)] hover:shadow-[0_0_55px_rgba(201,164,92,0.6)] hover:border-military-goldLight transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            title="Click to Salute and Celebrate"
          >
            {/* Tricolor Ribbon Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

            <div className="flex items-center space-x-4">
              <span className="text-2xl">🇮🇳</span>
              <div className="text-left">
                <span className="text-[10px] font-heading uppercase tracking-[0.3em] text-military-gold/90 font-bold block">
                  The Supreme Salute
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-military font-black tracking-widest text-tiranga-gradient drop-shadow-md">
                  JAI HIND
                </span>
              </div>
              <Sparkles className={`w-6 h-6 text-military-gold transition-transform duration-500 ${saluted ? 'rotate-180 scale-125' : 'group-hover:rotate-45'}`} />
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-military-gold via-military-goldLight to-military-goldDark opacity-60" />
          </button>

          <p className="text-xs font-heading tracking-widest text-military-ivory/60 uppercase">
            {saluted ? "★ Bharat Mata Ki Jai! Salute Delivered ★" : "Click to sound the patriotic tribute"}
          </p>
        </motion.div>

        {/* The Officer's Creed Sub-quote */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-military-ivory/70 font-heading tracking-wider italic">
            "We serve not for titles, nor for accolades, but for the peaceful sleep of 1.4 billion countrymen."
          </p>
        </div>

      </div>
    </section>
  );
}
