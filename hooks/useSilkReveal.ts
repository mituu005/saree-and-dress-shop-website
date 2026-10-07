'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseSilkRevealOptions {
  triggerRef?: React.RefObject<HTMLElement | null>
  selector?: string
  stagger?: number
  delay?: number
  y?: number
  skewY?: number
  duration?: number
  start?: string
  once?: boolean
}

export function useSilkReveal<T extends HTMLElement = HTMLDivElement>({
  selector = '.silk-reveal',
  stagger = 0.08,
  delay = 0,
  y = 60,
  skewY = 4,
  duration = 1.1,
  start = 'top 85%',
  once = true,
}: UseSilkRevealOptions = {}) {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Honor prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const targets = el.querySelectorAll(selector)
      targets.forEach((t) => {
        gsap.set(t, { opacity: 1, y: 0, skewY: 0 })
      })
      return
    }

    const targets = el.querySelectorAll(selector)
    if (targets.length === 0) return

    // Set initial state
    gsap.set(targets, {
      opacity: 0,
      y,
      skewY,
      transformOrigin: 'top left',
      willChange: 'transform, opacity',
    })

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration,
            stagger,
            delay,
            ease: 'power4.out',
            clearProps: 'willChange',
          })
        },
      })
    }, el)

    return () => ctx.revert()
  }, [selector, stagger, delay, y, skewY, duration, start, once])

  return containerRef
}

export function animateMaskedLines(container: HTMLElement | null, start = 'top 85%') {
  if (!container) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const lines = container.querySelectorAll('.line-reveal-inner')

  if (prefersReducedMotion) {
    gsap.set(lines, { y: '0%' })
    return
  }

  gsap.set(lines, { y: '110%' })

  ScrollTrigger.create({
    trigger: container,
    start,
    once: true,
    onEnter: () => {
      gsap.to(lines, {
        y: '0%',
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12,
      })
    },
  })
}
