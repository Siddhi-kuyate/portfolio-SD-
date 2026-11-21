import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveDashboard from './components/ExecutiveDashboard';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Sports from './components/Sports';
import Hobbies from './components/Hobbies';
import Interests from './components/Interests';
import ArmyHeritage from './components/ArmyHeritage';
import Motivation from './components/Motivation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-military-black text-military-ivory selection:bg-military-gold selection:text-military-black font-body">
      {/* Sticky Tactical Header with Indian Army Emblem & Nation First */}
      <Navbar />

      <main>
        {/* Hero Section – Matching Uploaded Design Layout & Imagery */}
        <Hero />

        {/* Executive Command Dashboard – Exact 2-Row Layout from Reference Mockup */}
        <ExecutiveDashboard />

        {/* Deep Dive: Candidate Dossier & Chetwode Motto */}
        <About />

        {/* Deep Dive: Education Milestones Timeline */}
        <Education />

        {/* Deep Dive: Comprehensive Skills & OLQ Assessment */}
        <Skills />

        {/* Deep Dive: Sports & Physical Stamina */}
        <div id="sports-hobbies">
          <Sports />
          <Hobbies />
        </div>

        {/* Deep Dive: Intellectual & Geopolitical Interests */}
        <Interests />

        {/* Deep Dive: Army Theory, Regimental War Cries & Mountain Warfare Strategy */}
        <ArmyHeritage />

        {/* Full-width Panoramic Motivation with Interactive Jai Hind Salute */}
        <Motivation />

        {/* Comprehensive Communications & Transmission Terminal */}
        <Contact />
      </main>

      {/* Military-Inspired Footer */}
      <Footer />
    </div>
  );
}
