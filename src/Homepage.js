import React, { useRef } from 'react';
import Hero from './components/mainpage/Hero';
import TourServices from './components/mainpage/TourServices';
import NationalParkInfo from './components/mainpage/NationalParkInfo';
import Fotobook from './components/mainpage/Fotobook';
import Footer from './components/mainpage/Footer'
 

function App() {

  // Create a ref for the footer
  const footerRef = useRef(null);

  // Scroll function to be passed to Hero component
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onScrollToFooter={scrollToFooter} />
      <TourServices />
      <NationalParkInfo />
      <Fotobook />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;


