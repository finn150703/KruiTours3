import React from 'react';
import Info from './Info';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer' 
import { useNavigate } from 'react-router-dom';


const Trips = () => {
  const navigate = useNavigate();

  const jungleTrekDetails = {
    title: "JUNGLE TREK",
    duration: "2 days 1 night",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🧭 Local trekking guide",
      "🍲 Meals (lunch, dinner, breakfast)",
      "🍉 Fruits",
      "🏕 Camping equipment",
      "🎟 Park entrance fees"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🥾 Comfortable trekking shoes",
      "👕 Lightweight, moisture-wicking clothing",
      "🧢 Hat, sunglasses, sunscreen",
      "🦟 Insect repellent"
    ],
    schedule: [
      { time: "07:00 - 08:00", description: "Hotel pickup" },
      { time: "08:00 - 08:30", description: "Travel to Tenumbang, South National Park" },
      { time: "08:30 - 09:30", description: "Trekking to the wooden cabin" },
      { time: "09:30 - 10:15", description: "Break: coffee or tea time at the wooden cabin" },
      { time: "10:15 - 12:00", description: "Trekking to the waterfall and river" },
      { time: "12:00 - 14:00", description: "Lunch break" },
      { time: "14:00 - 17:30", description: "Exploring the National Park" },
      { time: "17:30 - 19:30", description: "Dinner" },
      { time: "19:30 - 22:00", description: "Campfire & resting" }
    ],
    day2Schedule: [
      { time: "07:00 - 08:30", description: "Breakfast" },
      { time: "08:30 - 09:00", description: "Packing & preparing to explore" },
      { time: "12:00 - 13:00", description: "Arrive at park entrance & lunch" },
      { time: "13:00 - 14:00", description: "Return to hotel" }
    ],
    price: "500.000 Rp",
    minPax: "5"
  };

  const bananaIslandDetails = {
    title: "Banana Island Trip",
    duration: "Day trip",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🧭 Boat rid",
      "🍲 lunch",
      "🍉 Entry ticket to pulau pisang",
      "🏕  Coconut",
      "🎟  Local guide"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🧢 Hat, sunglasses, sunscreen",
      
    ],
    schedule: [
      { time: "08:00 - 09:00", description: "Hotel pickup & departure to Pulau Pisang" },
      { time: "09:00 - 11:30", description: "Exploring Pulau Pisang" },
      { time: "11:30 - 13:00", description: "Rest & lunch" },
      { time: "13:00 - 14:00", description: "Explore the beach" },
      { time: "10:15 - 12:00", description: "Pack up & return to Krui" },
      
    ],
    price: "350.000 Rp",
    minPax: "6"
  };

  const surfSpotsDetails = {
    title: "Surf spots",
    duration: "Day trip",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🍲 lunch",
      "    Surf spot visits based on request",
      "🏕  Coconut",
      "🎟  Local surf guide"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🧢Surfboard",
      
    ],
    schedule: [
      { time: "07:30 - 08:00", description: "Hotel pickup" },
      { time: "08:30 - 09:00", description: "Spot selection" },
      { time: "09:00 - 12:00", description: "Surf session 1" },
      { time: "12:00 - 13:00", description: "Lunch break" },
      { time: "13:00 - 16:00", description: "Surf session 2" },
      { time: "16:00 - 17:00", description: "Surf session 3 (optional)" },
      { time: "17:00 - 18:00", description: "Return to hotel" },
    ],
    price: "300.000 Rp",
    minPax: "4"
  };

  const ranauLakeDetails = {
    title: "Ranau Lake",
    duration: "Day trip",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🚙 Private car for transportation",
      "🛥 Private boat for lake travel",
      "🏝 Visit to Marisa Island",
      "🍱 Picnic lunch with a view",
      "🌋 Visit to Natural Hot Spring",
      "♒ Visit to a Waterfall",
      "🍉 Fresh fruit",
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "👟 Comfortable trekking shoes",
      "🕶 Sunscreen and sunglasses"
      
    ],
    schedule: [
      { time: "08:00 - 08:30", description: "Hotel pickup" },
      { time: "08:30 - 10:30", description: "Drive to Ranau Lake (2 hours)" },
      { time: "10:30 - 11:00", description: "Private boat tour" },
      { time: "11:00 - 13:30", description: "Explore Marisa Island & picnic lunch" },
      { time: "13:30 - 14:00", description: "Return boat ride to the mainland" },
      { time: "14:00 - 16:00", description: "Visit the natural hot spring" },
      { time: "16:00 - 17:00", description: "Drive back to Krui & return to hotel" },
    ],
    price: "700.000 Rp",
    minPax: "4"
  };


  const vulcanoHikeDetails = {
    title: "Vulcano Hike",
    duration: "2 days 1 night",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🚙 Private transport to and from the mountain",
      "🧭 Local trekking guide",
      "🍲 Meals (lunch, dinner, breakfast)",
      "🍉 Fruits",
      "🏕 Camping equipment",
      "🎟 Park entrance fees"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🥾 Comfortable trekking shoes",
      "👕 Warm clothing",
      "🧢 Hat, sunglasses, sunscreen",
      "🦟 Insect repellent",
      "💡 Headlamp or flashlight",
      "📸 Camera and power bank"
    ],
    schedule: [
      { time: "07:00 - 07:30", description: "Hotel pickup" },
      { time: "07:30 - 09:00", description: "Drive to Seminung mountain base" },
      { time: "09:30 - 12:00", description: "Start the hike" },
      { time: "13:00 - 14:00", description: "Lunch" },
      { time: "15:00 - 16:00", description: "Arrive at the campsite. Set up camp & relax" },
      { time: "16:00 - 17:30", description: "Rest & prepare for dinner" },
      { time: "17:30 - 19:00", description: "Dinner" },
      { time: "19:00 - 21:00", description: "Campfire & stargazing" },
      { time: "21:00", description: "Rest for the night" }
    ],
    day2Schedule: [
      { time: "04:30 - 05:00", description: "Wake up for sunrise" },
      { time: "05:00 - 07:00", description: "Breakfast & sunrise" },
      { time: "08:00 - 12:00", description: "Hike back to the base camp" },
      { time: "13:00 - 14:00", description: "Lunch" },
      { time: "14:00 - 16:00", description: "Drive back to Krui & return to hotel" }
    ],
    price: "800.000 Rp",
    minPax: "5"
  };



  return (
    <div className='bg-secondary'>
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4 mt-4 mx-4">
      <div>
      <Info 
        title={jungleTrekDetails.title}
        duration={jungleTrekDetails.duration}
        included={jungleTrekDetails.included}
        toBring={jungleTrekDetails.toBring}
        schedule={jungleTrekDetails.schedule}
        day2Schedule={jungleTrekDetails.day2Schedule}
        price={jungleTrekDetails.price}
        minPax={jungleTrekDetails.minPax}
      />
    </div>
    <div>
      <Info 
        title={bananaIslandDetails.title}
        duration={bananaIslandDetails.duration}
        included={bananaIslandDetails.included}
        toBring={bananaIslandDetails.toBring}
        schedule={bananaIslandDetails.schedule}
        day2Schedule={bananaIslandDetails.day2Schedule}
        price={bananaIslandDetails.price}
        minPax={bananaIslandDetails.minPax}
      />
    </div>
    <div>
      <Info 
        title={vulcanoHikeDetails.title}
        duration={vulcanoHikeDetails.duration}
        included={vulcanoHikeDetails.included}
        toBring={vulcanoHikeDetails.toBring}
        schedule={vulcanoHikeDetails.schedule}
        day2Schedule={vulcanoHikeDetails.day2Schedule}
        price={vulcanoHikeDetails.price}
        minPax={vulcanoHikeDetails.minPax}
      />
    </div>
    <div>
      <Info 
        title={surfSpotsDetails.title}
        duration={surfSpotsDetails.duration}
        included={surfSpotsDetails.included}
        toBring={surfSpotsDetails.toBring}
        schedule={surfSpotsDetails.schedule}
        day2Schedule={surfSpotsDetails.day2Schedule}
        price={surfSpotsDetails.price}
        minPax={surfSpotsDetails.minPax}
      />
    </div>
    <div>
      <Info 
        title={ranauLakeDetails.title}
        duration={ranauLakeDetails.duration}
        included={ranauLakeDetails.included}
        toBring={ranauLakeDetails.toBring}
        schedule={ranauLakeDetails.schedule}
        day2Schedule={ranauLakeDetails.day2Schedule}
        price={ranauLakeDetails.price}
        minPax={ranauLakeDetails.minPax}
      />
    </div>
    
    
    </div>
    <div className='flex justify-center my-6'>
      <button onClick={() => navigate(`/Book-Tour`)} className="px-8 py-4 bg-primary text-white rounded hover:bg-text"
          >
            Book now
        </button>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Trips;

