
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Gar Type. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link to="/terms" className="text-sm">Terms of Service</Link>
            <Link to="/privacy" className="text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}