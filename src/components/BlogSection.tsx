import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/content';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#0A0A0B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#686759]">
              INSIGHTS & WISSEN
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-[-0.03em] mb-4">
            Wissen, das Sie auch ohne uns anwenden können.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#686759] leading-relaxed">
            Praxisnahe Leitfäden zu Webstrategie, barrierefreiem Design und Konversionsoptimierung für deutsche Unternehmen.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#0A0A0B]/10 hover:border-[#0E7490]/50 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#686759] mb-4 pb-3 border-b border-[#0A0A0B]/5">
                  <span className="font-mono text-[#0E7490] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#0A0A0B] group-hover:text-[#0E7490] transition-colors leading-snug mb-4">
                  {article.title}
                </h3>

                <p className="font-body text-sm text-[#686759] leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0A0A0B]/10 flex items-center justify-between text-xs">
                <span className="text-[#A3A29A] font-mono">{article.readTime}</span>
                <span className="font-semibold text-[#0A0A0B] group-hover:text-[#0E7490] inline-flex items-center gap-1.5 transition-colors">
                  <span>Artikel lesen</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
