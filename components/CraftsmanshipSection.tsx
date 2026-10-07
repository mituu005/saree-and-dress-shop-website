'use client'

import React, { useRef, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Feather, Compass, Layers, ShieldCheck, Play, Pause } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Mulberry Silk Grading & Degumming',
    desc: 'Only Grade-A four-ply silk reeled from the cocoons of mulberry silkworms is selected. The raw filaments are submerged in mountain spring water with organic soapnut to unlock natural, pearlescent lustre.',
    badge: '100% Pure Natural Fibres',
  },
  {
    step: '02',
    title: 'Hand-Drawn 24K Gold & Silver Zari',
    desc: 'Real silver wire is drawn through diamond dies until finer than human hair, wound around a core silk thread, and electroplated with 24-karat gold. This ancient technique prevents oxidation across decades.',
    badge: 'Real Silver Core Metallics',
  },
  {
    step: '03',
    title: 'The Korvai Interlocking Shuttle',
    desc: 'An endangered three-shuttle technique requiring two master weavers seated side-by-side. The body and temple border are interlocked with mathematical precision, creating borders that will never fray.',
    badge: 'Two-Weaver Loom Choreography',
  },
  {
    step: '04',
    title: 'Natural Steaming & Heirloom Muslin',
    desc: 'The completed drape undergoes natural tension steaming to achieve fluid drape memory. Every single square inch is inspected under magnifying lenses before being wrapped in unbleached mulmul cloth.',
    badge: 'Silk Mark Certified Final Inspection',
  },
]

export default function CraftsmanshipSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="craftsmanship" className="bg-[#191614] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15 overflow-hidden">
      
      {/* Subtle gold line watermark */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-10 bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean font-medium">
                05 / Master Weavers Archive
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] tracking-tight">
              The Art of <em className="italic text-[#e1cba7] font-normal">Weaving.</em>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-light max-w-sm mt-4 md:mt-0 font-sans-clean">
            A sacred dialogue between artisan and loom, passed down through five generations of master weavers.
          </p>
        </div>

        {/* Dual Layout: 3D Video of Details + Step-by-Step Provenance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 3D Video Detail Loop */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a880]/30 bg-[#12100e] shadow-2xl aspect-[4/5]">
              <video
                ref={videoRef}
                src="/videos/brand-couture-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Video Overlay Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-sans-clean">
                <span className="bg-[#12100e]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#e1cba7]">
                  Loom Close-Up · 3D Detail
                </span>

                <button
                  onClick={toggleVideo}
                  className="bg-[#12100e]/80 p-2 rounded-full border border-white/10 text-[#c5a880] hover:text-white transition-colors"
                  aria-label="Toggle Detail Video"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-left bg-[#12100e]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="text-[9px] uppercase tracking-[0.26em] text-[#c5a880] font-sans-clean block mb-0.5">
                  Artisan Provenance
                </span>
                <p className="font-serif-luxury text-base text-[#f7f4ee] font-light leading-snug m-0">
                  Real gold zari interlaced with pure Mulberry silk weft.
                </p>
                <span className="text-[10px] text-stone-400 font-sans-clean block mt-1">
                  Kanchipuram &amp; Varanasi Weaving Ateliers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Sacred Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="group relative bg-[#12100e] p-7 sm:p-8 rounded-2xl border border-white/5 hover:border-[#c5a880]/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-[#c5a880]/50 group-hover:text-[#c5a880] transition-colors font-light">
                    {item.step}
                  </span>

                  <span className="bg-[#191614] text-[9px] uppercase tracking-[0.2em] font-sans-clean px-3 py-1 rounded-full border border-white/10 text-stone-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#f7f4ee] font-light mt-3 group-hover:text-[#e1cba7] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mt-2.5 font-sans-clean">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Direct Master Weaver Patronage Note */}
            <div className="p-6 rounded-2xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-[#c5a880] flex-shrink-0" />
                <div>
                  <h4 className="font-serif-luxury text-base text-[#f7f4ee] font-light m-0">
                    100% Ethical Master Artisan Patronage
                  </h4>
                  <p className="text-[11px] text-stone-300 font-light mt-0.5 font-sans-clean">
                    All looms directly owned or patronized. Zero commercial intermediaries.
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-semibold font-sans-clean flex-shrink-0 transition-colors"
              >
                <span>Visit The Atelier</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
