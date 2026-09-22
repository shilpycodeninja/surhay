import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              TRANSPARENZ & ANTWORTEN
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Häufige Fragen, ehrliche Antworten.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759]">
            Kein Kleingedrucktes, keine versteckten Kosten. Alles, was Sie vor dem Projektstart wissen müssen.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-[#FFFFFF] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0E7490] shadow-md'
                    : 'border-[#0A0A0B]/10 hover:border-[#0A0A0B]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#0E7490] shrink-0">
                      {faq.number}
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl text-[#0A0A0B]">
                      {faq.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5F3EE] flex items-center justify-center text-[#0A0A0B] shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-0 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="pt-4 border-t border-[#0A0A0B]/10 pl-8 sm:pl-10">
                      <p className="font-body text-sm sm:text-base text-[#686759] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
