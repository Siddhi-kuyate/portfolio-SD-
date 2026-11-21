import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  Compass, 
  BrainCircuit, 
  Target, 
  Clock, 
  Workflow, 
  TrendingUp, 
  Boxes, 
  Search, 
  Award,
  Zap,
  Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Core Military & Executive', 'Interpersonal & Operational', 'Academic & Analytical'];

  // Map skill name to appropriate tactical icon
  const getSkillIcon = (name) => {
    switch (name) {
      case 'Leadership':
        return Award;
      case 'Discipline':
        return ShieldCheck;
      case 'Strategic Thinking':
        return Compass;
      case 'Decision Making':
        return Target;
      case 'Teamwork':
        return Users;
      case 'Communication':
        return MessageSquare;
      case 'Time Management':
        return Clock;
      case 'Adaptability':
        return Workflow;
      case 'Operations Management':
        return Boxes;
      case 'Marketing Knowledge':
        return TrendingUp;
      case 'Problem Solving':
        return BrainCircuit;
      case 'Research & Analysis':
        return Search;
      default:
        return Zap;
    }
  };

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-military-dark/40 overflow-hidden">
      {/* Background Camo and Glow */}
      <div className="absolute inset-0 camo-overlay opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-military-olive/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <Zap className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Officer Qualities & Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Skills & Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Rigorous Mental Conditioning • Tactical Execution • Analytical Acumen
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-heading text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-military-gold text-military-black shadow-[0_0_15px_rgba(201,164,92,0.4)] scale-105'
                  : 'bg-military-dark/70 text-military-ivory/70 hover:text-military-gold hover:bg-military-dark border border-military-gold/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-military p-6 rounded-xl border border-military-gold/25 hover:border-military-gold/60 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-military-dark border border-military-gold/40 flex items-center justify-center text-military-gold group-hover:scale-110 group-hover:bg-military-gold group-hover:text-military-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-heading font-semibold tracking-wider text-military-goldLight bg-military-olive/20 px-2 py-0.5 rounded border border-military-gold/20 uppercase">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-military font-bold text-military-ivory group-hover:text-military-gold transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-military-ivory/75 font-body leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar & Proficiency Score */}
                <div className="mt-5 pt-4 border-t border-military-gold/15">
                  <div className="flex items-center justify-between text-xs font-heading font-bold mb-1.5">
                    <span className="text-military-ivory/60 uppercase tracking-widest text-[10px]">Proficiency Metric</span>
                    <span className="text-military-gold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-military-black/80 rounded-full overflow-hidden border border-military-gold/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-military-olive via-military-gold to-military-goldLight rounded-full relative"
                    >
                      <span className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 animate-pulse" />
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Officer Qualities (OLQ) Note */}
        <div className="mt-14 p-5 rounded-lg bg-military-dark/80 border border-military-gold/30 text-center max-w-2xl mx-auto flex items-center justify-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-military-gold flex-shrink-0" />
          <p className="text-xs text-military-ivory/80 font-heading tracking-wide">
            Cultivated in alignment with standard <strong>Officer Like Qualities (OLQs)</strong>: Factor I (Planning & Organizing), Factor II (Social Adjustment), Factor III (Social Effectiveness), Factor IV (Dynamic Qualities).
          </p>
        </div>

      </div>
    </section>
  );
}
