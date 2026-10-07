import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/cartContext'
import LenisProvider from '@/components/LenisProvider'

export const metadata: Metadata = {
  title: 'AURELLE | Haute Couture & Designer Dresses, Gowns & Ethnic Wear',
  description: 'A boutique luxury fashion house crafting bespoke dresses, evening gowns, bridal lehengas, and occasion wear. Silky, cinematic, and seamless.',
  keywords: [
    'AURELLE',
    'luxury women fashion',
    'designer dresses',
    'haute couture evening gowns',
    'bridal lehengas',
    'pre-draped silk sarees',
    'occasion wear',
  ],
  openGraph: {
    title: 'AURELLE | Dressed in Poetry',
    description: 'High-fashion editorial dresses, evening gowns, and ceremonial ethnic wear. Handcrafted luxury.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#FAF7F2] text-[#1C1512]">
      <body className="antialiased bg-[#FAF7F2] text-[#1C1512] font-body selection:bg-[#C9A24B] selection:text-white">
        <CartProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  )
}
