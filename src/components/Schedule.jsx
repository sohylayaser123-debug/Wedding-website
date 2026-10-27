import React from 'react';
import { Clock, MapPin, Sparkles, GlassWater, HeartHandshake, Music } from 'lucide-react';

export default function Schedule() {
  const events = [
    {
      day: "Saturday, 11 September 2027",
      title: "Welcome Sunset Cocktail",
      time: "18:00 – 21:00",
      location: "Lakeside Terrace · Hotel Bellagio",
      description: "Join us for a relaxed welcome drink, light aperitivo, and stunning sunset views over Lake Como as we kick off the weekend.",
      icon: GlassWater,
      badge: "Welcome Event"
    },
    {
      day: "Sunday, 12 September 2027",
      title: "Wedding Ceremony",
      time: "16:00 – 17:30",
      location: "Gardens of Villa del Balbianello",
      description: "Exchange of vows under the arches with panoramic lake views. Please arrive 30 minutes prior.",
      icon: HeartHandshake,
      badge: "Main Ceremony"
    },
    {
      day: "Sunday, 12 September 2027",
      title: "Cocktails & Dinner Reception",
      time: "18:00 – 23:30",
      location: "Grand Salon & Terrace · Villa del Balbianello",
      description: "An evening of fine Italian dining, celebratory toasts, live music, and dancing under the stars.",
      icon: Music,
      badge: "Celebration"
    }
  ];

  return (
    <section id="schedule" className="py-20 px-4 relative bg-[#f7f3ec]/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
            Timeline of Events
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide">
            Schedule & Program
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative border-l-2 border-[#d4af37]/30 ml-4 sm:ml-32 space-y-12">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#fbf9f5] border-2 border-[#c6a258] shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#5c2028] group-hover:border-white transition duration-300">
                  <IconComponent className="w-4 h-4 text-[#8c6e2d] group-hover:text-white transition duration-300" />
                </div>

                {/* Day Header on Large Screen */}
                <div className="sm:absolute sm:-left-36 sm:top-1.5 sm:w-28 sm:text-right mb-2 sm:mb-0">
                  <span className="text-xs font-sans font-semibold tracking-wider text-[#8c6e2d] uppercase block">
                    {event.day.split(',')[0]}
                  </span>
                  <span className="text-[11px] text-[#6e645e] block font-sans">
                    {event.day.split(',')[1]}
                  </span>
                </div>

                {/* Event Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#e6d8c3] hover:shadow-md transition duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#f4ede2] text-[#5c2028]">
                      <Sparkles className="w-3 h-3 text-[#c6a258]" />
                      {event.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#8c6e2d]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#3d2e2b] mb-2 font-medium">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#6e645e] mb-3 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#c6a258] shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-sm text-[#4a3b32] leading-relaxed font-sans font-light">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
