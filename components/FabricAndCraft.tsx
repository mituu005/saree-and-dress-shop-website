'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Sparkles, Award, ShieldCheck, Scissors } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FabricAndCraft() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [counters, setCounters] = useState({ hrs: 0, purity: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      // Counter animation when scrolled into view
      ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(
            { hrsVal: 0, purityVal: 0 },
            {
              hrsVal: 120,
              purityVal: 100,
              duration: 2,
              ease: 'power3.out',
              onUpdate: function () {
                const target = this.targets()[0] as { hrsVal: number; purityVal: number }
                setCounters({
                  hrs: Math.round(target.hrsVal),
                  purity: Math.round(target.purityVal),
                })
              },
            }
          )

          // Staggered words / paragraphs reveal
          const words = container.querySelectorAll('.craft-word')
          gsap.fromTo(
            words,
            { opacity: 0, y: 30, skewY: 2 },
            {
              opacity: 1,
              y: 0,
              skewY: 0,
              duration: 1,
              stagger: 0.05,
              ease: 'power4.out',
            }
          )
        },
      })

      // Pinned split parallax on large screens if motion is enabled
      if (!prefersReducedMotion && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 1,
        })
      }
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="craft"
      ref={containerRef}
      className="bg-[#FAF7F2] text-[#1C1512] min-h-screen py-24 sm:py-32 relative select-none border-t border-[#1C1512]/5 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#1C1512]/10 pb-8">
          <div>
            <span className="overline-luxury block mb-2">
              05 / SAVOIR-FAIRE &amp; ATELIER PROVENANCE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              Fabric &amp; <span className="font-editorial-italic text-[#C9A24B]">Craft.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#1C1512]/70 font-body font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
            Where ancestral pit-loom techniques meet modern French haute couture finishing.
          </p>
        </div>

        {/* Split Parallax Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Macro Ken-Burns Video / Image Detail */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 bg-[#1C1512]">
            <video
              ref={videoRef}
              src="/videos/brand-couture-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105 transform hover:scale-110 transition-transform duration-1000"
            />

            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Badges on Video */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white text-[9.5px] uppercase tracking-[0.25em] font-body">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#E8D8BA]">
                Loom Macro · 24K Zari
              </span>
              <span className="text-[#C9A24B] hidden sm:inline">Kala Ghoda Atelier</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white font-body">
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#C9A24B] block mb-1">
                Material Authenticity
              </span>
              <h4 className="font-display text-xl sm:text-2xl text-white font-normal leading-snug">
                Real Silver Core Metallics &amp; Mulberry Silk
              </h4>
              <p className="text-xs text-white/75 font-light mt-1">
                Every thread is submerged in mountain spring water and inspected under magnifying lenses before cutting.
              </p>
            </div>
          </div>

          {/* Right Column: Word-Stagger Copy & Animated Counters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="space-y-4 text-base sm:text-lg text-[#1C1512]/85 font-body font-light leading-relaxed">
              <p className="craft-word">
                In our atelier, luxury is measured not by volume, but by patience. Each gown and ceremonial lehenga begins with unadulterated mulberry filament silk, spun to exacting gauge on heritage pit-looms.
              </p>
              <p className="craft-word">
                Our master artisans then interlock genuine 24-karat gold-washed silver threads into fluid, architectural drapes that respond dynamically to human motion. No two garments ever share the exact same hand.
              </p>
            </div>

            {/* Three Animated Counters */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 pt-8 border-t border-[#1C1512]/10">
              
              {/* Counter 1 */}
              <div>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#C9A24B] font-light block">
                  {counters.hrs}+
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-body text-[#1C1512]/70 block mt-1">
                  Hrs Handwork
                </span>
              </div>

              {/* Counter 2 */}
              <div>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#C9A24B] font-light block">
                  {counters.purity}%
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-body text-[#1C1512]/70 block mt-1">
                  Pure Fabrics
                </span>
              </div>

              {/* Counter 3 */}
              <div>
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#1C1512] font-normal block leading-tight mt-1">
                  Bespoke
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-body text-[#1C1512]/70 block mt-1">
                  Made to Measure
                </span>
              </div>

            </div>

            {/* Atelier Standards Checklist */}
            <div className="mt-8 space-y-2.5 text-xs text-[#1C1512]/80 font-body">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-[#C9A24B] flex-shrink-0" />
                <span>Silk Mark India certified authenticity on every textile piece.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Scissors size={16} className="text-[#C9A24B] flex-shrink-0" />
                <span>Complimentary custom fitting, fall-pico and hand-finished hems.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award size={16} className="text-[#C9A24B] flex-shrink-0" />
                <span>Direct artisan patronage supporting 40+ multi-generational loom families.</span>
              </div>
            </div>

            {/* Action */}
            <div className="mt-10">
              <a
                href="#lookbook"
                className="btn-gold-pill"
              >
                <span>View The Lookbook</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
