import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  allProjects?: Project[];
  onClose: () => void;
  onSelectProject?: (p: Project) => void;
  onStartProject?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#181818]/95 backdrop-blur-xl text-[#F2F1ED]"
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 bg-[#181818]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[#B5A48B] uppercase">
              {project.number}
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="font-sans text-xs tracking-wider uppercase text-white/80 hidden sm:inline">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white text-xs font-sans tracking-widest uppercase transition-colors"
          >
            <span>CLOSE</span>
            <X size={14} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
          {/* Project Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono tracking-widest text-[#8A8A86] uppercase">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>COMPLETED {project.year}</span>
              <span>•</span>
              <span className="text-[#B5A48B]">{project.area}</span>
            </div>

            <h1 className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
              {project.title}
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#B6B6B2] max-w-3xl">
              "{project.subtitle}"
            </p>
          </div>

          {/* Hero Project Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#292929] border border-white/10 shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-white/10 text-xs font-sans">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8A8A86] uppercase block">
                LOCATION
              </span>
              <p className="font-medium text-white mt-1">{project.location}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8A8A86] uppercase block">
                TOTAL FOOTPRINT
              </span>
              <p className="font-medium text-white mt-1">{project.area}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8A8A86] uppercase block">
                TYPOLOGY
              </span>
              <p className="font-medium text-white mt-1">{project.category}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8A8A86] uppercase block">
                YEAR
              </span>
              <p className="font-medium text-white mt-1">{project.year}</p>
            </div>
          </div>

          {/* Overview, Challenge, Concept Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs tracking-widest text-[#B5A48B] uppercase block mb-2">
                NARRATIVE
              </span>
              <h2 className="font-sans text-2xl font-medium text-white">
                Spatial Intention & Context
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 font-sans text-sm text-[#B6B6B2] leading-relaxed">
              <p>{project.overview}</p>
              <div className="p-6 bg-[#222222] border-l-2 border-[#B5A48B] space-y-2">
                <span className="font-mono text-[11px] tracking-widest uppercase text-white font-medium block">
                  THE ARCHITECTURAL CHALLENGE
                </span>
                <p className="text-xs text-[#8A8A86]">{project.challenge}</p>
              </div>
              <p><strong className="text-white">The Concept:</strong> {project.concept}</p>
            </div>
          </div>

          {/* Materials & Scope Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/10">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8A8A86] uppercase block mb-4">
                MATERIAL PALETTE
              </span>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((m, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-3 py-1.5 bg-[#242424] border border-[#333333] text-[#F2F1ED]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs tracking-widest text-[#8A8A86] uppercase block mb-4">
                SCOPE OF SERVICES
              </span>
              <div className="space-y-2 text-xs font-sans text-[#B6B6B2]">
                {project.services.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-[#B5A48B]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Before & After Interactive Slider (if available for this project) */}
          {project.beforeImage && project.afterImage && (
            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-widest text-[#B5A48B] uppercase">
                  TRANSFORMATION STUDY
                </span>
                <span className="text-xs text-[#8A8A86]">Drag horizontally</span>
              </div>

              <div
                className="relative aspect-[16/9] overflow-hidden bg-[#222222] select-none border border-white/10"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                  setSliderPos(pct);
                }}
              >
                <img
                  src={project.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={project.beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                />
                <span className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[10px] font-mono uppercase text-white">
                  BEFORE
                </span>
                <span className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 text-[10px] font-mono uppercase text-white">
                  AFTER
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
