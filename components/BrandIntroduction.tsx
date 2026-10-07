'use client'

import React from 'react'
import { Sparkles, ArrowUpRight, Award, Compass, Feather } from 'lucide-react'

export default function BrandIntroduction() {
  return (
    <section id="story" className="relative bg-[#191614] text-[#f7f4ee] section-pad-luxury overflow-hidden border-t border-[#c5a880]/15">
      
      {/* Ambient background watermark monogram */}
      <div className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-serif-luxury text-[22vw] text-white/[0.015] pointer-events-none select-none">
        AAROHI
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-12 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#c5a880] font-sans-clean font-medium">
            01 / The Atelier Philosophy
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Provocative Statement & Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] leading-[1.08] tracking-tight">
              Not just a saree. <br />
              <span className="italic font-normal text-[#e1cba7]">A story woven into</span> <br />
              every single thread.
            </h2>

            <p className="text-base sm:text-lg text-[#ede5d8]/85 font-light leading-relaxed mt-8 max-w-xl font-sans-clean">
              In the quiet hum of traditional pit-looms across Varanasi and Kanchipuram, our master weavers transform pure four-ply mulberry silk and hand-drawn silver zari into wearable poetry. Each saree is not manufactured for a season—it is commissioned to be passed down through generations.
            </p>

            <p className="text-sm text-stone-400 font-light leading-relaxed mt-4 max-w-lg font-sans-clean">
              Founded in 2012 in the historic art quarter of Kala Ghoda, Mumbai, Aarohi bridges centuries-old royal Indian textile iconography with the effortless silhouette demanded by the modern global bride.
            </p>

            {/* Editorial Badges / Pillars */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10 w-full max-w-xl">
              <div>
                <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#c5a880]">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans-clean mt-1 block">
                  Pure Mulberry Silk
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#c5a880]">24K</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans-clean mt-1 block">
                  Electroplated Gold Zari
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl sm:text-3xl text-[#c5a880]">40+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans-clean mt-1 block">
                  Master Loom Families
                </span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#craftsmanship"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-sans-clean text-[#c5a880] hover:text-[#e1cba7] border-b border-[#c5a880]/50 pb-1.5 transition-all group"
              >
                <span>Read the Art of Weaving Chapter</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Offset Photo Frame with Museum Caption */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Antique Gold Border Frame */}
              <div className="absolute -inset-3 border border-[#c5a880]/20 rounded-2xl -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl bg-[#12100e]">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                  alt="Aarohi Studio Bridal Heritage Saree Drape"
                  className="w-full h-full object-cover img-editorial-zoom"
                  loading="lazy"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Museum Plaque Caption */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#12100e]/95 backdrop-blur-md border border-[#c5a880]/30 p-5 rounded-lg shadow-2xl max-w-[270px]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean block mb-1">
                  Plate No. IV · Archives
                </span>
                <p className="font-serif-luxury text-base text-[#f7f4ee] italic leading-snug m-0">
                  &ldquo;A weave so fine, it flows like molten gold across the shoulder.&rdquo;
                </p>
                <span className="text-[10px] text-stone-400 font-sans-clean block mt-2">
                  Pure Kanjivaram Bridal Heirloom
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
