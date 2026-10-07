'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal, totalCount, clearCart } = useCart()
  const [checkingOut, setCheckingOut] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setCheckingOut(true)
    setTimeout(() => {
      setCheckingOut(false)
      setCheckoutComplete(true)
      setTimeout(() => {
        clearCart()
        setCheckoutComplete(false)
        setIsCartOpen(false)
      }, 2500)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#1C1512] shadow-2xl flex flex-col justify-between border-l border-[#C9A24B]/30 animate-in slide-in-from-right duration-400">
          
          {/* Header */}
          <div className="p-6 border-b border-[#1C1512]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-[#C9A24B]" />
              <h3 className="font-display text-xl text-[#1C1512] font-normal tracking-wide">
                Your Shopping Bag ({totalCount})
              </h3>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-[#1C1512]/5 text-[#1C1512]/70 hover:text-[#1C1512] transition-colors"
              aria-label="Close Bag"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#1C1512]/60">
                <ShoppingBag size={42} className="text-[#C9A24B]/40 stroke-1 mb-4" />
                <p className="font-display text-xl text-[#1C1512]">Your Bag is Empty</p>
                <p className="text-xs font-body font-light mt-1 max-w-xs">
                  Explore our curated silk dresses, evening gowns, and ceremonial lehengas.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-gold-pill mt-6 py-2.5 px-6 text-[10px]"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-[#1C1512]/5 shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#1C1512]/5 flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-display text-sm text-[#1C1512] font-medium leading-snug line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#1C1512]/40 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-[#1C1512]/60 font-body mt-1">
                        <span>Size: <strong className="text-[#1C1512]">{item.size}</strong></span>
                        <span>•</span>
                        <span>Color: <strong className="text-[#1C1512]">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1C1512]/5">
                      {/* Qty Steppers */}
                      <div className="flex items-center border border-[#1C1512]/15 rounded-full px-2 py-0.5 bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-[#1C1512]/70 hover:text-[#1C1512] p-1"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold font-body">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#1C1512]/70 hover:text-[#1C1512] p-1"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className="font-display text-sm text-[#C9A24B] font-semibold">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Pill */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#1C1512]/10 bg-white/70 backdrop-blur-md">
              <div className="space-y-2 mb-4 text-xs font-body">
                <div className="flex justify-between text-[#1C1512]/70">
                  <span>Subtotal</span>
                  <span className="font-display text-base font-semibold text-[#1C1512]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[#1C1512]/70">
                  <span>White Glove Express Shipping</span>
                  <span className="text-[#C9A24B] font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between text-[#1C1512]/70">
                  <span>Heirloom Muslin Packaging</span>
                  <span className="text-[#C9A24B] font-medium">Included</span>
                </div>
              </div>

              {checkoutComplete ? (
                <div className="p-3.5 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B] text-center text-xs font-body font-semibold text-[#C9A24B] flex items-center justify-center gap-2">
                  <Check size={16} />
                  <span>Razorpay Order Initialized! Connecting with Concierge Desk...</span>
                </div>
              ) : (
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="btn-gold-pill w-full py-3.5 shadow-xl flex items-center justify-center gap-2 text-xs"
                >
                  {checkingOut ? (
                    <span>Securing Razorpay Gateway...</span>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              )}

              <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-[#1C1512]/50 font-body">
                <ShieldCheck size={12} className="text-[#C9A24B]" />
                <span>256-Bit Encrypted · Razorpay &amp; Global Cards Accepted</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
