import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  GraduationCap, 
  Settings, 
  Trophy, 
  Heart, 
  Lightbulb, 
  Mail, 
  Linkedin,
  Activity,
  Wind,
  ChefHat,
  PenTool,
  Music,
  BookOpen,
  Users,
  Scale,
  Shield,
  BrainCircuit,
  MessageSquare,
  Clock,
  Workflow,
  Search,
  TrendingUp,
  Award,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExecutiveDashboard() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shravan.deshmukh@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSaluteSignature = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF9933', '#FFFFFF', '#138808', '#C9A45C']
    });
  };

  const skillsList = [
    { name: 'Leadership', icon: Award },
    { name: 'Strategic Thinking', icon: BrainCircuit },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Teamwork', icon: Users },
    { name: 'Problem Solving', icon: Settings },
    { name: 'Time Management', icon: Clock },
    { name: 'Adaptability', icon: Workflow },
    { name: 'Research & Analysis', icon: Search },
    { name: 'Marketing', icon: TrendingUp },
  ];

  return (
    <section id="overview" className="relative py-12 bg-[#0E130E] border-t-2 border-b-2 border-military-gold/40 overflow-hidden">
      {/* Background Camouflage & Subtle Grid */}
      <div className="absolute inset-0 bg-tactical-grid bg-[length:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-military-dark/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1: About Me (Left) | Education (Middle) | Skills (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: About Me with Saluting Soldier */}
          <div className="lg:col-span-4 glass-military p-6 sm:p-7 rounded-xl border border-military-gold/35 relative overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Top Header */}
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-4">
                <Star className="w-4 h-4 fill-military-gold text-military-gold" />
                <h3 className="font-military font-bold text-base sm:text-lg text-military-ivory tracking-wider">
                  About Me
                </h3>
              </div>

              {/* Layout: Soldier Silhouette + Content */}
              <div className="flex items-start space-x-4">
                <div className="w-20 h-28 sm:w-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-military-gold/25 bg-military-black/80 flex items-center justify-center">
                  <img
                    src="/soldier-salute.jpg"
                    alt="Saluting Indian Soldier Silhouette"
                    className="w-full h-full object-cover object-center filter contrast-125"
                  />
                </div>
                <div className="text-xs sm:text-[13px] text-military-ivory/90 leading-relaxed font-body">
                  <p>
                    I am Shravan Sanjay Deshmukh, an MBA student with a deep passion for the Indian Armed Forces. I believe in discipline, hard work and continuous learning. My goal is to serve the nation as a dedicated Indian Army Officer and contribute to a stronger, safer and united India.
                  </p>
                </div>
              </div>
            </div>

            {/* Golden Handwritten Signature "Jai Hind" */}
            <div className="pt-4 text-right flex items-center justify-end space-x-2">
              <button
                onClick={handleSaluteSignature}
                className="group inline-flex flex-col items-end focus:outline-none"
                title="Click to salute"
              >
                <span className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-gold-gradient tracking-wide group-hover:scale-105 transition-transform">
                  Jai Hind
                </span>
                <span className="w-16 h-0.5 bg-military-gold/70 rounded-full group-hover:w-20 transition-all" />
              </button>
            </div>
          </div>

          {/* Card 2: Education Vertical Timeline */}
          <div className="lg:col-span-3 glass-military p-6 sm:p-7 rounded-xl border border-military-gold/35 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-5">
                <GraduationCap className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-base sm:text-lg text-military-ivory tracking-wider">
                  Education
                </h3>
              </div>

              {/* Vertical Gold Timeline */}
              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-military-gold/50">
                {/* Node 1: BSc */}
                <div className="relative">
                  <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-military-gold shadow-[0_0_8px_rgba(201,164,92,0.8)]" />
                  <h4 className="font-military font-bold text-xs sm:text-sm text-military-ivory">
                    BSc (Botany)
                  </h4>
                  <p className="text-[11px] text-military-ivory/60 font-heading">
                    Plant Biology & Natural Science
                  </p>
                </div>

                {/* Node 2: PSIR n Humanities */}
                <div className="relative">
                  <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-military-gold shadow-[0_0_8px_rgba(201,164,92,0.8)]" />
                  <h4 className="font-military font-bold text-xs sm:text-sm text-military-ivory">
                    PSIR n Humanities
                  </h4>
                  <p className="text-[11px] text-military-goldLight/80 font-heading">
                    (Opt. Sub) • Statecraft & Diplomacy
                  </p>
                </div>

                {/* Node 3: MBA */}
                <div className="relative">
                  <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  <h4 className="font-military font-bold text-xs sm:text-sm text-military-ivory">
                    MBA
                  </h4>
                  <p className="text-[11px] text-military-gold font-heading font-semibold">
                    (Maj - Mkt, Minor - OSCM)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-military-gold/15 text-[10px] text-military-ivory/50 font-heading tracking-wider uppercase">
              Current Status: Pursuing MBA
            </div>
          </div>

          {/* Card 3: Skills 3x3 Tactical Pill Buttons */}
          <div className="lg:col-span-5 glass-military p-6 sm:p-7 rounded-xl border border-military-gold/35 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-5">
                <Settings className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-base sm:text-lg text-military-ivory tracking-wider">
                  Skills
                </h3>
              </div>

              {/* 3x3 Grid of Tactical Gold Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {skillsList.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="px-2.5 py-2 rounded-lg bg-military-dark/80 border border-military-gold/30 hover:border-military-gold hover:bg-military-gold/15 transition-all flex items-center space-x-2 text-military-ivory group shadow-sm"
                    >
                      <Icon className="w-3.5 h-3.5 text-military-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-heading font-semibold tracking-wide truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-military-gold/15 flex items-center justify-between text-[10px] text-military-ivory/50 font-heading">
              <span className="uppercase tracking-widest text-military-goldLight">
                Officer Like Qualities (OLQ)
              </span>
              <span>Factor I - IV Verified</span>
            </div>
          </div>

        </div>

        {/* ROW 2: Sports | Hobbies | Interests | Contact Me | Amar Jawan Jyoti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-6 items-stretch">
          
          {/* Sports */}
          <div className="lg:col-span-2 glass-military p-5 rounded-xl border border-military-gold/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-4">
                <Trophy className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-sm sm:text-base text-military-ivory">
                  Sports
                </h3>
              </div>
              <div className="space-y-3 text-xs font-heading">
                <div className="flex items-center space-x-2.5 text-military-ivory/90 hover:text-military-gold transition-colors">
                  <Wind className="w-4 h-4 text-military-gold flex-shrink-0" />
                  <span className="font-semibold">Badminton</span>
                </div>
                <div className="flex items-center space-x-2.5 text-military-ivory/90 hover:text-military-gold transition-colors">
                  <Activity className="w-4 h-4 text-military-gold flex-shrink-0" />
                  <span className="font-semibold">Cross Country</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-military-gold/15 text-[10px] text-military-ivory/50 font-heading">
              Endurance & Speed
            </div>
          </div>

          {/* Hobbies */}
          <div className="lg:col-span-2 glass-military p-5 rounded-xl border border-military-gold/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-4">
                <Heart className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-sm sm:text-base text-military-ivory">
                  Hobbies
                </h3>
              </div>
              <div className="space-y-2 text-xs font-heading">
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <ChefHat className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Cooking</span>
                </div>
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <PenTool className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Calligraphy</span>
                </div>
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <Music className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Singing</span>
                </div>
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <BookOpen className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Shayri</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-military-gold/15 text-[10px] text-military-ivory/50 font-heading">
              Cadence & Art
            </div>
          </div>

          {/* Interests */}
          <div className="lg:col-span-3 glass-military p-5 rounded-xl border border-military-gold/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-military-gold mb-4">
                <Lightbulb className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-sm sm:text-base text-military-ivory">
                  Interests
                </h3>
              </div>
              <div className="space-y-2.5 text-xs font-heading">
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <Users className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Socialism</span>
                </div>
                <div className="flex items-start space-x-2 text-military-ivory/90">
                  <Scale className="w-3.5 h-3.5 text-military-gold flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">Political and Philosophical Thoughts</span>
                </div>
                <div className="flex items-center space-x-2 text-military-ivory/90">
                  <Shield className="w-3.5 h-3.5 text-military-gold flex-shrink-0" />
                  <span>Defence</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-military-gold/15 text-[10px] text-military-ivory/50 font-heading">
              Strategic Inquiries
            </div>
          </div>

          {/* Contact Me & Amar Jawan Jyoti Memorial Container */}
          <div className="lg:col-span-5 glass-military p-5 sm:p-6 rounded-xl border border-military-gold/35 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            {/* Contact Details */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center space-x-2 text-military-gold">
                <Mail className="w-4 h-4 text-military-gold" />
                <h3 className="font-military font-bold text-sm sm:text-base text-military-ivory">
                  Contact Me
                </h3>
              </div>
              <p className="text-xs text-military-ivory/70 italic font-body">
                Let's connect for a greater purpose.
              </p>

              {/* Action Links Matching Mockup */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {/* Email Pill */}
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-md bg-military-dark border border-military-gold/40 text-military-gold hover:bg-military-gold hover:text-military-black text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
                  title="Copy email address"
                >
                  <Mail className="w-3 h-3" />
                  <span>shravan.deshmukh@gmail.com</span>
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                </button>

                {/* LinkedIn Pill */}
                <a
                  href="https://linkedin.com/in/shravan-sanjay-deshmukh"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-military-dark border border-military-gold/40 text-military-ivory hover:text-military-gold hover:border-military-gold text-xs font-heading font-bold transition-all flex items-center space-x-1.5 shadow-sm"
                >
                  <Linkedin className="w-3 h-3 text-military-gold" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Amar Jawan Jyoti Memorial Silhouette */}
            <div className="w-20 h-28 flex-shrink-0 flex flex-col items-center justify-center p-1 rounded-lg bg-military-black/80 border border-military-gold/30">
              <img
                src="/amar-jawan-memorial.jpg"
                alt="Amar Jawan Jyoti Memorial Silhouette"
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_10px_rgba(201,164,92,0.3)]"
              />
            </div>
          </div>

        </div>

        {/* Centered Bottom Divider with "Service Before Self" */}
        <div className="mt-10 pt-4 flex items-center justify-center space-x-4">
          <div className="h-[1px] w-20 sm:w-36 bg-gradient-to-r from-transparent via-military-gold to-military-gold/60" />
          <div className="flex items-center space-x-2 text-military-goldLight">
            <span className="text-xs">◆</span>
            <span className="font-serif italic text-sm sm:text-base font-semibold tracking-wider text-military-gold">
              Service Before Self
            </span>
            <span className="text-xs">◆</span>
          </div>
          <div className="h-[1px] w-20 sm:w-36 bg-gradient-to-l from-transparent via-military-gold to-military-gold/60" />
        </div>

      </div>
    </section>
  );
}
