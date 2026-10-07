'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product } from './products'

export interface CartItem {
  id: string
  product: Product
  size: string
  color: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  totalCount: number
  subtotal: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  
  // Wishlist
  wishlist: string[]
  toggleWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  isWishlistOpen: boolean
  setIsWishlistOpen: (open: boolean) => void
  
  // Size Guide
  isSizeGuideOpen: boolean
  setIsSizeGuideOpen: (open: boolean) => void
  
  // Quick View Modal
  activeQuickView: Product | null
  setActiveQuickView: (product: Product | null) => void

  // Notification Toast
  toast: string | null
  showToast: (msg: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [activeQuickView, setActiveQuickView] = useState<Product | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  // Load from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('aurelle_cart')
      if (savedCart) setCart(JSON.parse(savedCart))
      const savedWishlist = localStorage.getItem('aurelle_wishlist')
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
    } catch {
      // Ignore fallback
    }
  }, [])

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aurelle_cart', JSON.stringify(cart))
    } catch {}
  }, [cart])

  useEffect(() => {
    try {
      localStorage.setItem('aurelle_wishlist', JSON.stringify(wishlist))
    } catch {}
  }, [wishlist])

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => {
      setToast((current) => (current === msg ? null : current))
    }, 3200)
  }

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    const itemKey = `${product.id}-${size}-${color}`
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemKey)
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          size,
          color,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
    showToast(`Added ${product.name} (${size}) to your bag.`)
  }

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => setCart([])

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from your private wishlist.')
        return prev.filter((id) => id !== productId)
      } else {
        showToast('Added to your private wishlist.')
        return [...prev, productId]
      }
    })
  }

  const isInWishlist = (productId: string) => wishlist.includes(productId)

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        activeQuickView,
        setActiveQuickView,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
