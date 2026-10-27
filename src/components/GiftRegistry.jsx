import React, { useState } from 'react';
import { Gift, Copy, Check, Heart } from 'lucide-react';

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const ibanNumber = "IT89 3704 0022 0000 0123 4567 890";

  const handleCopy = () => {
    navigator.clipboard.writeText(ibanNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="registry" className="py-20 px-4 relative bg-[#fbf9f5]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-[#f4ede2] border border-[#c6a258]/30 flex items-center justify-center mx-auto mb-6">
          <Gift className="w-6 h-6 text-[#8c6e2d]" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
          Honeymoon Fund
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide mb-4">
          Gift Registry
        </h2>

        <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mb-8 rounded-full" />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e6d8c3] shadow-lg">
          <p className="font-serif italic text-lg sm:text-xl text-[#4a3b32] leading-relaxed mb-6">
            "Your presence at our wedding is the greatest gift of all. However, should you wish to honour us with a gift, a contribution towards our honeymoon trip would be warmly appreciated."
          </p>

          {/* IBAN Card */}
          <div className="mt-8 p-6 rounded-2xl bg-[#f7f3ec] border border-[#e6d8c3] max-w-lg mx-auto">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#8c6e2d] block mb-2">
              Bank Transfer Details (IBAN)
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#d4af37]/30">
              <span className="font-mono text-sm sm:text-base font-medium text-[#3d2e2b] tracking-wider select-all">
                {ibanNumber}
              </span>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#5c2028] hover:bg-[#702932] text-white font-sans text-xs uppercase tracking-wider font-medium transition duration-200 flex items-center justify-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy IBAN</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#6e645e] font-sans mt-3">
              Account Name: Alessia Rossi & Matteo Bianchi · Swift/BIC: UNCRITM123
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
