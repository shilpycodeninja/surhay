import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="prozess" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              PROJEKTABLAUF
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Von der Idee bis zum fertigen Auftritt.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Transparent, planbar und ohne Agentur-Theater. Sie wissen jederzeit, wo Ihr Projekt steht.
          </p>
        </div>

        {/* Four-Step Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting Hairline Line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[#0A0A0B]/15 z-0">
            <div className="h-full bg-[#0E7490] w-3/4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#0A0A0B]/10 hover:border-[#0E7490]/50 shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-[#F5F3EE] text-[#0A0A0B] group-hover:bg-[#0E7490] group-hover:text-white flex items-center justify-center font-mono font-bold text-base transition-colors duration-200 border border-[#0A0A0B]/10">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#0E7490] bg-[#0E7490]/10 px-2.5 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#0A0A0B] mb-3">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm text-[#686759] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0B]/10 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3A29A] block mb-1">
                    Ergebnisse
                  </span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#0A0A0B]/85">
                      <CheckCircle2 size={13} className="text-[#0E7490] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
