'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LOOKBOOK_IMAGES } from '@/lib/products'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LookbookSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || window.innerWidth < 1024) return

    const scrollDistance = track.scrollWidth - window.innerWidth + 120

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            setScrollProgress(self.progress)
          },
        },
      })

      tl.to(track, {
        x: -scrollDistance,
        ease: 'none',
      })

      // Multi-speed parallax on cards
      const cards = track.querySelectorAll('.lookbook-card-inner')
      cards.forEach((card, i) => {
        const speed = i % 2 === 0 ? 30 : -30
        tl.to(
          card,
          {
            x: speed,
            ease: 'none',
          },
          0
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="bg-[#FAF7F2] text-[#1C1512] min-h-screen relative select-none overflow-hidden py-20 lg:py-0 border-t border-[#1C1512]/5 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#1C1512]/10 pb-6">
          <div>
            <span className="overline-luxury block mb-2">
              06 / EDITORIAL CAMPAIGN
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1C1512] font-normal tracking-tight">
              The <span className="font-editorial-italic text-[#C9A24B]">Lookbook.</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center gap-3 text-xs font-body text-[#1C1512]/60">
            <span className="hidden sm:inline">Scroll down to traverse collection</span>
            <span className="text-[#C9A24B] font-semibold">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Track Container: Desktop GSAP translation + Mobile Native Horizontal Scroll */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar pb-6 lg:pb-0">
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-8 px-6 md:px-12 w-max will-change-transform"
        >
          {LOOKBOOK_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className="lookbook-card-inner group relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[9/16] rounded-3xl overflow-hidden bg-[#1C1512] shadow-xl flex-shrink-0"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 320px, 420px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Location Tag Top */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[8.5px] uppercase tracking-[0.24em] font-body font-semibold text-[#1C1512]">
                  {item.location}
                </span>
              </div>

              {/* Text Bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white font-body">
                <span className="text-[9px] uppercase tracking-[0.26em] text-[#C9A24B] font-semibold block mb-1">
                  0{idx + 1} / ARCHIVE
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-white font-normal leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 font-light mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thin Gold Progress Line Beneath */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mt-8 hidden lg:block">
        <div className="w-full h-[2px] bg-[#1C1512]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C9A24B] transition-all duration-150 ease-out"
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
