'use client'

import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react'

export default function CoutureVideoSpotlight() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative bg-[#191614] text-[#f7f4ee] section-pad-luxury overflow-hidden border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-10 bg-[#c5a880]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean font-medium">
                03 / Cinematic Couture Spotlight
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#f7f4ee] tracking-tight">
              The Bridal Trousseau <em className="italic text-[#e1cba7] font-normal">in 3D Motion.</em>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-light max-w-sm mt-3 md:mt-0 font-sans-clean">
            Experience the architectural structure, pleat fluidity, and genuine gold zari luster captured in our atelier campaign film.
          </p>
        </div>

        {/* 16:9 Cinematic Video Display Container */}
        <div className="relative mx-auto rounded-3xl overflow-hidden border border-[#c5a880]/35 bg-[#12100e] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85),0_0_40px_rgba(197,168,128,0.15)] aspect-[16/9] max-w-5xl">
          
          <video
            ref={videoRef}
            src="/videos/brand-couture-video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-20 text-[10px] uppercase tracking-[0.2em] font-sans-clean">
            <span className="bg-[#12100e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[#e1cba7] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>3D Motion Study · Bridal Edition</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="bg-[#12100e]/80 hover:bg-[#12100e] backdrop-blur-md p-2 rounded-full border border-white/10 text-[#c5a880] transition-colors"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                aria-label="Toggle Audio"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <button
                onClick={togglePlay}
                className="bg-[#12100e]/80 hover:bg-[#12100e] backdrop-blur-md p-2 rounded-full border border-white/10 text-[#c5a880] transition-colors"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
                aria-label="Toggle Playback"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>

          {/* Bottom Floating Story Banner */}
          <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-[#12100e]/85 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] font-sans-clean block mb-1">
                Kala Ghoda Atelier Masterpiece
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#f7f4ee] font-light leading-snug m-0">
                The Noor-E-Awadh Vermilion Katan Silk
              </h3>
              <p className="text-[11px] text-stone-300 font-light mt-1 font-sans-clean hidden md:block">
                Woven over 72 artisan days with genuine silver electroplated gold zari and temple konia corners.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#c5a880] hover:bg-[#d8be96] text-[#12100e] font-medium px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans-clean transition-colors shadow-md"
              >
                <span>Book Bridal Consultation</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
