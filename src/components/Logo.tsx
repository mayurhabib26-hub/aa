import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'white';
  showText?: boolean;
  showSubtitle?: boolean;
  animated?: boolean;
}

export const AADesignoLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
  showText = true,
  showSubtitle = false,
  animated = false,
}) => {
  // Dimensions
  const emblemSizes = {
    sm: { w: 26, h: 26, fontSize: 'text-xs', subSize: 'text-[8px]' },
    md: { w: 36, h: 36, fontSize: 'text-sm font-medium tracking-[0.22em]', subSize: 'text-[9px] tracking-[0.25em]' },
    lg: { w: 54, h: 54, fontSize: 'text-lg font-medium tracking-[0.25em]', subSize: 'text-[10px] tracking-[0.3em]' },
    xl: { w: 76, h: 76, fontSize: 'text-2xl font-medium tracking-[0.28em]', subSize: 'text-xs tracking-[0.35em]' },
  };

  const currentSize = emblemSizes[size];

  // Theme colors
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';
  const markBg = isWhite ? '#FFFFFF' : isDark ? '#181818' : '#F2F1ED';
  const markCutout = isWhite ? '#181818' : isDark ? '#FFFFFF' : '#181818';
  const textColor = isWhite ? 'text-white' : isDark ? 'text-[#181818]' : 'text-[#F2F1ED]';
  const subtextColor = isWhite ? 'text-[#B6B6B2]' : isDark ? 'text-[#8A8A86]' : 'text-[#8A8A86]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Emblem */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ width: currentSize.w, height: currentSize.h }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base architectural square/rhombus frame */}
          {animated ? (
            <motion.rect
              x="6"
              y="6"
              width="88"
              height="88"
              fill={markBg}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            />
          ) : (
            <rect x="6" y="6" width="88" height="88" fill={markBg} rx="1" />
          )}

          {/* Architectural 'A' cutout / geometric cantilever form */}
          {animated ? (
            <motion.path
              d="M 50 18 L 22 78 L 36 78 L 50 48 L 64 78 L 78 78 L 50 18 Z"
              fill={markCutout}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
          ) : (
            <path
              d="M 50 18 L 22 78 L 36 78 L 50 48 L 64 78 L 78 78 L 50 18 Z"
              fill={markCutout}
            />
          )}

          {/* Inner negative space triangle forming the architectural A */}
          <polygon
            points="50,56 42,72 58,72"
            fill={markBg}
          />

          {/* Cantilevered diagonal roof projection line on right inspired by the logo */}
          <path
            d="M 50 18 L 84 48 L 76 56 L 50 32 Z"
            fill={markCutout}
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-sans uppercase tracking-[0.24em] font-semibold ${currentSize.fontSize} ${textColor} flex items-center gap-1.5`}>
            {/* Custom geometric chevron-styled AA */}
            <span className="font-semibold tracking-[0.18em]">AA</span>
            <span className="font-light tracking-[0.28em]">DESIGNO</span>
          </div>
          {showSubtitle && (
            <span className={`uppercase font-sans font-normal mt-1 ${currentSize.subSize} ${subtextColor}`}>
              INTERIOR • ARCHITECTURE • DESIGN
            </span>
          )}
        </div>
      )}
    </div>
  );
};
