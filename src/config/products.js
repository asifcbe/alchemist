export const products = [
  {
    id: '1',
    name: 'Midnight Essence',
    description: 'A mysterious blend of dark vanilla, black orchid, and amber, perfect for evening wear.',
    basePrice: 129.99,
    variants: [
      { size: 10, price: 49.99 },
      { size: 20, price: 89.99 },
      { size: 50, price: 129.99 }
    ],
    imageUrl: 'https://picsum.photos/seed/midnight/800/1200',
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
      { size: 10, price: 69.99 },
      { size: 20, price: 119.99 },
      { size: 50, price: 189.99 }
    ],
    imageUrl: 'https://picsum.photos/seed/royal/800/1200',
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
      { size: 10, price: 59.99 },
      { size: 20, price: 99.99 },
      { size: 50, price: 149.99 }
    ],
    imageUrl: 'https://picsum.photos/seed/jasmine/800/1200',
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