import React from 'react';

const NationalParkInfo = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-8">
      {/* Heading */}
      <h1 className="text-primary text-5xl font-bold mb-6">
        explore the wild,<br />
        experience the waves
      </h1>

      {/* Description */}
      <div className="text-secondary text-lg max-w-2xl leading-relaxed">
        <p className="mb-4">
          Every journey is more than just a destination—it’s a chance to connect deeply with the world around us.
        </p>
        <p className="mb-4">
          Based in paradise Krui, we are dedicated to creating adventures 
          that respect and celebrate the natural beauty of this unique part of Indonesia.
        </p>
        <p className="mb-4">
          Our mission is simple yet powerful: to inspire travelers to explore the 
          wild with an open heart and to experience the waves with a spirit of respect and harmony for nature.
        </p>
        <p>
          With Krui Trip Indo, you will discover not only breathtaking places but also 
          the stories, cultures, and communities that make this region so special. 
          Whether you're hiking through lush jungles, surfing crystal-clear waves, 
          or immersing yourself in the vibrant local culture, each adventure is 
          crafted to leave a lasting impact—not only on you, but also on the natural 
          wonders we are privileged to share.
        </p>
      </div>
    </div>
  );
};

export default NationalParkInfo;
