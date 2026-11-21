import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Flag, Compass, Award, Mountain, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ArmyHeritage() {
  const { militaryRegimentsInspiration, armyPhilosophy } = portfolioData;
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' | 'gallery' | 'regiments'

  const galleryImages = [
    {
      src: '/hero-military-portrait.jpg',
      title: 'Aspiring Officer Uniform Simulation',
      desc: 'Digital combat camouflage fatigues & military beret against Himalayan backdrop with facial identity preserved.',
      tag: 'Candidate Profile'
    },
    {
      src: '/army-mountain-patrol.jpg',
      title: 'Himalayan High-Altitude Patrol',
      desc: 'Indian Army personnel maintaining vigilant vigil on high rugged ridgelines under challenging sub-zero conditions.',
      tag: 'Tactical Vigilance'
    },
    {
      src: '/indian-tricolor-outpost.jpg',
      title: 'Sovereign Tricolor at Forward Base',
      desc: 'The National Flag waving proudly atop a high-altitude border outpost in Ladakh, symbolizing national integrity.',
      tag: 'National Pride'
    }
  ];

  return (
    <section id="army-ethos" className="relative py-24 bg-military-dark/60 overflow-hidden border-t border-military-gold/20">
      {/* Camo Background */}
      <div className="absolute inset-0 camo-overlay opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-military-olive/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <Shield className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Military Heritage & Doctrine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Army Theory & Imagery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            "Seva Paramo Dharma" • Chetwode Creed • Mountain Warfare & Regimental Pride
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-military-dark/90 border border-military-gold/30 shadow-lg">
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === 'theory'
                  ? 'bg-military-gold text-military-black shadow-md'
                  : 'text-military-ivory/70 hover:text-military-gold'
              }`}
            >
              Command Theory & Pillars
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'bg-military-gold text-military-black shadow-md'
                  : 'text-military-ivory/70 hover:text-military-gold'
              }`}
            >
              Military Imagery Gallery
            </button>
            <button
              onClick={() => setActiveTab('regiments')}
              className={`px-5 py-2.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === 'regiments'
                  ? 'bg-military-gold text-military-black shadow-md'
                  : 'text-military-ivory/70 hover:text-military-gold'
              }`}
            >
              Regiments & War Cries
            </button>
          </div>
        </div>

        {/* Tab 1: Command Theory & Doctrine */}
        {activeTab === 'theory' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* The Four Command Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {armyPhilosophy.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-military p-6 sm:p-7 rounded-xl border border-military-gold/30 hover:border-military-gold/60 transition-all shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-goldLight bg-military-olive/30 px-2.5 py-1 rounded border border-military-gold/20">
                      {pillar.tag}
                    </span>
                    <span className="text-xs text-military-gold font-mono font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-military-ivory/80 leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Doctrine Insight Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-military-dark via-[#17251B] to-military-dark border border-military-gold/40 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center space-x-2 text-military-gold">
                    <Mountain className="w-5 h-5" />
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em]">
                      High-Altitude Warfare & Operational Logistics
                    </span>
                  </div>
                  <h4 className="text-xl font-military font-bold text-military-ivory">
                    Synthesizing MBA Supply Chain with Indian Mountain Warfare
                  </h4>
                  <p className="text-xs sm:text-sm text-military-ivory/80 leading-relaxed font-body">
                    In unforgiving terrains like Eastern Ladakh, Siachen, and the Northeast frontiers, tactical success hinges upon the absolute precision of logistics and supply chains. Shravan's study of Operations and Supply Chain Management (OSCM) provides a potent analytical foundation to understand high-altitude supply maintenance, cold-chain distribution, and rapid equipment readiness under harsh weather.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-military-black/80 border border-military-gold/30 text-center space-y-2">
                  <span className="text-[10px] font-heading text-military-ivory/50 uppercase tracking-widest block">
                    SSB Preparation Principle
                  </span>
                  <p className="text-base font-military font-bold text-military-gold">
                    "Courage in Heart, Clarity in Command"
                  </p>
                  <p className="text-[11px] text-military-ivory/70 font-body">
                    Transforming academic acumen into actionable national service capability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Military Imagery Gallery */}
        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="glass-military rounded-2xl overflow-hidden border border-military-gold/30 hover:border-military-gold/70 transition-all duration-300 shadow-2xl group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-military-black">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-military-black via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#101410]/80 backdrop-blur-md border border-military-gold/40 text-[10px] font-heading font-bold uppercase tracking-wider text-military-gold">
                    {img.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-base font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                    {img.title}
                  </h4>
                  <p className="mt-2 text-xs text-military-ivory/75 font-body leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Regiments & War Cries */}
        {activeTab === 'regiments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="text-center max-w-2xl mx-auto mb-6">
              <p className="text-xs sm:text-sm text-military-ivory/80 font-body">
                The Indian Army's legendary regiments draw immense spiritual power from their historic battle honours, noble mottos, and blood-stirring war cries that strike fear into the hearts of adversaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {militaryRegimentsInspiration.map((reg, idx) => (
                <div
                  key={idx}
                  className="glass-military p-6 rounded-xl border border-military-gold/25 hover:border-military-gold/60 transition-all shadow-xl group"
                >
                  <div className="flex items-center space-x-2 text-military-gold mb-2">
                    <Flag className="w-4 h-4" />
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-goldLight">
                      Regiment of Valour
                    </span>
                  </div>
                  <h4 className="text-lg font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                    {reg.regiment}
                  </h4>
                  <div className="mt-3 p-3 rounded bg-military-dark/80 border-l-2 border-military-gold space-y-1">
                    <p className="text-xs font-heading font-bold text-military-gold">
                      War Cry: "{reg.warCry}"
                    </p>
                    <p className="text-xs text-military-ivory/70 italic font-body">
                      Motto: {reg.motto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
