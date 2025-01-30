import React from 'react';
import { useNavigate } from 'react-router-dom';

function TourServices() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(`/${path}`);
  };

  return (
    <section className="py-16 px-8 bg-background text-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Service 1: Scooter Rentals */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-accent">Scooter Rentals</h3>
          <p className="text-white mb-4">Rent a scooter to explore Krui and its surroundings on your own schedule.</p>
          <button
            onClick={() => goToPage('Scooter-Rental')}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-text"
          >
            More info
          </button>
        </div>

        {/* Service 2: Trips */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-accent">Trips</h3>
          <p className="text-white mb-4">Join one of our guided tours around Krui and experience the natural beauty of Sumatra.</p>
          <button
            onClick={() => goToPage('more-info-trips')}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-text"
          >
            More info
          </button>
        </div>

        {/* Service 3: Workshops */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-accent">Workshops</h3>
          <p className="text-white mb-4">Choose from a range of workshops to learn new skils</p>
          <button
            onClick={() => goToPage('more-info-workshops')}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-text"
          >
            More info
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-accent">Activities</h3>
          <p className="text-white mb-4">Go on thrilling activities around Krui</p>
          <button
            onClick={() => goToPage("more-info-Activities")}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-text"
          >
            More info
          </button>
        </div>

      </div>
    </section>
  );
}

export default TourServices;


