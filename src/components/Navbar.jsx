import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent flex items-center justify-center px-6 md:px-12 py-8">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-medium uppercase tracking-widest text-white">
        <a href="#about" className="hover:text-hpBlue transition-colors drop-shadow-md">About</a>
        <a href="#people" className="hover:text-hpBlue transition-colors drop-shadow-md">People</a>
        <a href="#location" className="hover:text-hpBlue transition-colors drop-shadow-md">Location</a>
        <a href="#rooms" className="hover:text-hpBlue transition-colors drop-shadow-md">Workplace</a>
        <a href="#kontakt" className="hover:text-hpBlue transition-colors drop-shadow-md">Kontakt</a>
      </div>
    </nav>
  );
};

export default Navbar;
