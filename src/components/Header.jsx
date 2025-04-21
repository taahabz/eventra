import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1621]/80 backdrop-blur-sm border-b border-[#00E5FF]/10 hover:border-[#00E5FF]/30 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
  <a href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
    Eventra
  </a>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00E5FF] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6 font-medium">
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#00E5FF] px-4 py-1.5 rounded-full transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-3/4"></span>
            </a>
          </div>
        </div>

        {/* Mobile Menu - Animated */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 mt-3 pt-3 border-t border-[#00E5FF]/10' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2 pb-2">
            <a
              href="#contact"
              className="block text-gray-300 hover:text-[#00E5FF] px-4 py-2 rounded-full text-center transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}