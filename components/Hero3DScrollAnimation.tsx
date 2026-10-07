'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Rotate3d, Play, Pause, Compass, Sparkles, Eye, ArrowDown, ArrowUpRight, Volume2, VolumeX, Film } from 'lucide-react'

interface Hero3DScrollAnimationProps {
  totalFrames?: number
  framePathPrefix?: string
  videoSrc?: string
  className?: string
}

export default function Hero3DScrollAnimation({
  totalFrames = 25,
  framePathPrefix = '/frames/hero/frame_',
  videoSrc = '/videos/brand-couture-video.mp4',
  className = '',
}: Hero3DScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // State
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 })
  const [isDragging, setIsDragging] = useState(false)
  const [displayMode, setDisplayMode] = useState<'3d-frames' | 'cinematic-video'>('3d-frames')
  const [isVideoMuted, setIsVideoMuted] = useState(true)

  // Refs for animation loop & caching
  const imagesRef = useRef<HTMLImageElement[]>([])
  const targetFrameRef = useRef(0)
  const currentFrameFloatRef = useRef(0)
  const animFrameIdRef = useRef<number | null>(null)
  const isPlayingRef = useRef(false)
  const playDirectionRef = useRef(1)
  const dragStartXRef = useRef(0)
  const dragStartFrameRef = useRef(0)

  isPlayingRef.current = isPlaying

  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(index).padStart(4, '0')
      return `${framePathPrefix}${padded}.jpg`
    },
    [framePathPrefix]
  )

  // Preload frames
  useEffect(() => {
    let isCancelled = false
    const count = totalFrames
    const newImages: HTMLImageElement[] = new Array(count)
    imagesRef.current = newImages
    setLoadedCount(0)
    setIsLoaded(false)

    // Load first frame immediately with priority
    const firstImg = new Image()
    firstImg.src = getFrameUrl(0)
    firstImg.onload = () => {
      if (isCancelled) return
      newImages[0] = firstImg
      setIsLoaded(true)
      setLoadedCount(1)
      drawFrame(0)
    }

    // Load remaining frames progressively
    let loaded = 1
    for (let i = 1; i < count; i++) {
      const img = new Image()
      img.src = getFrameUrl(i)
      img.onload = () => {
        if (isCancelled) return
        newImages[i] = img
        loaded++
        setLoadedCount(loaded)
      }
      img.onerror = () => {
        loaded++
      }
    }

    return () => {
      isCancelled = true
    }
  }, [totalFrames, getFrameUrl])

  // Canvas Drawing
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const images = imagesRef.current
    if (!images || images.length === 0) return

    // Find closest loaded frame if requested frame is still downloading
    let imgToDraw = images[frameIdx]
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      for (let offset = 1; offset < images.length; offset++) {
        const prev = frameIdx - offset
        if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth) {
          imgToDraw = images[prev]
          break
        }
        const next = frameIdx + offset
        if (next < images.length && images[next]?.complete && images[next]?.naturalWidth) {
          imgToDraw = images[next]
          break
        }
      }
    }

    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)

    // Draw maintaining aspect ratio (cover)
    const imgRatio = imgToDraw.naturalWidth / imgToDraw.naturalHeight
    const canvasRatio = width / height
    let renderW = width
    let renderH = height
    let offsetX = 0
    let offsetY = 0

    if (canvasRatio > imgRatio) {
      renderH = width / imgRatio
      offsetY = (height - renderH) / 2
    } else {
      renderW = height * imgRatio
      offsetX = (width - renderW) / 2
    }

    ctx.drawImage(imgToDraw, offsetX, offsetY, renderW, renderH)
  }, [])

  // Physics-based lerp frame loop for silky smooth scrubbing
  useEffect(() => {
    if (displayMode !== '3d-frames') return

    const loop = () => {
      if (isPlayingRef.current) {
        // Ping-pong between 0 and totalFrames - 1
        if (playDirectionRef.current === 1) {
          targetFrameRef.current += 0.28
          if (targetFrameRef.current >= totalFrames - 1) {
            targetFrameRef.current = totalFrames - 1
            playDirectionRef.current = -1
          }
        } else {
          targetFrameRef.current -= 0.28
          if (targetFrameRef.current <= 0) {
            targetFrameRef.current = 0
            playDirectionRef.current = 1
          }
        }
      }

      // Smooth lerp interpolation
      const diff = targetFrameRef.current - currentFrameFloatRef.current
      if (Math.abs(diff) > 0.001) {
        currentFrameFloatRef.current += diff * 0.18
        if (currentFrameFloatRef.current < 0) currentFrameFloatRef.current = 0
        if (currentFrameFloatRef.current > totalFrames - 1) currentFrameFloatRef.current = totalFrames - 1

        const rounded = Math.min(totalFrames - 1, Math.max(0, Math.round(currentFrameFloatRef.current)))
        setCurrentFrame(rounded)
        drawFrame(rounded)
      }

      animFrameIdRef.current = requestAnimationFrame(loop)
    }

    animFrameIdRef.current = requestAnimationFrame(loop)
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current)
    }
  }, [totalFrames, drawFrame, displayMode])

  // Scroll Listener on track container
  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current
      if (!track || isPlayingRef.current || displayMode !== '3d-frames') return

      const rect = track.getBoundingClientRect()
      const scrollableDistance = track.offsetHeight - window.innerHeight
      if (scrollableDistance <= 0) return

      // Progress 0 to 1 when scrolling through track
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance))
      const target = Math.min(totalFrames - 1, Math.floor(progress * (totalFrames - 1)))
      targetFrameRef.current = target
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [totalFrames, displayMode])

  // Resize listener for canvas resolution
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      drawFrame(currentFrame)
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    return () => window.removeEventListener('resize', updateCanvasSize)
  }, [currentFrame, drawFrame])

  // Mouse 3D perspective tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    // Subtle luxury tilt angle
    setTilt({
      x: (y - 0.5) * -5.5,
      y: (x - 0.5) * 7.5,
    })
    setLightPos({
      x: Math.round(x * 100),
      y: Math.round(y * 100),
    })

    // Drag scrub
    if (isDragging && displayMode === '3d-frames') {
      const deltaX = e.clientX - dragStartXRef.current
      const sensitivity = 18
      const frameDelta = Math.floor(deltaX / sensitivity)
      let nextFrame = Math.max(0, Math.min(totalFrames - 1, dragStartFrameRef.current + frameDelta))
      targetFrameRef.current = nextFrame
    }
  }

  const handleMouseEnter = () => {
    if (isPlaying) setIsPlaying(false)
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsDragging(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (displayMode !== '3d-frames') return
    setIsDragging(true)
    setIsPlaying(false)
    dragStartXRef.current = e.clientX
    dragStartFrameRef.current = targetFrameRef.current
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (displayMode !== '3d-frames') return
    if (e.touches.length === 1) {
      setIsDragging(true)
      setIsPlaying(false)
      dragStartXRef.current = e.touches[0].clientX
      dragStartFrameRef.current = targetFrameRef.current
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1 && displayMode === '3d-frames') {
      const deltaX = e.touches[0].clientX - dragStartXRef.current
      const sensitivity = 18
      const frameDelta = Math.floor(deltaX / sensitivity)
      let nextFrame = Math.max(0, Math.min(totalFrames - 1, dragStartFrameRef.current + frameDelta))
      targetFrameRef.current = nextFrame
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Manual scrubber drag / click
  const handleScrubberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPlaying(false)
    const val = parseInt(e.target.value, 10)
    targetFrameRef.current = val
  }

  // Calculations for UI metrics
  const progressPercent = Math.round((currentFrame / (totalFrames - 1 || 1)) * 100)

  return (
    <div
      ref={trackRef}
      className={`hero-3d-scroll-track relative w-full ${className}`}
      style={{ minHeight: displayMode === '3d-frames' ? '210vh' : '100vh' }}
    >
      {/* Sticky Hero Viewport - Guaranteed top clearance prevents any collision with navbar */}
      <div className="sticky top-0 min-h-screen h-screen w-full flex flex-col items-center justify-start overflow-hidden px-4 md:px-8 pt-24 md:pt-28 pb-4 select-none">
        
        {/* Subtle Ambient Radial Lighting */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse 65% 45% at 50% 52%, rgba(197, 168, 128, 0.18) 0%, rgba(20, 18, 16, 0.95) 75%, #12100e 100%)`,
          }}
        />

        {/* Floating Brand & Atelier Headline - Poised luxury hierarchy */}
        <div className="relative z-10 text-center max-w-2xl px-4 flex flex-col items-center flex-shrink-0 animate-fade-in">
          
          {/* Haute Couture Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c5a880]/35 bg-[#12100e]/95 backdrop-blur-md mb-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-[9px] sm:text-[9.5px] uppercase tracking-[0.32em] text-[#e1cba7] font-sans-clean font-medium">
              Haute Couture Atelier · Est. 2012
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[8.5px] uppercase tracking-[0.25em] text-[#c5a880]/80 font-sans-clean hidden sm:inline">
              Kala Ghoda, Mumbai
            </span>
          </div>
          
          {/* Main Statement */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-serif-luxury tracking-tight leading-none m-0 font-light">
            <span className="text-[#f7f4ee]">TIMELESS </span>
            <span className="italic font-normal text-gold-accent font-serif-luxury">ELEGANCE.</span>
          </h1>
          
          <p className="text-[12px] sm:text-xs text-[#ede5d8]/80 mt-2 max-w-md mx-auto font-light leading-relaxed font-sans-clean hidden sm:block">
            Where centuries of royal Indian pit-loom artistry meet contemporary silhouette grace.
          </p>

          {/* Understated Luxury Actions */}
          <div className="flex items-center justify-center gap-3.5 mt-2.5">
            <a
              href="#collections"
              className="btn-couture-gold"
            >
              <span>Explore The Edits</span>
              <ArrowUpRight size={13} />
            </a>
            <a
              href="#craftsmanship"
              className="btn-couture-outline"
            >
              <span>The Art of Weaving</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* 16:9 Aspect Ratio 3D Viewport Container - Height-constrained so it never overflows */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative mx-auto mt-3 md:mt-3.5 cursor-grab active:cursor-grabbing transition-transform duration-300 ease-out z-10 w-full ${
            isDragging ? 'scale-[1.008]' : ''
          }`}
          style={{
            maxWidth: 'min(92vw, 1020px, calc((100vh - 290px) * 16 / 9))',
            perspective: '1300px',
          }}
        >
          {/* Strict 16:9 Aspect Ratio Frame with 3D Transform */}
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#c5a880]/35 bg-[#12100e] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(197,168,128,0.18)] transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* View Mode 1: Interactive 3D Canvas */}
            {displayMode === '3d-frames' ? (
              <canvas
                ref={canvasRef}
                width={1696}
                height={956}
                className="w-full h-full object-cover block"
                style={{
                  filter: 'contrast(1.02) saturate(1.04)',
                }}
              />
            ) : (
              /* View Mode 2: Full Cinematic 4K Video Ambient Loop */
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="w-full h-full object-cover block"
                style={{
                  filter: 'contrast(1.02) saturate(1.04)',
                }}
              />
            )}

            {/* Specular Dynamic Glass Glare following cursor */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 380px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`,
                mixBlendMode: 'overlay',
              }}
            />

            {/* Subtle Vignette & Cinema Letterbox Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/45" />

            {/* Viewfinder Crosshairs & Gold Corner Brackets */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-[#c5a880]/80 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-[#c5a880]/80 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b border-l border-[#c5a880]/80 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-[#c5a880]/80 pointer-events-none" />

            {/* Top Bar Floating Overlays */}
            <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-20 text-[10px] uppercase tracking-[0.2em] font-sans-clean">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 text-white shadow-sm pointer-events-auto">
                <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className="font-mono text-stone-300 text-[10px]">
                  {displayMode === '3d-frames'
                    ? progressPercent === 0
                      ? 'Panorama: 0°'
                      : progressPercent === 100
                      ? 'Drape Focus'
                      : `Atelier Zoom: ${progressPercent}%`
                    : '4K Runway Reel'}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[#c5a880] font-medium hidden sm:inline">Kala Ghoda</span>
              </div>

              {/* Mode Toggle Switcher */}
              <div className="flex items-center gap-2 pointer-events-auto">
                <div className="bg-black/70 backdrop-blur-md p-0.5 rounded-lg border border-white/10 flex items-center text-[9.5px]">
                  <button
                    onClick={() => setDisplayMode('3d-frames')}
                    className={`px-2.5 py-1 rounded-md transition-all font-sans-clean tracking-wider uppercase ${
                      displayMode === '3d-frames'
                        ? 'bg-[#c5a880] text-[#12100e] font-semibold shadow'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Interactive 3D
                  </button>
                  <button
                    onClick={() => setDisplayMode('cinematic-video')}
                    className={`px-2.5 py-1 rounded-md transition-all font-sans-clean tracking-wider uppercase ${
                      displayMode === 'cinematic-video'
                        ? 'bg-[#c5a880] text-[#12100e] font-semibold shadow'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Cinematic 4K
                  </button>
                </div>

                {displayMode === 'cinematic-video' && (
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="p-1.5 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 text-[#c5a880] hover:text-white transition-colors"
                    title={isVideoMuted ? 'Unmute Ambient Sound' : 'Mute'}
                    aria-label="Toggle Mute"
                  >
                    {isVideoMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  </button>
                )}
              </div>
            </div>

            {/* Center Loading Hint for frames */}
            {displayMode === '3d-frames' && !isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white text-xs flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin" />
                  <span>Loading atelier frames ({loadedCount}/{totalFrames})...</span>
                </div>
              </div>
            )}

            {/* Bottom Bar: Interactive Timeline Scrubber & Controls (In 3D mode) */}
            {displayMode === '3d-frames' ? (
              <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-white/90 text-[10px] tracking-wider uppercase font-medium">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center gap-1.5 bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] px-2.5 py-1 rounded-md font-semibold text-[9.5px] tracking-wider transition-transform active:scale-95 shadow"
                      title={isPlaying ? 'Pause Auto Motion' : 'Auto Motion'}
                    >
                      {isPlaying ? <Pause size={10} /> : <Play size={10} />}
                      <span>{isPlaying ? 'PAUSE' : 'AUTO'}</span>
                    </button>

                    <span className="hidden sm:inline-block text-stone-300 text-[10px] tracking-widest font-mono">
                      FRAME {String(currentFrame + 1).padStart(2, '0')} / {totalFrames}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-stone-300 tracking-widest bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                    <span>SCROLL OR DRAG TO ZOOM</span>
                  </div>
                </div>

                {/* Scrubber Range Bar */}
                <div className="relative flex items-center w-full group">
                  <input
                    type="range"
                    min="0"
                    max={totalFrames - 1}
                    value={currentFrame}
                    onChange={handleScrubberChange}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#c5a880] focus:outline-none transition-all group-hover:h-1.5"
                    style={{
                      background: `linear-gradient(to right, #c5a880 ${progressPercent}%, rgba(255,255,255,0.15) ${progressPercent}%)`,
                    }}
                    aria-label="Timeline Scrubber"
                  />
                </div>
              </div>
            ) : (
              /* Bottom Bar for Video Mode */
              <div className="absolute bottom-3.5 left-4 right-4 z-20 flex items-center justify-between text-white/90 text-[10px] tracking-wider uppercase font-sans-clean">
                <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-stone-300 flex items-center gap-2">
                  <Film size={12} className="text-[#c5a880]" />
                  <span>Cinematic Showroom Reel · Aarohi Atelier</span>
                </span>
                <a
                  href="#sarees"
                  className="bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] font-semibold px-3 py-1 rounded-md text-[9.5px] tracking-widest transition-colors"
                >
                  View Featured Drapes ↓
                </a>
              </div>
            )}
          </div>

          {/* Perspective Shadow Base */}
          <div
            className="w-[90%] mx-auto h-5 rounded-[100%] bg-black/80 blur-lg -mt-1 pointer-events-none"
            style={{
              transform: `scale(${1 - Math.abs(tilt.x) * 0.02})`,
            }}
          />
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="relative z-10 mt-2 md:mt-3 flex items-center gap-2 text-stone-300 text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase font-light animate-bounce flex-shrink-0 font-sans-clean">
          <ArrowDown className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Scroll to explore</span>
        </div>

      </div>
    </div>
  )
}
