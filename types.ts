export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: Category;
  imageUrl: string;
  ebayLink: string;
  isNew?: boolean;
  isPreorder?: boolean;
}

export enum Category {
  ALL = 'All',
  TECH = 'Mobile & Tech',
  GAMING = 'Gaming',
  SIM = 'SIM Cards',
  COLLECTABLES = 'Collectables',
  CABLES = 'Cables & Charging',
  PORTABLE = 'Portable Power',
}

export interface UpcomingProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  features: string[];
  status: 'coming-soon' | 'pre-order';
  launchDate?: string;
}

export interface BusinessInfo {
  name: string;
  abn: string;
  founder: string;
  location: string;
  ebayStoreUrl: string;
  launchDate: string;
  website: string;
  instagram: string;
}