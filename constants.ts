import { BusinessInfo, Category, Product, UpcomingProduct } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "LMC LABS",
  abn: "36 181 184 048",
  founder: "Lachlan Crawford",
  location: "Sydney, Australia",
  ebayStoreUrl: "https://www.ebay.com.au/str/lachlansstore",
  launchDate: "Jan 2026",
  website: "https://lachlancrawford.com.au",
  instagram: "https://instagram.com/lmc_labs"
};

// Placeholder images - In a real scenario, these would be the uploaded assets.
// Since I cannot access the user's uploaded files directly in the code output, 
// I am using high-quality placeholders that match the description.
export const IMAGES = {
  LOGO: "https://placehold.co/400x150/1e293b/FFF?text=LMC+LABS&font=montserrat", // Placeholder for attached logo
  CABLE_HERO: "https://images.unsplash.com/photo-1625237270275-c93d9804b203?auto=format&fit=crop&q=80&w=1000", // Generic high-quality cable image
  CABLE_PRODUCT: "https://images.unsplash.com/photo-1548611716-ad8895cb6b37?auto=format&fit=crop&q=80&w=800", // Generic cable detail
};

export const INVENTORY: Product[] = [
  {
    id: '1',
    title: 'Sony PlayStation 5 Digital Edition (Slim) 30th Anniversary Bundle',
    price: 1200.00,
    category: Category.GAMING,
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '2',
    title: 'Samsung Galaxy A36 5G Black (128GB/6GB)',
    price: 435.00,
    category: Category.TECH,
    imageUrl: 'https://images.unsplash.com/photo-1610945265078-3858d009228d?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '3',
    title: 'AMD Ryzen 7 7700 Processor (8 Cores, AM5)',
    price: 375.00,
    category: Category.TECH,
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '4',
    title: 'Motorola Moto g 86 Power 5G - 128GB/8GB',
    price: 399.00,
    category: Category.TECH,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '5',
    title: 'Amazon Fire TV Stick 4K [2024 Version]',
    price: 75.00,
    category: Category.TECH,
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '6',
    title: 'Vodafone AU $35 Prepaid SIM Card - 70GB',
    price: 14.95,
    category: Category.SIM,
    imageUrl: 'https://images.unsplash.com/photo-1562867690-5750800b65fb?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore'
  },
  {
    id: '7',
    title: 'Telstra 4G/5G Prepaid $29 Sim Starter Pack',
    price: 12.00,
    originalPrice: 29.00,
    category: Category.SIM,
    imageUrl: 'https://images.unsplash.com/photo-1562867690-5750800b65fb?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore'
  },
  {
    id: '8',
    title: 'Pokémon TCG Phantasmal Flames Booster Box',
    price: 415.00,
    category: Category.COLLECTABLES,
    imageUrl: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isNew: true
  },
  {
    id: '9',
    title: 'Kodak Charmera Keychain Mini Digital Camera',
    price: 80.00,
    category: Category.COLLECTABLES,
    imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore'
  },
  {
    id: '10',
    title: 'Air Jordan 4 Retro 2025 Black Cat (Size 10)',
    price: 450.00,
    category: Category.COLLECTABLES,
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore'
  },
  {
    id: '11',
    title: 'Mattel: Monster High Edward Scissorhands Doll',
    price: 230.00,
    category: Category.COLLECTABLES,
    imageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore',
    isPreorder: true
  },
  {
    id: '12',
    title: '2025 $2 Remembrance Day 80th Anniversary Roll',
    price: 220.00,
    category: Category.COLLECTABLES,
    imageUrl: 'https://images.unsplash.com/photo-1589820296156-2454bb8a4d50?auto=format&fit=crop&q=80&w=600',
    ebayLink: 'https://www.ebay.com.au/str/lachlansstore'
  }
];

export const UPCOMING_PRODUCTS: UpcomingProduct[] = [
  {
    id: 'upcoming-1',
    title: 'LMC Labs 240W USB-C Cable (1m)',
    description: 'Ultra-fast 240W PD 3.1 charging cable with premium braided nylon construction. Perfect for laptops, tablets, and phones.',
    price: 10.00,
    category: Category.CABLES,
    imageUrl: '/240wcable.png',
    features: ['240W PD 3.1', 'USB-C to USB-C', 'Braided Nylon', '1 Metre Length', '480Mbps Data'],
    status: 'coming-soon',
    launchDate: 'Jan 2026'
  },
  {
    id: 'upcoming-2',
    title: 'LMC Labs 240W USB-C Cable (2m)',
    description: 'Extended 2-metre version of our flagship 240W cable. Same premium quality, more reach.',
    price: 14.00,
    category: Category.CABLES,
    imageUrl: '/240wcable.png',
    features: ['240W PD 3.1', 'USB-C to USB-C', 'Braided Nylon', '2 Metre Length', '480Mbps Data'],
    status: 'coming-soon',
    launchDate: 'Jan 2026'
  },
  {
    id: 'upcoming-3',
    title: 'LMC Labs Portable Handheld Fan',
    description: 'Stay cool anywhere with our compact, rechargeable handheld fan. Multiple speed settings and USB-C charging.',
    price: 19.95,
    category: Category.PORTABLE,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    features: ['3 Speed Settings', 'USB-C Rechargeable', 'Compact Design', 'Long Battery Life', 'Quiet Operation'],
    status: 'coming-soon',
    launchDate: 'Q1/Q2 2026'
  },
  {
    id: 'upcoming-4',
    title: 'LMC Labs Power Bank 10,000mAh',
    description: 'Compact yet powerful portable charger with fast charging support. Keep your devices powered on the go.',
    price: 39.95,
    category: Category.PORTABLE,
    imageUrl: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=600',
    features: ['10,000mAh Capacity', '22.5W Fast Charge', 'USB-C + USB-A', 'LED Indicator', 'Compact Design'],
    status: 'coming-soon',
    launchDate: 'Q1/Q2 2026'
  },
  {
    id: 'upcoming-5',
    title: 'LMC Labs Power Bank 20,000mAh',
    description: 'High-capacity powerbank for heavy users. Charge multiple devices simultaneously with fast charging.',
    price: 59.95,
    category: Category.PORTABLE,
    imageUrl: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=600',
    features: ['20,000mAh Capacity', '65W PD Fast Charge', 'Dual USB-C + USB-A', 'Digital Display', 'Laptop Compatible'],
    status: 'coming-soon',
    launchDate: 'Q1/Q2 2026'
  },
  {
    id: 'upcoming-6',
    title: 'LMC Labs MagSafe Power Bank 5,000mAh',
    description: 'Wireless MagSafe powerbank with custom LMC Labs branding. Snaps magnetically to your iPhone for seamless charging.',
    price: 49.95,
    category: Category.PORTABLE,
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600',
    features: ['5,000mAh Capacity', 'MagSafe Compatible', 'Wireless Charging', 'Custom LMC Logo', 'Ultra Slim Design'],
    status: 'coming-soon',
    launchDate: 'Q1/Q2 2026'
  }
];