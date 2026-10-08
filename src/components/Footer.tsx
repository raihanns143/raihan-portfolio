import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBrandModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandModal }) => {
  return (
    <footer className="bg-[#050608] border-t border-zinc-850 py-12 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-zinc-850">
          <div>
            <Logo variant="full" theme="dark" size={26} showSubtitle={false} />
            <p className="text-zinc-500 text-xs mt-1.5">
              {PORTFOLIO_DATA.personal.title}
            </p>
          </div>

          {/* Social Links (Footer instance) */}
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
            <a
              href={PORTFOLIO_DATA.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={PORTFOLIO_DATA.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={PORTFOLIO_DATA.personal.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200 transition-colors"
            >
              Facebook
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.social.email}`}
              className="hover:text-zinc-200 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 text-zinc-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          {onOpenBrandModal && (
            <button
              onClick={onOpenBrandModal}
              className="text-zinc-500 hover:text-red-400 font-mono text-[11px] flex items-center gap-1.5 transition-colors"
              title="Inspect AR Monogram and download SVG assets"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>AR Logo System & Favicon</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
