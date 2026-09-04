import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#F2F1ED] text-[#181818] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2.5 h-2.5 bg-[#181818]" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
            06 / CLIENT STORIES
          </span>
        </div>

        {/* Big Editorial Quote Frame */}
        <div className="min-h-[260px] md:min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
              className="space-y-8"
            >
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-[#181818] font-normal tracking-tight">
                "{item.quote}"
              </blockquote>

              {/* Client meta */}
              <div className="pt-6 border-t border-[#8A8A86]/20 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-sans text-base font-semibold text-[#181818] tracking-wide uppercase">
                    {item.clientName}
                  </h3>
                  <p className="font-sans text-xs text-[#8A8A86] mt-0.5">
                    {item.projectTitle} • {item.projectType} ({item.year})
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="font-mono text-xs tracking-widest text-[#8A8A86]">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation Arrows */}
        <div className="mt-12 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#181818]/30 flex items-center justify-center hover:bg-[#181818] hover:text-white transition-colors focus:outline-none"
            aria-label="Previous story"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#181818]/30 flex items-center justify-center hover:bg-[#181818] hover:text-white transition-colors focus:outline-none"
            aria-label="Next story"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
