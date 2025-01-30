import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  // Function to handle going back to the last page
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between">
      {/* Back Button (left side) */}
      <button 
        onClick={handleGoBack}
        className="absolute top-5 left-5 text-4xl font-extrabold cursor-pointer
         hover:text-text transition-colors focus:outline-none text-secondary"
      >
        ←
      </button>

      {/* Logo and Title (centered) */}
      <div className="flex flex-grow justify-center items-center space-x-4">
        {/* Logo (Placeholder for your logo image) */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <img src="/fotos website resa/Logo_transparent .png" alt="Logo" className="w-8 h-8" />
        </div>
        {/* Title */}
        <h1 className="text-2xl font-semibold">Krui Tours Indo</h1>
      </div>
    </header>
  );
};

export default Header;

