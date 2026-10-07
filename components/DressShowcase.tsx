'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, ArrowUpRight, Sparkles, Check, Heart } from 'lucide-react'
import { PRODUCTS, Product } from '@/lib/products'
import { useCart } from '@/lib/cartContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const FEATURED_LOOKS = PRODUCTS.filter((p) => typeof p.featuredLookIndex === 'number').sort(
  (a, b) => (a.featuredLookIndex ?? 0) - (b.featuredLookIndex ?? 0)
)

const BACKGROUND_TINTS = [
  '#FAF7F2', // Look 01 Warm Ivory
  '#F3E6E0', // Look 02 Soft Blush
  '#F6EFE6', // Look 03 Regal Cream / Gold
  '#F5EEDB', // Look 04 Sunset Ochre Tint
]

export default function DressShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState('S')
  const [selectedColor, setSelectedColor] = useState(0)
  const { addToCart, toggleWishlist, isInWishlist } = useCart()

  const currentDress = FEATURED_LOOKS[activeIdx] || FEATURED_LOOKS[0]

  // Setup GSAP pinned scroll carousel
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || window.innerWidth < 1024) return

    const totalSteps = FEATURED_LOOKS.length

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${totalSteps * 90}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const step = Math.min(totalSteps - 1, Math.floor(self.progress * totalSteps))
          setActiveIdx(step)
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  // Animate text reveal when activeIdx changes
  const textRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!textRef.current) return
    const textEl = textRef.current
    gsap.fromTo(
      textEl.querySelectorAll('.line-reveal-inner'),
      { y: '110%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.06 }
    )
    setSelectedSize(currentDress.sizes[0] || 'S')
    setSelectedColor(0)
  }, [activeIdx, currentDress])

  const handleAdd = () => {
    const colorName = currentDress.colors[selectedColor]?.name || 'Standard'
    addToCart(currentDress, selectedSize, colorName, 1)
  }

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative min-h-screen w-full transition-colors duration-700 ease-out select-none flex flex-col justify-center py-20 lg:py-0 border-t border-[#1C1512]/5"
      style={{ backgroundColor: BACKGROUND_TINTS[activeIdx] }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 lg:mb-12 border-b border-[#1C1512]/10 pb-6">
          <div>
            <span className="overline-luxury block mb-2">
              02 / CURATED SILHOUETTES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1C1512] font-normal tracking-tight">
              The Dress <span className="font-editorial-italic text-[#C9A24B]">Showcase.</span>
            </h2>
          </div>

          {/* Segmented index & progress bar */}
          <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-[#1C1512] font-light">
                0{activeIdx + 1}
              </span>
              <span className="text-xs font-body text-[#1C1512]/30">/ 0{FEATURED_LOOKS.length}</span>
            </div>

            {/* Segmented progress bar */}
            <div className="flex items-center gap-2">
              {FEATURED_LOOKS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIdx === i ? 'w-10 bg-[#C9A24B]' : 'w-4 bg-[#1C1512]/20 hover:bg-[#1C1512]/40'
                  }`}
                  aria-label={`Jump to look 0${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Cross-Swapping Dress Visual Frame */}
          <div className="lg:col-span-6 relative aspect-[3/4] max-w-md lg:max-w-none mx-auto w-full rounded-3xl overflow-hidden bg-[#1C1512]/5 shadow-2xl border border-[#C9A24B]/20">
            {FEATURED_LOOKS.map((dress, idx) => {
              const isCurrent = activeIdx === idx
              return (
                <div
                  key={dress.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCurrent
                      ? 'opacity-100 scale-100 rotate-0 z-10 filter-none'
                      : 'opacity-0 scale-90 -translate-x-12 pointer-events-none blur-sm'
                  }`}
                  style={{ transformPerspective: 1000 }}
                >
                  <Image
                    src={dress.images[0]}
                    alt={dress.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Tag */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[9px] uppercase tracking-[0.24em] font-body font-semibold text-[#1C1512] shadow-sm border border-[#1C1512]/5">
                      {dress.occasion}
                    </span>
                  </div>

                  {/* Wishlist Button on image */}
                  <button
                    onClick={() => toggleWishlist(dress.id)}
                    className="absolute top-5 right-5 p-2.5 rounded-full bg-[#FAF7F2]/90 hover:bg-white text-[#1C1512] backdrop-blur-md transition-all shadow-md"
                    title={isInWishlist(dress.id) ? 'In Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart
                      size={16}
                      className={isInWishlist(dress.id) ? 'fill-[#C9A24B] text-[#C9A24B]' : 'text-[#1C1512]'}
                    />
                  </button>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-[10px] uppercase tracking-[0.2em] font-body font-medium">
                    <span>Atelier Hand-Crafted</span>
                    <span>100% Pure Silk</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Narrative & Customization */}
          <div ref={textRef} className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tag & Subtitle */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-body font-semibold">
                {currentDress.tag || 'Couture Silhouette'}
              </span>
            </div>

            {/* Masked Line Title Reveal */}
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1C1512] font-normal leading-tight tracking-tight">
              <span className="line-reveal-outer">
                <span className="line-reveal-inner">{currentDress.name}</span>
              </span>
            </h3>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#1C1512]/70 font-body font-light mt-2 max-w-md">
              {currentDress.subtitle}
            </p>

            {/* Fabric Provenance Note */}
            <div className="mt-5 p-3.5 rounded-2xl bg-[#1C1512]/5 border border-[#1C1512]/10 max-w-lg">
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#C9A24B] font-body font-semibold block mb-0.5">
                Fabric Provenance
              </span>
              <p className="text-xs text-[#1C1512]/85 font-body leading-relaxed m-0">
                {currentDress.fabric}
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 mt-6">
              <span className="font-display text-3xl sm:text-4xl text-[#C9A24B] font-medium">
                ₹{currentDress.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#1C1512]/40 line-through font-body">
                ₹{currentDress.mrp.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-[#1C1512]/60 font-body uppercase tracking-wider">
                (Taxes Included)
              </span>
            </div>

            {/* Color Swatches */}
            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1512]/60 font-body block mb-2">
                Atelier Color: <strong className="text-[#1C1512] font-medium">{currentDress.colors[selectedColor]?.name}</strong>
              </span>
              <div className="flex items-center gap-3">
                {currentDress.colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor === i ? 'border-[#C9A24B] scale-110 shadow-md' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Pills */}
            <div className="mt-6">
              <div className="flex items-center justify-between max-w-sm mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1512]/60 font-body">
                  Select Size
                </span>
                <span className="text-[10px] text-[#C9A24B] font-body hover:underline cursor-pointer">
                  Custom Fit Available
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {currentDress.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                      selectedSize === s
                        ? 'bg-[#1C1512] text-white font-semibold shadow-md'
                        : 'bg-[#FAF7F2] text-[#1C1512]/80 border border-[#1C1512]/15 hover:border-[#C9A24B]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar: Black "Add to Bag" pill */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#1C1512]/10 max-w-md">
              <button
                onClick={handleAdd}
                className="btn-espresso-pill flex-1 py-3.5 shadow-lg"
              >
                <ShoppingBag size={15} />
                <span>Add to Bag</span>
              </button>

              <a
                href="#new-arrivals"
                className="btn-ghost-pill py-3.5"
              >
                <span>Full Edit</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
