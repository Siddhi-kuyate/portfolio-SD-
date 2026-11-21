import React from 'react';
import { motion } from 'framer-motion';
import { Users, Landmark, Compass, ShieldAlert, Globe, Award, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Interests() {
  const { interests } = portfolioData;

  const getInterestIcon = (title) => {
    if (title.includes('Socialism')) return Users;
    if (title.includes('Political')) return Landmark;
    if (title.includes('Philosophical')) return Compass;
    if (title.includes('Defence')) return ShieldAlert;
    if (title.includes('National Security')) return Globe;
    return Award;
  };

  return (
    <section id="interests" className="relative py-24 bg-military-black overflow-hidden border-t border-military-gold/15">
      {/* Background Grid and Glowing Orbs */}
      <div className="absolute inset-0 bg-tactical-grid bg-[length:36px_36px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-military-olive/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-military-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Intellectual & Strategic Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            My Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Statecraft • Geopolitics • Ethical Leadership • National Defence Architecture
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((item, index) => {
            const Icon = getInterestIcon(item.title);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-military p-7 rounded-2xl border border-military-gold/25 hover:border-military-gold/60 transition-all duration-300 group shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-military-gold via-military-olive to-military-gold/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-military-dark border border-military-gold/40 flex items-center justify-center text-military-gold group-hover:scale-110 group-hover:bg-military-gold group-hover:text-military-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-military-goldLight bg-military-olive/20 px-2.5 py-1 rounded border border-military-gold/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-military-ivory/80 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Tag */}
                <div className="mt-6 pt-4 border-t border-military-gold/15 flex items-center justify-between">
                  <span className="text-[11px] font-heading text-military-gold/80 uppercase tracking-widest font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-military-gold" />
                    <span>Domain Focus</span>
                  </span>
                  <span className="text-xs text-military-ivory/40 font-mono">
                    #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Holistic Worldview Card */}
        <div className="mt-14 p-6 rounded-xl bg-military-dark/80 border border-military-gold/30 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="text-xs sm:text-sm text-military-ivory/90 font-body leading-relaxed">
            "A future military commander must not only be a tactical warrior, but also an enlightened thinker—understanding the constitutional values of our republic, the geopolitical chessboards of the modern era, and the welfare of every citizen he swears to protect."
          </p>
        </div>

      </div>
    </section>
  );
}
