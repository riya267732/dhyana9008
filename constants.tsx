
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'ALL-STAR JERSEY 01',
    price: 3499,
    category: 'Jersey',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'The definitive jersey for the court. Lightweight, breathable, and designed for maximum mobility.',
    features: ['Moisture-wicking fabric', 'Athletic compression fit', 'Premium mesh detailing'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Orange'],
    isNew: true
  },
  {
    id: 'p2',
    name: 'BASELINE PULLOVER',
    price: 4999,
    category: 'Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Heavyweight fleece hoodie designed for the pre-game warm-up and the post-game chill.',
    features: ['Double-brushed interior', 'Reinforced stitching', 'Oversized athletic hood'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Off-White', 'Black']
  },
  {
    id: 'p3',
    name: 'TRIPLE-THREAT SHORTS',
    price: 2799,
    category: 'Shorts',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533681904393-9ab6eba7b4d0?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Built for explosive movements. These shorts offer a 4-way stretch and superior ventilation.',
    features: ['Elastic waistband with drawstring', 'Quick-dry technology', 'Hidden zipper pockets'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Neon Green', 'Black']
  },
  {
    id: 'p4',
    name: 'PRO-GUARD TANK',
    price: 2299,
    category: 'Jersey',
    image: 'https://images.unsplash.com/photo-1509939137685-3435b716c92d?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509939137685-3435b716c92d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574626003145-af5a52d3a37b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548690312-e3b507d8df11?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Minimalist performance tank for intense training sessions.',
    features: ['Anti-odor treatment', 'Flat-lock seams', 'Racerback cut'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Orange', 'Black']
  },
  {
    id: 'p5',
    name: 'TITAN GRIP BASKETBALL',
    price: 3999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1466632311177-7d5b472fc59d?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Premium composite leather ball with enhanced grip channels for superior handling.',
    features: ['Moisture-absorbing cover', 'Deep channel design', 'Pro-level bounce'],
    sizes: ['Size 7', 'Size 6'],
    colors: ['Classic Orange', 'Matte Black'],
    isNew: true
  },
  {
    id: 'p6',
    name: 'ELITE CREW SOCKS',
    price: 899,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1582966772640-31044541c3e9?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582966772640-31044541c3e9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619066609386-4e5717804473?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542219550-37153d387c27?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Cushioned performance socks with arch support for maximum impact protection.',
    features: ['Zonal cushioning', 'Dynamic arch band', 'Breathability mesh'],
    sizes: ['M', 'L'],
    colors: ['White', 'Black']
  },
  {
    id: 'p7',
    name: 'STEALTH ZIP HOODIE',
    price: 5499,
    category: 'Hoodie',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Full-zip performance hoodie with water-resistant finish for outdoor training.',
    features: ['DWR finish', 'Scuba hood design', 'Zippered utility pockets'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Carbon Black', 'Court Gray']
  },
  {
    id: 'p8',
    name: 'MVP COURT SHORTS',
    price: 3299,
    category: 'Shorts',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515523168549-36c1e57c6b75?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Ultra-breathable double-mesh shorts with a retro silhouette.',
    features: ['Double-layer mesh', 'Contrast side panels', 'Relaxed fit'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black/Orange', 'White/Green']
  },
  {
    id: 'p9',
    name: 'ORBIT PERFORMANCE CAP',
    price: 1499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Lightweight, sweat-wicking cap designed to keep you cool under pressure.',
    features: ['Laser-cut ventilation', 'Adjustable strap', 'Moisture-wicking sweatband'],
    sizes: ['One Size'],
    colors: ['Black', 'Neon Green']
  }
];

export const TESTIMONIALS = [
  { name: 'Karan Singh', role: 'Pro Athlete', text: 'The HOOP jerseys are the most comfortable I have ever played in. The breathability is unmatched.' },
  { name: 'Riya Sharma', role: 'Streetball Legend', text: 'Love the aesthetic. It perfectly bridges the gap between performance gear and streetwear.' },
];
