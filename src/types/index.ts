export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface Order {
  id: number;
  user: User;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  deliveryMethod: string;
  paymentMethod: string;
}