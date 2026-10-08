import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-zinc-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* 2–3 Short Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed mb-10">
          {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-zinc-300">
              {p}
            </p>
          ))}
        </div>

        {/* Small Information Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono block mb-1">
              Education
            </span>
            <div className="text-sm font-semibold text-zinc-100">
              {PORTFOLIO_DATA.about.infoRow.education}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              {PORTFOLIO_DATA.about.infoRow.institution}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono block mb-1">
              Location
            </span>
            <div className="text-sm font-semibold text-zinc-100">
              {PORTFOLIO_DATA.about.infoRow.location}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Rajshahi, Bangladesh
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono block mb-1">
              Focus
            </span>
            <div className="text-sm font-semibold text-zinc-100">
              {PORTFOLIO_DATA.about.infoRow.focus}
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Practical system engineering
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
