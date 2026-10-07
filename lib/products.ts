export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  subtitle: string
  category: 'dresses' | 'gowns' | 'ethnic' | 'occasion'
  occasion: 'Wedding & Bridal' | 'Evening Gala' | 'Casual Day Luxe' | 'Festive Ethnic'
  price: number
  mrp: number
  fabric: string
  description: string
  images: string[]
  sizes: string[]
  colors: ProductColor[]
  tag?: 'NEW' | 'BESTSELLER' | 'COUTURE' | 'RUNWAY' | 'LIMITED'
  rating: number
  reviewsCount: number
  details: string[]
  care: string
  featuredLookIndex?: number // For Dress Showcase cross-swap
}

export const PRODUCTS: Product[] = [
  {
    id: 'aurelle-noir-silk-gown',
    name: 'The Noir Obsidian Silk Gown',
    subtitle: 'Bias-cut Italian silk charmeuse with draped cowl back',
    category: 'gowns',
    occasion: 'Evening Gala',
    price: 38500,
    mrp: 46000,
    fabric: '100% Pure Mulberry Silk Charmeuse',
    description: 'An architectural floor-length gown engineered with bias-cut fluidity. Features an understated high bateau neckline, delicate gold chain nape clasp, and an elongated sweep train that moves like liquid shadow.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Obsidian Noir', hex: '#1C1512' },
      { name: 'Champagne Satin', hex: '#E8D8BA' },
      { name: 'Emerald Velvet', hex: '#1B382B' },
    ],
    tag: 'RUNWAY',
    rating: 4.95,
    reviewsCount: 38,
    details: [
      'Bias cut for natural body contouring without corsetry',
      'Hand-finished French rolled hems',
      'Concealed invisible Japanese YKK side closure',
      'Floor length with 30cm whisper sweep train',
    ],
    care: 'Specialist dry clean only. Store in breathable muslin bag.',
    featuredLookIndex: 0,
  },
  {
    id: 'aurelle-blush-tulle-cocktail',
    name: 'Blush Tulle & Pearl Cocktail Dress',
    subtitle: 'Layered French illusion tulle adorned with Basra micro-pearls',
    category: 'dresses',
    occasion: 'Evening Gala',
    price: 24900,
    mrp: 29500,
    fabric: 'French Silk Illusion Tulle & Organza',
    description: 'Featherlight and playful yet undeniably couture. Sculpted with a soft sweetheart bodice, hand-pleated gossamer tulle tiers, and scattered freshwater micro-pearls catching ambient evening light.',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Petal Blush', hex: '#F3E6E0' },
      { name: 'Ivory Frost', hex: '#FAF7F2' },
      { name: 'Dusty Rose', hex: '#C49B90' },
    ],
    tag: 'NEW',
    rating: 4.88,
    reviewsCount: 24,
    details: [
      'Internal boned silk bustier with gentle support',
      'Four cascading layers of fine point d’esprit tulle',
      'Scattered micro-pearl embellishment hand-sewn in atelier',
      'Midi-length tiered circle skirt',
    ],
    care: 'Gentle dry clean. Steam inside out on silk setting.',
    featuredLookIndex: 1,
  },
  {
    id: 'aurelle-chandrika-bridal-lehenga',
    name: 'The Chandrika Bridal Lehenga',
    subtitle: 'Varanasi raw silk hand-embroidered with 24K gold zardozi',
    category: 'ethnic',
    occasion: 'Wedding & Bridal',
    price: 98000,
    mrp: 115000,
    fabric: 'Pure Handloom Raw Silk & Tissue Dupatta',
    description: 'A bridal magnum opus. Woven in Varanasi across 140 artisan hours, featuring temple arched kalis, beaten metallic zardozi flora, and paired with an ethereal molten tissue drape.',
    images: [
      '/images/wedding-bridal.jpg',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Imperial Vermilion', hex: '#872120' },
      { name: 'Gilded Amber', hex: '#C9A24B' },
      { name: 'Antique Ivory', hex: '#F4ECE1' },
    ],
    tag: 'COUTURE',
    rating: 5.0,
    reviewsCount: 42,
    details: [
      '16-kali flair crafted with authentic micro-can-can structure',
      'Pure silver core wire electroplated in 24K gold zari',
      'Includes padded hand-embroidered silk blouse & dual dupattas',
      'Custom waist and length made to order',
    ],
    care: 'Dry clean only. Store with natural cedar & neem leaves.',
    featuredLookIndex: 2,
  },
  {
    id: 'aurelle-sunset-ochre-midi',
    name: 'Sunset Ochre Sunburst Midi',
    subtitle: 'Accordion-pleated silk georgette with gilded halter neckline',
    category: 'dresses',
    occasion: 'Casual Day Luxe',
    price: 19800,
    mrp: 23000,
    fabric: 'Silk Georgette with Permanent Crystal Pleating',
    description: 'Effortless holiday glamour. Spun in rich golden-ochre silk georgette, the sunburst pleats catch the sea breeze while a hand-hammered brass collar fastens at the nape.',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sunset Ochre', hex: '#C88D38' },
      { name: 'Warm Terracotta', hex: '#B85D43' },
      { name: 'Vanilla Cream', hex: '#F9F5EC' },
    ],
    tag: 'BESTSELLER',
    rating: 4.92,
    reviewsCount: 31,
    details: [
      'Removable artisanal hammered brass neck torque',
      'Permanent heat-set micro sunburst pleats',
      'Self-tie sash belt for waist cinch option',
      'Fully lined with breathable mulberry silk habotai',
    ],
    care: 'Dry clean recommended to preserve pleating crispness.',
    featuredLookIndex: 3,
  },
  {
    id: 'aurelle-verona-draped-saree',
    name: 'The Verona Pre-Draped Tissue Saree',
    subtitle: 'Modern pre-stitched metallic tissue drape with bustier blouse',
    category: 'ethnic',
    occasion: 'Festive Ethnic',
    price: 34500,
    mrp: 41000,
    fabric: 'Molten Metallic Silk Tissue & Pearl Embroidery',
    description: 'Revolutionizing classic ethnic elegance. Features ready-to-step-in architectural pleats, an engineered pallu that stays securely pinned, and an embroidered structured bustier.',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Champagne Gold', hex: '#D7BE8A' },
      { name: 'Rose Platinum', hex: '#CEB2B0' },
      { name: 'Midnight Charcoal', hex: '#262220' },
    ],
    tag: 'NEW',
    rating: 4.96,
    reviewsCount: 19,
    details: [
      'Zero-fuss step-in pre-draped silhouette (wears in 60 seconds)',
      'Concealed waist clasp with 3 adjustment eyelets',
      'Matching padded corset blouse with basra pearl edging',
      'Silk Mark certified textile purity',
    ],
    care: 'Dry clean only. Store wrapped in unbleached mulmul.',
  },
  {
    id: 'aurelle-monaco-cutout-gown',
    name: 'Monaco Crepe Couture Mini Dress',
    subtitle: 'Sculptural Italian crepe with architectural silhouette and clean lines',
    category: 'gowns',
    occasion: 'Evening Gala',
    price: 31000,
    mrp: 36500,
    fabric: 'Heavyweight Italian Wool-Silk Crepe',
    description: 'Clean architectural lines meet effortless modern elegance. Tailored from structured Italian silk crepe with a sculpted waist, soft peplum flare, and immaculate couture finish.',
    images: [
      '/images/monaco-short-dress.jpg',
      '/images/monaco-short-dress.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Black', hex: '#141210' },
      { name: 'Chalk Ivory', hex: '#FAF7F2' },
      { name: 'Scarlet Ruby', hex: '#8C1F22' },
    ],
    tag: 'COUTURE',
    rating: 4.91,
    reviewsCount: 17,
    details: [
      'Architectural structured silhouette with high funnel collar',
      'Fitted waistline with sculpted peplum wing accents',
      'Concealed back zip closure with silk-covered hook',
      'Fully lined in pure silk habotai for seamless comfort',
    ],
    care: 'Professional dry clean only.',
  },
  {
    id: 'aurelle-sienna-tiered-maxi',
    name: 'The Sienna Silk Chiffon Mini Dress',
    subtitle: 'Romantic hand-dyed botanical floral tiers with blouson sleeves',
    category: 'dresses',
    occasion: 'Casual Day Luxe',
    price: 18500,
    mrp: 22000,
    fabric: '100% Hand-Spun Silk Chiffon',
    description: 'An ode to golden Mediterranean afternoons. Tailored in airy silk chiffon with hand-painted warm botanical florals, delicate drawstring neck ties, and a fluid flared short hem.',
    images: [
      '/images/sienna-short-dress.jpg',
      '/images/sienna-short-dress.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Warm Terracotta Floral', hex: '#BE6D55' },
      { name: 'Alabaster Lily', hex: '#F5EFE6' },
      { name: 'Sage Blossom', hex: '#8F9B88' },
    ],
    tag: 'NEW',
    rating: 4.87,
    reviewsCount: 15,
    details: [
      'Hand-block printed botanical patterns using organic mineral dyes',
      'Split neckline with self-tie tassel accents',
      'Detachable modal slip lining included',
      'Flattering elasticated cinched waist and flutter skirt',
    ],
    care: 'Cold hand wash with mild silk detergent or dry clean.',
  },
  {
    id: 'aurelle-anarkali-royal-chanderi',
    name: 'The Mehrunisa Chanderi Anarkali',
    subtitle: 'Flared floor-length kalidar with beaten gota patti embroidery',
    category: 'ethnic',
    occasion: 'Festive Ethnic',
    price: 42000,
    mrp: 49000,
    fabric: 'Chanderi Katan Silk & Organza Dupatta',
    description: 'A regal silhouette for celebratory evenings. Handcrafted with 28 cascading kalis in gossamer Chanderi silk, accentuated by scalloped marodi gold embroidery and Basra pearl edging.',
    images: [
      'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85',
      '/images/wedding-bridal.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Peacock Teal', hex: '#16484D' },
      { name: 'Saffron Marigold', hex: '#C9772B' },
      { name: 'Muted Rose', hex: '#B87A84' },
    ],
    tag: 'COUTURE',
    rating: 4.97,
    reviewsCount: 29,
    details: [
      '28 flared panels for dramatic ceremonial twirl',
      'Hand-beaten gota patti borders along hemline and sleeves',
      'Paired with churidar trousers and scalloped organza dupatta',
      'Pure zari selvedge detail',
    ],
    care: 'Dry clean only. Store wrapped in cotton cloth.',
  },
]

export const OCCASIONS = [
  {
    id: 'wedding-bridal',
    title: 'Wedding & Bridal',
    subtitle: 'Heirloom lehengas, ceremonial tissue sarees & bridal trousseau',
    image: '/images/wedding-bridal.jpg',
    itemCount: '24 Creations',
    isLarge: true,
  },
  {
    id: 'evening-gala',
    title: 'Evening Gala & Red Carpet',
    subtitle: 'Sculptural column gowns & bias-cut silk slip dresses',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
    itemCount: '18 Creations',
    isLarge: false,
  },
  {
    id: 'casual-day-luxe',
    title: 'Casual Day Luxe & Resort',
    subtitle: 'Pleated georgettes, breezy midis & sunburst silks',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85',
    itemCount: '16 Creations',
    isLarge: false,
  },
  {
    id: 'festive-ethnic',
    title: 'Festive Ethnic & Soirée',
    subtitle: 'Pre-draped modern sarees, anarkalis & gilded shararas',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    itemCount: '22 Creations',
    isLarge: false,
  },
]

export const LOOKBOOK_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    title: 'Look 01 · The Sunburst Drape',
    caption: 'Pure silk georgette in radiant golden ochre.',
    location: 'Atelier Suites · Room 04',
  },
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
    title: 'Look 02 · Midnight Obsidian Column',
    caption: 'Sculptural bias drape moving like molten water.',
    location: 'Runway Archive · Mumbai',
  },
  {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=85',
    title: 'Look 03 · Gossamer Illusion Tulle',
    caption: 'Soft sweetheart bodice hand-embroidered with micro-pearls.',
    location: 'Paris Salon Showcase',
  },
  {
    src: '/images/wedding-bridal.jpg',
    title: 'Look 04 · The Royal Chandrika',
    caption: 'Varanasi gold zari embroidery on royal scarlet silk.',
    location: 'Heritage Vaults · Varanasi',
  },
  {
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=85',
    title: 'Look 05 · Modern Architectural Crepe',
    caption: 'Asymmetric waist cut-out with 24K gold ring jewel.',
    location: 'Monaco Private Viewing',
  },
  {
    src: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    title: 'Look 06 · Pre-Draped Molten Tissue',
    caption: 'A 60-second modern drape for timeless celebrations.',
    location: 'Kala Ghoda Atelier',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'The Noir Obsidian Gown felt like second skin on my gala evening in London. The silk has an incomparable drape weight that moves without creasing. It is rare to see couture finishing of this mastery.',
    author: 'Lady Charlotte Vane',
    location: 'London & Milan',
    purchase: 'The Noir Obsidian Silk Gown',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    stars: 5,
  },
  {
    quote: 'For my destination wedding in Udaipur, the Chandrika Lehenga exceeded every expectation. The 24K gold zari glowed under the palace chandeliers, yet the weight distribution made dancing effortless. Truly an heirloom.',
    author: 'Dr. Ananya Roy-Kapoor',
    location: 'Mumbai & New York',
    purchase: 'The Chandrika Bridal Lehenga',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    stars: 5,
  },
  {
    quote: 'The online sizing consultation and bespoke adjustments via WhatsApp concierge were immaculate. My pre-draped tissue saree arrived wrapped in pure muslin inside a cedar keepsake box. A masterclass in luxury.',
    author: 'Seraphina De Luca',
    location: 'Geneva & Dubai',
    purchase: 'The Verona Pre-Draped Tissue Saree',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
    stars: 5,
  },
]

export const INSTAGRAM_POSTS = [
  { id: '1', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80', likes: '2.4k' },
  { id: '2', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80', likes: '4.1k' },
  { id: '3', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80', likes: '1.9k' },
  { id: '4', image: '/images/wedding-bridal.jpg', likes: '3.8k' },
  { id: '5', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80', likes: '2.7k' },
  { id: '6', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80', likes: '3.2k' },
  { id: '7', image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80', likes: '2.1k' },
  { id: '8', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=600&q=80', likes: '3.5k' },
]
