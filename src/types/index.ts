export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}