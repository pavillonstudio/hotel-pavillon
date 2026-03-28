import React from 'react';

const Contact = () => {
  return (
    <footer id="kontakt" className="bg-hpBlush text-hpDark py-32 px-6 md:px-12 text-center md:text-left rounded-t-[3rem] mt-12 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.1em] mb-8">
            Kontakt
          </h2>
          <div className="w-16 h-1 bg-hpBlue mb-10 mx-auto md:mx-0"></div>
          
          <div className="space-y-4 text-lg text-gray-700 font-light">
            <p className="font-bold text-hpDark tracking-widest">HOTEL PAVILLON</p>
            <p>Zollergasse 8/4</p>
            <p>1070 Wien</p>
            <p>Österreich</p>
            <p className="pt-4">
              Mail: <a href="mailto:join@hotelpavillon.at" className="text-hpBlue hover:text-hpDark transition-colors">join@hotelpavillon.at</a>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col justify-end text-sm text-gray-600 font-light space-y-2">
          <p className="text-gray-500 font-medium uppercase tracking-widest mb-4">Credits</p>
          <p>Video: Yannick Kurzweil</p>
          <p>Map Illustration: Güldenstern fecit</p>
          <p>Lettering: Marion Kamper</p>
          <p>Pictures: Cecilia Capri</p>
          <div className="mt-8 pt-8 border-t border-gray-300">
            <a href="#" className="hover:text-hpDark transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
