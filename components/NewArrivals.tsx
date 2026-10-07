'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Heart, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react'
import { PRODUCTS, Product } from '@/lib/products'
import { useCart } from '@/lib/cartContext'
import { useSilkReveal } from '@/hooks/useSilkReveal'

export default function NewArrivals() {
  const containerRef = useSilkReveal<HTMLElement>({
    selector: '.new-arrival-card',
    stagger: 0.08,
    y: 60,
    skewY: 3,
  })

  const { addToCart, toggleWishlist, isInWishlist, setActiveQuickView } = useCart()

  return (
    <section
      id="new-arrivals"
      ref={containerRef}
      className="bg-[#F3E6E0] text-[#1C1512] py-24 sm:py-32 relative select-none border-t border-[#1C1512]/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#1C1512]/10 pb-8">
          <div>
            <span className="overline-luxury block mb-2">
              03 / JUST IN
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1C1512] font-normal tracking-tight">
              New <span className="font-editorial-italic text-[#C9A24B]">Arrivals.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#1C1512]/70 font-body font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
            Freshly cut bespoke drapes, sculpted gowns, and hand-woven organza silks just arrived from our master ateliers.
          </p>
        </div>

        {/* 4-Column Grid (2 on mobile) of 3:4 Portrait Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {PRODUCTS.map((product) => {
            const hasSecondImage = product.images.length > 1
            const inWishlist = isInWishlist(product.id)

            return (
              <article
                key={product.id}
                className="new-arrival-card group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#1C1512]/5 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* 3:4 Portrait Image Container - Click to view only that image */}
                <div
                  onClick={() => setActiveQuickView(product)}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#1C1512]/5 cursor-pointer"
                  title="Click to view image"
                >
                  
                  {/* Stable Primary Image - Never changes on hover */}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C9A24B] text-white text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-body font-semibold shadow-sm">
                      {product.tag || 'NEW'}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(product.id)
                      }}
                      className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-[#1C1512] backdrop-blur-md transition-all shadow-sm"
                      aria-label="Save to Wishlist"
                    >
                      <Heart
                        size={14}
                        className={inWishlist ? 'fill-[#C9A24B] text-[#C9A24B]' : 'text-[#1C1512]'}
                      />
                    </button>
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveQuickView(product)
                    }}
                    className="absolute top-12 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#1C1512] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    title="Quick Inspect"
                  >
                    <Eye size={14} />
                  </button>

                  {/* Slide-Up 'Add to Bag' bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product, product.sizes[0] || 'S', product.colors[0]?.name || 'Standard')
                      }}
                      className="pointer-events-auto w-full bg-[#1C1512] hover:bg-[#2D231F] text-white py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-body font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <ShoppingBag size={13} />
                      <span>Quick Add to Bag</span>
                    </button>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A24B] font-body font-semibold block mb-1">
                      {product.occasion}
                    </span>
                    
                    <h3
                      onClick={() => setActiveQuickView(product)}
                      className="font-display text-base sm:text-lg text-[#1C1512] font-normal leading-snug line-clamp-1 group-hover:text-[#C9A24B] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-[11px] text-[#1C1512]/60 font-body font-light line-clamp-1 mt-1">
                      {product.fabric}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#1C1512]/10 flex items-center justify-between">
                    <div>
                      <span className="font-display text-base sm:text-lg text-[#C9A24B] font-medium">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveQuickView(product)}
                      className="text-[9px] uppercase tracking-[0.18em] font-body text-[#1C1512]/70 hover:text-[#C9A24B] transition-colors"
                    >
                      Details &rarr;
                    </button>
                  </div>
                </div>

              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
