import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="warum-wir" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              UNSER QUALITÄTSVERSPRECHEN
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Mehr als nur eine Website.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Wir verbinden Design, Technologie und strategisches Denken, um Websites zu entwickeln, die nicht nur gut aussehen, sondern funktionieren.
          </p>
        </div>

        {/* 2x2 Grid separated by hairlines with hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#0A0A0B]/15">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              id={`why-block-${idx + 1}`}
              className="p-8 sm:p-12 border-r border-b border-[#0A0A0B]/15 bg-transparent hover:bg-white hover:border-[#0E7490]/60 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                {/* Thin monoline typographic symbol / glyph that shifts 2px on hover */}
                <span className="font-mono text-2xl sm:text-3xl text-[#0A0A0B] group-hover:text-[#0E7490] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 font-light">
                  {item.symbol}
                </span>
                <span className="font-mono text-xs text-[#686759] tracking-widest uppercase">
                  {item.glyph} / 04
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B] tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="font-body text-base font-semibold text-[#0A0A0B]/80 mb-2">
                {item.text}
              </p>

              <p className="font-body text-sm text-[#686759] leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
