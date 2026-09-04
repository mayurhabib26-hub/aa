import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PROCESS_STEPS } from '../../data/content';

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.9'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="bg-[#F2F1ED] text-[#181818] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 bg-[#181818]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
              05 / OUR PROCESS
            </span>
          </div>
          <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#181818]">
            From concept<br />
            <span className="text-[#8A8A86]">to completion.</span>
          </h2>
          <p className="mt-6 text-[#3B3B3B] text-base leading-relaxed">
            Our 5-stage architectural methodology ensures seamless translation from
            initial aspiration into a tangible, impeccably built sanctuary.
          </p>
        </div>

        {/* Timeline Container with Animated Vertical Line */}
        <div className="relative pl-6 sm:pl-12 md:pl-20 border-l border-[#8A8A86]/20">
          {/* Animated Filling Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-[-1px] w-[2px] bg-[#181818]"
          />

          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="relative group"
              >
                {/* Node marker on the line */}
                <div className="absolute -left-[31px] sm:-left-[55px] md:-left-[87px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F2F1ED] border-2 border-[#181818] group-hover:bg-[#181818] transition-colors" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline">
                  {/* Step Number & Phase */}
                  <div className="lg:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono text-sm tracking-widest text-[#8A8A86]">
                      {step.number}
                    </span>
                    <h3 className="font-sans text-2xl md:text-3xl font-medium tracking-tight text-[#181818] uppercase">
                      {step.phase}
                    </h3>
                  </div>

                  {/* Summary & Details */}
                  <div className="lg:col-span-8 space-y-2">
                    <h4 className="font-sans text-lg font-medium text-[#181818]">
                      {step.title}
                    </h4>
                    <p className="font-sans text-sm text-[#3B3B3B] leading-relaxed max-w-2xl">
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
