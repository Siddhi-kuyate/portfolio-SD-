import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Shield, Award, Gauge, Wind, HeartPulse } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Sports() {
  const { sports } = portfolioData;

  return (
    <section id="sports" className="relative py-24 bg-military-black overflow-hidden border-t border-military-gold/15">
      {/* Background Mountain Tactical Overlay */}
      <div className="absolute inset-0 bg-tactical-grid bg-[length:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-military-olive/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Physical Conditioning & Stamina
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Sports & Physical Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Endurance • Reflexes • Tenacity • Mental Grit
          </p>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="glass-military p-8 rounded-2xl border border-military-gold/30 hover:border-military-gold/70 transition-all duration-300 shadow-2xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-military-gold/20 via-transparent to-transparent pointer-events-none" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-military-dark border border-military-gold/50 flex items-center justify-center text-military-gold shadow-inner group-hover:bg-military-gold group-hover:text-military-black transition-colors">
                      {sport.title === 'Badminton' ? (
                        <Wind className="w-6 h-6" />
                      ) : (
                        <Flame className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-gold">
                        Discipline #{index + 1}
                      </span>
                      <h3 className="text-2xl font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                        {sport.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-military-dark/80 border border-military-gold/30 text-xs font-heading font-bold text-military-goldLight uppercase tracking-wider">
                    {sport.role}
                  </span>
                </div>

                {/* Quote */}
                <div className="my-4 p-3 rounded-lg bg-military-dark/60 border-l-2 border-military-gold italic text-xs sm:text-sm text-military-ivory/90 font-body">
                  "{sport.quote}"
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-military-ivory/80 leading-relaxed font-body">
                  {sport.description}
                </p>

                {/* Attributes Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {sport.attributes.map((attr, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-military-olive/30 border border-military-gold/20 text-xs font-heading font-semibold text-military-ivory/90 uppercase tracking-wider"
                    >
                      ✓ {attr}
                    </span>
                  ))}
                </div>
              </div>

              {/* Physical Conditioning Metrics */}
              <div className="mt-6 pt-5 border-t border-military-gold/20 grid grid-cols-3 gap-3 text-center">
                {Object.entries(sport.metrics).map(([key, val]) => (
                  <div key={key} className="p-2.5 rounded bg-military-dark/70 border border-military-gold/15">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-ivory/50 block">
                      {key}
                    </span>
                    <span className="text-base font-military font-bold text-military-gold">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Motivational Soldier's Fitness Banner */}
        <div className="mt-12 p-5 rounded-xl bg-gradient-to-r from-military-dark via-[#1e2f23] to-military-dark border border-military-gold/30 text-center max-w-3xl mx-auto shadow-xl">
          <p className="text-xs sm:text-sm text-military-ivory/90 font-body leading-relaxed">
            <strong className="text-military-gold font-heading tracking-wider uppercase mr-1">
              "The more you sweat in peace, the less you bleed in war."
            </strong>
            Physical training is not just athletic exercise; it is the daily forging of the mental armor required of an armed forces commander.
          </p>
        </div>

      </div>
    </section>
  );
}
