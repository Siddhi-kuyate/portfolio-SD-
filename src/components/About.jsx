import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Compass, BookOpen, Target, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, chetwodeMotto } = portfolioData;

  const highlights = [
    {
      title: "Leadership & Command Morale",
      desc: "Demonstrated ability to inspire peers, coordinate multidisciplinary initiatives, and maintain calm situational focus under pressure.",
      icon: Award
    },
    {
      title: "Discipline & High Physical Grit",
      desc: "A steadfast daily regime anchored in early-morning endurance runs, tactical stamina, punctuality, and unwavering personal integrity.",
      icon: Target
    },
    {
      title: "Academic Interdisciplinary Depth",
      desc: "Combining botanical science observational rigor with MBA business strategy and PSIR geopolitical insight.",
      icon: BookOpen
    },
    {
      title: "Service Above Self Ethos",
      desc: "Driven by the eternal philosophy of Nishkama Karma—placing institutional honor and national sovereignty before individual comfort.",
      icon: Shield
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-military-dark/50 overflow-hidden">
      {/* Background Camo & Ambient Grid */}
      <div className="absolute inset-0 camo-overlay opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-military-olive/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-military-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <User className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Personal Dossier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Discipline • Leadership • Strategic Insight • National Devotion
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Military-Inspired Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* The Dossier Card */}
            <div className="glass-military p-6 sm:p-8 rounded-xl border border-military-gold/30 relative overflow-hidden shadow-2xl">
              {/* Tactical reticles */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-military-gold/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between pb-5 border-b border-military-gold/20">
                <div>
                  <span className="text-[10px] font-heading tracking-[0.2em] text-military-gold uppercase block font-bold">
                    Official Candidate File
                  </span>
                  <h3 className="text-xl font-military font-bold text-military-ivory">
                    Shravan S. Deshmukh
                  </h3>
                </div>
                <div className="w-10 h-10 rounded bg-military-dark border border-military-gold/40 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-military-gold" />
                </div>
              </div>

              {/* Attributes Matrix */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-military-gold/15 text-xs font-heading">
                <div>
                  <span className="text-military-ivory/50 uppercase tracking-widest block text-[10px]">Current Status</span>
                  <span className="text-military-gold font-semibold tracking-wide">MBA Scholar (Marketing & OSCM)</span>
                </div>
                <div>
                  <span className="text-military-ivory/50 uppercase tracking-widest block text-[10px]">Aspiration</span>
                  <span className="text-white font-semibold tracking-wide">Indian Army Officer</span>
                </div>
                <div>
                  <span className="text-military-ivory/50 uppercase tracking-widest block text-[10px]">Science Foundation</span>
                  <span className="text-military-ivory/90 font-semibold tracking-wide">BSc Botany Graduate</span>
                </div>
                <div>
                  <span className="text-military-ivory/50 uppercase tracking-widest block text-[10px]">Humanities Foundation</span>
                  <span className="text-military-ivory/90 font-semibold tracking-wide">PSIR & Political Thought</span>
                </div>
              </div>

              {/* Core Values Badge List */}
              <div className="pt-4">
                <span className="text-[10px] font-heading tracking-[0.2em] text-military-gold uppercase font-bold block mb-3">
                  Core Tactical Values
                </span>
                <div className="space-y-2">
                  {personal.values.map((v, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-military-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-military-goldLight font-heading tracking-wide uppercase mr-1.5">
                          {v.word}:
                        </strong>
                        <span className="text-military-ivory/70">{v.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chetwode Hall Motto Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-military-dark via-[#152018] to-military-black border border-military-gold/40 relative">
              <span className="text-[10px] font-heading tracking-[0.25em] text-military-saffron uppercase font-bold block mb-2">
                Cadet Creed • {chetwodeMotto.source}
              </span>
              <div className="space-y-1 text-xs sm:text-sm text-military-ivory/90 italic font-body">
                {chetwodeMotto.lines.map((line, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-right text-[11px] font-heading font-bold text-military-gold mt-3 tracking-widest uppercase">
                — {chetwodeMotto.author}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Leadership Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* The Mandatory User Text Block */}
            <div className="glass-military p-6 sm:p-8 rounded-xl border border-military-gold/30 space-y-5">
              <div className="flex items-center space-x-2 border-b border-military-gold/20 pb-3">
                <Compass className="w-4 h-4 text-military-gold" />
                <span className="font-heading text-xs tracking-widest text-military-gold font-bold uppercase">
                  Candidate Personal Statement
                </span>
              </div>

              {/* Exact words specified in prompt */}
              <div className="space-y-4 text-sm sm:text-base text-military-ivory/90 leading-relaxed font-body">
                <p className="font-medium text-military-ivory border-l-2 border-military-gold pl-3">
                  "I am Shravan Sanjay Deshmukh, an MBA student with a strong passion for leadership, discipline, national service, and personal development."
                </p>
                <p>
                  "My academic journey includes a Bachelor of Science in Botany, studies in Political Science and Humanities, and an MBA specialization in Marketing with a minor in Operations and Supply Chain Management."
                </p>
                <p className="text-military-goldLight/95 font-medium">
                  "I believe in continuous learning, teamwork, determination, and the importance of serving society. My ambition is to pursue a career as an Indian Army Officer and contribute towards the safety, unity, and progress of our nation."
                </p>
              </div>
            </div>

            {/* Leadership & Discipline Pillars Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-heading tracking-[0.2em] text-military-gold uppercase font-bold">
                Discipline & Strategic Attributes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-military-dark/70 border border-military-gold/20 hover:border-military-gold/50 transition-all group"
                    >
                      <div className="w-8 h-8 rounded bg-military-olive/30 border border-military-gold/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-military-gold" />
                      </div>
                      <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-military-ivory group-hover:text-military-gold transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-xs text-military-ivory/70 mt-1 font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Education & Background Snapshot */}
            <div className="p-4 rounded-lg bg-military-olive/20 border border-military-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-heading font-bold text-military-gold uppercase tracking-wider">
                  Academic & Professional Trajectory
                </p>
                <p className="text-xs text-military-ivory/80 mt-0.5">
                  Botany (BSc) → Political Science & Humanities → MBA (Marketing & OSCM)
                </p>
              </div>
              <a
                href="#education"
                className="px-4 py-2 bg-military-dark hover:bg-military-gold hover:text-military-black border border-military-gold/50 rounded text-xs font-heading font-bold tracking-widest uppercase transition-colors flex items-center space-x-1.5 flex-shrink-0"
              >
                <span>View Timeline</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
