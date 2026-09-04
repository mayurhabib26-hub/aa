import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'drag' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer / touch
    if (typeof window !== 'undefined') {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      setIsTouch(!finePointer);
      if (!finePointer) return;

      document.body.classList.add('custom-cursor-active');
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') setCursorType('view');
        else if (type === 'drag') setCursorType('drag');
        else setCursorType('link');
        return;
      }

      const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
      if (interactive) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: cursorType === 'view' ? 1 : cursorType === 'drag' ? 1 : cursorType === 'link' ? 1.4 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 350,
        mass: 0.15,
      }}
    >
      {cursorType === 'default' && (
        <div className="w-3 h-3 rounded-full bg-[#181818] shadow-sm ring-2 ring-white/40" />
      )}

      {cursorType === 'link' && (
        <div className="w-8 h-8 rounded-full border border-[#181818] bg-[#181818]/10 backdrop-blur-[2px] transition-all" />
      )}

      {cursorType === 'view' && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="w-24 h-24 rounded-full bg-[#181818]/90 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/20 p-2 text-center"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] font-medium uppercase leading-tight text-[#F2F1ED]">
            VIEW<br />PROJECT
          </span>
        </motion.div>
      )}

      {cursorType === 'drag' && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="w-20 h-20 rounded-full bg-[#181818]/90 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/20"
        >
          <span className="font-sans text-[11px] tracking-[0.25em] font-medium uppercase text-[#F2F1ED]">
            DRAG
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};
