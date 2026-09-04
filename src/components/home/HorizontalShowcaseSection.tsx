import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { HORIZONTAL_SHOWCASE } from '../../data/content';

interface HorizontalShowcaseProps {
  onSelectProjectByTitle?: (title: string) => void;
}

export const HorizontalShowcaseSection: React.FC<HorizontalShowcaseProps> = ({
  onSelectProjectByTitle,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal offset
  // Total cards = 5.
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-65%']);

  return (
    <section
      ref={targetRef}
      className="relative bg-[#181818] text-[#F2F1ED] lg:h-[300vh]"
    >
      {/* Desktop Sticky Viewport */}
      <div className="hidden lg:flex sticky top-0 h-screen flex-col justify-between overflow-hidden py-12 px-12">
        {/* Header inside sticky container */}
        <div className="flex items-end justify-between max-w-7xl w-full mx-auto pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase block mb-2">
              CURATED ARCHITECTURE ARCHIVE
            </span>
            <h2 className="font-sans font-medium text-4xl xl:text-5xl tracking-tight text-white">
              SELECTED INTERIORS<span className="text-[#B5A48B]">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#8A8A86]">
            <span>SCROLL HORIZONTALLY</span>
            <div className="w-12 h-[1px] bg-[#8A8A86]/40" />
          </div>
        </div>

        {/* Horizontal Motion Track */}
        <div className="my-auto w-full overflow-visible">
          <motion.div
            style={{ x }}
            className="flex gap-8 items-center"
            data-cursor="drag"
          >
            {HORIZONTAL_SHOWCASE.map((item) => (
              <div
                key={item.number}
                onClick={() => onSelectProjectByTitle?.(item.title)}
                className="group relative flex-shrink-0 w-[460px] xl:w-[520px] cursor-pointer"
                data-cursor="view"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#292929]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Corner Number */}
                  <span className="absolute top-4 left-4 font-mono text-xs tracking-widest bg-[#181818]/80 backdrop-blur-sm px-3 py-1 text-[#F2F1ED]">
                    {item.number}
                  </span>
                </div>

                {/* Metadata */}
                <div className="mt-4 flex items-baseline justify-between pt-2 border-t border-white/10">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#8A8A86] uppercase block">
                      {item.number} / {item.category}
                    </span>
                    <h3 className="font-sans text-xl font-medium tracking-tight text-white group-hover:text-[#B5A48B] transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#8A8A86]">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto text-[11px] font-mono tracking-widest text-[#8A8A86] pt-4 border-t border-white/10">
          <span>01 — 05 / CURATED PORTFOLIO</span>
          <span>AA DESIGNO GALLERY</span>
        </div>
      </div>

      {/* Mobile & Tablet Fallback: Normal Stacked / Swipeable Layout */}
      <div className="lg:hidden py-20 px-6 sm:px-8 space-y-12">
        <div>
          <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase block mb-2">
            CURATED ARCHIVE
          </span>
          <h2 className="font-sans font-medium text-3xl sm:text-4xl tracking-tight text-white">
            SELECTED INTERIORS<span className="text-[#B5A48B]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {HORIZONTAL_SHOWCASE.map((item) => (
            <div
              key={item.number}
              onClick={() => onSelectProjectByTitle?.(item.title)}
              className="group cursor-pointer space-y-3"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#292929]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-[#181818]/80 px-2 py-1 text-white">
                  {item.number}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#8A8A86] uppercase block">
                    {item.number} / {item.category}
                  </span>
                  <h3 className="font-sans text-lg font-medium text-white group-hover:text-[#B5A48B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-[#8A8A86]">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
