import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const statementWords = [
    { text: 'WE', italic: false },
    { text: "DON'T", italic: false },
    { text: 'JUST', italic: false },
    { text: 'DESIGN', italic: false },
    { text: 'INTERIORS.', italic: true },
    { text: 'WE', italic: false },
    { text: 'CREATE', italic: false },
    { text: 'SPACES', italic: false },
    { text: 'THAT', italic: false },
    { text: 'CHANGE', italic: true },
    { text: 'THE', italic: false },
    { text: 'WAY', italic: false },
    { text: 'YOU', italic: false },
    { text: 'LIVE.', italic: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F2F1ED] text-[#181818] py-28 md:py-40 px-6 md:px-12 border-b border-[#8A8A86]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Label */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#181818]" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
                01 / WHO WE ARE
              </span>
            </div>
          </div>

          {/* Right Statement & Scroll Text Reveal */}
          <div className="lg:col-span-9 space-y-12">
            <h2 className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight text-[#181818]">
              {statementWords.map((item, index) => {
                const step = 1 / statementWords.length;
                const start = index * step;
                const end = start + step * 1.5;

                return (
                  <WordReveal
                    key={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                    italic={item.italic}
                    text={item.text}
                  />
                );
              })}
            </h2>

            {/* Description & Detail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="pt-8 border-t border-[#8A8A86]/20 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm leading-relaxed text-[#3B3B3B] font-sans"
            >
              <p>
                AA Designo transforms residential and commercial spaces through
                thoughtful planning, refined materials and timeless design.
              </p>
              <p className="text-[#8A8A86]">
                Rooted in architectural discipline, we reject surface trends in
                pursuit of proportion, sensory depth, and enduring emotional
                resonance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface WordRevealProps {
  progress: any;
  range: [number, number];
  italic?: boolean;
  text: string;
}

const WordReveal: React.FC<WordRevealProps> = ({ progress, range, italic, text }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(progress, range, ['#8A8A86', '#181818']);

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-3 sm:mr-4 transition-colors duration-200 ${
        italic ? 'font-serif italic font-normal tracking-normal text-[#181818]' : ''
      }`}
    >
      {text}
    </motion.span>
  );
};
