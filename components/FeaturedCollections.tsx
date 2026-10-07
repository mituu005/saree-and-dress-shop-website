'use client'

import React, { useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

interface CollectionItem {
  id: string
  number: string
  title: string
  subtitle: string
  desc: string
  priceStarting: string
  tag: string
  category: 'heritage' | 'bridal' | 'contemporary' | 'festive'
  image: string
}

const collectionsData: CollectionItem[] = [
  {
    id: 'kanjivaram',
    number: '01',
    title: 'Kanjivaram Silk Heirlooms',
    subtitle: 'The Golden Temple Weaves of Tamil Nadu',
    desc: 'Crafted with Korvai interlocking borders and real zari woven on three-shuttle handlooms in Kanchipuram.',
    priceStarting: '₹14,500',
    tag: 'GI-Certified Heritage',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'banarasi',
    number: '02',
    title: 'Banarasi Katan Brocade',
    subtitle: 'Varanasi Kadwa Weaves on Mulberry Silk',
    desc: 'Intricate floral jaals and shikargah motifs hand-embroidered into pure silk over sixty days of loom artisanry.',
    priceStarting: '₹18,900',
    tag: 'Pure Zari Masterpiece',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bridal',
    number: '03',
    title: 'The Royal Bridal Trousseau',
    subtitle: 'Ceremonial Vermilion & Crimson Silks',
    desc: 'Designed for the sanctum of the mandap and timeless pheras. Heirlooms blessed with enduring majesty.',
    priceStarting: '₹26,000',
    tag: 'Couture Bridal Edit',
    category: 'bridal',
    image: '/images/wedding-bridal.jpg',
  },
  {
    id: 'chanderi',
    number: '04',
    title: 'Chanderi & Gossamer Organza',
    subtitle: 'Featherlight Weaves with Hand-Painted Florals',
    desc: 'Delicate sheer drapes spun from sheer cotton-silk yarn, bordered with delicate scalloped cutwork and pearl drops.',
    priceStarting: '₹7,800',
    tag: 'Daytime Celebrations',
    category: 'contemporary',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'tissue',
    number: '05',
    title: 'Molten Tissue & Metallic Silk',
    subtitle: 'Subtle Golden Sheen for Soirées',
    desc: 'Woven with warp of metallic zari threads and weft of lustrous silk to catch evening candlelight with effortless glamour.',
    priceStarting: '₹12,500',
    tag: 'Evening Cocktail Edit',
    category: 'festive',
    image: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'everyday-luxe',
    number: '06',
    title: 'Everyday Royal Cottons & Silks',
    subtitle: 'Lyrical Drapes for Connoisseurs',
    desc: 'Breathable hand-spun fine counts with contrasting temple selvedges, designed for effortless daily elegance.',
    priceStarting: '₹3,400',
    tag: 'Everyday Elegance',
    category: 'contemporary',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState<'all' | 'heritage' | 'bridal' | 'contemporary' | 'festive'>('all')

  const filtered = activeTab === 'all' 
    ? collectionsData 
    : collectionsData.filter(item => item.category === activeTab)

  return (
    <section id="collections" className="bg-[#12100e] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with Editorial Balance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-10 bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean font-medium">
                02 / Signature Portfolios
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] tracking-tight">
              Featured <em className="italic text-[#e1cba7] font-normal">Collections.</em>
            </h2>
          </div>

          {/* Luxury Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 md:mt-0 font-sans-clean">
            {[
              { id: 'all', label: 'All Portfolios' },
              { id: 'heritage', label: 'Heritage Silks' },
              { id: 'bridal', label: 'Bridal' },
              { id: 'contemporary', label: 'Contemporary' },
              { id: 'festive', label: 'Festive Edit' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.16em] transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c5a880] text-[#12100e] font-semibold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grand Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group relative bg-[#191614] rounded-2xl overflow-hidden border border-[#c5a880]/20 hover:border-[#c5a880]/60 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Image Container with Luxury Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-editorial-zoom group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191614] via-transparent to-black/30 pointer-events-none" />

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans-clean uppercase tracking-[0.2em]">
                  <span className="bg-[#12100e]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#e1cba7]">
                    {item.tag}
                  </span>
                  <span className="font-serif-luxury text-sm text-[#c5a880] font-light">
                    {item.number}
                  </span>
                </div>

                {/* Bottom Starting Price Badge */}
                <div className="absolute bottom-4 right-4 bg-[#12100e]/90 backdrop-blur-md px-3 py-1 rounded border border-[#c5a880]/30 text-right">
                  <span className="text-[9px] uppercase tracking-wider text-stone-400 block font-sans-clean">From</span>
                  <span className="font-serif-luxury text-sm text-[#f7f4ee] font-medium">{item.priceStarting}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#f7f4ee] group-hover:text-[#e1cba7] transition-colors font-light leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#c5a880] font-sans-clean mt-1 font-medium">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-stone-400 font-light leading-relaxed mt-3 font-sans-clean">
                    {item.desc}
                  </p>
                </div>

                {/* Card CTA Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#sarees"
                    className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-sans-clean text-[#f7f4ee] group-hover:text-[#c5a880] transition-colors"
                  >
                    <span>Explore Collection</span>
                    <ArrowUpRight size={13} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  <a
                    href={`https://wa.me/919876543210?text=Hello%20Aarohi%20Studio,%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.16em] text-[#c5a880]/80 hover:text-[#e1cba7] font-sans-clean transition-colors hover:underline underline-offset-4"
                    title="Enquire with Atelier Concierge"
                  >
                    Atelier Enquiry
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
