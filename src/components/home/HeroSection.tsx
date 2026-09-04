import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onStartProject,
}) => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#181818] text-white pt-28 pb-10 px-6 md:px-12">
      {/* Background Image with slow zoom-out and subtle dark gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/photo-1600210492486-724fe5c67fb0.jpg')`,
          }}
        />
        {/* Architectural subtle tint & vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-[#181818]/45" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-15 arch-grid-dark" />
      </motion.div>

      {/* Top spacer */}
      <div className="relative z-10" />

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow text */}
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="flex items-center gap-3"
          >
            <span className="w-6 h-[1px] bg-[#B5A48B]" />
            <span className="font-sans text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase text-[#F2F1ED]/90">
              INTERIOR DESIGN • ARCHITECTURE • SPATIAL EXPERIENCES
            </span>
          </motion.div>
        </div>

        {/* Oversized Headline with overflow-hidden mask reveals */}
        <div className="flex flex-col">
          {[
            { text: 'DESIGNING', serif: false },
            { text: 'SPACES THAT', serif: false },
            { text: 'FEEL LIKE [YOU]', serif: true },
          ].map((line, index) => (
            <div key={index} className="overflow-hidden leading-[0.9]">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.55 + index * 0.14,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="font-sans font-medium text-[11vw] md:text-[8vw] lg:text-[7.2vw] tracking-[-0.03em] uppercase text-[#FFFFFF] select-none"
              >
                {line.serif ? (
                  <>
                    FEEL LIKE{' '}
                    <span className="font-serif italic font-normal tracking-normal text-[#F2F1ED] lowercase text-[12vw] md:text-[9vw] lg:text-[8.5vw]">
                      you
                    </span>
                    <span className="font-sans text-[6vw] text-[#B5A48B] font-light">.</span>
                  </>
                ) : (
                  line.text
                )}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Supporting text & CTAs */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-t border-white/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[#B6B6B2] text-sm md:text-base max-w-md font-sans leading-relaxed font-light"
          >
            "We create thoughtfully designed interiors that balance beauty,
            functionality and individuality."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* CTA 1: Explore Projects */}
            <button
              onClick={onExploreProjects}
              className="group inline-flex items-center gap-2.5 font-sans text-xs tracking-[0.22em] uppercase bg-[#FFFFFF] text-[#181818] px-7 py-3.5 rounded-full hover:bg-[#F2F1ED] transition-all duration-300 font-medium"
            >
              <span>Explore Projects</span>
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>

            {/* CTA 2: Start Your Project */}
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-2.5 font-sans text-xs tracking-[0.22em] uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-3.5 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar: Scroll Indicator & Studio Mark */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-sans tracking-[0.25em] text-[#8A8A86] uppercase pt-4">
        {/* Bottom Left: Scroll */}
        <button
          onClick={onExploreProjects}
          className="inline-flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
          <span>Scroll to Explore</span>
        </button>

        {/* Bottom Right: Studio Identifier */}
        <div className="text-right hidden sm:block">
          <span>AA DESIGNO</span>
          <span className="mx-2 opacity-40">•</span>
          <span className="text-[#B6B6B2]">EST. / INTERIOR STUDIO</span>
        </div>
      </div>
    </section>
  );
};
