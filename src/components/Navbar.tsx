
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom, Menu, X, Globe } from 'lucide-react';
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
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4">
            {/* GIET University Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-gray-900">GIET University</h1>
                <p className="text-xs text-gray-600">Gunupur, Odisha</p>
              </div>
            </div>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            
            {/* Lab Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white animate-spin" style={{animationDuration: '8s'}} />
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900">QC² Research Lab</h2>
                <p className="text-xs text-purple-600">Quantum Computing & Communication</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
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
            className="lg:hidden text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
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
      
      {/* University Tagline Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-2 px-4 border-t border-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-700 font-medium">
            <span className="text-blue-600">Excellence in Education</span> • 
            <span className="text-purple-600 mx-2">Innovation in Research</span> • 
            <span className="text-blue-600">Leadership in Technology</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
