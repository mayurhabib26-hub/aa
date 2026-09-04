import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';
import { PROJECTS } from '../../data/content';
import { CtaSection } from '../home/CtaSection';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onStartProject: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onStartProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('ALL');

  const filters: ProjectCategory[] = [
    'ALL',
    'RESIDENTIAL',
    'COMMERCIAL',
    'WORKSPACES',
    'RENOVATION',
  ];

  const filteredProjects =
    selectedFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterCategory === selectedFilter);

  return (
    <div className="pt-28 bg-[#F2F1ED] text-[#181818] min-h-screen">
      {/* Archive Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-[#8A8A86]/20">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#181818]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8A86] uppercase">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <h1 className="font-sans font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#181818] uppercase">
            SELECTED<br />
            <span className="font-serif italic font-normal lowercase text-[1.15em] text-[#3B3B3B]">
              projects.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#3B3B3B] max-w-2xl leading-relaxed pt-4">
            A survey of built residences, corporate sanctuaries, and adaptive renovations
            grounded in material authenticity and spatial clarity.
          </p>
        </div>

        {/* Filter Bar with Framer Motion layout animations */}
        <div className="mt-14 pt-6 border-t border-[#8A8A86]/20 flex flex-wrap items-center gap-3 md:gap-4">
          {filters.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-[#181818] text-[#F2F1ED] font-medium shadow-sm'
                    : 'bg-transparent text-[#8A8A86] hover:text-[#181818] hover:bg-[#8A8A86]/10'
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="projectFilterBubble"
                    className="absolute inset-0 bg-[#181818] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Irregular Editorial Grid */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Alternating spans for irregular editorial layout
              const spanClass =
                index % 3 === 0
                  ? 'md:col-span-12 lg:col-span-8'
                  : index % 3 === 1
                  ? 'md:col-span-6 lg:col-span-4'
                  : 'md:col-span-6 lg:col-span-12';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer ${spanClass}`}
                  data-cursor="view"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#292929] mb-4">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#181818]/15 group-hover:bg-[#181818]/30 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest bg-[#181818]/80 backdrop-blur-sm px-3 py-1 text-white">
                      {project.number}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#8A8A86]/20">
                    <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A8A86]">
                      <span>{project.category} • {project.location}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <h3 className="font-sans text-2xl font-medium tracking-tight text-[#181818] group-hover:text-[#8A8A86] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#181818]"
                      />
                    </div>

                    <p className="font-sans text-xs text-[#3B3B3B] line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Projects CTA */}
      <CtaSection onStartProject={onStartProject} />
    </div>
  );
};
