import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-t border-zinc-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education
          </h2>
        </div>

        {/* Clean Education Card */}
        <div className="p-6 sm:p-7 rounded-xl bg-[#0c0e14] border border-zinc-800">
          <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-semibold block mb-1">
            Academic Background
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {PORTFOLIO_DATA.education.degree}
          </h3>
          <p className="text-sm text-zinc-300 mt-1">
            {PORTFOLIO_DATA.education.institution}
          </p>
          <p className="text-xs text-zinc-500 mt-0.5">
            {PORTFOLIO_DATA.education.location}
          </p>
        </div>

      </div>
    </section>
  );
};
