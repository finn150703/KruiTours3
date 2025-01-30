import React from 'react';
import Info from './Info';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer' 
import { useNavigate } from 'react-router-dom';


const ActivitiesInfo = () => {
  const navigate = useNavigate();

  const SurfLesson = {
    title: "Surf Lesson",
    duration: "Day trip",
    included: [
      "🚐 Surfboard rental",
      "🧭 Surf instructor",
      "🍉 Fruits"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
    ],
    schedule: [
      { time: "08:00 - 08:30", description: "Meeting point at Labuan Jukung" },
      { time: "08:30 - 09:00", description: "Safety briefing & surf basics" },
      { time: "09:30 - 10:30", description: "Surfing" },
      { time: "10:30 - 11:30", description: "Drinking coconuts & free surfing" },
    ],
    price: "450 000 Rp",
  };

  const RiverTubing = {
    title: "River Tubing",
    duration: "Day trip",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🧭 Boat for trip transportation",
      "🍲 lunch",
      "🍉 fruits",
      
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🧢 Hat, sunglasses, sunscreen",
      "👟 Comfortable trekking shoes",
      
    ],
    schedule: [
      { time: "08:00 - 08:30", description: "Hotel pickup" },
      { time: "08:30 - 09:30", description: "Exploring Pulau Pisang" },
      { time: "09:30 - 10:30", description: "Hiking to waterfall" },
      { time: "11:00 - 12:00", description: "lunch" },
      { time: "12:00 - 13:00", description: "River tubing" },
      { time: "13:00 - 14:00", description: "Return to Hotel" },
    ],
    price: "350.000 Rp",
    minPax: "4"
  };

  const Rafting = {
    title: "Rafting",
    duration: "Day trip",
    included: [
        "🏨 Hotel pickup & drop-off",
        "🚙 Private car for transportation",
        "🛥 Rafting boat + equipment",
        "☕ Drinks",
        "🍽 Lunch",
        "📸 Documentation"
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🧢 Hat and Sunscreen",
      "👟 Comfortable trekking shoes",
    ],
    schedule: [
      { time: "08:00 - 08:30", description: "Hotel pickup" },
      { time: "08:30 - 11:00", description: "Drive to Danau Ranau area" },
      { time: "11:00 - 12:00", description: "Rafting" },
      { time: "12:30 - 13:30", description: "Lunch" },
      { time: "13:30 - 16:00", description: "Return to hotel" },
    ],
    price: "600.000 Rp",
    minPax: "6"
  };

  const MysticalCave = {
    title: "Mystical Cave",
    duration: "Day trip",
    included: [
        "🚐 Hotel pickup & drop-off",
        "🚙 Private transport",
        "🧭 Local trekking guide",
        "🍲 lunch",
        "🍉 Fruits",
        "🏕  Cave exploration"
      ],
      toBring: [
        "💧 Something to drink",
        "🥾 Comfortable trekking shoes",
        "🧢 Hat, sunglasses, sunscreen",
      ],
    schedule: [
      { time: "08:00 - 08:30", description: "Hotel pickup" },
      { time: "08:30 - 09:30", description: "Drive to Gua Matu" },
      { time: "09:30 - 11:00", description: "Explore Gua Matu" },
      { time: "11:00 - 12:30", description: "lunch" },
      { time: "12:30 - 12:30", description: "Return to hotel" },
    ],
    price: "250.000 Rp",
  };


  const RiverSwimming = {
    title: "River Swimming",
    duration: "2 days 1 night",
    included: [
      "🚐 Hotel pickup & drop-off",
      "🚙 Private transport",
      "🧭 Local trekking guide",
      "🍲 lunch",
      "🍉 Fruits",
    ],
    toBring: [
      "🩱 Swimming clothes",
      "💧 Something to drink",
      "🥾 Comfortable trekking shoes",
      "🧢 Hat, sunglasses, sunscreen",
    ],
    schedule: [
      { time: "09:00 - 09:30", description: "Hotel pickup" },
      { time: "09:30 - 10:00", description: "Drive to River" },
      { time: "10:00 - 11:30", description: "Explore area/Hike to waterfall" },
      { time: "11:30 - 12:30", description: "Lunch" },
      { time: "12:30 - 13:30", description: "River swimming" },
      { time: "13:30 - 14:00", description: "Return to hotel" },
    ],
    price: "250.000 Rp",
  };



  return (
    <div className='bg-secondary'>
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4 mt-4 mx-4">
      <div>
      <Info 
        title={SurfLesson.title}
        duration={SurfLesson.duration}
        included={SurfLesson.included}
        toBring={SurfLesson.toBring}
        schedule={SurfLesson.schedule}
        day2Schedule={SurfLesson.day2Schedule}
        price={SurfLesson.price}
        minPax={SurfLesson.minPax}
      />
    </div>
    <div>
      <Info 
        title={RiverTubing.title}
        duration={RiverTubing.duration}
        included={RiverTubing.included}
        toBring={RiverTubing.toBring}
        schedule={RiverTubing.schedule}
        day2Schedule={RiverTubing.day2Schedule}
        price={RiverTubing.price}
        minPax={RiverTubing.minPax}
      />
    </div>
    <div>
      <Info 
        title={Rafting.title}
        duration={Rafting.duration}
        included={Rafting.included}
        toBring={Rafting.toBring}
        schedule={Rafting.schedule}
        day2Schedule={Rafting.day2Schedule}
        price={Rafting.price}
        minPax={Rafting.minPax}
      />
    </div>
    <div>
      <Info 
        title={MysticalCave.title}
        duration={MysticalCave.duration}
        included={MysticalCave.included}
        toBring={MysticalCave.toBring}
        schedule={MysticalCave.schedule}
        day2Schedule={MysticalCave.day2Schedule}
        price={MysticalCave.price}
        minPax={MysticalCave.minPax}
      />
    </div>
    <div>
      <Info 
        title={RiverSwimming.title}
        duration={RiverSwimming.duration}
        included={RiverSwimming.included}
        toBring={RiverSwimming.toBring}
        schedule={RiverSwimming.schedule}
        day2Schedule={RiverSwimming.day2Schedule}
        price={RiverSwimming.price}
        minPax={RiverSwimming.minPax}
      />
    </div>
    
    
    </div>
    <div className='flex justify-center my-6'>
      <button onClick={() => navigate(`/Book-Activity`)} className="px-8 py-4 bg-primary text-white rounded hover:bg-text"
          >
            Book now
        </button>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ActivitiesInfo;
