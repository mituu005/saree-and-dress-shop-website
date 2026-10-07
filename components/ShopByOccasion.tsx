'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { OCCASIONS } from '@/lib/products'
import { useSilkReveal } from '@/hooks/useSilkReveal'

export default function ShopByOccasion() {
  const containerRef = useSilkReveal<HTMLElement>({
    selector: '.bento-card',
    stagger: 0.1,
  })

  const tallOccasion = OCCASIONS[0]
  const stackedOccasions = OCCASIONS.slice(1)

  return (
    <section
      id="occasions"
      ref={containerRef}
      className="bg-[#FAF7F2] text-[#1C1512] py-24 sm:py-32 relative select-none border-t border-[#1C1512]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#1C1512]/10 pb-8">
          <div>
            <span className="overline-luxury block mb-2">
              04 / EDITORIAL CURATION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              Shop by <span className="font-editorial-italic text-[#C9A24B]">Occasion.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#1C1512]/70 font-body font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
            Curated wardrobes organized by ritual and celebration — from royal mandap vows to intimate Mediterranean soirées.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Tall Card Left: Wedding & Bridal */}
          <div className="bento-card lg:col-span-6 group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/5] lg:aspect-auto lg:h-[620px] bg-[#1C1512] shadow-xl">
            <Image
              src={tallOccasion.image}
              alt={tallOccasion.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Soft Dark Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[9px] uppercase tracking-[0.24em] font-body font-semibold text-[#1C1512]">
                {tallOccasion.itemCount}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-body font-semibold block mb-1">
                  Ceremonial Edit
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F2] font-normal leading-tight">
                  {tallOccasion.title}
                </h3>
                <p className="text-xs text-white/80 font-body font-light mt-2 max-w-sm">
                  {tallOccasion.subtitle}
                </p>
              </div>

              {/* Sliding Gold Pill on Hover */}
              <a
                href="#new-arrivals"
                className="btn-gold-pill opacity-90 sm:opacity-0 sm:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0"
              >
                <span>Explore</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Stacked Cards Right */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            {stackedOccasions.map((occ) => (
              <div
                key={occ.id}
                className="bento-card group relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/7] lg:h-[188px] bg-[#1C1512] shadow-lg"
              >
                <Image
                  src={occ.image}
                  alt={occ.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-5">
                  <span className="px-3 py-0.5 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[8.5px] uppercase tracking-[0.22em] font-body font-semibold text-[#1C1512]">
                    {occ.itemCount}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-[#FAF7F2] font-normal leading-snug">
                      {occ.title}
                    </h3>
                    <p className="text-[11px] text-white/75 font-body font-light line-clamp-1 mt-0.5">
                      {occ.subtitle}
                    </p>
                  </div>

                  <a
                    href="#new-arrivals"
                    className="btn-gold-pill py-2 px-5 text-[10px] opacity-90 sm:opacity-0 sm:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
