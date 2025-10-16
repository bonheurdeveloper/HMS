import React, { useState } from 'react';  // 🔥 Tangira ubu
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Biroza muri backend

  const navItems = isLoggedIn ? [
    { path: '/dashboard', label: 'Ahabanza', icon: '🏠' },
    { path: '/family', label: 'Umuryango', icon: '👨‍👩‍👧‍👦' },
    { path: '/appointments', label: 'Ibitego', icon: '📅' },
    { path: '/records', label: 'Amakuru', icon: '📋' }
  ] : [
    { path: '/', label: 'Ahabanza', icon: '🏠' },
    { path: '/about', label: 'Abo tubanye', icon: 'ℹ️' },
    { path: '/login', label: 'Injira', icon: '🔐' },
    { path: '/contact', label: 'Twandikire', icon: '📞' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#2563EB] shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center text-white text-xl font-bold hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Sistema y'Ubuzima
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-white hover:bg-[#1E40AF] hover:text-white'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sohoka
              </button>
            ) : (
              <Link 
                to="/login"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Injira
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Login/Logout Mobile */}
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-white p-2 rounded-md hover:bg-[#1E40AF] transition-colors"
              >
                Sohoka
              </button>
            ) : (
              <Link 
                to="/login"
                className="text-white p-2 rounded-md hover:bg-[#1E40AF] transition-colors"
              >
                Injira
              </Link>
            )}
            
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1E40AF]">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-white hover:bg-[#1E3A8A] hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;