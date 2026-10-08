import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Frontend', list: PORTFOLIO_DATA.skills.frontend },
    { title: 'Backend', list: PORTFOLIO_DATA.skills.backend },
    { title: 'Database', list: PORTFOLIO_DATA.skills.database },
    { title: 'Networking', list: PORTFOLIO_DATA.skills.networking },
    { title: 'IoT & Embedded', list: PORTFOLIO_DATA.skills.iot },
    { title: 'Tools', list: PORTFOLIO_DATA.skills.tools },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-zinc-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1.5">
            Core technologies and tools I work with.
          </p>
        </div>

        {/* Clean, Scannable Grouped Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((group) => (
            <div
              key={group.title}
              className="p-5 rounded-xl bg-[#0c0e14] border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>{group.title}</span>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {group.list.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
