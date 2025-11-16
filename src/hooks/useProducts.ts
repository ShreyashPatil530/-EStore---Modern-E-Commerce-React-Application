import { useState, useEffect } from 'react';
import { Product } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        price: 99.99,
        originalPrice: 149.99,
        category: 'Electronics',
        rating: 4.5,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        description: 'High-quality wireless headphones with noise cancellation',
        inStock: true,
      },
      {
        id: 2,
        name: 'Smart Watch Pro',
        price: 299.99,
        originalPrice: 399.99,
        category: 'Electronics',
        rating: 4.7,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        description: 'Advanced fitness tracking and health monitoring',
        inStock: true,
      },
      {
        id: 3,
        name: 'Vintage Camera',
        price: 449.99,
        category: 'Photography',
        rating: 4.3,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop',
        description: 'Classic design with modern functionality',
        inStock: true,
      },
      {
        id: 4,
        name: 'Designer Sunglasses',
        price: 199.99,
        originalPrice: 299.99,
        category: 'Fashion',
        rating: 4.6,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        description: 'UV protection with premium material',
        inStock: true,
      },
      {
        id: 5,
        name: 'Leather Backpack',
        price: 129.99,
        category: 'Fashion',
        rating: 4.4,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        description: 'Durable and stylish everyday backpack',
        inStock: true,
      },
      {
        id: 6,
        name: 'Coffee Maker Deluxe',
        price: 159.99,
        originalPrice: 199.99,
        category: 'Home',
        rating: 4.8,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop',
        description: 'Programmable with thermal carafe',
        inStock: true,
      },
      {
        id: 7,
        name: 'Yoga Mat Premium',
        price: 79.99,
        category: 'Sports',
        rating: 4.5,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
        description: 'Non-slip and eco-friendly',
        inStock: true,
      },
      {
        id: 8,
        name: 'Running Shoes Pro',
        price: 189.99,
        originalPrice: 249.99,
        category: 'Sports',
        rating: 4.6,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        description: 'Advanced cushioning technology',
        inStock: true,
      },
      {
        id: 9,
        name: 'Bluetooth Speaker',
        price: 89.99,
        originalPrice: 129.99,
        category: 'Electronics',
        rating: 4.4,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        description: 'Portable with excellent sound quality',
        inStock: true,
      },
      {
        id: 10,
        name: 'Desk Lamp LED',
        price: 49.99,
        category: 'Home',
        rating: 4.3,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop',
        description: 'Energy-efficient with adjustable brightness',
        inStock: true,
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  return { products, loading, error };
};

