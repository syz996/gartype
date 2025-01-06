import React from 'react';
import { FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2023 Gar Type. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-red-400"><FaYoutube size={24} /></a>
            <a href="#" className="hover:text-purple-400"><FaDiscord size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}