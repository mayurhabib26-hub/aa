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
  // Dimensions for emblem and typography
  const emblemSizes = {
    sm: { w: 32, h: 32, fontSize: 'text-xs', subSize: 'text-[8px]' },
    md: { w: 40, h: 40, fontSize: 'text-sm font-medium tracking-[0.22em]', subSize: 'text-[9px] tracking-[0.25em]' },
    lg: { w: 56, h: 56, fontSize: 'text-lg font-medium tracking-[0.25em]', subSize: 'text-[10px] tracking-[0.3em]' },
    xl: { w: 108, h: 108, fontSize: 'text-2xl font-medium tracking-[0.28em]', subSize: 'text-xs tracking-[0.35em]' },
  };

  const currentSize = emblemSizes[size];

  // Theme colors
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : isDark ? 'text-[#181818]' : 'text-[#F2F1ED]';
  const subtextColor = isWhite ? 'text-[#B6B6B2]' : isDark ? 'text-[#8A8A86]' : 'text-[#8A8A86]';

  // Emblem image container
  const emblemNode = (
    <div
      className={`relative flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
        isWhite
          ? 'shadow-[0_4px_24px_rgba(0,0,0,0.4)] ring-1 ring-white/25'
          : 'shadow-[0_3px_14px_rgba(0,0,0,0.12)] ring-1 ring-black/10'
      }`}
      style={{ width: currentSize.w, height: currentSize.h }}
    >
      <img
        src="/images/logo.png"
        alt="AA DESIGNO"
        className="w-full h-full object-cover rounded-full select-none pointer-events-none"
        loading="eager"
        draggable={false}
      />
    </div>
  );

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Architectural Emblem */}
      {animated ? (
        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotate: -6 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="flex-shrink-0"
        >
          {emblemNode}
        </motion.div>
      ) : (
        emblemNode
      )}

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-sans uppercase tracking-[0.24em] font-semibold ${currentSize.fontSize} ${textColor} flex items-center gap-1.5`}>
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
