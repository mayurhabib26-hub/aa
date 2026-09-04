import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const DesignPhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const principles = [
    {
      num: '01',
      name: 'Purpose',
      desc: 'Every design decision begins with how the space will be experienced, inhabited, and lived in daily.',
    },
    {
      num: '02',
      name: 'Proportion',
      desc: 'Balance, scale and spatial rhythm shape every project, orchestrating volume and voids in quiet harmony.',
    },
    {
      num: '03',
      name: 'Personality',
      desc: 'Every interior should reflect the authentic essence, memories, and aspirations of the people who inhabit it.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-[#F2F1ED] text-[#181818] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image with Parallax */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/5] bg-[#292929]">
              <motion.img
                style={{ y: imgY, scale: 1.12 }}
                src="/images/photo-1600585154526-990dced4db0d.jpg"
                alt="Architecture and spatial light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#181818]/10" />

              {/* Minimal architectural frame line */}
              <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/30 pointer-events-none" />
            </div>

            {/* Aesthetic badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#181818] text-[#F2F1ED] p-6 hidden sm:block max-w-xs border border-[#292929] shadow-xl">
              <span className="font-mono text-[10px] tracking-widest text-[#B5A48B] uppercase block">
                SPATIAL ESSENCE
              </span>
              <p className="font-serif italic text-sm mt-1 text-[#F2F1ED]">
                "Architecture is frozen music; interiors are the living melody."
              </p>
            </div>
          </div>

          {/* Right Column: Approach & Principles */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 bg-[#181818]" />
                <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
                  04 / OUR APPROACH
                </span>
              </div>
              <h2 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-[#181818] uppercase">
                BEAUTY.<br />
                FUNCTION.<br />
                <span className="font-serif italic font-normal lowercase text-[1.15em] text-[#3B3B3B]">
                  balance.
                </span>
              </h2>
            </div>

            <p className="font-sans text-base text-[#3B3B3B] leading-relaxed max-w-xl">
              Our approach combines thoughtful spatial planning, material exploration
              and attention to detail to create interiors that remain relevant long
              after trends disappear.
            </p>

            {/* 3 Principles */}
            <div className="pt-6 border-t border-[#8A8A86]/25 space-y-8">
              {principles.map((p) => (
                <div key={p.num} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start">
                  <span className="sm:col-span-2 font-mono text-sm tracking-widest text-[#8A8A86]">
                    {p.num}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-sans text-lg font-medium text-[#181818] uppercase tracking-wide">
                      {p.name}
                    </h3>
                    <p className="font-sans text-sm text-[#3B3B3B] mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
