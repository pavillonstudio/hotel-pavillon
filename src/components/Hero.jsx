import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100%", // maps to 100vh scroll
          scrub: true,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-hpDark overflow-hidden -z-10"
      style={{
        backgroundImage: "url('/assets/Header_BG_repeat.jpg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 mt-[-25vh]">
        <h1 className="text-3xl md:text-4xl font-extrabold text-hpBlue tracking-[0.3em] uppercase mb-[-1rem] z-20">
          Hotel
        </h1>
        <img 
          src="/assets/Pavillon_neonSchriftzug_4.gif" 
          alt="Hotel Pavillon Neon" 
          className="w-[65%] md:w-[50%] object-contain drop-shadow-2xl z-10" 
        />
      </div>

      <div className="absolute bottom-36 w-full flex flex-col items-center justify-center text-center px-4 z-20">
        <h3 className="text-sm md:text-base font-light tracking-widest text-hpBlue uppercase mb-4">
          Das Shared Office das <del className="opacity-60 mx-1 border-hpBlue">dich</del> du brauchst
        </h3>
        <h2 className="text-xl md:text-3xl font-light text-white tracking-[0.1em] uppercase">
          Welcome to our creative hotel.
        </h2>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
};

export default Hero;
