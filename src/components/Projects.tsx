import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ProjectCardThumbnail } from './ProjectCardThumbnail';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Synchronize hash routing: support direct links like #projects/bloodon
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#projects/')) {
        const slug = hash.replace('#projects/', '');
        const matched = PORTFOLIO_DATA.projects.find((p) => p.slug === slug || p.id === slug);
        if (matched) {
          setSelectedProject(matched);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#projects/${project.slug}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#projects/')) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-zinc-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            A curated selection of real-world web applications, network auditing utilities, and embedded IoT systems.
          </p>
        </div>

        {/* Clean, Consistent Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0c0e14] border border-zinc-800/80 hover:border-red-500/40 hover:shadow-[0_8px_32px_-8px_rgba(239,68,68,0.15)] flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out"
            >
              <div>
                {/* 1. Large Project Thumbnail at Top of Card */}
                <div className="relative overflow-hidden">
                  <ProjectCardThumbnail
                    projectId={project.id}
                    title={project.title}
                  />
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7">
                  {/* 2. Compact Metadata Row: Category & Year */}
                  <div className="flex items-center justify-between gap-3 text-xs font-mono mb-3">
                    <span className="text-red-400 font-semibold uppercase tracking-wider text-[11px] sm:text-xs truncate">
                      {project.category}
                    </span>
                    <span className="text-zinc-500 shrink-0 text-[11px] sm:text-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* 3. Bold Project Title & Readable Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mt-2.5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* 4. Rounded Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links & 5. Minimal Arrow Link positioned near the bottom-right */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between border-t border-zinc-800/60 mt-2">
                {/* External repository & demo links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>

                {/* Minimal Arrow Link positioned near bottom-right */}
                <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-red-400 transition-colors">
                  <span className="hidden sm:inline text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    View Project
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-950/40 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Dedicated Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </section>
  );
};
