import React from 'react';
import { TICKER_ITEMS } from '../data/content';

interface TrustTickerProps {
  motionPaused: boolean;
}

export const TrustTicker: React.FC<TrustTickerProps> = ({ motionPaused }) => {
  return (
    <section className="py-12 border-b border-[#0A0A0B]/10 overflow-hidden relative bg-[#F5F3EE]">
      {/* Intro line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#686759]">
          Digitale Lösungen für Unternehmen aus unterschiedlichen Branchen
        </p>
      </div>

      {/* Infinite Horizontal Ticker Container with edge gradient masks */}
      <div className="relative w-full overflow-hidden group">
        {/* Left and Right bone fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F5F3EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F5F3EE] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-center whitespace-nowrap ${
            motionPaused ? '' : 'group-hover:[animation-play-state:paused]'
          }`}
          style={{
            animation: motionPaused ? 'none' : 'ticker-slide 40s linear infinite',
          }}
        >
          {/* Double array for seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={`${item}-${idx}`} className="inline-flex items-center mx-4 sm:mx-6">
              <span className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0B]/75 hover:text-[#0E7490] transition-colors cursor-default tracking-tight">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0E7490] ml-8 sm:ml-12" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
