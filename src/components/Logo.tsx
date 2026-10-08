import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'stacked';
  theme?: 'dark' | 'light' | 'auto';
  size?: number; // Height in pixels for the mark (default: 32)
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 32,
  className = '',
  showSubtitle = true,
}) => {
  // Theme-aware fill colors
  const bodyColor = theme === 'light' ? '#090A0F' : '#FFFFFF';
  const textColor = theme === 'light' ? '#090A0F' : '#FFFFFF';
  const subtitleColor = theme === 'light' ? '#4B5563' : '#9CA3AF';

  // The distinctive AR Monogram Vector Glyph
  const renderGlyph = (glyphSize: number) => (
    <svg
      width={glyphSize}
      height={glyphSize}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform group-hover:scale-105 duration-200"
      aria-label="Abu Raihan AR Monogram"
    >
      <defs>
        <linearGradient id={`red-accent-${theme}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#991B1B" />
          <stop offset="55%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>

        <linearGradient id={`white-metal-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bodyColor} />
          <stop offset="100%" stopColor={theme === 'light' ? '#18181B' : '#E4E4E7'} />
        </linearGradient>
      </defs>

      {/* 1. Left Diagonal Stem of 'A' */}
      <path
        d="M 68 22 L 82 22 L 48 90 L 32 90 Z"
        fill={`url(#white-metal-${theme})`}
      />

      {/* 2. Upper Bowl of 'R' */}
      <path
        d="M 78 28
           L 114 28
           C 132 28, 146 39, 146 54
           C 146 68, 134 78, 116 78
           L 92 78
           L 92 65
           L 114 65
           C 124 65, 131 59, 131 53
           C 131 47, 124 41, 114 41
           L 86 41
           Z"
        fill={`url(#white-metal-${theme})`}
      />

      {/* 3. Diagonal Landing Leg of 'R' */}
      <path
        d="M 98 74 L 114 74 L 140 128 L 122 128 Z"
        fill={`url(#white-metal-${theme})`}
      />

      {/* 4. The Dynamic Crimson Blade Crossbar (Velocity Slash #DC2626) */}
      <path
        d="M 18 128
           L 32 128
           C 52 112, 78 96, 106 84
           L 126 62
           C 104 74, 76 90, 48 108
           C 34 118, 24 124, 18 128
           Z"
        fill={`url(#red-accent-${theme})`}
      />
    </svg>
  );

  // Variant: Mark only
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderGlyph(size)}
      </div>
    );
  }

  // Variant: Stacked
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center gap-2 group ${className}`}>
        {renderGlyph(size)}
        <div className="text-center">
          <span
            className="text-sm font-extrabold tracking-wider uppercase block"
            style={{ color: textColor }}
          >
            Abu Raihan
          </span>
          {showSubtitle && (
            <span
              className="text-[10px] tracking-widest font-mono uppercase block mt-0.5"
              style={{ color: subtitleColor }}
            >
              Developer · Builder
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant: Full Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {renderGlyph(size)}
      <div className="flex flex-col">
        <span
          className="text-base font-bold tracking-tight leading-tight"
          style={{ color: textColor }}
        >
          Abu Raihan
        </span>
        {showSubtitle && (
          <span
            className="text-[10px] tracking-wider font-mono uppercase leading-tight"
            style={{ color: subtitleColor }}
          >
            Developer
          </span>
        )}
      </div>
    </div>
  );
};
