# 🛍️ EStore - Modern E-Commerce React Application

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

**A fully functional, modern e-commerce platform with an animated hero section, product filtering, shopping cart, and responsive design.**

[Demo](https://shreyash-patil-project-estore.netlify.app/) • [Features](#features) • [Installation](#installation) • [Tech Stack](#tech-stack) • [Screenshots](#screenshots)

</div>

---

## 🎯 Overview

**EStore** is a professional-grade e-commerce application built with cutting-edge technologies. It features a beautiful UI, smooth animations, complete shopping cart functionality, and a responsive design that works perfectly on all devices.

Perfect for learning React, TypeScript, and modern e-commerce development practices!

---

## ✨ Key Features

### 🛒 Shopping Features
- ✅ **30+ Products** across 5 categories (Electronics, Fashion, Home, Sports, Photography)
- ✅ **Intelligent Search & Filtering** by category and price
- ✅ **Shopping Cart System** with persistent state management
- ✅ **Add/Remove/Update** cart items
- ✅ **Real-time Cart Counter** in header
- ✅ **Quantity Management** with +/- buttons
- ✅ **Auto-Calculated Total** price
- ✅ **Favorites/Wishlist** functionality
- ✅ **Product Details** - ratings, reviews, descriptions
- ✅ **Stock Status** indicators

### 🎨 UI/UX Features
- ✅ **Responsive Design** - Mobile, Tablet, Desktop optimized
- ✅ **Animated Hero Section** - Auto-rotating carousel with 5s intervals
- ✅ **Flash Deal Products** - Featured items with animations
- ✅ **Promotional Banners** - Free shipping, flash sale, member deals
- ✅ **Discount Badges** - Dynamic percentage displays
- ✅ **Star Ratings** - Product reviews and ratings
- ✅ **Hover Effects** - Scale animations on products
- ✅ **Smooth Transitions** - All interactions are fluid
- ✅ **Countdown Timer** - Flash sale urgency messaging
- ✅ **Product Carousel** - Featured products display

### ⚡ Performance Features
- ✅ **Fast Load Times** - Optimized images and code splitting
- ✅ **State Management** - Zustand for efficient state handling
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Clean Code** - Modular component architecture
- ✅ **SEO Friendly** - Proper semantic HTML

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ 
- **npm** or **yarn**
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ShreyashPatil530/-EStore---Modern-E-Commerce-React-Application.git
cd ecommerce-store
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
ecommerce-store/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header with cart
│   │   ├── HeroSection.tsx  # Animated hero & carousel
│   │   ├── ProductCard.tsx  # Individual product component
│   │   ├── ProductsGrid.tsx # Products grid layout
│   │   ├── CartModal.tsx    # Shopping cart modal
│   │   ├── CategoryFilter.tsx # Category selector
│   │   ├── FeaturesSection.tsx # Promotional features
│   │   └── Footer.tsx       # Footer component
│   │
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Home page
│   │   ├── Shop.tsx         # Shop page
│   │   └── CartPage.tsx     # Cart page
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useStore.ts      # Zustand store hook
│   │
│   ├── store/               # State management
│   │   └── cartStore.ts     # Zustand cart store
│   │
│   ├── data/                # Static data
│   │   └── products.ts      # 30 product data
│   │
│   ├── types/               # TypeScript types
│   │   └── index.ts         # Type definitions
│   │
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # React entry point
│   └── index.css            # Global styles & animations
│
├── public/                  # Static files
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Library |
| **TypeScript** | 5.9.3 | Type Safety |
| **Tailwind CSS** | 3.4 | Styling |
| **Zustand** | 5.0.8 | State Management |
| **React Router** | 7.9.6 | Navigation |
| **Lucide React** | 0.553.0 | Icons |
| **Axios** | 1.13.2 | HTTP Client |

---

## 🎨 Components Overview

### Header Component
- Navigation menu
- Shopping cart icon with badge counter
- Responsive mobile menu
- Search bar

### Hero Section
- Auto-rotating carousel (5 products, 5s interval)
- Animated text transitions
- Flash deal products showcase
- Promotional banners
- Countdown timer

### Product Card
- Product image with hover effects
- Discount badge animation
- Star rating display
- Price and original price
- Add to cart button with feedback
- Favorite/wishlist button

### Shopping Cart Modal
- View all cart items
- Quantity management (+/- buttons)
- Delete item functionality
- Real-time total calculation
- Checkout button

### Category Filter
- Filter products by category
- All/Electronics/Fashion/Home/Sports/Photography
- Active state indication
- Smooth transitions

---

## 🎯 How to Use

### Browse Products
1. Scroll through the hero section and featured products
2. Click category buttons to filter products
3. Hover over products to see details

### Add to Cart
1. Click "Add to Cart" button on any product
2. Button changes to green "Added!" for 2 seconds
3. Cart counter in header increases

### View Cart
1. Click shopping cart icon in header
2. Modal opens showing all items
3. Adjust quantities with +/- buttons
4. View total price (auto-calculated)

### Manage Cart
1. Use +/- buttons to change quantities
2. Click trash icon to remove items
3. Total updates automatically
4. Click "Checkout" to proceed (demo button)

---

## 🎬 Features in Action

### ✨ Animations
- **Hero Section** - Text slides in with staggered timing
- **Product Cards** - Scale on hover with smooth transitions
- **Discount Badges** - Bounce animation for attention
- **Flash Sale Labels** - Pulse animation for urgency
- **Carousel** - Smooth fade transitions between banners

### 🎨 Color Scheme
- **Primary** - Dark Gray (#1f2937)
- **Secondary** - Golden Yellow (#f59e0b)
- **Accent** - Green (#10b981)
- **Background** - Light Gray (#f9fafb)

---

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Type check
npx tsc --noEmit

# Format code
npx prettier --write .
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📊 Product Catalog

**30 Products Across 5 Categories:**

| Category | Count | Products |
|----------|-------|----------|
| **Electronics** | 10 | Headphones, Smart Watch, Speaker, Webcam, Charger, Mouse, Keyboard, SSD, USB Hub, Phone Stand |
| **Fashion** | 8 | Sunglasses, Backpack, Watch, Jacket, Sneakers, T-Shirt, Jeans, Scarf |
| **Home** | 6 | Coffee Maker, Desk Lamp, Pillow Set, Wall Clock, Table Fan, Knife Set |
| **Sports** | 4 | Yoga Mat, Running Shoes, Dumbbells, Resistance Bands |
| **Photography** | 2 | Vintage Camera, Camera Tripod |

---

## 🎓 Learning Resources

This project is perfect for learning:
- ✅ React Hooks and Components
- ✅ TypeScript in React
- ✅ Tailwind CSS for styling
- ✅ State Management with Zustand
- ✅ Component Composition
- ✅ CSS Animations
- ✅ Responsive Design
- ✅ E-commerce best practices

---

## 🔄 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication (Login/Register)
- [ ] Payment gateway integration (Stripe)
- [ ] Order management
- [ ] Admin dashboard
- [ ] Product search with autocomplete
- [ ] Review and rating system
- [ ] Wishlist persistence
- [ ] User profile page
- [ ] Order tracking

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

**Shreyash Patil**
- GitHub: [@ShreyashPatil530](https://github.com/ShreyashPatil530)
- Project: [EStore - Modern E-Commerce React Application](https://github.com/ShreyashPatil530/-EStore---Modern-E-Commerce-React-Application)

---

## 📞 Support

If you have questions or need help:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots if possible
4. Mention your OS and browser version

---

## 🌟 Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

```
https://github.com/ShreyashPatil530/-EStore---Modern-E-Commerce-React-Application
```

---

<div align="center">

**Made with ❤️ by Shreyash Patil**

[⬆ Back to Top](#-estore---modern-e-commerce-react-application)

</div>
