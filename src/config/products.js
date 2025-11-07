import image1 from '../assets/perfume/premium.jpg';
import image2 from '../assets/perfume/middle.jpg';
import image3 from '../assets/perfume/affordable.jpg';
export const currency = 'INR';
export const shippingCost = 50;
export const products = [
  {
    id: '1',
    name: 'Midnight Essence',
    description: 'A mysterious blend of dark vanilla, black orchid, and amber, perfect for evening wear.',
    basePrice: 129.99,
    variants: [
      { size: 10, price: 499 },
      { size: 20, price: 999 },
      { size: 50, price: 2999 }
    ],
    imageUrl: image1,
    category: 'Oriental',
    inStock: true,
    featured: true,
    notes: {
      top: 'Black Orchid, Bergamot',
      heart: 'Dark Vanilla, Amber',
      base: 'Musk, Patchouli'
    }
  },
  {
    id: '2',
    name: 'Royal Oud',
    description: 'An opulent combination of rare oud wood, royal rose, and sandalwood.',
    basePrice: 189.99,
    variants: [
      { size: 10, price: 799 },
      { size: 20, price: 999 },
      { size: 50, price: 2999 }
    ],
    imageUrl: image2,
    category: 'Woody',
    inStock: true,
    featured: true,
    notes: {
      top: 'Agarwood, Cedar',
      heart: 'Royal Rose, Vetiver',
      base: 'Sandalwood, Amber'
    }
  },
  {
    id: '3',
    name: 'White Jasmine',
    description: 'A delicate harmony of jasmine, lily of the valley, and white musk.',
    basePrice: 149.99,
    variants: [
      { size: 10, price: 499},
      { size: 20, price: 999 },
      { size: 50, price: 2999 }
    ],
    imageUrl: image3,
    category: 'Floral',
    inStock: true,
    featured: true,
    notes: {
      top: 'Jasmine, Bergamot',
      heart: 'Lily of the Valley, Rose',
      base: 'White Musk, Vanilla'
    }
  }
];