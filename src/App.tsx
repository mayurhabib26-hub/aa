import React, { useState, useEffect } from 'react';
import { NavPage, Project } from './types';
import { PROJECTS } from './data/content';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Homepage Sections
import { HeroSection } from './components/home/HeroSection';
import { PhilosophySection } from './components/home/PhilosophySection';
import { FeaturedProjectsSection } from './components/home/FeaturedProjectsSection';
import { HorizontalShowcaseSection } from './components/home/HorizontalShowcaseSection';
import { ServicesSection } from './components/home/ServicesSection';
import { DesignPhilosophySection } from './components/home/DesignPhilosophySection';
import { BeforeAfterSection } from './components/home/BeforeAfterSection';
import { ProcessSection } from './components/home/ProcessSection';
import { StatisticsSection } from './components/home/StatisticsSection';
import { MaterialsSection } from './components/home/MaterialsSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { InstagramSection } from './components/home/InstagramSection';
import { CtaSection } from './components/home/CtaSection';

// Dedicated Sub-Pages
import { StudioPage } from './components/pages/StudioPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectModal } from './components/pages/ProjectModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectByTitle = (title: string) => {
    const found = PROJECTS.find((p) => p.title.toLowerCase().includes(title.toLowerCase()));
    if (found) {
      setSelectedProject(found);
    } else {
      setSelectedProject(PROJECTS[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F1ED] text-[#181818] relative selection:bg-[#181818] selection:text-[#F2F1ED] font-sans antialiased">
      {/* Luxury Page Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Desktop Architectural Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main Viewport Content Routing */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* Section 01: Hero */}
            <HeroSection
              onExploreProjects={() => {
                const el = document.getElementById('section-featured-work');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('projects');
                }
              }}
              onStartProject={() => handleNavigate('contact')}
            />

            {/* Section 02: Introduction / Philosophy */}
            <PhilosophySection />

            {/* Section 03: Featured Projects */}
            <div id="section-featured-work">
              <FeaturedProjectsSection
                projects={PROJECTS}
                onSelectProject={(project) => setSelectedProject(project)}
                onViewAll={() => handleNavigate('projects')}
              />
            </div>

            {/* Section 04: Horizontal Project Showcase */}
            <HorizontalShowcaseSection
              onSelectProjectByTitle={handleSelectProjectByTitle}
            />

            {/* Section 05: Services */}
            <ServicesSection
              onExploreServiceDetails={() => handleNavigate('services')}
            />

            {/* Section 06: Design Philosophy */}
            <DesignPhilosophySection />

            {/* Section 07: Before / After Transformation */}
            <BeforeAfterSection />

            {/* Section 08: Process */}
            <ProcessSection />

            {/* Section 09: Project Statistics */}
            <StatisticsSection />

            {/* Section 10: Materials / Details */}
            <MaterialsSection />

            {/* Section 11: Testimonials */}
            <TestimonialsSection />

            {/* Section 12: Instagram */}
            <InstagramSection />

            {/* Section 13: CTA */}
            <CtaSection onStartProject={() => handleNavigate('contact')} />
          </>
        )}

        {currentPage === 'studio' && (
          <StudioPage onStartProject={() => handleNavigate('contact')} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(project) => setSelectedProject(project)}
            onStartProject={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onStartProject={() => handleNavigate('contact')} />
        )}

        {currentPage === 'process' && (
          <div className="pt-28 bg-[#F2F1ED] min-h-screen">
            <ProcessSection />
            <BeforeAfterSection />
            <CtaSection onStartProject={() => handleNavigate('contact')} />
          </div>
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onStartProject={() => {
          setSelectedProject(null);
          handleNavigate('contact');
        }}
      />

      {/* Monumental Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
      />
    </div>
  );
}
