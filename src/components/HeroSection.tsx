// ============================================
// FILE: src/components/HeroSection.tsx (UPDATED)
// WITH ANIMATIONS, CAROUSEL, AND ADVERTISEMENTS
// ============================================

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Zap, Gift, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface HeroSectionProps {
  onAddToCart?: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAddToCart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  const heroBanners = [
    {
      id: 1,
      title: 'Summer Sale 2024',
      subtitle: 'Up to 50% OFF on Selected Items',
      discount: '50%',
      bgColor: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Tech Mega Sale',
      subtitle: 'Latest Electronics & Gadgets',
      discount: '35%',
      bgColor: 'from-blue-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Fashion Trends',
      subtitle: 'New Collection Just Arrived',
      discount: '40%',
      bgColor: 'from-pink-500 to-rose-600',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=600&fit=crop',
    },
  ];

  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 99.99,
      originalPrice: 149.99,
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      description: 'Advanced fitness tracking and health monitoring',
      inStock: true,
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 89.99,
      originalPrice: 129.99,
      category: 'Electronics',
      rating: 4.4,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      description: 'Portable speaker with excellent sound quality',
      inStock: true,
    },
    {
      id: 4,
      name: 'Running Shoes Pro',
      price: 119.99,
      originalPrice: 189.99,
      category: 'Fashion',
      rating: 4.6,
      reviews: 276,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      description: 'Comfortable sports sneakers for everyday wear',
      inStock: true,
    },
  ];

  const handleAddToCart = (product: Product) => {
    if (onAddToCart) {
      onAddToCart(product);
      setAddedToCart([...addedToCart, product.id]);
      setTimeout(() => {
        setAddedToCart(prev => prev.filter(id => id !== product.id));
      }, 2000);
    }
  };

  const getDiscountPercentage = (price: number, originalPrice?: number) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  useEffect(() => {
    setAnimateText(true);
    const timer = setTimeout(() => setAnimateText(false), 4800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroBanners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const currentBanner = heroBanners[currentSlide];

  return (
    <div className="space-y-8 pb-8">
      {/* ===== MAIN HERO CAROUSEL ===== */}
      <section className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
        {/* Carousel Container */}
        <div className="relative w-full h-full">
          {heroBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-12">
                  {/* Animated Sparkle Icon */}
                  <div className={`mb-4 transition-all duration-1000 ${animateText ? 'animate-bounce' : ''}`}>
                    <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" />
                  </div>

                  {/* Title with Animation */}
                  <h1
                    className={`text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
                      animateText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {banner.title}
                  </h1>

                  {/* Subtitle with Animation */}
                  <p
                    className={`text-2xl text-gray-100 mb-8 transition-all duration-1000 delay-300 ${
                      animateText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {banner.subtitle}
                  </p>

                  {/* Discount Badge */}
                  <div
                    className={`flex items-center gap-4 transition-all duration-1000 delay-500 ${
                      animateText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold text-lg flex items-center gap-2 transition hover:scale-105">
                      Shop Now <ChevronRight size={20} />
                    </button>

                    <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2">
                      <Zap size={20} />
                      {banner.discount} OFF
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full z-10 transition hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full z-10 transition hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-yellow-400 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ===== PROMOTIONAL BANNERS ===== */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Banner 1 */}
          <div className="relative h-40 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <Gift className="w-8 h-8 text-white mb-2 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Free Shipping</h3>
              <p className="text-white/80">On orders over $50</p>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="relative h-40 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <Zap className="w-8 h-8 text-white mb-2 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Flash Sale</h3>
              <p className="text-white/80">Limited time offers</p>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="relative h-40 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
              <Sparkles className="w-8 h-8 text-white mb-2 animate-spin" />
              <h3 className="text-2xl font-bold text-white">Member Deals</h3>
              <p className="text-white/80">Exclusive rewards await</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS CAROUSEL ===== */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Flash Deal Products</h2>
          <p className="text-gray-600">Limited time offers on selected items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300 animate-slideUp"
            >
              {/* Product Image Container */}
              <div className="relative h-64 bg-gray-200 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />

                {/* Discount Badge - Animated */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-lg text-sm font-bold animate-bounce shadow-lg">
                  -{getDiscountPercentage(product.price, product.originalPrice)}%
                </div>

                {/* Flash Sale Label */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-lg text-xs font-bold animate-pulse">
                  FLASH SALE
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-yellow-600">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="mb-4 p-2 bg-green-100 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm">✓ Limited Stock Available</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-2 rounded-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2 ${
                    addedToCart.includes(product.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-yellow-500 hover:to-yellow-600'
                  }`}
                >
                  {addedToCart.includes(product.id) ? (
                    <>
                      <ShoppingCart size={18} />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COUNTDOWN TIMER SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Zap className="animate-bounce" />
            Hurry! Sale Ends In:
          </h3>
          <div className="flex justify-center gap-4 text-2xl font-bold">
            <div className="bg-black/30 px-6 py-3 rounded-lg">
              <div>12</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-black/30 px-6 py-3 rounded-lg">
              <div>45</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-black/30 px-6 py-3 rounded-lg">
              <div>30</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <p className="text-white/80 mt-4">Don't miss out on these amazing deals!</p>
        </div>
      </section>

      {/* ===== CSS ANIMATIONS ===== */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};