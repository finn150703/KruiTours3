import React from 'react';

const PhotoBook = () => {
  return (
    <section className="py-16 px-8 bg-background text-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">Photo Book</h2>

      {/* Grid Layout for the photo book */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Row 1 */}
        <div className="w-full h-64">
          <img
            src="/fotos website resa/foto bord.jpeg" // Replace with your image paths
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/groeps foto op berg.jpeg" // Replace with your image paths
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/in het water.jpeg" // Replace with your image paths
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Row 2 */}
        <div className="w-full h-64">
          <img
            src="/fotos website resa/resa cooking.jpeg" // Replace with your image paths
            alt="Image 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/scenic foto.jpeg" // Replace with your image paths
            alt="Image 5"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/Rivier.jpeg" // Replace with your image paths
            alt="Image 6"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Row 3 */}
        <div className="w-full h-64">
          <img
            src="/fotos website resa/tijger.jpg" // Replace with your image paths
            alt="Image 7"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/Driss in boom.jpeg" // Replace with your image paths
            alt="Image 8"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full h-64">
          <img
            src="/fotos website resa/brown river.webp" // Replace with your image paths
            alt="Image 9"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoBook;
