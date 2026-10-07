'use client'

import React from 'react'
import { Sparkles, Check } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

export default function ToastNotification() {
  const { toast } = useCart()

  if (!toast) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none select-none animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#1C1512]/95 text-[#FAF7F2] backdrop-blur-md px-5 py-3 rounded-full border border-[#C9A24B]/40 shadow-2xl flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-[#C9A24B]/20 flex items-center justify-center text-[#C9A24B]">
          <Check size={12} />
        </div>
        <span className="text-xs font-body font-medium tracking-wide">
          {toast}
        </span>
      </div>
    </div>
  )
}
