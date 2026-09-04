import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Award, Compass, Layers, ShieldCheck } from 'lucide-react';
import { CtaSection } from '../home/CtaSection';

interface StudioPageProps {
  onStartProject: () => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onStartProject }) => {
  const milestones = [
    {
      year: '2016',
      title: 'Studio Inception',
      desc: 'Founded in Bangalore with a radical commitment to architectural minimalism, honest materiality, and bespoke spatial curation.',
    },
    {
      year: '2019',
      title: 'Expanding Typologies',
      desc: 'Commissioned for our first multi-acre hill retreat and flagship executive headquarters, proving residential intimacy at commercial scale.',
    },
    {
      year: '2022',
      title: 'Architectural Craft Guild',
      desc: 'Established our proprietary network of master stone masons, timber craftsmen, and lighting fabricators across South India.',
    },
    {
      year: '2026',
      title: 'International Recognition',
      desc: 'Over 50+ completed architectural and interior sanctuaries celebrated for understated elegance and enduring tactile permanence.',
    },
  ];

  const awards = [
    'Architectural Digest India Design Excellence 2025',
    'South Asian Interior Architecture Laurels — Best Luxury Residence',
    'Good Design Spatial Award — The Executive Office Headquarters',
    'Eco-Conscious Adaptive Reuse Citation — The Heritage Bungalow',
  ];

  return (
    <div className="pt-28 bg-[#F2F1ED] text-[#181818] min-h-screen">
      {/* Studio Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="space-y-6 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#181818]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8A86] uppercase">
              THE STUDIO & ETHOS
            </span>
          </div>

          <h1 className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#181818] uppercase">
            DESIGN<br />
            WITH<br />
            <span className="font-serif italic font-normal lowercase text-[1.15em] text-[#3B3B3B]">
              intention.
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#3B3B3B] max-w-2xl leading-relaxed pt-6">
            AA Designo is an international-caliber interior design and architecture
            studio crafting quiet, sensory environments that honor the rituals of
            everyday life.
          </p>
        </div>
      </section>

      {/* Main Studio Photography & Narrative */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#292929]">
              <img
                src="/images/photo-1600585154340-be6161a56a0c.jpg"
                alt="Studio interior"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-xs text-[#8A8A86] tracking-widest block">
              STUDIO ATELIER • MATERIAL ARCHIVE & PHYSICAL DRAFTING BENCH
            </span>
          </div>

          <div className="lg:col-span-5 space-y-8 font-sans text-sm md:text-base text-[#3B3B3B] leading-relaxed">
            <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-tight text-[#181818]">
              "We reject the fleeting noise of decoration in favor of spatial permanence."
            </h2>
            <p>
              Founded on the belief that environment silently conditions the human spirit,
              AA Designo operates at the juncture of structural rigor and tactile warmth.
              Every line drawn is an invitation for natural daylight; every surface selected
              must possess depth, patina, and genuine structural truth.
            </p>
            <p className="text-[#8A8A86]">
              From monolithic villas nestled in coastal contours to discreet private
              penthouses and corporate sanctuaries, our practice remains boutique by design.
              We take on a strictly limited cadence of commissions annually to preserve
              meticulous, white-glove artisan stewardship over every millwork tolerance.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Principle Section */}
      <section className="bg-[#181818] text-[#F2F1ED] px-6 md:px-12 py-28 border-b border-[#292929]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#292929] border border-white/10">
                <img
                  src="/images/photo-1507003211169-0a1dd7228f2d.jpg"
                  alt="Principal Architect"
                  className="w-full h-full object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-[#181818]/20" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 lg:pl-8">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#B5A48B] uppercase block mb-3">
                  PRINCIPAL & FOUNDING VISION
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase">
                  Aravind & Associates
                </h2>
                <p className="font-serif italic text-xl text-[#B6B6B2] mt-2">
                  Principal Architect & Design Director
                </p>
              </div>

              <blockquote className="font-sans text-sm md:text-base text-[#B6B6B2] leading-relaxed border-l-2 border-[#B5A48B] pl-6 space-y-4">
                <p>
                  "True luxury in contemporary architecture is not gilded ornamentation;
                  it is silence, proportion, and light. When a space is designed with
                  pure clarity, the human mind settles instantly."
                </p>
                <p className="text-xs font-mono text-[#8A8A86] tracking-widest">
                  M.ARCH • COUNCIL OF ARCHITECTURE REGISTERED
                </p>
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono text-[#8A8A86]">
                <div>
                  <span className="text-white text-base block font-sans font-medium">10+ Yrs</span>
                  PRACTICE TENURE
                </div>
                <div>
                  <span className="text-white text-base block font-sans font-medium">50+ Projects</span>
                  BUILT PORTFOLIO
                </div>
                <div>
                  <span className="text-white text-base block font-sans font-medium">100% Bespoke</span>
                  MATERIAL PROTOCOLS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 md:px-12 py-28 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase block mb-3">
            STUDIO CHRONOLOGY
          </span>
          <h2 className="font-sans font-medium text-4xl md:text-5xl tracking-tight text-[#181818]">
            Milestones of architectural restraint.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m) => (
            <div key={m.year} className="space-y-4 pt-6 border-t-2 border-[#181818]">
              <span className="font-mono text-2xl font-semibold tracking-tight text-[#181818]">
                {m.year}
              </span>
              <h3 className="font-sans text-lg font-medium text-[#181818]">
                {m.title}
              </h3>
              <p className="font-sans text-xs text-[#3B3B3B] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Accolades & Press */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs tracking-widest text-[#8A8A86] uppercase block mb-2">
              ACCOLADES
            </span>
            <h2 className="font-sans text-3xl font-medium tracking-tight text-[#181818]">
              Recognition & Distinction
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="py-4 border-b border-[#8A8A86]/20 flex items-center justify-between text-sm font-sans text-[#181818]"
              >
                <div className="flex items-center gap-4">
                  <Award size={18} className="text-[#8A8A86]" />
                  <span>{award}</span>
                </div>
                <span className="font-mono text-xs text-[#8A8A86]">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio CTA */}
      <CtaSection onStartProject={onStartProject} />
    </div>
  );
};
