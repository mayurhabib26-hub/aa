import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    setBtnPos({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[#181818] text-[#F2F1ED] py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Architectural decorative line geometries inspired by the 'A' mark */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <motion.path
            d="M 200 800 L 720 150 L 1240 800"
            stroke="#B6B6B2"
            strokeWidth="1"
            strokeDasharray="4 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.path
            d="M 720 150 L 1100 450"
            stroke="#B5A48B"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          />
          <circle cx="720" cy="150" r="4" fill="#B5A48B" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 bg-[#B5A48B]" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#8A8A86] uppercase">
            COLLABORATION & INQUIRY
          </span>
          <span className="w-2 h-2 bg-[#B5A48B]" />
        </div>

        <h2 className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase select-none">
          HAVE A SPACE<br />
          <span className="text-[#8A8A86]">IN MIND?</span>
        </h2>

        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F2F1ED]/90 max-w-xl mx-auto">
          "Let's turn it into something remarkable."
        </p>

        {/* Magnetic Button */}
        <div className="pt-6">
          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: btnPos.x, y: btnPos.y }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            onClick={onStartProject}
            className="group relative inline-flex items-center gap-4 bg-white hover:bg-[#B5A48B] text-[#181818] px-10 py-5 rounded-full text-xs font-sans tracking-[0.25em] uppercase font-semibold transition-colors duration-400 shadow-2xl focus:outline-none"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.button>
        </div>

        {/* Direct Email Note */}
        <p className="font-mono text-xs text-[#8A8A86] tracking-widest pt-4">
          OR EMAIL DIRECTLY: <a href="mailto:contact@aadesigno.com" className="text-white hover:text-[#B5A48B] underline underline-offset-4">contact@aadesigno.com</a>
        </p>
      </div>
    </section>
  );
};
