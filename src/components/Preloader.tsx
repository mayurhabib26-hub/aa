import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AADesignoLogo } from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1.7s total duration
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => {
        onComplete();
      }, 700); // curtain animation duration
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#181818] overflow-hidden"
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 opacity-10 arch-grid-dark pointer-events-none" />

          {/* Center Brand Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              <AADesignoLogo
                size="xl"
                variant="white"
                showText={false}
                animated={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="mt-6 flex flex-col items-center"
            >
              <h1 className="font-sans text-xl md:text-2xl font-semibold tracking-[0.28em] text-[#FFFFFF] uppercase">
                AA DESIGNO
              </h1>
              <span className="font-sans text-[10px] md:text-xs font-normal tracking-[0.38em] text-[#8A8A86] uppercase mt-2">
                INTERIOR • ARCHITECTURE • DESIGN
              </span>
            </motion.div>

            {/* Architectural line drawing bar */}
            <div className="w-48 h-[1px] bg-[#292929] mt-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-[#F2F1ED]"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.3,
                  ease: [0.76, 0, 0.24, 1],
                  repeat: Infinity,
                }}
              />
            </div>
          </div>

          {/* Bottom subtle architectural coordinates */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-[10px] font-mono tracking-widest text-[#8A8A86]/60 uppercase">
            <span>STUDIO / EST. 2026</span>
            <span>SPATIAL PRECISION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
