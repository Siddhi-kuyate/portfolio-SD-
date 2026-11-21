import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ChevronRight, Sparkles, FileText, X, Check } from 'lucide-react';

export default function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-military-black"
    >
      {/* Background Panoramic Battlefield Scene from Mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-army-scene.jpg"
          alt="Indian Army Mountain Scene and Operations"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
        />
        {/* Soft Vignette and Gradient Blend into lower section */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C100C]/90 via-[#0C100C]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C100C] via-transparent to-[#0C100C]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Hero Text & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-5 pt-4"
          >
            {/* Top Tactical Motto */}
            <div className="flex items-center space-x-2">
              <span className="font-heading text-xs sm:text-sm tracking-[0.28em] text-military-goldLight uppercase font-semibold">
                DREAM • PREPARE • SERVE ⚔
              </span>
            </div>

            {/* Candidate Name in Bold Gold Serif */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-military font-extrabold tracking-tight text-military-ivory drop-shadow-lg leading-[1.05]">
                SHRAVAN SANJAY <br />
                <span className="text-gold-gradient drop-shadow-[0_4px_20px_rgba(201,164,92,0.4)]">
                  DESHMUKH
                </span>
              </h1>

              {/* Sub-Title */}
              <div className="flex items-center space-x-3 pt-2">
                <span className="h-[1px] w-8 sm:w-12 bg-military-gold/80" />
                <h2 className="font-military font-bold text-sm sm:text-base md:text-lg tracking-[0.18em] text-military-goldLight uppercase">
                  Aspiring Indian Army Officer
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-military-gold/80" />
              </div>
            </div>

            {/* Core Mission Quote */}
            <div className="max-w-xl">
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-military-ivory/90 leading-relaxed font-normal">
                “To protect my nation, uphold its values, and serve with courage and integrity.”
              </p>
            </div>

            {/* The Two Distinct Pill Action Buttons Matching Mockup */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Know More Button */}
              <button
                onClick={() => handleScrollTo('about')}
                className="px-6 py-2.5 rounded-full bg-military-gold hover:bg-military-goldLight text-military-black font-heading font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(201,164,92,0.4)] flex items-center space-x-2"
              >
                <Star className="w-4 h-4 fill-military-black text-military-black" />
                <span>Know More</span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-2.5 rounded-full bg-military-dark/80 hover:bg-military-olive/40 border border-military-gold text-military-gold hover:text-military-ivory font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md flex items-center space-x-2"
              >
                <Download className="w-4 h-4 text-military-gold" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Transparent Disclaimer Badge */}
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#0E140E]/80 border border-military-gold/30 text-[11px] font-heading text-military-ivory/60 tracking-wider">
                MBA (Marketing & OSCM) • BSc Botany • PSIR & Humanities • SSB Candidate
              </span>
            </div>
          </motion.div>

          {/* Right Column: In Desktop view the background scene seamlessly presents Shravan in uniform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-end relative h-full min-h-[360px] lg:min-h-[460px]"
          >
            {/* High-detail standalone portrait view with corner borders */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-military-gold/50 bg-[#121812]/90 shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-2">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-military-black">
                <img
                  src="/shravan-army-portrait-clean.jpg"
                  alt="Shravan Sanjay Deshmukh in Indian Army Uniform"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Name Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0B100B]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-military-gold/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-heading uppercase tracking-widest text-military-gold font-bold block">
                      Uniform Simulation
                    </span>
                    <p className="text-xs font-military font-bold text-military-ivory">
                      SHRAVAN S. DESHMUKH
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-military-olive/30 border border-military-gold/30 text-[9px] font-heading uppercase text-military-goldLight font-bold">
                    Aspiring Officer
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#121812] border-2 border-military-gold rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(201,164,92,0.3)] max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-military-gold/30 mb-5">
              <div className="flex items-center space-x-2.5">
                <FileText className="w-5 h-5 text-military-gold" />
                <h3 className="font-military font-bold text-lg text-military-ivory">
                  Official Candidate Resume & Dossier
                </h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg bg-military-dark border border-military-gold/40 text-military-gold hover:bg-military-gold hover:text-military-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Content Preview */}
            <div className="space-y-4 text-xs font-body text-military-ivory/90">
              <div className="bg-military-dark/80 p-4 rounded-xl border border-military-gold/20 flex flex-col sm:flex-row justify-between gap-3">
                <div>
                  <h4 className="font-military font-bold text-base text-military-gold">
                    SHRAVAN SANJAY DESHMUKH
                  </h4>
                  <p className="text-military-goldLight font-heading uppercase tracking-wider text-xs">
                    MBA Student (Marketing & OSCM) | Aspiring Indian Army Officer
                  </p>
                  <p className="text-military-ivory/60 mt-1">
                    Email: shravan.deshmukh@gmail.com • Location: Maharashtra, India
                  </p>
                </div>
                <div className="text-right flex flex-col justify-between">
                  <span className="font-heading font-bold text-xs text-emerald-400">
                    SSB Prepared Candidate
                  </span>
                  <span className="text-[10px] text-military-ivory/50">
                    Target: Indian Armed Forces
                  </span>
                </div>
              </div>

              {/* Career Objective */}
              <div className="p-3.5 rounded-lg bg-[#0e140e] border border-military-gold/15">
                <h5 className="font-heading font-bold text-military-gold uppercase tracking-wider mb-1">
                  Career Objective
                </h5>
                <p className="leading-relaxed">
                  "To protect my nation, uphold its sovereign values, and serve with courage and integrity. Dedicated to undergoing rigorous physical and mental preparation to commission as an Officer in the Indian Army."
                </p>
              </div>

              {/* Education Breakdown */}
              <div className="p-3.5 rounded-lg bg-[#0e140e] border border-military-gold/15 space-y-2">
                <h5 className="font-heading font-bold text-military-gold uppercase tracking-wider">
                  Academic Credentials
                </h5>
                <div className="space-y-1.5 pl-2 border-l border-military-gold/30">
                  <div>
                    <span className="font-bold text-white">MBA (Master of Business Administration)</span> — Pursuing
                    <p className="text-military-ivory/60 text-[11px]">Major: Marketing | Minor: Operations and Supply Chain Management (OSCM)</p>
                  </div>
                  <div>
                    <span className="font-bold text-white">PSIR & Humanities Studies</span>
                    <p className="text-military-ivory/60 text-[11px]">Political Science and International Relations & Optional Humanities</p>
                  </div>
                  <div>
                    <span className="font-bold text-white">BSc (Bachelor of Science)</span> — Graduated
                    <p className="text-military-ivory/60 text-[11px]">Specialization: Botany (Ecology, Plant Biology & Empirical Observation)</p>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="p-3.5 rounded-lg bg-[#0e140e] border border-military-gold/15">
                <h5 className="font-heading font-bold text-military-gold uppercase tracking-wider mb-2">
                  Officer Like Qualities & Skills
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-heading font-semibold">
                  <span>★ Leadership</span>
                  <span>★ Strategic Thinking</span>
                  <span>★ Communication</span>
                  <span>★ Teamwork</span>
                  <span>★ Problem Solving</span>
                  <span>★ Time Management</span>
                  <span>★ Adaptability</span>
                  <span>★ Research & Analysis</span>
                  <span>★ Operations Management</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-military-gold/20 flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-lg bg-military-dark border border-military-gold/30 text-military-ivory/80 text-xs font-heading font-bold uppercase tracking-wider hover:bg-military-dark/90"
              >
                Close
              </button>
              <button
                onClick={handlePrintResume}
                className="px-5 py-2 rounded-lg bg-military-gold text-military-black text-xs font-heading font-black uppercase tracking-wider hover:bg-military-goldLight flex items-center space-x-1.5 shadow-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
