import React from 'react';
import { ArrowUpRight, Instagram, ArrowUp } from 'lucide-react';
import { AADesignoLogo } from './Logo';
import { NavPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onSelectService,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-[#F2F1ED] relative overflow-hidden pt-20 pb-12 border-t border-[#292929]">
      {/* Subtle architectural background diagonal */}
      <div className="absolute top-0 right-0 w-96 h-96 border-b border-l border-white/[0.03] pointer-events-none -rotate-12 translate-x-32 -translate-y-32" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#292929]">
          {/* Left Column: Brand & Statement */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <AADesignoLogo size="lg" variant="white" showText={true} showSubtitle={true} />
              <p className="mt-6 text-[#B6B6B2] text-sm leading-relaxed max-w-sm font-sans">
                Interior spaces designed around the way you live, work and experience the world.
                Crafted with architectural discipline, material honesty, and timeless restraint.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#292929]">
              <span className="text-[10px] tracking-[0.25em] text-[#8A8A86] uppercase block mb-1">
                INSTAGRAM
              </span>
              <a
                href="https://www.instagram.com/aa_designo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#F2F1ED] hover:text-[#B5A48B] transition-colors group"
              >
                <Instagram size={15} />
                <span>@aa_designo_</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Middle Column 1: Explore */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#8A8A86] uppercase mb-6">
              EXPLORE
            </h3>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase">
              {[
                { label: 'Home', page: 'home' as NavPage },
                { label: 'Studio', page: 'studio' as NavPage },
                { label: 'Projects', page: 'projects' as NavPage },
                { label: 'Services', page: 'services' as NavPage },
                { label: 'Process', page: 'process' as NavPage },
                { label: 'Contact', page: 'contact' as NavPage },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#B6B6B2] hover:text-white transition-colors text-left focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column 2: Services */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono tracking-[0.25em] text-[#8A8A86] uppercase mb-6">
              SERVICES
            </h3>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase">
              {[
                'Residential',
                'Commercial',
                'Workspaces',
                'Renovations',
                'Turnkey Projects',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#B6B6B2] hover:text-white transition-colors text-left focus:outline-none"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Get In Touch */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono tracking-[0.25em] text-[#8A8A86] uppercase mb-6">
                GET IN TOUCH
              </h3>
              <div className="space-y-4 text-xs font-sans">
                <div>
                  <span className="text-[#8A8A86] block text-[11px] mb-1">STUDIO LOCATION</span>
                  <p className="text-[#F2F1ED] leading-relaxed">
                    14 Indiranagar 100ft Road,<br />
                    Bangalore, Karnataka 560038
                  </p>
                </div>
                <div>
                  <span className="text-[#8A8A86] block text-[11px] mb-1">DIRECT INQUIRIES</span>
                  <a
                    href="mailto:contact@aadesigno.com"
                    className="text-[#F2F1ED] hover:text-[#B5A48B] transition-colors block"
                  >
                    contact@aadesigno.com
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="text-[#F2F1ED] hover:text-[#B5A48B] transition-colors block mt-1"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenContact}
                className="w-full group inline-flex items-center justify-between font-sans text-xs tracking-[0.2em] uppercase bg-white text-[#181818] px-5 py-3 rounded-full hover:bg-[#F2F1ED] transition-all duration-300 font-medium"
              >
                <span>Start A Project</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Massive Monumental Typography: AA DESIGNO */}
        <div className="pt-16 pb-10 text-center select-none overflow-hidden">
          <div className="font-sans font-extrabold text-[13vw] leading-none tracking-[-0.04em] text-[#292929] opacity-40 hover:opacity-60 transition-opacity duration-700 whitespace-nowrap">
            AA DESIGNO
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#292929]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#8A8A86]">
          <p>© 2026 AA Designo. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#B5A48B] transition-colors ml-4 focus:outline-none"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
