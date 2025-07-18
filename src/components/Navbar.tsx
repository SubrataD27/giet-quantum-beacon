
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Programs', href: '/programs' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group">
            {/* GIET University Logo and Full Name */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/hTLpc3f.png" 
                  alt="GIET University Logo"
                  className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hidden items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">GIET</span>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  Gandhi Institute of Engineering and Technology University
                </h1>
                <p className="text-sm text-blue-600 font-medium">Odisha, Gunupur</p>
              </div>
              
              <div className="block lg:hidden">
                <h1 className="text-base font-bold text-gray-900">GIET University</h1>
                <p className="text-xs text-blue-600">Gunupur, Odisha</p>
              </div>
            </div>
            
            {/* Elegant Separator */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
            
            {/* Lab Logo and Branding */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Atom className="w-7 h-7 text-white animate-spin" style={{animationDuration: '8s'}} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QC² Research Lab
                </h2>
                <p className="text-xs text-purple-600 font-medium">Quantum Computing & Communication</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-b-xl">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 mx-2 ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
      
      {/* Enhanced University Tagline Bar */}
      <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 py-3 px-4 border-t border-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold text-gray-800">
            <span className="text-blue-600">🏆 Excellence in Education</span> • 
            <span className="text-purple-600 mx-2">🔬 Innovation in Research</span> • 
            <span className="text-blue-600">🚀 Leadership in Technology</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Pioneering Quantum Technologies for Tomorrow's World
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
