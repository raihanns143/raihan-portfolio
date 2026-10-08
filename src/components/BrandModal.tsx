import React, { useState, useEffect } from 'react';
import { X, Download, Copy, Check, Eye, Layers, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ isOpen, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'system' | 'concepts' | 'favicon'>('system');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySvgLink = (path: string, label: string) => {
    navigator.clipboard.writeText(window.location.origin + path);
    setCopiedFormat(label);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c0e14] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-6 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <h3 id="brand-modal-title" className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Abu Raihan — Brand Identity & AR Logo System
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-zinc-800 bg-zinc-950/80 px-6 pt-3 text-xs font-medium gap-4">
          <button
            onClick={() => setActiveTab('system')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'system'
                ? 'border-red-500 text-white font-bold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Primary Logo System
          </button>
          <button
            onClick={() => setActiveTab('favicon')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'favicon'
                ? 'border-red-500 text-white font-bold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Favicon & App Icon (16px – 512px)
          </button>
          <button
            onClick={() => setActiveTab('concepts')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'concepts'
                ? 'border-red-500 text-white font-bold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Design Concepts & Philosophy
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[78vh] overflow-y-auto text-sm leading-relaxed">
          
          {/* TAB 1: SYSTEM */}
          {activeTab === 'system' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-500 font-semibold mb-1">
                  Core Mark Overview
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  A modern geometric "AR" monogram engineered for Abu Raihan. Combines an angled architectural 'A' with a clean 'R' structure, unified by an aerodynamic crimson red blade (<code className="text-red-400">#DC2626</code>) representing forward momentum and technical precision.
                </p>
              </div>

              {/* 3 Background Variations: Dark, Light, Transparent */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Dark Background */}
                <div className="p-6 rounded-xl bg-[#090B10] border border-zinc-800 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-4 block">
                    Dark Background (Primary)
                  </span>
                  <div className="py-2">
                    <Logo variant="full" theme="dark" size={44} />
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 w-full flex justify-center">
                    <a
                      href="/logo-ar-dark.svg"
                      download="abu-raihan-logo-dark.svg"
                      className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3 h-3 text-red-500" />
                      <span>Download SVG</span>
                    </a>
                  </div>
                </div>

                {/* Light Background */}
                <div className="p-6 rounded-xl bg-white border border-zinc-200 text-zinc-900 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-4 block">
                    Light Background
                  </span>
                  <div className="py-2">
                    <Logo variant="full" theme="light" size={44} />
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200 w-full flex justify-center">
                    <a
                      href="/logo-ar-light.svg"
                      download="abu-raihan-logo-light.svg"
                      className="text-[11px] font-mono text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3 h-3 text-red-600" />
                      <span>Download SVG</span>
                    </a>
                  </div>
                </div>

                {/* Transparent Grid */}
                <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 tech-grid-pattern flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-4 block">
                    Transparent Mark Only
                  </span>
                  <div className="py-2">
                    <Logo variant="mark" theme="dark" size={44} />
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 w-full flex justify-center">
                    <a
                      href="/favicon.svg"
                      download="abu-raihan-mark.svg"
                      className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3 h-3 text-red-500" />
                      <span>Download Mark</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Color Specifications */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Identity Palette Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#DC2626] border border-red-700/60 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Velocity Red</div>
                      <div className="text-[11px] font-mono text-zinc-400">#DC2626 · Primary Accent</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-white border border-zinc-300 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Pure White</div>
                      <div className="text-[11px] font-mono text-zinc-400">#FFFFFF · Letter Structure</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#090B10] border border-zinc-800 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Deep Obsidian</div>
                      <div className="text-[11px] font-mono text-zinc-400">#090B10 · Canvas / Charcoal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FAVICON */}
          {activeTab === 'favicon' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-500 font-semibold mb-1">
                  Favicon & App Icon Scalability
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Engineered with bold primary geometry and high-contrast negative space so the symbol remains sharp and instantly recognizable from a 16px browser tab to a 512px app launcher icon.
                </p>
              </div>

              {/* Favicon Size Matrix */}
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-850">
                <div className="flex flex-wrap items-end justify-around gap-6">
                  {/* 16x16 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.svg" alt="16x16 Favicon" width={16} height={16} className="rounded" />
                    <span className="text-[10px] font-mono text-zinc-500">16×16 px</span>
                  </div>

                  {/* 32x32 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.svg" alt="32x32 Favicon" width={32} height={32} className="rounded-md" />
                    <span className="text-[10px] font-mono text-zinc-500">32×32 px</span>
                  </div>

                  {/* 48x48 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.svg" alt="48x48 Favicon" width={48} height={48} className="rounded-lg shadow-sm" />
                    <span className="text-[10px] font-mono text-zinc-500">48×48 px</span>
                  </div>

                  {/* 96x96 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.svg" alt="96x96 Favicon" width={96} height={96} className="rounded-2xl shadow-md" />
                    <span className="text-[10px] font-mono text-zinc-500">96×96 px</span>
                  </div>

                  {/* 128x128 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="/favicon.svg" alt="128x128 Favicon" width={128} height={128} className="rounded-3xl shadow-lg" />
                    <span className="text-[10px] font-mono text-zinc-500">128×128 (HD)</span>
                  </div>
                </div>
              </div>

              {/* Direct Embed Snippet */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-400">HTML Favicon Link</span>
                  <button
                    onClick={() => handleCopySvgLink('/favicon.svg', 'favicon')}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white"
                  >
                    {copiedFormat === 'favicon' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedFormat === 'favicon' ? 'Copied' : 'Copy Absolute URL'}</span>
                  </button>
                </div>
                <code className="text-xs font-mono text-red-400 block bg-zinc-950 p-2.5 rounded border border-zinc-800/80 overflow-x-auto">
                  {'<link rel="icon" type="image/svg+xml" href="/favicon.svg" />'}
                </code>
              </div>
            </div>
          )}

          {/* TAB 3: CONCEPTS & PHILOSOPHY */}
          {activeTab === 'concepts' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-500 font-semibold mb-1">
                  Design Exploration & Monogram Architecture
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Three distinct geometric directions were explored for combining 'A' (Abu) and 'R' (Raihan). Direction 1 was refined as the flagship brand identity based on your uploaded reference.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Concept 1 */}
                <div className="p-5 rounded-xl bg-zinc-950 border border-red-900/40 relative">
                  <div className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/60">
                    Selected Flagship
                  </div>
                  <div className="h-16 flex items-center justify-center my-3">
                    <Logo variant="mark" size={44} />
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">1. The Velocity AR</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Dynamic angled A with an energetic crimson blade crossbar flowing seamlessly into the waist of R. Communicates speed, execution, and forward momentum.
                  </p>
                </div>

                {/* Concept 2 */}
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="h-16 flex items-center justify-center my-3">
                    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                      <path d="M 30 80 L 50 20 L 70 80 L 58 80 L 50 56 L 40 56 L 36 80 Z" fill="#FFFFFF"/>
                      <path d="M 50 20 L 75 20 C 85 20, 90 28, 90 38 C 90 48, 84 54, 75 54 L 62 54 L 78 80 L 64 80 L 52 56 Z" fill="#FFFFFF"/>
                      <rect x="36" y="52" width="24" height="6" fill="#DC2626"/>
                    </svg>
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">2. Architectural Monogram</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Interlocking structural grid where the A and R share a common vertical spine, accented by a horizontal red foundation beam.
                  </p>
                </div>

                {/* Concept 3 */}
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="h-16 flex items-center justify-center my-3">
                    <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                      <path d="M 24 76 L 46 24 L 56 24 L 76 76 L 64 76 L 50 40 L 36 76 Z" fill="#FFFFFF"/>
                      <circle cx="70" cy="40" r="14" stroke="#FFFFFF" stroke-width="8" fill="none"/>
                      <path d="M 68 50 L 82 76 L 70 76 L 58 54 Z" fill="#FFFFFF"/>
                      <line x1="30" y1="56" x2="60" y2="56" stroke="#DC2626" stroke-width="6"/>
                    </svg>
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1">3. Tech Circuit Monogram</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Wireframe aesthetic inspired by IoT circuit traces and network topologies with a distinct conductive red signal node.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Active Identity: Abu Raihan (AR Velocity)</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
