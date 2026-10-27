import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Mail, Menu, X, Sparkles } from 'lucide-react';

import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Accommodations from './components/Accommodations';
import GiftRegistry from './components/GiftRegistry';
import RSVPModal from './components/RSVPModal';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venue', href: '#venue' },
    { name: 'Dress Code', href: '#dresscode' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Stay', href: '#accommodations' },
    { name: 'Gift Registry', href: '#registry' },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4a3b32] font-sans antialiased relative selection:bg-[#d4af37]/20">
      {/* Interactive Envelope Intro Modal */}
      {showEnvelope && (
        <Envelope onOpen={() => setShowEnvelope(false)} />
      )}

      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#d4af37]/20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          {/* Logo / Couple Initials */}
          <a href="#" className="font-serif text-xl sm:text-2xl tracking-wider text-[#3d2e2b] font-medium flex items-center gap-2">
            <span>A & M</span>
            <span className="hidden sm:inline-block text-xs font-sans uppercase tracking-widest text-[#8c6e2d] font-normal border-l border-[#d4af37]/40 pl-2 ml-1">
              Lake Como
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#6e645e] hover:text-[#5c2028] transition duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsRSVPOpen(true)}
              className="ml-2 px-5 py-2 rounded-full bg-[#5c2028] hover:bg-[#702932] text-white text-xs uppercase tracking-widest font-medium transition duration-200 shadow-sm"
            >
              RSVP
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsRSVPOpen(true)}
              className="px-4 py-1.5 rounded-full bg-[#5c2028] text-white text-xs uppercase tracking-wider font-medium"
            >
              RSVP
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#3d2e2b] hover:text-[#5c2028]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#f7f3ec] border-b border-[#e6d8c3] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs uppercase tracking-widest text-[#4a3b32] hover:text-[#5c2028] py-1 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Page Content */}
      <main className="relative">
        <Hero onOpenRSVP={() => setIsRSVPOpen(true)} />
        <Schedule />
        <Venue />
        <DressCode />
        <Gallery />
        <Accommodations />
        <GiftRegistry />
      </main>

      {/* Floating Action RSVP Button (Visible when scrolled) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsRSVPOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c6a258] to-[#8c6e2d] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-xl hover:scale-105 active:scale-95 transition duration-300 border border-white/40"
        >
          <Mail className="w-4 h-4" />
          <span>RSVP Now</span>
        </button>
      </div>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#2c2221] text-[#f2e8d9] text-center border-t border-[#d4af37]/30">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-4">
            <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl tracking-wide mb-2">Alessia & Matteo</h2>
          <p className="font-sans text-xs uppercase tracking-widest text-[#c6a258] mb-6">
            12 September 2027 · Lake Como, Italy
          </p>
          <p className="text-[11px] font-sans text-[#a39588] tracking-wider">
            Designed with love for our friends and family.
          </p>
        </div>
      </footer>
    </div>
  );
}
