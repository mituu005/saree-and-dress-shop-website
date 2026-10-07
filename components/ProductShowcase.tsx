'use client'

import React, { useState } from 'react'
import { ArrowUpRight, MessageCircle, Eye, Sparkles, Plus } from 'lucide-react'
import ProductDetailModal, { SareeProduct } from './ProductDetailModal'

const productsData: SareeProduct[] = [
  {
    id: 'gulmohar-draped',
    name: 'The Gulmohar Draped Saree',
    subtitle: 'Hand-Pleated Organza with Zari Border',
    fabric: 'Pure Organza · Hand-Finished Scallops',
    price: '₹14,900',
    priceRaw: 14900,
    description: 'Featherlight scarlet organza with hand-beaten gold leaf floral motifs, scalloped borders and pure silk crepe facing.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Unstitched Silk Crepe with Embroidered Sleeves',
      zari: 'Tested Gold Electroplated Zari',
      technique: 'Handloom Weave with Aari Cutwork Embroidery',
      origin: 'Varanasi Weaving Cluster',
      care: 'Dry clean only. Store wrapped in soft muslin.',
      delivery: 'Dispatched within 3 business days worldwide.',
    },
    colors: [
      { name: 'Scarlet Vermilion', hex: '#8a1f1d' },
      { name: 'Antique Gold', hex: '#c5a880' },
      { name: 'Emerald Velvet', hex: '#16432f' },
    ],
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
    ],
    videoSrc: '/videos/hero-showroom-3d.mp4',
    badge: 'Atelier Bestseller',
  },
  {
    id: 'noor-kanjivaram',
    name: 'Noor Kanjivaram Bridal Silk',
    subtitle: 'Interlocked Korvai Border with Real Zari',
    fabric: 'Pure Kanchipuram Mulberry Silk',
    price: '₹28,500',
    priceRaw: 28500,
    description: 'Woven with the sacred Mayil (peacock) and Rudraksha motifs in pure silver thread bathed in 24k gold. A bridal heirloom to treasure.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Contrast Crimson Silk with Heavy Zari Border',
      zari: 'Genuine Silver Core Electroplated in 24K Gold',
      technique: 'Three-Shuttle Korvai Handloom Weave',
      origin: 'Kanchipuram, Tamil Nadu',
      care: 'Dry clean only. Air occasionally in shade.',
      delivery: 'Complimentary insured courier with heirloom box.',
    },
    colors: [
      { name: 'Royal Gold & Crimson', hex: '#b08d57' },
      { name: 'Deep Aubergine', hex: '#3d1c31' },
      { name: 'Peacock Teal', hex: '#14464b' },
    ],
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    ],
    videoSrc: '/videos/bridal-drape-3d.mp4',
    badge: 'Master Weaver Edit',
  },
  {
    id: 'ivory-garden',
    name: 'Ivory Garden Chanderi Saree',
    subtitle: 'Featherlight Sheer Drape with Pearl Beads',
    fabric: 'Chanderi Katan Silk · Pearl Drops',
    price: '₹9,800',
    priceRaw: 9800,
    description: 'Lyrical sheer ivory weave illuminated by micro-sequin dewdrops and hand-strung basra pearl embellishments on the pallu.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Plain Chanderi with Zari Striped Border',
      zari: 'Fine Antique Gold Zari',
      technique: 'Traditional Pit-Loom Weave',
      origin: 'Chanderi, Madhya Pradesh',
      care: 'Dry clean only.',
      delivery: 'Ships within 48 hours.',
    },
    colors: [
      { name: 'Pearl Ivory', hex: '#f4ede2' },
      { name: 'Champagne Blush', hex: '#e8d7c8' },
      { name: 'Powder Sage', hex: '#c5cebe' },
    ],
    images: [
      'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?auto=format&fit=crop&w=1200&q=85',
    ],
    videoSrc: '/videos/couture-details-3d.mp4',
    badge: 'Summer Soirée',
  },
  {
    id: 'shikargah-banarasi',
    name: 'The Royal Shikargah Brocade',
    subtitle: 'Varanasi Kadwa Weave with Gold Flora',
    fabric: 'Pure Katan Silk · Antique Meenakari',
    price: '₹34,000',
    priceRaw: 34000,
    description: 'Inspired by 17th-century Mughal hunting tapestries, featuring stylized deer and peacocks amidst lush golden vines.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Brocade Silk Blouse Fabric',
      zari: 'Antique Gold & Multi-Hued Meenakari Zari',
      technique: 'Kadwa Jacquard Handloom',
      origin: 'Varanasi, Uttar Pradesh',
      care: 'Dry clean only. Store in cedar chest or muslin.',
      delivery: 'Hand-delivered with Silk Mark certificate.',
    },
    colors: [
      { name: 'Midnight Obsidian', hex: '#1c1b22' },
      { name: 'Imperial Maroon', hex: '#5b1c1e' },
      { name: 'Royal Sapphire', hex: '#1a2942' },
    ],
    images: [
      '/images/wedding-bridal.jpg',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
    ],
    videoSrc: '/videos/hero-showroom-3d.mp4',
    badge: 'Museum Heritage',
  },
  {
    id: 'molten-tissue-gold',
    name: 'Molten Tissue Zari Saree',
    subtitle: 'Lustrous Evening Metallic Weave',
    fabric: 'Real Metallic Tissue Silk',
    price: '₹19,500',
    priceRaw: 19500,
    description: 'Liquid gold appearance engineered through ultra-fine flattened metallic ribbons woven onto warp of pure silk.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Matching Tissue Silk Fabric',
      zari: 'High-Sheen Champagne Gold Zari',
      technique: 'Specialty Tissue Handloom',
      origin: 'Kanchipuram Atelier',
      care: 'Dry clean only. Iron on reverse low heat.',
      delivery: 'Immediate dispatch available.',
    },
    colors: [
      { name: 'Molten Champagne', hex: '#dfcba5' },
      { name: 'Rose Gold Shimmer', hex: '#cfa898' },
      { name: 'Silver Platinum', hex: '#d6d7db' },
    ],
    images: [
      'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    ],
    videoSrc: '/videos/bridal-drape-3d.mp4',
    badge: 'Cocktail Gala',
  },
  {
    id: 'ashavali-brocade',
    name: 'The Ashavali Gujarati Brocade',
    subtitle: 'Enamelled Pallu with Minakari Birds',
    fabric: 'Heavy Twill Silk · Enamel Meenakari',
    price: '₹22,900',
    priceRaw: 22900,
    description: 'Centuries-old Ahmedabad heritage weave characterized by twill weave and embossed meenakari borders.',
    details: {
      length: '5.5 Meters',
      blouse: '0.8 Meters Running Silk with Border',
      zari: 'Tested 24k Gold Wash Zari',
      technique: 'Traditional Ashavali Handloom',
      origin: 'Ahmedabad Loom Guild',
      care: 'Dry clean only.',
      delivery: 'Ships within 3-5 business days.',
    },
    colors: [
      { name: 'Sindoor Red', hex: '#a82622' },
      { name: 'Kohl Black', hex: '#22201e' },
      { name: 'Mustard Haldi', hex: '#c59b27' },
    ],
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
      '/images/wedding-bridal.jpg',
    ],
    videoSrc: '/videos/couture-details-3d.mp4',
    badge: 'Heirloom Trousseau',
  },
]

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<SareeProduct | null>(null)

  return (
    <section id="sarees" className="bg-[#12100e] text-[#f7f4ee] section-pad-luxury relative border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-10 bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean font-medium">
                04 / Curated Masterpieces
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f7f4ee] tracking-tight">
              The Saree <em className="italic text-[#e1cba7] font-normal">Edit.</em>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-light max-w-sm mt-3 md:mt-0 font-sans-clean">
            Quietly extraordinary drapes, woven on handlooms with genuine silver and gold zari. Click any piece for full craftsmanship provenance.
          </p>
        </div>

        {/* Editorial Product Grid with Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {productsData.map((product, idx) => {
            const isFeaturedLarge = idx === 0 || idx === 3
            const encodedWhatsApp = encodeURIComponent(
              `Hello Aarohi Studio, I would like to enquire about: ${product.name} (${product.price}). Is this currently available for private styling or online purchase?`
            )

            return (
              <article
                key={product.id}
                className="group relative bg-[#191614] rounded-2xl overflow-hidden border border-[#c5a880]/20 hover:border-[#c5a880]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover img-editorial-zoom group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191614] via-transparent to-black/30 pointer-events-none" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#12100e]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#e1cba7] font-sans-clean font-medium">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick View Button on Image Hover */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-4 right-4 bg-[#12100e]/90 hover:bg-[#c5a880] text-[#f7f4ee] hover:text-[#12100e] p-2.5 rounded-full border border-[#c5a880]/40 transition-all shadow-lg flex items-center gap-1.5 text-[10px] font-sans-clean uppercase tracking-wider"
                    title="Inspect Saree Details"
                  >
                    <Eye size={14} />
                    <span className="hidden sm:inline">Details</span>
                  </button>
                </div>

                {/* Meta Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#c5a880] font-sans-clean font-medium block mb-1">
                      {product.fabric}
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#f7f4ee] group-hover:text-[#e1cba7] transition-colors font-light leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light mt-2 line-clamp-2 font-sans-clean">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-stone-500 block font-sans-clean">Couture Price</span>
                      <strong className="font-serif-luxury text-xl text-[#f7f4ee] font-medium block">
                        {product.price}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="border border-[#c5a880]/40 hover:border-[#c5a880] bg-[#12100e] hover:bg-[#c5a880]/15 text-stone-200 hover:text-[#e1cba7] px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-sans-clean transition-colors shadow-sm"
                      >
                        Inspect
                      </button>

                      <a
                        href={`https://wa.me/919876543210?text=${encodedWhatsApp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#c5a880]/15 hover:bg-[#c5a880] text-[#e1cba7] hover:text-[#12100e] p-2 rounded-full border border-[#c5a880]/30 transition-all shadow-sm flex items-center justify-center"
                        title="Inquire via Atelier WhatsApp"
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
