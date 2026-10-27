import React from 'react';
import { Hotel, ExternalLink, Phone, MapPin, Star } from 'lucide-react';

export default function Accommodations() {
  const hotels = [
    {
      name: "Grand Hotel Tremezzo",
      stars: 5,
      description: "Iconic art nouveau hotel facing Bellagio, with floating pools and world-class luxury.",
      location: "Tremezzo (5 min by boat to Lenno)",
      phone: "+39 0344 42491",
      website: "https://www.grandhoteltremezzo.com",
      badge: "Luxury Partner"
    },
    {
      name: "Hotel Bellagio Lago di Como",
      stars: 4,
      description: "Charming boutique hotel located right in the heart of historic Bellagio village.",
      location: "Bellagio (10 min ferry to Lenno Pier)",
      phone: "+39 031 950415",
      website: "https://www.hotelbellagio.it",
      badge: "Recommended"
    },
    {
      name: "Lenno Lakeside Suites & Apartments",
      stars: 4,
      description: "Private lakeside apartments within walking distance of Lenno Pier and Balbianello.",
      location: "Lenno Village (Walking distance)",
      phone: "+39 0344 55123",
      website: "https://www.lakecomo.is",
      badge: "Close to Venue"
    }
  ];

  return (
    <section id="accommodations" className="py-20 px-4 relative bg-[#f7f3ec]/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
            Where To Stay
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide">
            Accommodations
          </h2>
          <p className="mt-3 text-sm text-[#6e645e] font-sans max-w-lg mx-auto">
            We have arranged exclusive rates for our guests at these beautiful partner hotels.
          </p>
          <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#e6d8c3] shadow-md flex flex-col justify-between hover:shadow-lg transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-sans font-semibold px-2.5 py-1 rounded-full bg-[#f4ede2] text-[#5c2028]">
                    {hotel.badge}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#3d2e2b] mb-2 font-medium">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#8c6e2d] mb-3 font-sans">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{hotel.location}</span>
                </div>

                <p className="text-xs text-[#4a3b32] font-sans font-light leading-relaxed mb-6">
                  {hotel.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2e8d9] space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#6e645e]">
                  <Phone className="w-3.5 h-3.5 text-[#c6a258]" />
                  <span>{hotel.phone}</span>
                </div>

                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#f4ede2] hover:bg-[#5c2028] text-[#5c2028] hover:text-white font-sans text-xs font-medium uppercase tracking-wider transition duration-300 flex items-center justify-center gap-1.5"
                >
                  <span>Visit Hotel Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
