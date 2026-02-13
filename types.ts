
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Jersey' | 'Hoodie' | 'Shorts' | 'Accessories';
  image: string;
  images: string[];
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[]; // array of product IDs
  orderHistory: Order[];
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'In Transit' | 'Processing';
  items: CartItem[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
