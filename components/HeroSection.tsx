'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Play, X, Sparkles, Volume2, VolumeX } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageFrameRef = useRef<HTMLDivElement>(null)
  const imageInnerRef = useRef<HTMLImageElement>(null)
  const textContentRef = useRef<HTMLDivElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    const frame = imageFrameRef.current
    const text = textContentRef.current
    if (!container || !frame || !text) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Initial entrance animation
    const ctx = gsap.context(() => {
      // Masked lines reveal
      const lines = text.querySelectorAll('.line-reveal-inner')
      gsap.fromTo(
        lines,
        { y: '115%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.25,
          ease: 'power4.out',
          stagger: 0.12,
          delay: 0.25,
        }
      )

      // Other hero elements reveal
      const fades = text.querySelectorAll('.hero-fade')
      gsap.fromTo(
        fades,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.55,
        }
      )

      if (!prefersReducedMotion) {
        // Scrubbing effect: scale down image into rounded frame and drift headline up
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 1.1,
          },
        })

        tl.to(
          frame,
          {
            scale: 0.92,
            borderRadius: '2rem',
            boxShadow: '0 25px 70px rgba(28,21,18,0.25)',
            ease: 'power2.inOut',
          },
          0
        )

        tl.to(
          text,
          {
            y: -90,
            opacity: 0.2,
            ease: 'power1.out',
          },
          0
        )
      }
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-[#FAF7F2] select-none"
      >
        {/* Full-bleed editorial image frame that scales down on scroll */}
        <div
          ref={imageFrameRef}
          className="absolute inset-0 w-full h-full overflow-hidden will-change-transform z-0 bg-[#1C1512]"
        >
          {/* Main Hero Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=2000&q=90"
              alt="AURELLE Haute Couture Model in Flowing Evening Gown"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1512]/85 via-[#1C1512]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/80 via-transparent to-[#1C1512]/40" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
          </div>
        </div>

        {/* Center-Left Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-center items-start text-white">
          <div ref={textContentRef} className="max-w-2xl pt-16 sm:pt-20">
            
            {/* Overline */}
            <div className="hero-fade inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#C9A24B]/40 bg-[#1C1512]/70 backdrop-blur-md mb-5 shadow-sm">
              <Sparkles size={11} className="text-[#C9A24B] animate-pulse" />
              <span className="text-[9.5px] uppercase tracking-[0.32em] text-[#E8D8BA] font-body font-semibold">
                SPRING · SUMMER &apos;26 COUTURE
              </span>
            </div>

            {/* Massive Two-Line Serif Headline with Masked Reveals */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.04] tracking-tight text-[#FAF7F2]">
              <span className="line-reveal-outer">
                <span className="line-reveal-inner">Dressed in</span>
              </span>
              <span className="line-reveal-outer">
                <span className="line-reveal-inner text-[#E8D8BA] font-editorial-italic">
                  Poetry.
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-fade text-sm sm:text-base text-[#FAF7F2]/85 font-body font-light leading-relaxed mt-6 max-w-lg">
              Bespoke silhouettes sculpted in liquid Mulberry silk, Parisian illusion tulle, and hand-embroidered metallic zari. Each drape is woven to become an enduring heirloom.
            </p>

            {/* Two CTAs */}
            <div className="hero-fade flex flex-wrap items-center gap-4 sm:gap-5 mt-8">
              <a
                href="#showcase"
                className="btn-gold-pill"
              >
                <span>Shop the Collection</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-ghost-pill text-white border-white/30 hover:border-white hover:bg-white/10"
              >
                <Play size={13} className="fill-white" />
                <span>Watch the Film</span>
              </button>
            </div>

            {/* Mini Provenance Metric */}
            <div className="hero-fade mt-12 pt-6 border-t border-white/15 flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-[#E8D8BA]/75 font-body">
              <span>Hand-Cut in Atelier</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A24B]" />
              <span>100% Pure Mulberry Silk</span>
              <span className="w-1 h-1 rounded-full bg-[#C9A24B] hidden sm:inline-block" />
              <span className="hidden sm:inline-block">Global Express White Glove</span>
            </div>

          </div>
        </div>

        {/* Scroll prompt indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 z-10 hidden sm:flex items-center gap-3 text-white/70 text-[9px] uppercase tracking-[0.3em] font-body">
          <span>Scroll to Discover</span>
          <div className="w-8 h-[1px] bg-[#C9A24B]" />
        </div>
      </section>

      {/* Cinematic Film Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden bg-black border border-[#C9A24B]/30 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white transition-colors border border-white/15"
              aria-label="Close Film Modal"
            >
              <X size={18} />
            </button>

            <video
              src="/videos/brand-couture-video.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Video Audio Control */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-5 right-5 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-[#C9A24B] hover:text-white transition-colors border border-white/15"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <div className="absolute bottom-5 left-5 z-20 text-white font-body">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A24B] block">AURELLE Cinema</span>
              <h3 className="font-display text-lg text-white">Spring · Summer &apos;26 Runway Campaign</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
