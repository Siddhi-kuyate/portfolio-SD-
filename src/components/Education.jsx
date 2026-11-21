import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Layers, CheckCircle, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 bg-military-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tactical-grid bg-[length:36px_36px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-military-dark/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Academic Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Education Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            A Rigorous Triad: Natural Science • Geopolitical Theory • Executive Management
          </p>
        </div>

        {/* Vertical Military Timeline */}
        <div className="relative">
          {/* Central Gold Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-military-gold via-military-olive to-military-gold/30" />
          {/* Mobile Left Timeline Line */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-military-gold via-military-olive to-military-gold/30" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-military-dark border-2 border-military-gold shadow-[0_0_20px_rgba(201,164,92,0.4)] flex items-center justify-center group">
                      <GraduationCap className="w-5 h-5 text-military-gold group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10">
                    <div className="glass-military p-6 sm:p-7 rounded-xl border border-military-gold/30 hover:border-military-gold/60 transition-all duration-300 shadow-xl group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider bg-military-olive/40 border border-military-gold/30 text-military-goldLight">
                          {item.badge}
                        </span>
                        <div className="flex items-center space-x-1.5 text-xs font-heading text-military-gold font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Degree Name */}
                      <h3 className="text-lg sm:text-xl font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                        {item.degree}
                      </h3>

                      {/* Status / Specialization */}
                      <div className="mt-2 py-1.5 px-3 rounded bg-military-dark/80 border-l-2 border-military-gold">
                        <p className="text-xs sm:text-sm font-heading font-bold text-military-gold tracking-wide">
                          {item.specialization}
                        </p>
                        <p className="text-[11px] font-heading uppercase tracking-widest text-emerald-400 mt-0.5">
                          Status: {item.status}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-military-ivory/80 leading-relaxed font-body">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-4 pt-4 border-t border-military-gold/15 space-y-1.5">
                        <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-gold/90 mb-1">
                          Core Competencies Acquired:
                        </p>
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-military-ivory/70">
                            <CheckCircle className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Blank space on the other side for balanced desktop layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Academic Synthesis Summary Card */}
        <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-military-dark via-[#1a291f] to-military-dark border border-military-gold/40 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="flex items-center justify-center space-x-2 text-military-gold mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em]">
              The Strategic Synergy
            </span>
          </div>
          <p className="text-xs sm:text-sm text-military-ivory/90 leading-relaxed font-body">
            "Botany imparted keen empirical observation and environmental understanding; PSIR provided strategic diplomacy and geopolitical clarity; MBA instills high-tempo operational resource management, crisis leadership, and command execution."
          </p>
        </div>

      </div>
    </section>
  );
}
