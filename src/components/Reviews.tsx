import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Player Reviews</h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-lg mb-2">
            "An innovative take on the classic character with excellent pixel art and
            engaging gameplay. The mix of sci-fi elements with humor creates a unique
            gaming experience."
          </p>
          <p className="text-gray-600">- Gaming Community Review</p>
        </div>
      </div>
    </section>
  );
}