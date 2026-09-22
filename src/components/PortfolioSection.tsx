import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';

interface PortfolioSectionProps {
  onSelectProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projekte" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              AUSGEWÄHLTE REFERENZEN
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Aus Ideen werden digitale Erlebnisse.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Keine Massenware, sondern maßgeschneiderte Unikate. Einblicke in kürzlich gelaunchte Kundenprojekte aus Berlin und dem DACH-Raum.
          </p>
        </div>

        {/* Alternating Editorial Project Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project) => {
            // Block 3: Full-width showcase
            if (project.layout === 'full') {
              return (
                <div
                  key={project.id}
                  id={`project-block-${project.id}`}
                  className="bg-[#FFFFFF] rounded-2xl border border-[#0A0A0B]/10 overflow-hidden shadow-sm group hover:border-[#0E7490]/50 transition-all duration-300"
                >
                  <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#0A0A0B]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-black/30 to-transparent flex items-end p-6 sm:p-12">
                      <div className="max-w-3xl text-white">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] font-bold">
                          {project.category} · {project.year}
                        </span>
                        <h3 className="font-display font-extrabold text-2xl sm:text-4xl mt-2 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/80 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-t border-[#0A0A0B]/10">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#F5F3EE] text-[#0A0A0B] text-xs font-medium rounded-md border border-[#0A0A0B]/5"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs font-mono text-[#0E7490] font-semibold ml-2">
                        Ergebnis: {project.results}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectProject(project.title)}
                      className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#0A0A0B] hover:text-[#0E7490] transition-colors shrink-0 group/btn"
                    >
                      <span>Projekt ansehen</span>
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            }

            // Block 1 (Left Image / Right Text) vs Block 2 (Text Left / Large Image Right)
            const isImageLeft = project.layout === 'left';

            return (
              <div
                key={project.id}
                id={`project-block-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] rounded-2xl border border-[#0A0A0B]/10 p-6 sm:p-10 shadow-sm group hover:border-[#0E7490]/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div
                  className={`lg:col-span-7 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-[#0A0A0B]/10 bg-[#0A0A0B]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-mono text-[#0A0A0B] font-semibold border border-[#0A0A0B]/10 shadow-sm">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0E7490] font-bold block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#686759] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Project tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#F5F3EE] text-[#0A0A0B] text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 bg-[#F5F3EE] rounded-lg border border-[#0A0A0B]/5 mb-6">
                      <span className="text-xs font-mono text-[#686759] block uppercase">Messbares Ergebnis</span>
                      <span className="text-sm font-display font-bold text-[#0A0A0B]">
                        {project.results}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProject(project.title)}
                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#0A0A0B] hover:text-[#0E7490] transition-colors group/btn pt-2"
                  >
                    <span>Projekt ansehen</span>
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
