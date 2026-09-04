import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { STATISTICS } from '../../data/content';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#181818] text-[#F2F1ED] py-24 md:py-32 px-6 md:px-12 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {STATISTICS.map((stat, index) => (
            <CounterCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    sublabel: string;
  };
}

const CounterCard: React.FC<CounterCardProps> = ({ stat }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="space-y-3 pt-6 border-t border-[#292929]">
      {/* Large Counter Number */}
      <div className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white flex items-baseline">
        <span>{count}</span>
        <span className="text-[#B5A48B] text-3xl sm:text-4xl ml-0.5">{stat.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="font-mono text-xs tracking-[0.2em] text-[#F2F1ED] uppercase font-semibold">
        {stat.label}
      </h3>

      {/* Sublabel */}
      <p className="font-sans text-xs text-[#8A8A86] leading-relaxed">
        {stat.sublabel}
      </p>
    </div>
  );
};
