import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart } from 'lucide-react';
import Countdown from './Countdown';

export default function Hero({ onOpenRSVP }) {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Pearl Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#f3e5ab]/30 via-[#e6d8c3]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Container with Card Outline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl w-full mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-14 shadow-xl border border-[#d4af37]/20"
      >
        {/* Ginkgo Leaf Motif / Top Accent */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f4ede2] to-white border border-[#c6a258]/30 flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-[#8c6e2d] fill-[#8c6e2d]/20" />
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-3"
        >
          Save The Date
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-5xl sm:text-7xl font-normal text-[#3d2e2b] tracking-wide mb-4"
        >
          Alessia <span className="text-[#c6a258] font-light">&</span> Matteo
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-[#6e645e] font-sans font-light mb-8"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#c6a258]" />
            <span>12 September 2027</span>
          </div>
          <span className="hidden sm:inline text-[#c6a258]">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c6a258]" />
            <span>Lake Como, Italy</span>
          </div>
        </motion.div>

        {/* Romantic Invitation Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mx-auto my-8 p-6 rounded-2xl bg-[#fbf9f5]/80 border border-[#e6d8c3]/60 shadow-inner"
        >
          <p className="font-serif italic text-lg sm:text-xl text-[#4a3b32] leading-relaxed mb-4">
            "Together with their families, Alessia and Matteo request the honour of your presence at the celebration of their marriage on the shores of Lake Como, Italy."
          </p>
          <p className="font-sans text-xs uppercase tracking-widest text-[#8c6e2d]">
            Villa del Balbianello · Lenno
          </p>
        </motion.div>

        {/* Live Countdown */}
        <Countdown />

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenRSVP}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5c2028] via-[#702932] to-[#5c2028] text-white font-sans text-xs uppercase tracking-[0.2em] font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Confirm Attendance (RSVP)
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
