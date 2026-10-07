'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const editorials = [
  {
    title: 'The Morning Pheras in Varanasi Crimson',
    caption: 'Woven with eighty thousand handloom picks of pure silver zari.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    category: 'The Wedding Album',
    span: 'col-span-12 md:col-span-7',
  },
  {
    title: 'An Intimate Evening at Kala Ghoda',
    caption: 'Featherlight tissue drapes catching ambient candlelight.',
    image: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?auto=format&fit=crop&w=1000&q=85',
    category: 'Cocktail & Soirée',
    span: 'col-span-12 md:col-span-5',
  },
  {
    title: 'The Royal Sangeet in Molten Gold',
    caption: 'Interlocking Korvai borders that sculpt the modern silhouette.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    category: 'Festive Grandeur',
    span: 'col-span-12 md:col-span-5',
  },
  {
    title: 'The Art of the Heirloom Drape',
    caption: 'Photographed inside the private vaults of our heritage weavers.',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
    category: 'Editorial Campaign',
    span: 'col-span-12 md:col-span-7',
  },
]

export default function EditorialSection() {
  return (
    <section id="editorial" className="bg-[#12100e] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-10 bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean font-medium">
                06 / Editorial Lookbook
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] tracking-tight">
              Worn with <em className="italic text-[#e1cba7] font-normal">Grace.</em>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-light max-w-sm mt-4 md:mt-0 font-sans-clean">
            Sarees that move with natural poise, designed to capture the unforgettable light of life’s most celebrated milestones.
          </p>
        </div>

        {/* Asymmetrical High-Fashion Magazine Layout */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10">
          {editorials.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} group relative rounded-2xl overflow-hidden bg-[#191614] border border-[#c5a880]/20 hover:border-[#c5a880]/60 transition-all duration-700 shadow-xl flex flex-col justify-end`}
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-editorial-zoom group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Editorial Vignette & Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5">
                  <span className="bg-[#12100e]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-[0.24em] text-[#e1cba7] font-sans-clean">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl text-[#f7f4ee] font-light leading-snug m-0">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-300 font-light mt-1 max-w-md font-sans-clean">
                      {item.caption}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-sans-clean text-[#c5a880] hover:text-[#e1cba7] flex-shrink-0 group-hover:underline underline-offset-4"
                  >
                    <span>Request Drape</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
