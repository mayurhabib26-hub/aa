import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAll: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onViewAll,
}) => {
  const featuredList = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="bg-[#F2F1ED] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[#181818]" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
                02 / SELECTED WORK
              </span>
            </div>
            <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#181818]">
              Spaces we've transformed<span className="text-[#8A8A86]">.</span>
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.22em] uppercase text-[#181818] pb-1 border-b border-[#181818] hover:text-[#8A8A86] hover:border-[#8A8A86] transition-colors self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Alternating Editorial Project Rows */}
        <div className="space-y-28 md:space-y-40">
          {featuredList.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer"
                data-cursor="view"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Project Image Column */}
                  <div
                    className={`${
                      isEven ? 'lg:col-span-8' : 'lg:col-span-8 lg:order-2'
                    }`}
                  >
                    <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] bg-[#292929]">
                      <motion.img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                      />
                      {/* Subtle Darkening Overlay */}
                      <div className="absolute inset-0 bg-[#181818]/15 group-hover:bg-[#181818]/35 transition-colors duration-500" />

                      {/* Floating Project Number Badge */}
                      <div className="absolute top-6 left-6 px-3 py-1.5 bg-[#181818]/70 backdrop-blur-md text-[#F2F1ED] font-mono text-[11px] tracking-widest uppercase">
                        {project.number}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Column */}
                  <div
                    className={`${
                      isEven ? 'lg:col-span-4' : 'lg:col-span-4 lg:order-1'
                    } flex flex-col justify-center`}
                  >
                    <div className="space-y-4">
                      {/* Category & Location */}
                      <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-[#8A8A86] uppercase">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Title with subtle horizontal shift on hover */}
                      <h3 className="font-sans font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-[#181818] transition-transform duration-300 ease-out group-hover:translate-x-2">
                        {project.title}
                      </h3>

                      {/* Subtitle / Quote */}
                      <p className="font-sans text-sm text-[#3B3B3B] leading-relaxed">
                        {project.subtitle}
                      </p>

                      {/* Specs */}
                      <div className="pt-4 border-t border-[#8A8A86]/20 flex items-center justify-between text-xs font-sans text-[#8A8A86]">
                        <span>AREA: {project.area}</span>
                        <span className="group-hover:text-[#181818] transition-colors flex items-center gap-1 font-medium text-[11px] tracking-widest uppercase">
                          EXPLORE CASE STUDY ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Projects Footer Action */}
        <div className="mt-28 text-center pt-12 border-t border-[#8A8A86]/20">
          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase bg-[#181818] text-[#F2F1ED] px-8 py-4 rounded-full hover:bg-[#292929] transition-all duration-300 font-medium shadow-md"
          >
            <span>View All Architecture & Interiors</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
