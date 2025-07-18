import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContactSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    whatsapp: "+91 9876543210",
    email: "qclab@giet.edu",
    phone: "+91 6764-248-100"
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_blank');
  };

  return (
    <>
      {/* Main Toggle Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          size="sm"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          )}
        </Button>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-white rounded-l-2xl shadow-2xl border border-gray-200 p-6 w-80 max-w-[90vw]">
          <div className="space-y-4">
            <div className="text-center border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact QC² Lab
              </h3>
              <p className="text-sm text-gray-600 mt-1">Get in touch with our research team</p>
            </div>

            {/* WhatsApp Contact */}
            <div
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 cursor-pointer transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-sm text-gray-600">{contactInfo.whatsapp}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
            </div>

            {/* Email Contact */}
            <div
              onClick={handleEmailClick}
              className="flex items-center space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 cursor-pointer transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-sm text-gray-600">{contactInfo.email}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
            </div>

            {/* Phone Contact */}
            <div
              onClick={handlePhoneClick}
              className="flex items-center space-x-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 cursor-pointer transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-sm text-gray-600">{contactInfo.phone}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
            </div>

            <div className="text-center pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">Available during office hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingContactSidebar;