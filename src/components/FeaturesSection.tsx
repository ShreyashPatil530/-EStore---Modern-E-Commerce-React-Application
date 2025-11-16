import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 hover:shadow-lg transition rounded-lg">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          <div className="text-center p-8 hover:shadow-lg transition rounded-lg">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure transactions</p>
          </div>
          <div className="text-center p-8 hover:shadow-lg transition rounded-lg">
            <div className="text-5xl mb-4">↩️</div>
            <h3 className="text-2xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};