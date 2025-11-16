import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-secondary">E</span>Store
            </h4>
            <p className="text-gray-400">Your trusted online shopping destination for quality products.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="/shop" className="hover:text-secondary">Shop</a></li>
              <li><a href="#" className="hover:text-secondary">About Us</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-secondary">FAQ</a></li>
              <li><a href="#" className="hover:text-secondary">Shipping Info</a></li>
              <li><a href="#" className="hover:text-secondary">Returns</a></li>
              <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-4">Email: support@estore.com</p>
            <div className="flex gap-4">
              <Facebook className="cursor-pointer hover:text-secondary transition" />
              <Twitter className="cursor-pointer hover:text-secondary transition" />
              <Instagram className="cursor-pointer hover:text-secondary transition" />
              <Mail className="cursor-pointer hover:text-secondary transition" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};