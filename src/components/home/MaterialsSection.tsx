import React from 'react';
import { motion } from 'motion/react';
import { MATERIALS_COLLAGE } from '../../data/content';

export const MaterialsSection: React.FC = () => {
  return (
    <section className="bg-[#F2F1ED] text-[#181818] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with monumental typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase block mb-3">
              MATERIAL HONESTY
            </span>
            <h2 className="font-sans font-medium text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.95] text-[#181818] uppercase">
              DETAILS<br />
              <span className="font-serif italic font-normal lowercase text-[1.1em] text-[#3B3B3B]">
                define
              </span><br />
              DESIGN.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="font-sans text-sm md:text-base text-[#3B3B3B] leading-relaxed border-l-2 border-[#181818] pl-4">
              "From material selection to the smallest finishing detail, every element contributes to the final experience."
            </p>
          </div>
        </div>

        {/* Masonry / Collage Grid with Clip Path reveals */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {MATERIALS_COLLAGE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className={`relative overflow-hidden group bg-[#292929] ${item.span} aspect-[16/10]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-[#B5A48B] uppercase block">
                    {item.type}
                  </span>
                  <h3 className="font-sans text-base sm:text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-[#B6B6B2] opacity-0 group-hover:opacity-100 transition-opacity">
                  TACTILE ARCHIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
