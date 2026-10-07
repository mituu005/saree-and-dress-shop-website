'use client'

import React, { useState } from 'react'
import { X, Ruler, Sparkles, MessageCircle } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

interface MeasurementRow {
  size: string
  ukUs: string
  bustIn: string
  bustCm: string
  waistIn: string
  waistCm: string
  hipIn: string
  hipCm: string
  lengthIn: string
  lengthCm: string
}

const SIZE_CHART: MeasurementRow[] = [
  { size: 'XS', ukUs: 'UK 6 / US 2', bustIn: '32 - 33"', bustCm: '81 - 84 cm', waistIn: '25 - 26"', waistCm: '63 - 66 cm', hipIn: '35 - 36"', hipCm: '89 - 91 cm', lengthIn: '58"', lengthCm: '147 cm' },
  { size: 'S', ukUs: 'UK 8 / US 4', bustIn: '34 - 35"', bustCm: '86 - 89 cm', waistIn: '27 - 28"', waistCm: '68 - 71 cm', hipIn: '37 - 38"', hipCm: '94 - 96 cm', lengthIn: '58.5"', lengthCm: '148 cm' },
  { size: 'M', ukUs: 'UK 10 / US 6', bustIn: '36 - 37"', bustCm: '91 - 94 cm', waistIn: '29 - 30"', waistCm: '73 - 76 cm', hipIn: '39 - 40"', hipCm: '99 - 101 cm', lengthIn: '59"', lengthCm: '150 cm' },
  { size: 'L', ukUs: 'UK 12 / US 8', bustIn: '38 - 40"', bustCm: '96 - 101 cm', waistIn: '31 - 33"', waistCm: '78 - 84 cm', hipIn: '41 - 43"', hipCm: '104 - 109 cm', lengthIn: '59.5"', lengthCm: '151 cm' },
  { size: 'XL', ukUs: 'UK 14 / US 10', bustIn: '41 - 43"', bustCm: '104 - 109 cm', waistIn: '34 - 36"', waistCm: '86 - 91 cm', hipIn: '44 - 46"', hipCm: '112 - 117 cm', lengthIn: '60"', lengthCm: '152 cm' },
  { size: 'XXL', ukUs: 'UK 16 / US 12', bustIn: '44 - 46"', bustCm: '112 - 117 cm', waistIn: '37 - 39"', waistCm: '94 - 99 cm', hipIn: '47 - 49"', hipCm: '119 - 124 cm', lengthIn: '60.5"', lengthCm: '154 cm' },
]

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart()
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches')

  if (!isSizeGuideOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in select-none">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={() => setIsSizeGuideOpen(false)} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] text-[#1C1512] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24B]/30 z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#1C1512]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Ruler size={20} className="text-[#C9A24B]" />
            <div>
              <span className="overline-luxury block text-[8px]">
                MAISON ATELIER SIZING
              </span>
              <h3 className="font-display text-2xl text-[#1C1512] font-normal leading-tight">
                Size &amp; Fit Guide
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Unit Switcher */}
            <div className="flex items-center bg-[#1C1512]/5 p-1 rounded-full border border-[#1C1512]/10 text-xs font-body">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  unit === 'inches' ? 'bg-[#C9A24B] text-white shadow-sm' : 'text-[#1C1512]/70 hover:text-[#1C1512]'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  unit === 'cm' ? 'bg-[#C9A24B] text-white shadow-sm' : 'text-[#1C1512]/70 hover:text-[#1C1512]'
                }`}
              >
                Centimeters
              </button>
            </div>

            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-2 rounded-full hover:bg-[#1C1512]/5 text-[#1C1512]/70 hover:text-[#1C1512] transition-colors"
              aria-label="Close Size Guide"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#1C1512]/10 bg-white">
            <table className="w-full text-left text-xs font-body border-collapse">
              <thead>
                <tr className="bg-[#1C1512]/5 text-[#1C1512] text-[10px] uppercase tracking-wider font-semibold border-b border-[#1C1512]/10">
                  <th className="p-3.5 pl-4">Size</th>
                  <th className="p-3.5">Standard</th>
                  <th className="p-3.5">Bust</th>
                  <th className="p-3.5">Waist</th>
                  <th className="p-3.5">Hip</th>
                  <th className="p-3.5 pr-4">Dress Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C1512]/5 text-[#1C1512]/80">
                {SIZE_CHART.map((row) => (
                  <tr key={row.size} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="p-3.5 pl-4 font-semibold text-[#1C1512]">{row.size}</td>
                    <td className="p-3.5 text-[#1C1512]/60">{row.ukUs}</td>
                    <td className="p-3.5">{unit === 'inches' ? row.bustIn : row.bustCm}</td>
                    <td className="p-3.5">{unit === 'inches' ? row.waistIn : row.waistCm}</td>
                    <td className="p-3.5">{unit === 'inches' ? row.hipIn : row.hipCm}</td>
                    <td className="p-3.5 pr-4 text-[#C9A24B] font-medium">{unit === 'inches' ? row.lengthIn : row.lengthCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Measuring Guidance */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#1C1512]/5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9A24B] block mb-1">
                1. Bust
              </span>
              <p className="text-[11px] text-[#1C1512]/70 font-light leading-relaxed m-0">
                Measure around the fullest part of your bust while wearing your preferred brassiere, keeping tape level.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#1C1512]/5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9A24B] block mb-1">
                2. Natural Waist
              </span>
              <p className="text-[11px] text-[#1C1512]/70 font-light leading-relaxed m-0">
                Measure the narrowest point of your torso, typically one inch above your navel.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#1C1512]/5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9A24B] block mb-1">
                3. Hips
              </span>
              <p className="text-[11px] text-[#1C1512]/70 font-light leading-relaxed m-0">
                Stand with feet together and measure around the widest contour of your hips and seat.
              </p>
            </div>
          </div>

          {/* Bespoke Fit Callout */}
          <div className="p-5 rounded-2xl bg-[#C9A24B]/10 border border-[#C9A24B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-display text-base text-[#1C1512] font-medium block">
                Require Bespoke Made-to-Measure?
              </span>
              <p className="text-xs text-[#1C1512]/75 font-light mt-0.5 m-0">
                Our Kala Ghoda atelier offers custom blouse tailoring, lehenga waist/length adjustments, and personalized fittings.
              </p>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hello%20Aurelle%20Stylist,%20I%20would%20like%20to%20request%20custom%20measurements%20for%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-pill py-2.5 px-5 text-[10px] flex-shrink-0"
            >
              <MessageCircle size={13} />
              <span>Talk to Stylist</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}
