import React from 'react';
import { Sparkles, Shirt } from 'lucide-react';

export default function DressCode() {
  const colorPalette = [
    { name: "Soft Ivory", hex: "#f5ede2" },
    { name: "Champagne Gold", hex: "#dfc888" },
    { name: "Pearl Blush", hex: "#e8c5c8" },
    { name: "Linen Beige", hex: "#d8c3b0" },
    { name: "Sage Olive", hex: "#a3b18a" },
  ];

  return (
    <section id="dresscode" className="py-20 px-4 relative bg-[#f7f3ec]/80">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
          Attire Inspiration
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide">
          Dress Code
        </h2>
        <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 mb-12 rounded-full" />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e6d8c3] shadow-lg max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#f4ede2] border border-[#c6a258]/30 flex items-center justify-center mx-auto mb-6">
            <Shirt className="w-6 h-6 text-[#5c2028]" />
          </div>

          <h3 className="font-serif text-3xl text-[#3d2e2b] mb-4">
            Summer Formal & Cocktail
          </h3>

          <p className="font-serif italic text-lg text-[#5c2028] mb-6">
            "Dress beautifully, feel comfortable, and enjoy the Italian summer elegance."
          </p>

          <p className="text-sm text-[#4a3b32] font-sans leading-relaxed mb-8 max-w-lg mx-auto font-light">
            We kindly suggest elegant cocktail dresses, floor-length gowns, suits in lightweight wool or linen, and formal attire inspired by the romantic lakeside atmosphere of Lake Como.
          </p>

          <div className="pt-6 border-t border-[#f2e8d9]">
            <span className="text-xs font-sans uppercase tracking-widest text-[#8c6e2d] block mb-4 font-semibold">
              Suggested Color Palette
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {colorPalette.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md transition transform hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-[11px] text-[#6e645e] font-sans">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
