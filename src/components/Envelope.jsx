import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c2221] bg-opacity-95 backdrop-blur-md px-4 overflow-hidden">
      {/* Subtle Pearl Sparkle Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[1.4/1] rounded-2xl shadow-2xl bg-gradient-to-br from-[#fbf9f5] via-[#f2e8d9] to-[#e6d8c3] p-1 border border-[#d4af37]/30 flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Ginkgo Leaf Decorative Pattern / Border Overlay */}
            <div className="absolute inset-2 border border-[#c6a258]/30 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-[#c6a258]/20 rounded-lg pointer-events-none" />

            {/* Mother of Pearl Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-60 animate-shimmer pointer-events-none" />

            {/* Envelope Header / Top Flap Visual */}
            <div className="relative z-10 px-6 py-8 flex flex-col items-center max-w-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium mb-3">
                You are cordially invited
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#3d2e2b] font-normal tracking-wide mb-2">
                Alessia & Matteo
              </h1>

              <p className="text-xs tracking-widest text-[#7a6a5d] font-sans uppercase mb-8">
                Lake Como · September 12, 2027
              </p>

              {/* Interactive Golden Wax Seal */}
              <div className="relative group cursor-pointer" onClick={handleOpen} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {/* Glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse" />

                {/* Wax Seal Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37] via-[#c6a258] to-[#8c6e2d] shadow-lg border-2 border-[#fff3cc]/50 flex flex-col items-center justify-center text-white"
                  aria-label="Open Invitation"
                >
                  <div className="absolute inset-1 rounded-full border border-yellow-200/40" />
                  <Heart className="w-6 h-6 text-[#4a2028] fill-[#4a2028] drop-shadow-sm mb-0.5" />
                  <span className="font-serif text-[10px] tracking-widest text-[#2c1d11] font-semibold uppercase">
                    OPEN
                  </span>
                </motion.button>
              </div>

              <motion.p
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                className="mt-6 text-xs text-[#8c6e2d] font-sans tracking-wider flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c6a258]" />
                Click the wax seal to open invitation
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white font-serif text-2xl tracking-widest flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6 text-[#d4af37] animate-spin" />
            <span>Unfolding Invitation...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
