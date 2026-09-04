import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../../data/content';

export const InstagramSection: React.FC = () => {
  return (
    <section className="bg-[#F2F1ED] text-[#181818] py-28 md:py-36 px-6 md:px-12 border-b border-[#8A8A86]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8A86] uppercase block mb-3">
              VISUAL DIARY & DISPATCHES
            </span>
            <h2 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181818] uppercase">
              BEHIND THE<br />
              <span className="font-serif italic font-normal lowercase text-[1.1em] text-[#3B3B3B]">
                design.
              </span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/aa_designo_/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.22em] uppercase text-[#181818] pb-1 border-b border-[#181818] hover:text-[#8A8A86] hover:border-[#8A8A86] transition-colors self-start md:self-auto"
          >
            <Instagram size={15} />
            <span>Follow @aa_designo_</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/aa_designo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#292929] block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#181818]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white text-xs">
                <div className="flex items-center justify-between">
                  <Instagram size={14} />
                  <span className="font-mono text-[10px] text-[#B5A48B]">♥ {post.likes}</span>
                </div>
                <div>
                  <p className="line-clamp-2 text-[11px] font-sans text-[#F2F1ED] leading-tight">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-widest uppercase text-[#B5A48B] mt-2">
                    VIEW ON INSTAGRAM ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
