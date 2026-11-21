import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, PenTool, Music, Feather, Sparkles, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hobbies() {
  const { hobbies } = portfolioData;

  const getHobbyIcon = (title) => {
    switch (title) {
      case 'Cooking':
        return UtensilsCrossed;
      case 'Calligraphy':
        return PenTool;
      case 'Singing':
        return Music;
      case 'Shayari & Poetry':
      case 'Shayari':
        return Feather;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="hobbies" className="relative py-24 bg-military-dark/40 overflow-hidden">
      {/* Background Camouflage overlay */}
      <div className="absolute inset-0 camo-overlay opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-military-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Creative Pursuits & Inner Cadence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Culinary Focus • Calligraphic Precision • Vocal Art • Poetic Expression
          </p>
        </div>

        {/* Hobbies Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = getHobbyIcon(hobby.title);
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-military p-6 rounded-xl border border-military-gold/25 hover:border-military-gold/70 transition-all duration-300 group hover:-translate-y-2 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon and Element Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-military-dark border border-military-gold/40 flex items-center justify-center text-military-gold group-hover:bg-military-gold group-hover:text-military-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-heading font-semibold tracking-wider text-military-goldLight bg-military-olive/20 px-2 py-0.5 rounded border border-military-gold/20 uppercase">
                      {hobby.element}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                    {hobby.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-heading font-bold text-military-gold/90 uppercase tracking-wider mt-1">
                    {hobby.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs text-military-ivory/75 leading-relaxed font-body">
                    {hobby.description}
                  </p>
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-6 pt-4 border-t border-military-gold/15 flex items-center justify-between text-[11px] font-heading text-military-ivory/50">
                  <span>Soul & Discipline</span>
                  <span className="text-military-gold">★ ★ ★</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Inspirational Shayari Quote Block */}
        <div className="mt-14 p-7 rounded-2xl bg-gradient-to-r from-military-dark via-[#1a281e] to-military-dark border border-military-gold/40 max-w-3xl mx-auto shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-2 left-3 text-military-gold/20 text-4xl font-serif">“</div>
          <div className="absolute bottom-2 right-3 text-military-gold/20 text-4xl font-serif">”</div>
          <p className="font-heading text-lg sm:text-xl text-military-ivory font-semibold tracking-wide italic">
            "सरफ़रोशी की तमन्ना अब हमारे दिल में है, <br />
            देखना है ज़ोर कितना बाज़ू-ए-क़ातिल में है।"
          </p>
          <div className="w-16 h-0.5 bg-military-gold/50 mx-auto my-3" />
          <p className="text-xs font-heading text-military-gold uppercase tracking-[0.2em] font-bold">
            The Spirit of Valour & Indian Patriotism
          </p>
        </div>

      </div>
    </section>
  );
}
