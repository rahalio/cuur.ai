import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              cuur.ai
            </span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                <span>Capabilities</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {isOpen && (
                <div className="absolute top-full right-0 w-64 mt-2 bg-white rounded-lg shadow-lg py-2">
                  <Link to="/ai-analysis" className="block px-4 py-2 hover:bg-blue-50 text-lg">
                    AI Analysis
                  </Link>
                  <Link to="/rapid-results" className="block px-4 py-2 hover:bg-blue-50 text-lg">
                    Rapid Results
                  </Link>
                  <Link to="/accuracy" className="block px-4 py-2 hover:bg-blue-50 text-lg">
                    High Accuracy
                  </Link>
                  <Link to="/security" className="block px-4 py-2 hover:bg-blue-50 text-lg">
                    Security & Privacy
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-lg font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}