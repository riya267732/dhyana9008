
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      <div className="flex flex-col items-center">
        <span className="text-5xl md:text-8xl font-black text-brand-black tabular-nums">{format(timeLeft.h)}</span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40">HOURS</span>
      </div>
      <span className="text-5xl md:text-8xl font-black text-brand-orange animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl md:text-8xl font-black text-brand-black tabular-nums">{format(timeLeft.m)}</span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40">MINUTES</span>
      </div>
      <span className="text-5xl md:text-8xl font-black text-brand-orange animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl md:text-8xl font-black text-brand-black tabular-nums">{format(timeLeft.s)}</span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40">SECONDS</span>
      </div>
    </div>
  );
};

export default Countdown;
