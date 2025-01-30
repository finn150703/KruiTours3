import React, { useRef } from 'react';


const Hero = ({ onScrollToFooter }) => {

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/fotos website resa/krui-surf.jpg')", // Correct path
      }}
    >

      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <img
        src="/fotos website resa/Logo_transparent .png"
        alt="Krui Trip Indo Logo"
        className="m-4 h-20 w-20 "
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-accent">Krui Trip Indo</h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the wonders of South Sumatra
        </p>
        <button 
        onClick={onScrollToFooter}
        className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-text transition-colors">
          Contact Your guide
        </button>
      </div>
    </section>
  );
};

export default Hero;

