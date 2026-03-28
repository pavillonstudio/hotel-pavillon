import React from 'react';

const Contact = () => {
  return (
    <footer id="kontakt" className="bg-hpBlush text-hpDark py-32 px-6 md:px-12 text-center md:text-left rounded-t-[3rem] mt-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1">
          <p className="font-light leading-snug text-lg max-w-sm">
            <strong className="font-semibold text-xl block mb-2">Pavillon Studio</strong>
            Hotel Pavillon, Zollergasse 8/4, 1070 Vienna, Austria
          </p>
          <div className="mt-8">
            <a href="mailto:hello@hotelpavillon.at" className="text-hpDark hover:text-hpBlue transition-colors text-lg font-medium tracking-wide">
              hello@hotelpavillon.at
            </a>
          </div>
        </div>
        
        <div className="flex-1 md:text-right w-full">
          <div className="mt-6 md:mt-0 flex flex-col md:items-end gap-3 text-sm font-medium tracking-wider uppercase opacity-80">
            <a href="#impressum" className="hover:text-hpBlue transition-colors block">Impressum</a>
            <a href="#datenschutz" className="hover:text-hpBlue transition-colors block">Datenschutz</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-hpDark/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>&copy; {new Date().getFullYear()} Hotel Pavillon. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          System Operational
        </div>
      </div>
    </footer>
  );
};

export default Contact;
