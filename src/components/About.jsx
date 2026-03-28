import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
          Über Uns
        </h2>
        <div className="w-16 h-1 bg-hpBlue mb-12"></div>
        <p className="text-base leading-relaxed text-gray-800 font-light max-w-3xl">
          Die Altbau-Oase Hotel Pavillon ist nicht nur das Zuhause der neuen Kreativ-Agentur Pavillon Studio, sondern ein Kollektiv aus selbstständigen WienerInnen.
        </p>
      </div>
    </section>
  );
};

export default About;
