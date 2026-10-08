import React, { useState, useEffect } from 'react';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

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
    <section id="projects" className="py-16 md:py-20 border-t border-zinc-800/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1.5">
            A few things I've built.
          </p>
        </div>

        {/* Clean, Non-Repetitive 4-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#0c0e14] border border-zinc-800 hover:border-zinc-700/80 p-6 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mt-2.5 mb-5">
                  {project.description}
                </p>

                {/* Clean, Small Set of Relevant Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 mb-6 font-mono">
                  {project.technologies.map((tech, index) => (
                    <React.Fragment key={tech}>
                      <span className="text-zinc-300">{tech}</span>
                      {index < project.technologies.length - 1 && (
                        <span className="text-zinc-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons: [View Project] [GitHub] */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
                <button
                  onClick={() => handleOpenProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                  title="View repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors ml-auto"
                    title="Live demo"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
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
