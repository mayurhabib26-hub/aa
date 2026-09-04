import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { CtaSection } from '../home/CtaSection';

interface ServicesPageProps {
  onStartProject: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onStartProject }) => {
  return (
    <div className="pt-28 bg-[#F2F1ED] text-[#181818] min-h-screen">
      {/* Services Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#181818]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8A86] uppercase">
              CAPABILITIES & METHODOLOGY
            </span>
          </div>

          <h1 className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#181818] uppercase">
            WE DESIGN<br />
            HOW YOU<br />
            <span className="font-serif italic font-normal lowercase text-[1.15em] text-[#3B3B3B]">
              experience space.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#3B3B3B] max-w-2xl leading-relaxed pt-4">
            From comprehensive residential masterplans to boutique commercial pavilions,
            we guide clients through a cohesive, tactile continuum of architectural design.
          </p>
        </div>
      </section>

      {/* Services Deep Dive Grid */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="space-y-32">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#292929]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 font-mono text-xs tracking-widest bg-[#181818]/80 text-white px-3 py-1">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#8A8A86] uppercase">
                    <span>DISCIPLINE {service.number}</span>
                  </div>

                  <h2 className="font-sans text-3xl sm:text-4xl font-medium tracking-tight text-[#181818]">
                    {service.title}
                  </h2>

                  <p className="font-serif italic text-lg text-[#3B3B3B]">
                    "{service.tagline}"
                  </p>

                  <p className="font-sans text-sm text-[#3B3B3B] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope of deliverables */}
                  <div className="pt-4 border-t border-[#8A8A86]/20 space-y-3">
                    <span className="font-mono text-[11px] tracking-widest uppercase text-[#8A8A86] block">
                      CORE DELIVERABLES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-sans text-[#181818]"
                        >
                          <CheckCircle2 size={13} className="text-[#8A8A86] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onStartProject}
                      className="group inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#181818] font-medium border-b border-[#181818] pb-1 hover:text-[#8A8A86] transition-colors"
                    >
                      <span>Commission this service</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services CTA */}
      <CtaSection onStartProject={onStartProject} />
    </div>
  );
};
