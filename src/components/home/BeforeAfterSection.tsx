import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="bg-[#181818] text-[#F2F1ED] py-28 md:py-36 px-6 md:px-12 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#B5A48B]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase">
              RESTORATION & REMODELING
            </span>
            <span className="w-2 h-2 bg-[#B5A48B]" />
          </div>
          <h2 className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            See the transformation<span className="text-[#B5A48B]">.</span>
          </h2>
          <p className="mt-4 text-[#8A8A86] text-sm max-w-md mx-auto">
            Drag the divider to experience the architectural reimagining of spatial volumes, lighting, and materiality.
          </p>
        </div>

        {/* Dual Image Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden select-none cursor-ew-resize bg-[#292929] shadow-2xl border border-white/10"
          data-cursor="drag"
        >
          {/* AFTER Image (Full background) */}
          <img
            src="/images/photo-1600210492486-724fe5c67fb0.jpg"
            alt="After Renovation - The Monochrome Residence"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/images/photo-1513694203232-719a280e022f.jpg"
              alt="Before Renovation"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? containerRef.current.clientWidth : '100%',
                height: '100%',
              }}
            />
            {/* Subtle vintage filter for before */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          </div>

          {/* Drag Handle Divider */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Circular Thumb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#181818] border border-white/60 text-white flex items-center justify-center shadow-2xl backdrop-blur-md">
              <MoveHorizontal size={16} />
            </div>
          </div>

          {/* Badges for BEFORE / AFTER */}
          <div className="absolute top-6 left-6 px-3 py-1 bg-[#181818]/80 backdrop-blur-md text-[#F2F1ED] font-mono text-[11px] tracking-widest uppercase border border-white/10 pointer-events-none">
            BEFORE
          </div>
          <div className="absolute top-6 right-6 px-3 py-1 bg-[#181818]/80 backdrop-blur-md text-[#F2F1ED] font-mono text-[11px] tracking-widest uppercase border border-white/10 pointer-events-none">
            AFTER
          </div>
        </div>

        {/* Project Information Below */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-4 border-t border-[#292929] text-xs font-sans">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#8A8A86] uppercase block">
              CASE TRANSFORMATION
            </span>
            <h3 className="font-sans text-base font-medium text-white mt-1">
              Residential Renovation • Living Room Transformation
            </h3>
          </div>

          <div className="flex items-center gap-6 text-[#8A8A86] font-mono text-[11px]">
            <span>LOCATION: BANGALORE</span>
            <span>TIMELINE: 16 WEEKS</span>
            <span className="text-[#B5A48B]">COMPLETE TURNKEY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
