'use client'

import React from 'react'
import Image from 'next/image'
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import { PRODUCTS } from '@/lib/products'

export default function WishlistDrawer() {
  const { wishlist, toggleWishlist, isWishlistOpen, setIsWishlistOpen, addToCart } = useCart()

  if (!isWishlistOpen) return null

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id))

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#1C1512] shadow-2xl flex flex-col justify-between border-l border-[#C9A24B]/30 animate-in slide-in-from-right duration-400">
          
          {/* Header */}
          <div className="p-6 border-b border-[#1C1512]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-[#C9A24B] fill-[#C9A24B]" />
              <h3 className="font-display text-xl text-[#1C1512] font-normal tracking-wide">
                Private Wishlist ({wishlist.length})
              </h3>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-full hover:bg-[#1C1512]/5 text-[#1C1512]/70 hover:text-[#1C1512] transition-colors"
              aria-label="Close Wishlist"
            >
              <X size={18} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#1C1512]/60">
                <Heart size={42} className="text-[#C9A24B]/40 stroke-1 mb-4" />
                <p className="font-display text-xl text-[#1C1512]">No Pieces Saved Yet</p>
                <p className="text-xs font-body font-light mt-1 max-w-xs">
                  Tap the heart icon on any gown, dress, or lehenga to save it to your private salon collection.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="btn-gold-pill mt-6 py-2.5 px-6 text-[10px]"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-[#1C1512]/5 shadow-sm"
                >
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#1C1512]/5 flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-display text-sm text-[#1C1512] font-medium leading-snug line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#1C1512]/40 hover:text-red-500 transition-colors p-1"
                          title="Remove from Wishlist"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <span className="text-[10px] text-[#C9A24B] font-body uppercase tracking-wider block mt-0.5">
                        {product.occasion}
                      </span>

                      <span className="font-display text-sm text-[#1C1512] font-semibold block mt-1">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#1C1512]/5">
                      <button
                        onClick={() => {
                          addToCart(product, product.sizes[0] || 'S', product.colors[0]?.name || 'Standard', 1)
                          toggleWishlist(product.id)
                        }}
                        className="btn-gold-pill w-full py-2 text-[10px]"
                      >
                        <ShoppingBag size={12} />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-6 border-t border-[#1C1512]/10 bg-white/70 backdrop-blur-md">
              <button
                onClick={() => {
                  wishlistProducts.forEach((p) => {
                    addToCart(p, p.sizes[0] || 'S', p.colors[0]?.name || 'Standard', 1)
                  })
                  setIsWishlistOpen(false)
                }}
                className="btn-espresso-pill w-full py-3.5 shadow-lg text-xs"
              >
                <span>Add All to Shopping Bag</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
