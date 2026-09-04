import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Instagram } from 'lucide-react';
import { AADesignoLogo } from './Logo';
import { NavPage } from '../types';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: NavPage; number: string }[] = [
    { label: 'Home', page: 'home', number: '01' },
    { label: 'Studio', page: 'studio', number: '02' },
    { label: 'Projects', page: 'projects', number: '03' },
    { label: 'Services', page: 'services', number: '04' },
    { label: 'Process', page: 'process', number: '05' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHeroDark = currentPage === 'home' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled
            ? 'py-3.5 px-4 md:px-8'
            : 'py-6 md:py-8 px-6 md:px-12'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full ${
            isScrolled
              ? 'bg-[#F2F1ED]/80 backdrop-blur-md border border-[#8A8A86]/25 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-6 py-2.5'
              : 'bg-transparent px-0 py-0'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group focus:outline-none flex items-center text-left"
          >
            <AADesignoLogo
              size={isScrolled ? 'sm' : 'md'}
              variant={isHeroDark ? 'white' : 'dark'}
              showText={true}
              showSubtitle={false}
            />
          </button>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors py-1 focus:outline-none group ${
                    isHeroDark
                      ? isActive
                        ? 'text-white font-medium'
                        : 'text-[#B6B6B2] hover:text-white'
                      : isActive
                      ? 'text-[#181818] font-medium'
                      : 'text-[#8A8A86] hover:text-[#181818]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] ${
                        isHeroDark ? 'bg-white' : 'bg-[#181818]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span
                      className={`absolute -bottom-0.5 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                        isHeroDark ? 'bg-white/60' : 'bg-[#181818]/60'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className={`group inline-flex items-center gap-2 font-sans text-xs tracking-[0.22em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                isHeroDark
                  ? 'bg-white text-[#181818] hover:bg-[#F2F1ED]'
                  : isScrolled
                  ? 'bg-[#181818] text-[#F2F1ED] hover:bg-[#292929]'
                  : 'bg-[#181818] text-[#F2F1ED] hover:bg-[#292929]'
              }`}
            >
              <span>Let's Talk</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${
              isHeroDark
                ? 'text-white hover:bg-white/10'
                : 'text-[#181818] hover:bg-[#181818]/5'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile / Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#181818] text-white flex flex-col justify-between p-8 md:p-12 overflow-y-auto"
          >
            {/* Header in mobile menu */}
            <div className="flex items-center justify-between">
              <AADesignoLogo size="md" variant="white" showText={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F2F1ED] hover:text-white rounded-full border border-white/10 hover:border-white/30 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <div className="my-auto py-8 flex flex-col gap-5">
              {[...navLinks, { label: 'Contact', page: 'contact' as NavPage, number: '06' }].map(
                (link, idx) => (
                  <motion.div
                    key={link.page}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + idx * 0.08,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => handleNavClick(link.page)}
                      className="group flex items-baseline gap-4 text-left w-full py-1 focus:outline-none"
                    >
                      <span className="font-mono text-xs tracking-widest text-[#8A8A86] group-hover:text-white transition-colors">
                        {link.number}
                      </span>
                      <span className="font-sans text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase text-[#F2F1ED] group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#B5A48B]"
                      />
                    </button>
                  </motion.div>
                )
              )}
            </div>

            {/* Bottom Footer Info inside Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-t border-[#292929] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans tracking-wider text-[#8A8A86]"
            >
              <div>
                <p className="text-white font-medium">Bangalore, India</p>
                <p>contact@aadesigno.com • +91 98765 43210</p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/aa_designo_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F2F1ED] hover:text-[#B5A48B] transition-colors"
                >
                  <Instagram size={16} />
                  <span>@aa_designo_ ↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
