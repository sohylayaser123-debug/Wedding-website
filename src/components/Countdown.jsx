import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const weddingDate = new Date('2027-09-12T16:00:00+02:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="my-10 py-6 px-4 bg-gradient-to-r from-[#fbf9f5] via-[#f5ede2] to-[#fbf9f5] rounded-2xl border border-[#d4af37]/25 shadow-sm max-w-2xl mx-auto">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#8c6e2d] text-center mb-6 font-medium">
        Counting Down to Our Special Day
      </p>

      <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/80 rounded-xl shadow-inner border border-[#e6d8c3] flex items-center justify-center mb-1">
            <span className="font-serif text-xl sm:text-3xl text-[#4a2028] font-bold">
              {timeLeft.days}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6e645e]">Days</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/80 rounded-xl shadow-inner border border-[#e6d8c3] flex items-center justify-center mb-1">
            <span className="font-serif text-xl sm:text-3xl text-[#4a2028] font-bold">
              {timeLeft.hours}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6e645e]">Hours</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/80 rounded-xl shadow-inner border border-[#e6d8c3] flex items-center justify-center mb-1">
            <span className="font-serif text-xl sm:text-3xl text-[#4a2028] font-bold">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6e645e]">Minutes</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/80 rounded-xl shadow-inner border border-[#e6d8c3] flex items-center justify-center mb-1">
            <span className="font-serif text-xl sm:text-3xl text-[#4a2028] font-bold">
              {timeLeft.seconds}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6e645e]">Seconds</span>
        </div>
      </div>
    </div>
  );
}
