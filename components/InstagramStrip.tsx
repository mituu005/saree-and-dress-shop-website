'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { INSTAGRAM_POSTS } from '@/lib/products'
import { useLenis } from './LenisProvider'

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function InstagramStrip() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { lenis } = useLenis()

  // Dynamic velocity easing with Lenis
  useEffect(() => {
    if (!lenis || !marqueeRef.current) return

    const handleScroll = (e: { velocity: number }) => {
      if (!marqueeRef.current) return
      const extraSpeed = Math.min(Math.abs(e.velocity) * 0.08, 2.5)
      marqueeRef.current.style.animationDuration = `${Math.max(12, 35 - extraSpeed * 10)}s`
    }

    lenis.on('scroll', handleScroll)
    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  // Duplicate posts for infinite seamless loop
  const duplicated = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS]

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#FAF7F2] overflow-hidden select-none border-t border-[#1C1512]/5">
      
      {/* Center Floating Pill Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] text-[#1C1512] hover:text-[#C9A24B] border border-[#C9A24B]/40 shadow-2xl backdrop-blur-md text-[11px] uppercase tracking-[0.24em] font-body font-semibold transition-all duration-300 hover:scale-105"
        >
          <InstagramIcon size={16} />
          <span>@aurelle.official — Follow Us</span>
        </a>
      </div>

      {/* Infinite Scrolling Track */}
      <div
        ref={marqueeRef}
        className="animate-marquee flex items-center gap-4 sm:gap-6 will-change-transform"
      >
        {duplicated.map((post, idx) => (
          <div
            key={`${post.id}-${idx}`}
            className="group relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden bg-[#1C1512]/5 flex-shrink-0 shadow-md"
          >
            <Image
              src={post.image}
              alt="AURELLE Editorial Feed Post"
              fill
              sizes="(max-width: 640px) 192px, 240px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Dark Overlay with Likes */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-body font-medium">
              <div className="flex items-center gap-1.5">
                <InstagramIcon size={14} />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
