'use client'

import React, { useState } from 'react'
import { ArrowUpRight, MessageCircle, Mail, CheckCircle2, ShieldCheck, Heart } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

export default function NewsletterFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { setIsSizeGuideOpen } = useCart()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="about" className="relative bg-[#1C1512] text-[#FAF7F2] pt-24 pb-16 overflow-hidden select-none">
      
      {/* Massive Faded Serif Watermark Background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-display text-[26vw] text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
        AURELLE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Foreground Floating Ivory Newsletter Card */}
        <div className="relative -mt-36 sm:-mt-40 mb-20 p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#FAF7F2] text-[#1C1512] shadow-2xl border border-[#C9A24B]/30 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <span className="overline-luxury block mb-2">
              MAISON AURELLE GAZETTE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#1C1512] font-normal tracking-tight">
              Get <span className="font-editorial-italic text-[#C9A24B]">10% off</span> your first dress.
            </h3>
            <p className="text-xs sm:text-sm text-[#1C1512]/70 font-body font-light mt-3 leading-relaxed">
              Join our private salon list to receive invitations to private runway previews, capsule releases, and seasonal trunk shows.
            </p>

            {subscribed ? (
              <div className="mt-8 p-4 rounded-2xl bg-[#C9A24B]/15 border border-[#C9A24B]/40 flex items-center justify-center gap-2.5 text-xs text-[#1C1512] font-body">
                <CheckCircle2 size={16} className="text-[#C9A24B]" />
                <span className="font-medium">Welcome to the Maison. Your 10% welcome invitation has been dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#1C1512]/15 focus:border-[#C9A24B] rounded-full px-5 py-3.5 text-xs text-[#1C1512] placeholder-[#1C1512]/40 outline-none font-body shadow-sm"
                />
                <button
                  type="submit"
                  className="btn-gold-pill w-full sm:w-auto py-3.5 px-7 flex-shrink-0"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            <div className="flex items-center justify-center gap-4 mt-5 text-[9px] uppercase tracking-wider text-[#1C1512]/50 font-body">
              <span>Zero spam</span>
              <span>•</span>
              <span>Strictly Haute Couture</span>
              <span>•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10 text-xs font-body">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <span className="font-display tracking-[0.38em] text-2xl font-light text-white block mb-1">
              AURELLE
            </span>
            <span className="text-[8px] uppercase tracking-[0.45em] text-[#C9A24B] block mb-4">
              Haute Couture · Paris · Mumbai
            </span>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-6 text-xs">
              A luxury women&apos;s dress shop crafting timeless silk evening gowns, cocktail creations, bridal lehengas, and occasion heirlooms. Dressed in poetry.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919876543210?text=Hello%20Aurelle%20Atelier,%20I%20would%20like%20to%20enquire%20about%20your%20couture%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-[#C9A24B] transition-colors text-[10px] uppercase tracking-wider"
              >
                <MessageCircle size={13} className="text-[#C9A24B]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li><a href="#showcase" className="hover:text-white transition-colors">Evening Gowns</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">Cocktail Dresses</a></li>
              <li><a href="#occasions" className="hover:text-white transition-colors">Bridal Lehengas</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">Pre-Draped Sarees</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Sunburst Midis</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Column 2: Client Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-4">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li>
                <button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-white transition-colors text-left">
                  Size &amp; Fit Guide
                </button>
              </li>
              <li><a href="#craft" className="hover:text-white transition-colors">Silk Mark Assurance</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Shipping &amp; Delivery</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Bespoke Appointments</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Returns &amp; Exchanges</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-4">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-white/60 font-light">
              <li><a href="#craft" className="hover:text-white transition-colors">Atelier Heritage</a></li>
              <li><a href="#craft" className="hover:text-white transition-colors">Handloom Artisans</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Lookbook Archive</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Patron Reviews</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram Journal</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Sustainability Pledge</a></li>
            </ul>
          </div>

        </div>

        {/* Payment Icons & Copyright Bottom Tier */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/50 font-body">
          <p className="m-0">
            &copy; {new Date().getFullYear()} AURELLE Haute Couture Pvt. Ltd. All rights reserved. Registered Fashion House.
          </p>

          {/* Payment Badges */}
          <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase text-white/70">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">UPI</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Visa</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Razorpay</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Net Banking</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-white transition-colors">Atelier Registry</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
