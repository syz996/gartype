import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Gar Type</h1>
        <Navigation />
      </div>
    </header>
  );
}