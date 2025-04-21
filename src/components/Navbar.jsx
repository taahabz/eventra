import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links configuration for easy maintenance
  const navLinks = [
    { text: 'Home', path: '#', isHighlighted: true },
    { text: 'Events', path: '#' },
    { text: 'Guests', path: '#' },
    { text: 'Contact', path: '#' }
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#0f1621] py-4 px-0 w-full">
      {/* Announcement Bar */}
      <div className="max-w-7xl mx-auto mb-4 bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-xs sm:text-sm font-semibold py-2 px-2 sm:px-0 text-center rounded-xl shadow-md">
        MANAGE YOUR EVENT GUESTS EASILY WITH EVENTRA
      </div>

      {/* Navbar Card */}
      <div className="max-w-7xl mx-auto bg-[#0f1621]/80 backdrop-blur-sm border border-[#00E5FF]/10 hover:border-[#00E5FF]/30 transition-all rounded-2xl shadow-lg px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">EVENTRA</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00E5FF] focus:outline-none"
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
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`cursor-pointer ${
                  link.isHighlighted 
                    ? "bg-gradient-to-r from-[#00E5FF] to-[#c471ed] text-black px-4 py-1.5 rounded-full font-semibold transition-colors hover:opacity-90" 
                    : "text-gray-300 hover:text-[#00E5FF] transition-colors"
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>

      
        </div>

        {/* Mobile Menu - Animated */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 mt-3 pt-3 border-t border-[#00E5FF]/10' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2 pb-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`cursor-pointer ${
                  link.isHighlighted 
                    ? "block bg-gradient-to-r from-[#00E5FF] to-[#c471ed] text-black px-4 py-2 rounded-full font-semibold text-center" 
                    : "block text-gray-300 hover:text-[#00E5FF] px-4 py-2 rounded-full text-center"
                }`}
              >
                {link.text}
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 