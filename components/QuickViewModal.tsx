'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ShoppingBag, Heart, ShieldCheck, Ruler, Check, MessageCircle, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

export default function QuickViewModal() {
  const { activeQuickView, setActiveQuickView, addToCart, toggleWishlist, isInWishlist, setIsSizeGuideOpen } = useCart()
  const [selectedImgIdx, setSelectedImgIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState('S')
  const [selectedColor, setSelectedColor] = useState(0)

  if (!activeQuickView) return null

  const product = activeQuickView
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    const colorName = product.colors[selectedColor]?.name || 'Standard'
    addToCart(product, selectedSize, colorName, 1)
    setActiveQuickView(null)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={() => setActiveQuickView(null)} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] text-[#1C1512] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 z-10 max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveQuickView(null)}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1C1512] shadow-md transition-colors"
          aria-label="Close Quick View"
        >
          <X size={18} />
        </button>

        {/* Left Side: Images */}
        <div className="md:w-1/2 p-6 sm:p-8 bg-white/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1C1512]/10">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#1C1512]/5 shadow-inner">
            <Image
              src={product.images[selectedImgIdx] || product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-opacity duration-300"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImgIdx(i)}
                  className={`relative w-16 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImgIdx === i ? 'border-[#C9A24B] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] md:max-h-none flex flex-col justify-between">
          <div>
            <span className="overline-luxury block mb-1">
              {product.occasion}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl text-[#1C1512] font-normal leading-tight">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-display text-2xl sm:text-3xl text-[#C9A24B] font-semibold">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#1C1512]/40 line-through font-body">
                ₹{product.mrp.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-xs text-[#1C1512]/75 font-body font-light leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Fabric Provenance */}
            <div className="mt-4 p-3 rounded-xl bg-white border border-[#1C1512]/10 text-xs font-body">
              <span className="text-[9px] uppercase tracking-wider text-[#C9A24B] font-semibold block mb-0.5">
                Fabric
              </span>
              <span className="text-[#1C1512]/90">{product.fabric}</span>
            </div>

            {/* Color Swatches */}
            <div className="mt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1512]/60 font-body block mb-2">
                Color: <strong className="text-[#1C1512]">{product.colors[selectedColor]?.name}</strong>
              </span>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c, i) => (
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

            {/* Size Selector */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1512]/60 font-body">
                  Size
                </span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[10px] text-[#C9A24B] font-body hover:underline flex items-center gap-1"
                >
                  <Ruler size={11} />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-body uppercase transition-all ${
                      selectedSize === s
                        ? 'bg-[#1C1512] text-white font-semibold shadow-md'
                        : 'bg-white text-[#1C1512]/80 border border-[#1C1512]/15 hover:border-[#C9A24B]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Craftsmanship Features */}
            <div className="mt-5 space-y-1.5 text-[11px] text-[#1C1512]/70 font-body">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#C9A24B]" />
                <span>100% Certified Mulberry Silk with Silk Mark Purity.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#C9A24B]" />
                <span>Complimentary custom fitting and expedited courier.</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-5 border-t border-[#1C1512]/10 flex items-center gap-3">
            <button
              onClick={handleAddToCart}
              className="btn-espresso-pill flex-1 py-3.5 shadow-lg text-xs"
            >
              <ShoppingBag size={14} />
              <span>Add to Bag</span>
            </button>

            <button
              onClick={() => toggleWishlist(product.id)}
              className="p-3 rounded-full border border-[#1C1512]/20 hover:border-[#C9A24B] bg-white transition-colors"
              title={inWishlist ? 'Remove from Wishlist' : 'Save to Wishlist'}
            >
              <Heart
                size={17}
                className={inWishlist ? 'fill-[#C9A24B] text-[#C9A24B]' : 'text-[#1C1512]'}
              />
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
