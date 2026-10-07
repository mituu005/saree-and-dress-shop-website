'use client'

import React, { useState, useEffect } from 'react'
import { Search, Heart, ShoppingBag, Menu, X, Ruler } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { totalCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSizeGuideOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'New In', href: '#new-arrivals' },
    { label: 'Dresses', href: '#showcase' },
    { label: 'Occasion', href: '#occasions' },
    { label: 'Craft & Silk', href: '#craft' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'About', href: '#about' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C9A24B]/20 py-4 shadow-[0_10px_30px_rgba(28,21,18,0.04)]'
            : 'bg-gradient-to-b from-[#1C1512]/60 via-[#1C1512]/20 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="group flex flex-col items-start select-none"
            aria-label="AURELLE Home"
          >
            <span
              className={`font-display tracking-[0.38em] text-2xl sm:text-3xl font-light transition-colors ${
                scrolled ? 'text-[#1C1512] group-hover:text-[#C9A24B]' : 'text-white group-hover:text-[#E8D8BA]'
              }`}
            >
              AURELLE
            </span>
            <span
              className={`text-[7px] uppercase tracking-[0.45em] font-body mt-0.5 ${
                scrolled ? 'text-[#C9A24B]' : 'text-[#E8D8BA]/80'
              }`}
            >
              Haute Couture · Paris · Mumbai
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.26em] font-body font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`py-1 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24B] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled
                    ? 'text-[#1C1512]/80 hover:text-[#C9A24B]'
                    : 'text-white/90 hover:text-[#E8D8BA]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-5 sm:gap-6">
            
            {/* Size Guide Trigger */}
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className={`hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-body transition-colors ${
                scrolled ? 'text-[#1C1512]/75 hover:text-[#C9A24B]' : 'text-white/80 hover:text-white'
              }`}
              title="Size & Measurement Guide"
            >
              <Ruler size={13} className="text-[#C9A24B]" />
              <span className="hidden xl:inline">Size Guide</span>
            </button>

            {/* Search Trigger */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-1.5 transition-colors ${
                  scrolled ? 'text-[#1C1512] hover:text-[#C9A24B]' : 'text-white hover:text-[#E8D8BA]'
                }`}
                aria-label="Search Collection"
              >
                <Search size={18} />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 bg-[#FAF7F2] p-3 rounded-2xl shadow-2xl border border-[#C9A24B]/30 text-[#1C1512] z-50">
                  <div className="flex items-center gap-2 border-b border-[#1C1512]/15 pb-2">
                    <Search size={14} className="text-[#C9A24B]" />
                    <input
                      type="text"
                      placeholder="Search dresses, lehengas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs outline-none w-full font-body placeholder:text-[#1C1512]/40"
                      autoFocus
                    />
                    <button onClick={() => setSearchOpen(false)} className="text-[#1C1512]/60 hover:text-[#1C1512]">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="mt-2 text-[9px] uppercase tracking-wider text-[#1C1512]/50 flex gap-2">
                    <span>Popular:</span>
                    <a href="#showcase" onClick={() => setSearchOpen(false)} className="hover:text-[#C9A24B]">Silk Gowns</a>
                    <a href="#new-arrivals" onClick={() => setSearchOpen(false)} className="hover:text-[#C9A24B]">Bridal</a>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Trigger with Badge */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className={`relative p-1.5 transition-colors ${
                scrolled ? 'text-[#1C1512] hover:text-[#C9A24B]' : 'text-white hover:text-[#E8D8BA]'
              }`}
              aria-label="Wishlist"
              title="Private Wishlist"
            >
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A24B] text-white text-[9px] font-bold flex items-center justify-center font-body shadow-sm">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger with Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-1.5 transition-colors ${
                scrolled ? 'text-[#1C1512] hover:text-[#C9A24B]' : 'text-white hover:text-[#E8D8BA]'
              }`}
              aria-label="Cart"
              title="Shopping Bag"
            >
              <ShoppingBag size={18} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A24B] text-white text-[9px] font-bold flex items-center justify-center font-body shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 transition-colors ${
                scrolled ? 'text-[#1C1512]' : 'text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#FAF7F2] text-[#1C1512] flex flex-col justify-between px-8 py-28 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="border-b border-[#1C1512]/10 pb-4 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A24B] font-body font-semibold">
              AURELLE Haute Couture Menu
            </span>
            <span className="text-[10px] font-body text-[#1C1512]/50">Spring / Summer &apos;26</span>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl text-[#1C1512] hover:text-[#C9A24B] transition-colors flex items-center justify-between border-b border-[#1C1512]/5 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-body text-[#C9A24B] tracking-widest">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#1C1512]/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setIsSizeGuideOpen(true)
            }}
            className="btn-ghost-pill w-full text-center"
          >
            <Ruler size={14} className="text-[#C9A24B]" />
            <span>Size &amp; Fit Guide</span>
          </button>
          <a
            href="https://wa.me/919876543210?text=Hello%20Aurelle%20Atelier,%20I%20would%20like%20to%20enquire%20about%20your%20couture%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-pill w-full text-center"
          >
            WhatsApp Private Concierge
          </a>
        </div>
      </div>
    </>
  )
}
