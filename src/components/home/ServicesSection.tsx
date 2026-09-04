import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../../data/content';

interface ServicesSectionProps {
  onExploreServiceDetails: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onExploreServiceDetails,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#181818] text-[#F2F1ED] py-28 md:py-36 px-6 md:px-12 border-b border-[#292929] relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 arch-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#B5A48B]" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
                03 / WHAT WE DO
              </span>
            </div>
            <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              From empty spaces<br />
              <span className="text-[#8A8A86]">to extraordinary places.</span>
            </h2>
          </div>

          <button
            onClick={onExploreServiceDetails}
            className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.22em] uppercase text-[#F2F1ED] pb-1 border-b border-[#F2F1ED] hover:text-[#B5A48B] hover:border-[#B5A48B] transition-colors self-start md:self-auto"
          >
            <span>Detailed Service Breakdown</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Accordion Rows Layout with Hover Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Accordion Rows List */}
          <div className="lg:col-span-8 divide-y divide-[#292929] border-y border-[#292929]">
            {SERVICES.map((service, index) => {
              const isExpanded = expandedIndex === index;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`transition-colors duration-300 ${
                    isHovered ? 'bg-[#222222]/80' : 'bg-transparent'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-mono text-xs sm:text-sm tracking-widest text-[#8A8A86]">
                        {service.number}
                      </span>
                      <h3
                        className={`font-sans text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-transform duration-300 ${
                          isHovered ? 'translate-x-3 text-white' : 'text-[#F2F1ED]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full border border-[#3B3B3B] flex items-center justify-center transition-transform duration-300 ${
                          isExpanded
                            ? 'rotate-45 bg-white text-[#181818]'
                            : 'group-hover:border-[#B5A48B] group-hover:text-[#B5A48B]'
                        }`}
                      >
                        <Plus size={16} />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content with smooth height animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden px-4 sm:px-6 pb-8"
                      >
                        <div className="pt-2 pl-8 sm:pl-16 space-y-4 max-w-2xl">
                          <p className="font-serif italic text-lg text-[#B5A48B]">
                            "{service.tagline}"
                          </p>
                          <p className="font-sans text-sm text-[#B6B6B2] leading-relaxed">
                            {service.description}
                          </p>

                          {/* Deliverables tags */}
                          <div className="pt-4 flex flex-wrap gap-2">
                            {service.deliverables.map((item, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-mono tracking-wider uppercase bg-[#292929] px-3 py-1 text-[#8A8A86] border border-[#3B3B3B]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Preview on Right */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#222222] border border-[#292929]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredIndex !== null ? hoveredIndex : expandedIndex !== null ? expandedIndex : 0}
                  src={
                    SERVICES[hoveredIndex !== null ? hoveredIndex : expandedIndex !== null ? expandedIndex : 0]?.image
                  }
                  alt="Service preview"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#181818]/90 backdrop-blur-md border border-white/10 text-xs">
                <span className="font-mono text-[10px] tracking-widest text-[#B5A48B] uppercase block">
                  SPATIAL PRACTICE
                </span>
                <p className="font-sans font-medium text-white mt-0.5">
                  {SERVICES[hoveredIndex !== null ? hoveredIndex : expandedIndex !== null ? expandedIndex : 0]?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
