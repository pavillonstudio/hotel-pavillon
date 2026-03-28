import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = scrolled ? 'text-[#0a77a0]' : 'text-white';

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
      <nav className={`w-full flex items-center justify-between md:justify-center transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 max-w-4xl py-4 px-6 md:px-0' : 'bg-transparent py-8 px-6 md:px-12 max-w-full'}`}>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${textColorClass}`}>
          <a href="#about" className="hover:opacity-75 transition-colors drop-shadow-sm">About</a>
          <a href="#people" className="hover:opacity-75 transition-colors drop-shadow-sm">People</a>
          <a href="#location" className="hover:opacity-75 transition-colors drop-shadow-sm">Location</a>
          <a href="#rooms" className="hover:opacity-75 transition-colors drop-shadow-sm">Workplace</a>
          <a href="#pricing" className="hover:opacity-75 transition-colors drop-shadow-sm">Rent</a>
        </div>

        {/* Mobile Header (Only visible on scroll or mobile) */}
        <div className="md:hidden flex items-center justify-between w-full">
           <span className={`text-sm font-extrabold uppercase tracking-widest transition-colors duration-300 ${textColorClass}`}>
             Hotel Pavillon
           </span>
           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className={`transition-colors duration-300 ${textColorClass}`}
             aria-label="Toggle menu"
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center gap-6 text-sm font-medium uppercase tracking-widest text-[#0a77a0] md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">About</a>
          <a href="#people" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">People</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">Location</a>
          <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">Workplace</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">Rent</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
