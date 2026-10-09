import React from 'react';
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  ArrowRight,
  FileDown,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import portraitImg from '../assets/images/portrait.png';

interface HeroProps {
  onOpenCvPreview: () => void;
}

const CodeTerminal: React.FC = () => (
  <div className="rounded-xl border border-zinc-800/60 bg-[#0c0e14]/40 backdrop-blur-md shadow-2xl overflow-hidden">
    {/* Terminal Window Header */}
    <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/40 border-b border-zinc-800/60">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-zinc-400">developer.ts</span>
      </div>
      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
        <Terminal className="w-3.5 h-3.5 text-zinc-400" />
        <span>bash</span>
      </div>
    </div>

    {/* Code Snippet */}
    <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-zinc-300 space-y-1.5 bg-transparent">
      <div>
        <span className="text-red-400">const</span>{' '}
        <span className="text-yellow-200">developer</span> = {'{'}
      </div>
      <div className="pl-4 text-zinc-400">
        name: <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.name}"</span>,
      </div>
      <div className="pl-4 text-zinc-400">
        role: <span className="text-emerald-300">"Diploma Engineer & Tech Developer"</span>,
      </div>
      <div className="pl-4 text-zinc-400">
        location: <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.location}"</span>,
      </div>
      <div className="pl-4 text-zinc-400">
        interests: [
      </div>
      <div className="pl-8 text-zinc-300">
        <span className="text-emerald-300">"Web Development"</span>,
      </div>
      <div className="pl-8 text-zinc-300">
        <span className="text-emerald-300">"Networking Systems"</span>,
      </div>
      <div className="pl-8 text-zinc-300">
        <span className="text-emerald-300">"IoT & Microcontrollers"</span>
      </div>
      <div className="pl-4 text-zinc-400">],</div>
      <div className="pl-4 text-zinc-400">
        approach: <span className="text-emerald-300">"Build practical software"</span>
      </div>
      <div>{'}'};</div>
      
      <div className="pt-3 mt-3 border-t border-zinc-800/80 text-zinc-500 flex items-center justify-between text-[11px]">
        <span className="text-zinc-400">$ ready to build</span>
        <span className="text-emerald-400 font-mono">active</span>
      </div>
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenCvPreview }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden isolate">
      {/* Integrated Red-Neon Portrait Background Layer - Same across mobile, tablet, and desktop */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden flex justify-center items-start select-none"
      >
        {/* Ambient Neon Atmosphere (Magenta/Fuchsia on left, Crimson Red on right) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-fuchsia-950/30 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/4 -translate-y-1/2 w-[550px] h-[450px] bg-red-950/35 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-red-950/25 blur-[140px] rounded-full pointer-events-none" />

        {/* Portrait Image Container - Tablet view layout unified across tablet and desktop */}
        <div className="absolute top-0 right-[-100px] sm:right-[-40px] md:right-[-180px] w-[560px] sm:w-[700px] md:w-[950px] max-w-none h-full flex justify-end items-start pt-2 sm:pt-6">
          <img
            src={portraitImg}
            alt=""
            className="w-[540px] sm:w-[680px] md:w-[920px] max-w-none h-auto object-contain object-top opacity-60 md:opacity-75 transition-opacity duration-500"
            style={{
              maskImage: 'radial-gradient(ellipse 65% 55% at 47% 42%, black 28%, transparent 74%)',
              WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 47% 42%, black 28%, transparent 74%)',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== '/portrait.png') {
                target.src = '/portrait.png';
              }
            }}
          />

          {/* Seamless Edge Fades directly into #08090C on all 4 sides & corners */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#08090C] via-[#08090C]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-72 sm:h-96 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-48 sm:w-72 md:w-80 bg-gradient-to-r from-[#08090C] via-[#08090C]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 md:w-56 bg-gradient-to-l from-[#08090C] via-[#08090C]/60 to-transparent pointer-events-none" />

          {/* Subtle Technical Grid Overlay seamlessly matching the portfolio background */}
          <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hero Content (Heading, Subtitle, Description, Buttons, Socials, Terminal) */}
        <div className="flex flex-col items-start pt-2">
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            Hi, I'm <span className="text-white relative inline-block">
              {PORTFOLIO_DATA.personal.name}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full" />
            </span>.
          </h1>

          {/* Subtitle / Role */}
          <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-3">
            {PORTFOLIO_DATA.personal.subheadline}
          </p>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-zinc-400 mb-8 max-w-lg leading-relaxed">
            {PORTFOLIO_DATA.personal.shortDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-sm transition-all group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={onOpenCvPreview}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors group cursor-pointer"
              title="Preview and Download CV"
            >
              <FileDown className="w-4 h-4 text-zinc-400 group-hover:text-red-500 transition-colors" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Icons (Hero primary instance) */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60 w-full max-w-md mb-8">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Connect</span>
            <div className="flex items-center gap-2.5">
              <a
                href={PORTFOLIO_DATA.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.social.email}`}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                aria-label="Email"
                title={`Email ${PORTFOLIO_DATA.personal.social.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Terminal Window: Same layout for tablet and desktop */}
          <div className="w-full">
            <CodeTerminal />
          </div>

        </div>

      </div>
    </section>
  );
};
