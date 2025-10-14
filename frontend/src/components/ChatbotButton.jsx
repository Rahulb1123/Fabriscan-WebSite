import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className={`fixed right-4 sm:right-8 z-50 bg-gradient-to-r from-[#F7BA03] to-[#FFEB3F] p-2 sm:p-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 animate-pulse-slow transition-all duration-500 ease-in-out ${
            isScrolled ? 'bottom-24 sm:bottom-28' : 'bottom-8'
          }`}
          aria-label="Open chatbot"
        >
          <img 
            src="/logo.png" 
            alt="FabriScan" 
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
          />
        </button>
      )}

      {/* Chatbot Modal - Responsive */}
      {isOpen && (
        <>
          {/* Mobile/Tablet: Full screen overlay */}
          <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={toggleChatbot} />
          
          <div className={`
            fixed z-50 bg-white shadow-2xl overflow-hidden animate-slide-up
            
            /* Mobile: Full screen */
            inset-0 rounded-none
            
            /* Tablet: Bottom sheet */
            sm:inset-x-4 sm:top-auto sm:bottom-4 sm:rounded-2xl sm:h-[80vh] sm:max-h-[600px]
            
            /* Desktop: Bottom-right corner */
            lg:inset-auto lg:bottom-8 lg:right-8 lg:w-[400px] lg:h-[600px] lg:rounded-2xl
            
            /* Large Desktop */
            xl:w-[450px] xl:h-[650px]
          `}>
            {/* Header */}
            <div className="text-white p-2 flex items-center justify-end" style={{ backgroundColor: '#5ACEFF' }}>
              <button
                onClick={toggleChatbot}
                className="hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
                aria-label="Close chatbot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chatbot Iframe */}
            <div className="w-full" style={{ height: 'calc(100% - 36px)' }}>
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/I00cE3dLhO5xIq9TF6pcd"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="FabriScan Chatbot"
              />
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChatbotButton;
