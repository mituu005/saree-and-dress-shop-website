'use client'

import React from 'react'
import { Award, ShieldCheck, Scissors, Gift, Sparkles, HeartHandshake } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'GI-Certified Authenticity',
    desc: 'Each Kanjivaram and Banarasi carries authentic Geographical Indication provenance and Silk Mark certification guaranteeing 100% natural mulberry silk.',
  },
  {
    icon: HeartHandshake,
    title: 'Direct Artisan Patronage',
    desc: 'We work directly with 40+ multi-generational weaving families in Kanchipuram and Varanasi, eliminating commercial intermediaries to support the craft.',
  },
  {
    icon: Scissors,
    title: 'Bespoke Atelier Tailoring',
    desc: 'Every purchase includes complimentary custom fall, pico, and hand-tasselled pallu finishing, with personalized blouse tailoring upon request.',
  },
  {
    icon: Gift,
    title: 'Heirloom Muslin Packaging',
    desc: 'Delivered in signature hand-crafted cedar gift boxes with unbleached muslin wraps and natural neem leaves for generational textile preservation.',
  },
]

export default function WhyAarohi() {
  return (
    <section className="bg-[#191614] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#12100e] text-[#e1cba7] text-[10px] uppercase tracking-[0.25em] font-sans-clean mb-4">
            <Sparkles size={11} className="text-[#c5a880]" />
            <span>The Aarohi Promise</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f4ee] tracking-tight">
            Crafted for <em className="italic text-[#e1cba7] font-normal">Generations.</em>
          </h2>

          <p className="text-xs sm:text-sm text-stone-400 font-light mt-3 leading-relaxed font-sans-clean">
            Our unwavering commitment to textile purity, artisan dignity, and personalized haute couture client service.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-[#12100e] p-8 rounded-2xl border border-white/5 hover:border-[#c5a880]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center text-[#c5a880] mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-serif-luxury text-xl text-[#f7f4ee] group-hover:text-[#e1cba7] transition-colors font-light leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-400 font-light leading-relaxed mt-2.5 font-sans-clean">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-sans-clean text-[#c5a880]/70">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="h-[1px] w-6 bg-[#c5a880]/30" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
