import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const People = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        // Random rotation between -5 and 5
        const randomRot = (Math.random() - 0.5) * 10;
        gsap.to(img, {
          rotation: randomRot,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Smooth scrub
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const teamImages = [
    '/assets/HotelPavillon_MarionKamper.jpg',
    '/assets/HotelPavillon_MathiasAssefi.jpg',
    '/assets/HotelPavillon_SimonAssefi.jpg',
    '/assets/HotelPavillon_BrittaFuchs-1.jpg',
    '/assets/HotelPavillon_EliasFreiberger.jpg',
    '/assets/HotelPavillon_UlrichFuchs-1.jpg',
    '/assets/HotelPavillon_ThomasStrobl-1.png',
    '/assets/HotelPavillon_CeciliaCapri-1.png',
    '/assets/HotelPavillon_LucasMartin.png'
  ];

  return (
    <section id="people" className="py-40 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-[0.1em] text-hpDark mb-8">
              People
            </h2>
            <div className="w-16 h-1 bg-hpBlue mb-8"></div>
            <p className="text-base text-gray-700 font-light leading-relaxed">
              17 Wiener Designer, Illustratoren, Programmierer, Filmschaffende sowie Social Media-, Kommunikations-, PR- und Event-Beauftragte haben sich im Hotel Pavillon zusammengetan.
            </p>
          </div>
          <div className="mt-12 md:mt-0 pb-4">
            <a 
              href="mailto:join@hotelpavillon.at" 
              className="btn-primary"
            >
              Jetzt Bewerben
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {teamImages.map((src, idx) => (
            <div key={idx} className={`group flex justify-center items-center ${idx % 3 === 1 ? 'md:translate-y-16' : ''}`}>
              <img 
                ref={el => imagesRef.current[idx] = el}
                src={src} 
                alt="Team member" 
                className="w-full h-auto object-cover transform transition-transform duration-500 rounded-md" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
