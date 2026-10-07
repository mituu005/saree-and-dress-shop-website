'use client'

import React, { useState } from 'react'
import { X, MessageCircle, ShieldCheck, Sparkles, Truck, RefreshCw, Scissors, Check, ArrowRight } from 'lucide-react'

export interface SareeProduct {
  id: string
  name: string
  subtitle: string
  fabric: string
  price: string
  priceRaw: number
  description: string
  details: {
    length: string
    blouse: string
    zari: string
    technique: string
    origin: string
    care: string
    delivery: string
  }
  colors: { name: string; hex: string }[]
  images: string[]
  videoSrc?: string
  badge?: string
}

interface ProductDetailModalProps {
  product: SareeProduct | null
  onClose: () => void
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeMediaTab, setActiveMediaTab] = useState<'gallery' | '3d-video'>('gallery')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')

  if (!product) return null

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const encodedWhatsApp = encodeURIComponent(
    `Hello Aarohi Studio, I am interested in viewing/purchasing: ${product.name} (${product.price}, ${product.fabric}). Could you please share more details and availability?`
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in select-none">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#191614] border border-[#c5a880]/30 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] z-10 max-h-[92vh] flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#12100e]/80 hover:bg-[#12100e] border border-white/10 text-stone-300 hover:text-white transition-colors"
          aria-label="Close Product Details"
        >
          <X size={18} />
        </button>

        {/* Left Side: Media Showcase (Images & 3D Video) */}
        <div className="lg:w-1/2 p-6 sm:p-8 bg-[#12100e] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          
          {/* Media Switcher Tab */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-sans-clean font-medium">
              {product.badge || 'Aarohi Couture Archive'}
            </span>

            {product.videoSrc && (
              <div className="flex items-center gap-1 bg-[#191614] p-1 rounded-full border border-white/10 text-[10px] font-sans-clean">
                <button
                  onClick={() => setActiveMediaTab('gallery')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeMediaTab === 'gallery' ? 'bg-[#c5a880] text-[#12100e] font-semibold' : 'text-stone-300'
                  }`}
                >
                  Still Gallery
                </button>
                <button
                  onClick={() => setActiveMediaTab('3d-video')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeMediaTab === '3d-video' ? 'bg-[#c5a880] text-[#12100e] font-semibold' : 'text-stone-300'
                  }`}
                >
                  3D Motion Reel
                </button>
              </div>
            )}
          </div>

          {/* Main Visual Display */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner">
            {activeMediaTab === 'gallery' ? (
              <img
                src={product.images[selectedImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <video
                src={product.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Thumbnail Strip */}
          {activeMediaTab === 'gallery' && product.images.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImageIdx === idx ? 'border-[#c5a880] scale-105' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Concierge Booking */}
        <div className="lg:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] lg:max-h-none flex flex-col justify-between">
          <div>
            {/* Header info */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans-clean block mb-1">
              {product.fabric}
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#f7f4ee] font-light leading-snug">
              {product.name}
            </h2>
            <div className="flex items-baseline gap-3 mt-2">
              <span className="font-serif-luxury text-2xl text-[#e1cba7] font-medium">{product.price}</span>
              <span className="text-[11px] text-stone-400 font-sans-clean font-light">(Inclusive of all bespoke taxes)</span>
            </div>

            <p className="text-xs text-[#ede5d8]/85 font-light leading-relaxed mt-4 font-sans-clean">
              {product.description}
            </p>

            {/* Colour Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans-clean block mb-2">
                  Atelier Palette: <strong className="text-stone-200">{product.colors[selectedColor]?.name}</strong>
                </span>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(i)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        selectedColor === i ? 'border-[#c5a880] scale-110 shadow-lg' : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 p-4 rounded-xl bg-[#12100e]/70 border border-white/5 text-[11px] font-sans-clean">
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[9px]">Saree Length</span>
                <span className="text-stone-200 font-medium">{product.details.length}</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[9px]">Blouse Piece</span>
                <span className="text-stone-200 font-medium">{product.details.blouse}</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[9px]">Zari Specification</span>
                <span className="text-stone-200 font-medium">{product.details.zari}</span>
              </div>
              <div>
                <span className="text-stone-500 block uppercase tracking-wider text-[9px]">Loom Heritage</span>
                <span className="text-stone-200 font-medium">{product.details.origin}</span>
              </div>
            </div>

            {/* Care & Delivery Accordion style */}
            <div className="mt-5 space-y-2 text-[11px] font-sans-clean text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#c5a880]" />
                <span>Certified Pure Silk with Silk Mark authentication.</span>
              </div>
              <div className="flex items-center gap-2">
                <Scissors size={14} className="text-[#c5a880]" />
                <span>Complimentary custom fall-pico and hand-finished tassels.</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-[#c5a880]" />
                <span>Complimentary insured shipping in signature muslin-wrapped box.</span>
              </div>
            </div>
          </div>

          {/* Action CTAs: Direct Concierge & Private Booking */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`https://wa.me/919876543210?text=${encodedWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-concierge-gold w-full text-center py-3.5 shadow-lg"
            >
              <MessageCircle size={15} />
              <span>Connect with Atelier Concierge</span>
            </a>

            {/* Quick Consultation Request Form */}
            {!formSubmitted ? (
              <form onSubmit={handleBooking} className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Phone"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="flex-grow bg-[#12100e] border border-white/15 focus:border-[#c5a880] rounded-full px-4 py-2 text-xs text-white placeholder-stone-500 outline-none font-sans-clean"
                />
                <button
                  type="submit"
                  className="bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold font-sans-clean flex-shrink-0 transition-colors"
                >
                  Request Drape Video
                </button>
              </form>
            ) : (
              <div className="p-3 bg-[#c5a880]/15 border border-[#c5a880]/40 rounded-xl text-center text-xs text-[#e1cba7] font-sans-clean flex items-center justify-center gap-2">
                <Check size={14} className="text-emerald-400" />
                <span>Request received. Our senior stylist will connect shortly.</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}
