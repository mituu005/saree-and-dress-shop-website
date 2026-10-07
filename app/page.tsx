'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DressShowcase from '@/components/DressShowcase'
import NewArrivals from '@/components/NewArrivals'
import ShopByOccasion from '@/components/ShopByOccasion'
import FabricAndCraft from '@/components/FabricAndCraft'
import LookbookSection from '@/components/LookbookSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import InstagramStrip from '@/components/InstagramStrip'
import NewsletterFooter from '@/components/NewsletterFooter'
import CartDrawer from '@/components/CartDrawer'
import SizeGuideModal from '@/components/SizeGuideModal'
import QuickViewModal from '@/components/QuickViewModal'
import WishlistDrawer from '@/components/WishlistDrawer'
import ToastNotification from '@/components/ToastNotification'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1C1512] overflow-x-hidden">
      
      {/* 1. Transparent-to-Frosted Luxury Navbar */}
      <Navbar />

      {/* 2. Hero Section: Full-Bleed Model Gown Photo, Masked "Dressed in Poetry." Headline, Scrub Scale-Down */}
      <HeroSection />

      {/* 3. Dress Showcase: Pinned Scroll Carousel (4 Looks Cross-Swap, Tint Tweens, Size & Color Selectors) */}
      <DressShowcase />

      {/* 4. New Arrivals: Blush Background, 4-Column 3:4 Portrait Cards, Double-Image Crossfade, Silk Reveal */}
      <NewArrivals />

      {/* 5. Shop By Occasion: Bento Grid (Tall Wedding & Bridal Left, Stacked Right, Slide-in Gold Pills) */}
      <ShopByOccasion />

      {/* 6. Fabric & Craft: Split Parallax (Macro Silk/Zari Video Left, Word-Stagger Copy & 3 Animated Counters Right) */}
      <FabricAndCraft />

      {/* 7. Lookbook: Pinned Horizontal Scroll with Multi-Speed Parallax and Thin Gold Progress Line */}
      <LookbookSection />

      {/* 8. Testimonials: Ivory Background, "Loved by Every Silhouette", 4.9/5 Stacked Avatars, Offset Middle Card */}
      <TestimonialsSection />

      {/* 9. Instagram Strip: Infinite Auto-Scrolling Marquee with Center "@aurelle.official — Follow Us" Pill */}
      <InstagramStrip />

      {/* 10. Newsletter + Footer: Espresso-Dark Footer, Faded "AURELLE" Watermark, Floating Ivory Card, Payment Icons */}
      <NewsletterFooter />

      {/* Interactive E-Commerce Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SizeGuideModal />
      <QuickViewModal />
      <ToastNotification />

    </main>
  )
}
