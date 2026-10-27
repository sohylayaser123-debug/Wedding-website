import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function Venue() {
  const mapUrl = "https://maps.google.com/?q=Villa+del+Balbianello+Lenno+Lake+Como+Italy";

  return (
    <section id="venue" className="py-20 px-4 relative bg-[#fbf9f5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
            The Location
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide">
            Venue & Destination
          </h2>
          <p className="mt-3 text-sm text-[#6e645e] font-sans">
            Villa del Balbianello · Via Miriam Liebling 1, 22010 Lenno CO, Italy
          </p>
          <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Venue Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e6d8c3] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f4ede2] to-transparent rounded-bl-full pointer-events-none opacity-60" />

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c6e2d] mb-4">
                <Compass className="w-4 h-4 text-[#c6a258]" />
                <span>Historic Lakeside Estate</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#3d2e2b] font-normal mb-4">
                Villa del Balbianello
              </h3>

              <p className="text-sm text-[#4a3b32] leading-relaxed font-sans font-light mb-6">
                Located on the tip of the steep wooded Dosso d'Avedi\u00f2 promontory leading into Lake Como, Villa del Balbianello offers breathtaking views of the pristine waters and terraced gardens. Accessible exclusively by private boat from Lenno pier.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#f2e8d9]">
                <div className="flex items-start gap-3 text-xs text-[#6e645e]">
                  <MapPin className="w-4 h-4 text-[#c6a258] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#3d2e2b] block">Address:</span>
                    <span>Via Miriam Liebling 1, 22010 Lenno CO, Italy</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#6e645e]">
                  <Navigation className="w-4 h-4 text-[#c6a258] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#3d2e2b] block">Guest Arrival Boat Transport:</span>
                    <span>Complimentary private water taxis will depart from Lenno Pier continuously between 15:15 and 15:45.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f4ede2] hover:bg-[#5c2028] text-[#5c2028] hover:text-white font-sans text-xs uppercase tracking-widest font-medium transition duration-300 shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#f2e8d9] via-[#e6d8c3] to-[#d4af37]/20 rounded-3xl p-8 border border-[#d4af37]/30 shadow-md flex flex-col items-center justify-center text-center relative min-h-[320px] overflow-hidden">
            {/* Map Background Pattern / Mock Map */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8c6e2d_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border-2 border-[#c6a258] flex items-center justify-center mb-4 animate-bounce">
                <MapPin className="w-8 h-8 text-[#5c2028]" />
              </div>

              <h4 className="font-serif text-2xl text-[#3d2e2b] font-medium mb-2">
                Lake Como, Italy
              </h4>

              <p className="text-xs text-[#6e645e] max-w-xs font-sans mb-6">
                45°57'54" N · 9°12'09" E<br/>
                Lombardy Region, Northern Italy
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#5c2028] text-white font-sans text-xs uppercase tracking-widest font-medium shadow-md hover:scale-105 transition duration-300 flex items-center gap-2"
              >
                <span>View Map & Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
