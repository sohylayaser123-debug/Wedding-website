import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      caption: "Our Engagement on Lake Como"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      caption: "Strolling in Villa Gardens"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      caption: "Sunset Boat Tour"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200",
      caption: "Celebrating Love"
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
      caption: "Bellagio Moments"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
      caption: "Forever & Always"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 relative bg-[#fbf9f5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8c6e2d] font-sans font-medium block mb-2">
            Captured Memories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3d2e2b] font-normal tracking-wide">
            Our Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#e6d8c3] shadow-md transition duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#f3e5ab] mb-1">
                    <Camera className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                  <p className="font-serif text-lg tracking-wide">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#d4af37] transition p-2"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/20"
            />
            <p className="text-white font-serif text-xl mt-4 text-center">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
