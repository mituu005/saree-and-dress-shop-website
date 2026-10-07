'use client'

import React from 'react'
import { ArrowUpRight, MessageCircle, ShieldCheck, Mail, MapPin } from 'lucide-react'

function InstagramIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function Footer() {
  const [subscribed, setSubscribed] = React.useState(false)

  return (
    <footer className="bg-[#0e0d0c] text-[#f7f4ee] border-t border-[#c5a880]/20 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Tier: Brand Essence & Editorial Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="inline-block group">
                <span className="font-serif-luxury tracking-[0.28em] text-2xl font-light text-[#f7f4ee] group-hover:text-[#e1cba7] transition-colors">
                  AAROHI
                  <span className="text-[10px] tracking-normal text-[#c5a880] ml-1 align-top">®</span>
                </span>
                <span className="block text-[8px] uppercase tracking-[0.35em] text-[#c5a880]/80 font-sans-clean mt-0.5">
                  Haute Couture · Mumbai
                </span>
              </a>

              <p className="text-xs text-stone-400 font-light leading-relaxed mt-4 max-w-sm font-sans-clean">
                A modern heirloom house dedicated to authentic Indian pit-loom weaving, pure mulberry silk, and hand-drawn gold zari commissions.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-sans-clean text-stone-400">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#c5a880] transition-colors"
              >
                <MessageCircle size={14} className="text-[#c5a880]" />
                <span>WhatsApp Concierge</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#c5a880] transition-colors"
              >
                <InstagramIcon size={14} className="text-[#c5a880]" />
                <span>@aarohistudio</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Portfolios */}
          <div className="lg:col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-sans-clean font-medium block mb-4">
              Portfolios
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans-clean font-light">
              <li><a href="#collections" className="hover:text-white transition-colors">Kanjivaram Silk</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Banarasi Brocade</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Bridal Trousseau</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Chanderi &amp; Organza</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Molten Tissue Zari</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Everyday Royal Drapes</a></li>
            </ul>
          </div>

          {/* Links Column 2: The House */}
          <div className="lg:col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-sans-clean font-medium block mb-4">
              The House
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans-clean font-light">
              <li><a href="#story" className="hover:text-white transition-colors">Atelier Philosophy</a></li>
              <li><a href="#craftsmanship" className="hover:text-white transition-colors">The Art of Weaving</a></li>
              <li><a href="#editorial" className="hover:text-white transition-colors">Worn with Grace</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Viewing Salon</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Silk Mark Assurance</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Client Services</a></li>
            </ul>
          </div>

          {/* Newsletter / Bespoke Gazette */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-sans-clean font-medium block mb-2">
              The Atelier Gazette
            </span>
            <p className="text-[11px] text-stone-400 font-light leading-relaxed font-sans-clean">
              Receive private previews of limited heirloom weave releases and bridal salon invitations.
            </p>

            {subscribed ? (
              <div className="mt-4 p-3 rounded-xl bg-[#191614] border border-[#c5a880]/30 text-[11px] text-[#e1cba7] font-sans-clean leading-relaxed">
                ❖ Thank you. Your invitation to the Aarohi Gazette has been registered.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubscribed(true)
                }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="bg-[#191614] border border-white/15 focus:border-[#c5a880] rounded-full px-4 py-2 text-xs text-white placeholder-stone-600 outline-none w-full font-sans-clean"
                />
                <button
                  type="submit"
                  className="bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-semibold font-sans-clean flex-shrink-0 transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-sans-clean gap-4">
          <p className="m-0">
            © {new Date().getFullYear()} Aarohi Studio Pvt. Ltd. All rights reserved. Registered Indian Haute Couture House.
          </p>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-stone-300 transition-colors">Terms of Commission</a>
            <a href="#home" className="hover:text-stone-300 transition-colors">Authentication Registry</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
