import React from 'react';

interface ProjectCardThumbnailProps {
  projectId: string;
  title: string;
}

export const ProjectCardThumbnail: React.FC<ProjectCardThumbnailProps> = ({ projectId, title }) => {
  switch (projectId) {
    case 'freshmart':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#0c1815] via-[#080d0c] to-[#040606] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute w-36 h-36 rounded-full bg-red-500/10 blur-2xl pointer-events-none translate-x-12" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Storefront / Cart Cart Outline */}
            <rect x="30" y="30" width="180" height="85" rx="14" fill="#0c1412" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M45 48 H195" stroke="#10b981" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            
            {/* Organic Leaf / Cart Motif */}
            <circle cx="85" cy="72" r="24" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="1.5" />
            <path d="M75 76 C75 66 85 62 95 62 C95 72 87 82 75 82 Z" fill="#10b981" fillOpacity="0.8" />
            <path d="M85 72 L77 80" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" />

            {/* Price Tag / Checkout Card */}
            <rect x="120" y="58" width="75" height="12" rx="4" fill="#1f2937" />
            <rect x="120" y="75" width="55" height="8" rx="3" fill="#374151" />
            <rect x="120" y="87" width="40" height="8" rx="3" fill="#ef4444" fillOpacity="0.8" />

            {/* Status Pills */}
            <rect x="145" y="18" width="60" height="18" rx="9" fill="#047857" fillOpacity="0.3" stroke="#10b981" strokeWidth="1" />
            <text x="175" y="30" textAnchor="middle" fill="#34d399" fontSize="8" fontFamily="monospace" fontWeight="600">RBAC CART</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    case 'vibe':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#180a1c] via-[#0d0714] to-[#050308] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#d946ef_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-fuchsia-600/15 blur-3xl pointer-events-none" />
          <div className="absolute w-36 h-36 rounded-full bg-red-600/15 blur-2xl pointer-events-none translate-x-14" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Social Card Frame */}
            <rect x="30" y="28" width="180" height="88" rx="14" fill="#0f0714" stroke="#d946ef" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* User Avatar with Ring */}
            <circle cx="56" cy="52" r="14" fill="#2e1065" stroke="#d946ef" strokeWidth="1.2" />
            <circle cx="56" cy="50" r="5" fill="#f472b6" />
            <path d="M47 62 C47 57 51 55 56 55 C61 55 65 57 65 62" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="67" cy="42" r="3" fill="#22c55e" />

            {/* Author Handle Lines */}
            <rect x="76" y="46" width="52" height="6" rx="2" fill="#e879f9" />
            <rect x="76" y="55" width="34" height="4" rx="2" fill="#701a75" />

            {/* Post Feed Content Box */}
            <rect x="46" y="70" width="148" height="26" rx="6" fill="#1e102a" stroke="#a21caf" strokeWidth="1" strokeOpacity="0.4" />
            <rect x="54" y="76" width="90" height="5" rx="1.5" fill="#e2e8f0" fillOpacity="0.8" />
            <rect x="54" y="84" width="60" height="4" rx="1.5" fill="#94a3b8" fillOpacity="0.6" />

            {/* Heart / Reaction Pill */}
            <rect x="150" y="75" width="36" height="16" rx="8" fill="#e11d48" fillOpacity="0.25" stroke="#f43f5e" strokeWidth="1" />
            <path d="M159 83 C159 81 161 80 162.5 81 C164 80 166 81 166 83 C166 85 162.5 87 162.5 87 C162.5 87 159 85 159 83 Z" fill="#fb7185" />
            <text x="175" y="86" textAnchor="middle" fill="#fecdd3" fontSize="7" fontFamily="monospace" fontWeight="700">99+</text>

            {/* Social Pill Badge */}
            <rect x="135" y="16" width="70" height="18" rx="9" fill="#701a75" fillOpacity="0.4" stroke="#d946ef" strokeWidth="1" />
            <text x="170" y="28" textAnchor="middle" fill="#f5d0fe" fontSize="8" fontFamily="monospace" fontWeight="600">VIBE FEED</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    case 'bloodon':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#1a0a0c] via-[#0f0608] to-[#060304] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Card Frame */}
            <rect x="30" y="30" width="180" height="85" rx="14" fill="#140709" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Blood Drop with Glowing Aura */}
            <circle cx="80" cy="72" r="26" fill="#7f1d1d" fillOpacity="0.4" stroke="#dc2626" strokeWidth="1.2" />
            <path
              d="M80 54 C80 54 67 69 67 76 C67 83 73 89 80 89 C87 89 93 83 93 76 C93 69 80 54 80 54 Z"
              fill="url(#blood-gradient)"
            />
            <defs>
              <linearGradient id="blood-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>

            {/* Heartbeat ECG Pulse Line */}
            <path
              d="M115 72 L130 72 L135 60 L142 85 L148 65 L152 75 L156 72 L190 72"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Emergency Tag */}
            <rect x="135" y="18" width="70" height="18" rx="9" fill="#991b1b" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1" />
            <text x="170" y="30" textAnchor="middle" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="600">DONOR LIVE</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    case 'network-monitor':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#08131d] via-[#060c14] to-[#03060a] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Card Frame */}
            <rect x="30" y="30" width="180" height="85" rx="14" fill="#07111a" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Radar Scanning Circles */}
            <circle cx="85" cy="72" r="28" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx="85" cy="72" r="18" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="85" cy="72" r="6" fill="#38bdf8" />
            <path d="M85 72 L102 56" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

            {/* Connected Nodes */}
            <circle cx="140" cy="58" r="5" fill="#0284c7" />
            <circle cx="170" cy="72" r="5" fill="#38bdf8" />
            <circle cx="145" cy="86" r="5" fill="#0ea5e9" />
            
            {/* Connection Lines */}
            <path d="M85 72 L140 58 M85 72 L145 86 M140 58 L170 72 M145 86 L170 72" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />

            {/* Protocol Tag */}
            <rect x="135" y="18" width="70" height="18" rx="9" fill="#0369a1" fillOpacity="0.3" stroke="#0ea5e9" strokeWidth="1" />
            <text x="170" y="30" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="monospace" fontWeight="600">ARP / SCAPY</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    case 'waterq':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#06181b] via-[#040e10] to-[#020708] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Card Frame */}
            <rect x="30" y="30" width="180" height="85" rx="14" fill="#051214" stroke="#0891b2" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* ESP32 Microcontroller IC */}
            <rect x="60" y="52" width="46" height="40" rx="4" fill="#082f38" stroke="#06b6d4" strokeWidth="1.2" />
            <text x="83" y="75" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="monospace" fontWeight="700">ESP32</text>
            
            {/* Chip Pins */}
            <path d="M54 60 H60 M54 68 H60 M54 76 H60 M54 84 H60" stroke="#06b6d4" strokeWidth="1.2" />
            <path d="M106 60 H112 M106 68 H112 M106 76 H112 M106 84 H112" stroke="#06b6d4" strokeWidth="1.2" />

            {/* Water Waves */}
            <path d="M125 65 C135 60 145 70 155 65 C165 60 175 70 185 65" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M125 76 C135 71 145 81 155 76 C165 71 175 81 185 76" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M125 87 C135 82 145 92 155 87 C165 82 175 92 185 87" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.4" />

            {/* IoT Telemetry Tag */}
            <rect x="135" y="18" width="70" height="18" rx="9" fill="#155e75" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1" />
            <text x="170" y="30" textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="monospace" fontWeight="600">IOT / BLYNK</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    case 'news-today':
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#120e1f] via-[#0a0712] to-[#040308] flex items-center justify-center border-b border-zinc-800/60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
          {/* Ambient Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />

          {/* Graphical SVG Motif */}
          <svg
            viewBox="0 0 240 140"
            className="w-48 sm:w-56 h-auto relative z-10 transition-transform duration-500 ease-out group-hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Card Frame */}
            <rect x="30" y="30" width="180" height="85" rx="14" fill="#0d0918" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.4" />
            
            {/* Newspaper / Editorial Layout */}
            <rect x="55" y="48" width="60" height="48" rx="4" fill="#1e1533" stroke="#8b5cf6" strokeWidth="1" />
            <rect x="62" y="55" width="46" height="6" rx="2" fill="#a78bfa" />
            <rect x="62" y="65" width="22" height="24" rx="2" fill="#3b2b5c" />
            <rect x="88" y="65" width="20" height="4" rx="1" fill="#6d5496" />
            <rect x="88" y="72" width="20" height="4" rx="1" fill="#6d5496" />
            <rect x="88" y="79" width="16" height="4" rx="1" fill="#6d5496" />

            {/* Publishing Feed Lines */}
            <rect x="130" y="52" width="65" height="10" rx="3" fill="#1e1533" />
            <rect x="130" y="66" width="55" height="8" rx="2" fill="#2d1f47" />
            <rect x="130" y="78" width="60" height="8" rx="2" fill="#2d1f47" />
            <rect x="130" y="90" width="45" height="8" rx="2" fill="#ef4444" fillOpacity="0.7" />

            {/* Editorial CMS Tag */}
            <rect x="135" y="18" width="70" height="18" rx="9" fill="#5b21b6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1" />
            <text x="170" y="30" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace" fontWeight="600">REACT / PHP</text>
          </svg>

          {/* Vignette Gradient into Card Surface */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent pointer-events-none" />
        </div>
      );

    default:
      return (
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#18181b] to-[#09090b] flex items-center justify-center border-b border-zinc-800/60">
          <span className="text-zinc-600 font-mono text-sm">{title}</span>
        </div>
      );
  }
};
