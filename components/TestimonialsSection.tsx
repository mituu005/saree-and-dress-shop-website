'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/products'
import { useSilkReveal } from '@/hooks/useSilkReveal'

export default function TestimonialsSection() {
  const containerRef = useSilkReveal<HTMLElement>({
    selector: '.testimonial-card',
    stagger: 0.1,
  })

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="bg-[#FAF7F2] text-[#1C1512] py-24 sm:py-32 relative select-none border-t border-[#1C1512]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Stacked Avatars */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="overline-luxury block mb-2">
            07 / PATRON DEVOTION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
            Loved by Every <span className="font-editorial-italic text-[#C9A24B]">Silhouette.</span>
          </h2>

          {/* Stacked Customer Avatars + Rating Badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-3 overflow-hidden">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#FAF7F2] shadow-sm">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1512]/5 border border-[#1C1512]/10 text-xs font-body">
              <div className="flex text-[#C9A24B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#C9A24B]" />
                ))}
              </div>
              <span className="font-semibold text-[#1C1512]">4.9/5</span>
              <span className="text-[#1C1512]/40">•</span>
              <span className="text-[#1C1512]/70">500+ Happy Patrons</span>
            </div>
          </div>
        </div>

        {/* 3-Column Review Cards (Middle Card offset down with translate-y) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {TESTIMONIALS.map((item, idx) => {
            const isMiddle = idx === 1
            return (
              <div
                key={idx}
                className={`testimonial-card group relative p-8 sm:p-10 rounded-3xl bg-white border border-[#C9A24B]/20 shadow-[0_10px_35px_rgba(28,21,18,0.04)] hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${
                  isMiddle ? 'lg:translate-y-8 border-[#C9A24B]/40' : ''
                }`}
              >
                <div>
                  {/* Large Decorative Serif Quotation Mark */}
                  <span className="font-display text-6xl sm:text-7xl text-[#C9A24B]/40 block leading-none select-none font-serif">
                    &ldquo;
                  </span>

                  {/* Review Text */}
                  <p className="font-body text-sm sm:text-base text-[#1C1512]/85 font-light leading-relaxed mt-2 italic">
                    {item.quote}
                  </p>
                </div>

                {/* Author Attribution */}
                <div className="mt-8 pt-6 border-t border-[#1C1512]/10 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#C9A24B]/30 shadow-sm">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-display text-lg text-[#1C1512] font-normal leading-snug">
                      {item.author}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#1C1512]/60 font-body block">
                      {item.location}
                    </span>
                    <span className="text-[9.5px] text-[#C9A24B] font-body block font-medium mt-0.5">
                      Verified Piece: {item.purchase}
                    </span>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
