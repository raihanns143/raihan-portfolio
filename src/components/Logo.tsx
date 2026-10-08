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
  const textColor = theme === 'light' ? '#090A0F' : '#FFFFFF';
  const subtitleColor = theme === 'light' ? '#4B5563' : '#9CA3AF';

  // The distinctive AR Monogram Vector Glyph matching uploaded brand identity
  const renderGlyph = (glyphSize: number) => (
    <svg
      width={glyphSize}
      height={glyphSize}
      viewBox="0 0 512 512"
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

        <linearGradient id={`metal-silver-a-${theme}`} x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor={theme === 'light' ? '#18181B' : '#FFFFFF'} />
          <stop offset="40%" stopColor={theme === 'light' ? '#27272A' : '#F1F5F9'} />
          <stop offset="75%" stopColor={theme === 'light' ? '#3F3F46' : '#E2E8F0'} />
          <stop offset="100%" stopColor={theme === 'light' ? '#52525B' : '#94A3B8'} />
        </linearGradient>

        <linearGradient id={`metal-silver-r-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme === 'light' ? '#18181B' : '#FFFFFF'} />
          <stop offset="40%" stopColor={theme === 'light' ? '#27272A' : '#F8FAFC'} />
          <stop offset="75%" stopColor={theme === 'light' ? '#3F3F46' : '#E2E8F0'} />
          <stop offset="100%" stopColor={theme === 'light' ? '#52525B' : '#94A3B8'} />
        </linearGradient>
      </defs>

      <g transform="translate(10, 8)">
        {/* 1. Upper Left Stalk & Apex of 'A' */}
        <path
          d="M 224 156 L 246 166 L 204 228 L 165 285 L 132 334 L 112 334 L 182 222 Z"
          fill={`url(#metal-silver-a-${theme})`}
        />

        {/* 2. 'A' Top Segment */}
        <path
          d="M 224 156 L 262 168 L 242 202 L 204 228 Z"
          fill={`url(#metal-silver-a-${theme})`}
        />

        {/* 3. Upper Curved Bowl of 'R' */}
        <path
          d="M 244 168
             L 326 168
             C 358 168, 382 188, 382 220
             C 382 248, 360 268, 332 272
             L 292 272
             L 278 248
             L 325 248
             C 344 248, 356 236, 356 220
             C 356 200, 342 190, 322 190
             L 252 190
             Z"
          fill={`url(#metal-silver-r-${theme})`}
        />

        {/* 4. Sweeping Diagonal Leg of 'R' */}
        <path
          d="M 302 260 L 330 260 L 384 334 L 332 334 L 284 274 Z"
          fill={`url(#metal-silver-r-${theme})`}
        />

        {/* 5. Signature Dynamic Crimson Red Swoosh / Blade */}
        <path
          d="M 112 334
             L 158 332
             C 196 298, 244 264, 302 234
             L 342 192
             C 296 212, 242 248, 192 286
             C 162 308, 138 322, 112 334
             Z"
          fill={`url(#red-accent-${theme})`}
        />
      </g>
    </svg>
  );

  // Variant: Mark only
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderGlyph(size)}
      </div>
    );
  }

  // Variant: Stacked
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
        {renderGlyph(size * 1.5)}
        <div className="text-center">
          <span
            className="font-bold tracking-tight text-base block font-sans"
            style={{ color: textColor }}
          >
            Abu Raihan
          </span>
          {showSubtitle && (
            <span
              className="text-[11px] font-mono tracking-widest uppercase block mt-0.5"
              style={{ color: subtitleColor }}
            >
              Developer
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Full Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {renderGlyph(size)}
      <div className="flex flex-col">
        <span
          className="font-extrabold tracking-tight text-sm sm:text-base leading-tight font-sans"
          style={{ color: textColor }}
        >
          Abu Raihan
        </span>
        {showSubtitle && (
          <span
            className="text-[10px] font-mono tracking-wider uppercase leading-none mt-0.5"
            style={{ color: subtitleColor }}
          >
            Developer
          </span>
        )}
      </div>
    </div>
  );
};
