export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  tag?: string;
  seller?: string;
  location?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
}

export interface Message {
  id: string;
  sender: 'me' | 'other';
  text?: string;
  image?: string;
  timestamp: string;
  read?: boolean;
}
