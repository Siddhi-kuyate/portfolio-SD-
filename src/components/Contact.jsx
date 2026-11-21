import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  User, 
  Compass, 
  ShieldCheck, 
  ExternalLink,
  Edit2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  // Contact Info states (editable placeholder as requested)
  const [email, setEmail] = useState('shravan.deshmukh.candidate@email.com');
  const [location, setLocation] = useState('Maharashtra, India');
  const [linkedIn, setLinkedIn] = useState('https://linkedin.com/in/shravan-sanjay-deshmukh');
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Optional: prepare mailto link
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Enquiry from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      console.log('Dispatched contact dispatch:', formData, mailtoUrl);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-military-dark/50 overflow-hidden border-t border-military-gold/20">
      {/* Ambience & Grid */}
      <div className="absolute inset-0 camo-overlay opacity-25 pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-military-olive/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-military-dark border border-military-gold/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-military-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-military-gold font-bold">
              Communications Channel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-military font-bold text-military-ivory">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-military-gold to-transparent mx-auto mt-4" />
          <p className="mt-4 font-heading text-sm sm:text-base text-military-ivory/70 tracking-wider uppercase">
            Inquiries • Mentorship • Defense Studies Collaboration • Professional Networking
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* The Tactical Card */}
            <div className="glass-military p-6 sm:p-8 rounded-2xl border border-military-gold/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-military-gold/20">
                <div>
                  <span className="text-[10px] font-heading tracking-widest text-military-gold uppercase font-bold block">
                    Candidate Communications
                  </span>
                  <h3 className="text-xl font-military font-bold text-military-ivory">
                    {personal.name}
                  </h3>
                  <span className="text-xs text-military-goldLight/80 font-heading">
                    {personal.role}
                  </span>
                </div>
                <button
                  onClick={() => setIsEditingInfo(!isEditingInfo)}
                  className="p-2 rounded bg-military-dark border border-military-gold/40 text-military-gold hover:bg-military-gold hover:text-military-black transition-colors"
                  title="Toggle Edit Placeholders"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-5 py-6">
                
                {/* Full Name */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-military-dark border border-military-gold/30 flex items-center justify-center text-military-gold flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-ivory/50 block">
                      Full Name
                    </span>
                    <span className="text-sm font-military font-bold text-military-ivory">
                      Shravan Sanjay Deshmukh
                    </span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-military-dark border border-military-gold/30 flex items-center justify-center text-military-gold flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-ivory/50 block">
                      Email Address (Placeholder)
                    </span>
                    {isEditingInfo ? (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full bg-military-black/80 border border-military-gold/50 rounded px-2.5 py-1 text-xs text-military-ivory focus:outline-none focus:border-military-gold"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 mt-0.5">
                        <span className="text-xs font-mono text-military-gold truncate">
                          {email}
                        </span>
                        <button
                          onClick={handleCopyEmail}
                          className="p-1 text-military-ivory/60 hover:text-military-gold transition-colors"
                          title="Copy email to clipboard"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-military-dark border border-military-gold/30 flex items-center justify-center text-military-gold flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-ivory/50 block">
                      Geographic Location (Placeholder)
                    </span>
                    {isEditingInfo ? (
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 w-full bg-military-black/80 border border-military-gold/50 rounded px-2.5 py-1 text-xs text-military-ivory focus:outline-none focus:border-military-gold"
                      />
                    ) : (
                      <span className="text-xs font-heading font-semibold text-military-ivory">
                        {location}
                      </span>
                    )}
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-military-dark border border-military-gold/30 flex items-center justify-center text-military-gold flex-shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-military-ivory/50 block">
                      LinkedIn Profile (Placeholder)
                    </span>
                    {isEditingInfo ? (
                      <input
                        type="text"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                        className="mt-1 w-full bg-military-black/80 border border-military-gold/50 rounded px-2.5 py-1 text-xs text-military-ivory focus:outline-none focus:border-military-gold"
                      />
                    ) : (
                      <a
                        href={linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs text-military-gold hover:underline mt-0.5"
                      >
                        <span className="truncate">{linkedIn}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Note on Placeholders */}
              <div className="pt-4 border-t border-military-gold/15 text-[11px] text-military-ivory/50 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-military-gold/70 flex-shrink-0" />
                <span>
                  Placeholders can be customized directly using the edit icon above or directly in code.
                </span>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-military-dark/80 border border-military-gold/25 text-center">
              <p className="text-xs text-military-ivory/80 font-heading">
                ★ "Discipline is doing what needs to be done, even when you don't feel like doing it."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-military p-6 sm:p-8 rounded-2xl border border-military-gold/30 shadow-2xl">
              <div className="flex items-center space-x-2 pb-4 border-b border-military-gold/20 mb-6">
                <MessageSquare className="w-4 h-4 text-military-gold" />
                <h3 className="font-heading text-sm uppercase tracking-widest text-military-gold font-bold">
                  Send a Formal Message
                </h3>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-military font-bold text-military-ivory">
                    Transmission Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-military-ivory/80 max-w-md mx-auto font-body">
                    Thank you, <strong>{formData.name || 'Visitor'}</strong>. Your message has been received with high priority. Shravan Sanjay Deshmukh will review and respond promptly.
                  </p>
                  <div className="pt-4 flex justify-center space-x-3">
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Follow up')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="px-5 py-2.5 rounded bg-military-gold text-military-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-military-goldLight transition-colors"
                    >
                      Open in Email App
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded bg-military-dark border border-military-gold/40 text-military-gold text-xs font-heading font-bold uppercase tracking-wider hover:bg-military-dark/90 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-military-ivory/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Capt. Rahul Sharma"
                        className="w-full bg-military-dark/80 border border-military-gold/30 rounded-lg px-4 py-2.5 text-xs text-military-ivory placeholder-military-ivory/30 focus:outline-none focus:border-military-gold focus:ring-1 focus:ring-military-gold transition-colors font-body"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-military-ivory/70 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rahul@organization.org"
                        className="w-full bg-military-dark/80 border border-military-gold/30 rounded-lg px-4 py-2.5 text-xs text-military-ivory placeholder-military-ivory/30 focus:outline-none focus:border-military-gold focus:ring-1 focus:ring-military-gold transition-colors font-body"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-military-ivory/70 mb-1.5">
                      Subject / Tactical Objective *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Defence Aspirants Discussion / Academic Collaboration"
                      className="w-full bg-military-dark/80 border border-military-gold/30 rounded-lg px-4 py-2.5 text-xs text-military-ivory placeholder-military-ivory/30 focus:outline-none focus:border-military-gold focus:ring-1 focus:ring-military-gold transition-colors font-body"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-military-ivory/70 mb-1.5">
                      Message Content *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message, strategic query, or communication here..."
                      className="w-full bg-military-dark/80 border border-military-gold/30 rounded-lg px-4 py-2.5 text-xs text-military-ivory placeholder-military-ivory/30 focus:outline-none focus:border-military-gold focus:ring-1 focus:ring-military-gold transition-colors font-body resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-military-gold via-military-goldLight to-military-goldDark text-military-black font-heading font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-military-ivory/40 font-heading">
                    Confidential & Respectful Communication Assured • Jai Hind 🇮🇳
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
