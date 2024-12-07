import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".dropdown-container")
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              cuur.ai
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-500 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-lg font-medium hover:text-blue-600 transition-colors"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Capabilities</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full right-0 w-64 mt-2 bg-white rounded-lg shadow-lg py-2">
                  <li>
                    <Link
                      to="/ai-analysis"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                    >
                      AI Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rapid-results"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                    >
                      Rapid Results
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accuracy"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                    >
                      High Accuracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                    >
                      Security & Privacy
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-lg shadow-lg">
            <Link
              to="/"
              className="block px-4 py-2 text-lg font-medium hover:bg-blue-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between w-full px-4 py-2 text-lg font-medium hover:bg-blue-50"
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`w-5 h-5 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="bg-white py-2">
                  <li>
                    <Link
                      to="/ai-analysis"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      AI Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rapid-results"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Rapid Results
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accuracy"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      High Accuracy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="block px-4 py-2 hover:bg-blue-50 text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Security & Privacy
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/contact"
              className="block px-4 py-2 text-lg font-medium hover:bg-blue-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
