import React, { useEffect } from 'react';
import { X, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c0e14] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0c0e14]/95 backdrop-blur border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              aria-label="Back to portfolio"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">
                  {project.category}
                </span>
                {project.year && (
                  <span className="text-[11px] font-mono text-red-400 bg-red-950/40 border border-red-800/40 px-1.5 py-0.2 rounded font-medium">
                    {project.year}
                  </span>
                )}
              </div>
              <h3 id="modal-project-title" className="text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[80vh] overflow-y-auto text-sm leading-relaxed">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-red-500 font-semibold mb-1.5">
              Overview
            </h4>
            <p className="text-zinc-300">
              {project.details.overview}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-850">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <span className="text-xs text-zinc-500 font-mono ml-auto">
              /projects/{project.slug}
            </span>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-850">
              <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1.5">
                The Problem
              </h5>
              <p className="text-xs sm:text-sm text-zinc-300">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-850">
              <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                The Solution
              </h5>
              <p className="text-xs sm:text-sm text-zinc-300">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
              Key Features
            </h4>
            <div className="space-y-2">
              {project.details.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.allTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
              My Role
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              {project.details.role}
            </p>
          </div>

          {/* Technical Challenges & Results */}
          <div className="space-y-3.5 pt-3 border-t border-zinc-850">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Technical Challenges
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                {project.details.challenges}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Results
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                {project.details.results}
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
          <span>Press ESC to close</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
