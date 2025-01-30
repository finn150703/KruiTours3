import React from 'react';
import Info from './Info';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer' 
import { useNavigate } from 'react-router-dom';


const WorkShops = () => {
  const navigate = useNavigate();

  const cookingWorkshopDetails = {
    title: "Outdoor Cooking class",
    included: ["🚐 Hotel pickup & drop-off", "🍴 Ingredients", "🥤 Refreshments"],
    toBring: ["📸 Camera", "💧 Water bottle"], 
    souvenirs: [
      { name: "Recipe Book", color: "bg-yellow-400" },
      { name: "Spice Packet", color: "bg-red-400" }
    ],
    schedule: [
      { time: "09:00 - 09:30", description: "Hotel pickup" },
      { time: "09:30 - 10:00", description: "Introduction to traditional spices" },
      { time: "10:00 - 12:00", description: "Cooking session with a local chef" },
      { time: "12:00 - 13:00", description: "Enjoy your meal" },
      { time: "13:00 - 13:30", description: "Return to hotel" }
    ],
    price: "450.000 Rp",
    
  };
  

  const shampooBarWorkshopDetails = {
    title: "Shampoo Bar",
    included: ["🚐 Hotel pickup & drop-off", "🌿 Natural ingredients", "🍹 Drinks", "🍉 Fruit"],
    toBring: ["🦟 Insect repellent"],
    schedule: [
      { time: "08:30 - 09:00", description: "Hotel pickup" },
      { time: "09:00 - 09:30", description: "Learn and talk about the plastic waste problem in Indonesia" },
      { time: "09:30 - 12:00", description: "Make your own shampoo bar" },
      { time: "12:00 - 12:30", description: "Return to hotel" },
    ],
    price: "450.000 Rp" 
  };

  const woodCarvingWorkshopDetails = {
    title: "Wood Carving",
    included: ["🚐 Hotel pickup & drop-off", "🍹 Drinks", "🍉 Fruit"],
    toBring: [], // Empty if nothing to bring
    souvenirs: [
      { name: "Coaster", color: "bg-green-400" },
      { name: "Spoon", color: "bg-blue-400" }
    ],
    schedule: [
      { time: "08:30 - 09:00", description: "Hotel pickup" },
      { time: "09:00 - 09:30", description: "Learn about wood carving" },
      { time: "09:30 - 12:00", description: "Make your own souvenir" },
      { time: "12:00 - 12:30", description: "Return to hotel" },
    ],
    
  };
  
  const traditionalClothDetails = {
    title: "Wood Carving",
    included: ["🚐 Hotel pickup & drop-off", "🍹 Drinks", "🍉 Fruit"],
    toBring: [], // Empty if nothing to bring
    souvenirs: [
      { name: "Coaster", color: "bg-green-400" },
      { name: "Spoon", color: "bg-blue-400" }
    ],
    schedule: [
      { time: "08:30 - 09:00", description: "Hotel pickup" },
      { time: "09:00 - 09:30", description: "Learn about wood carving" },
      { time: "09:30 - 12:00", description: "Make your own souvenir" },
      { time: "12:00 - 12:30", description: "Return to hotel" },
    ],
  };



  return (
    <div className='bg-secondary'>
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-4 mt-4 mx-4">
      <div>
      <Info 
        title={shampooBarWorkshopDetails.title}
        duration={shampooBarWorkshopDetails.duration}
        included={shampooBarWorkshopDetails.included}
        toBring={shampooBarWorkshopDetails.toBring}
        schedule={shampooBarWorkshopDetails.schedule}
        day2Schedule={shampooBarWorkshopDetails.day2Schedule}
        price={shampooBarWorkshopDetails.price}
        minPax={shampooBarWorkshopDetails.minPax}
      />
    </div>

    <div>
      <Info 
        title={woodCarvingWorkshopDetails.title}
        duration={woodCarvingWorkshopDetails.duration}
        included={woodCarvingWorkshopDetails.included}
        toBring={woodCarvingWorkshopDetails.toBring}
        schedule={woodCarvingWorkshopDetails.schedule}
        day2Schedule={woodCarvingWorkshopDetails.day2Schedule}
        price={woodCarvingWorkshopDetails.price}
        minPax={woodCarvingWorkshopDetails.minPax}
      />
    </div>

    <div>
      <Info 
        title={cookingWorkshopDetails.title}
        duration={cookingWorkshopDetails.duration}
        included={cookingWorkshopDetails.included}
        toBring={cookingWorkshopDetails.toBring}
        schedule={cookingWorkshopDetails.schedule}
        day2Schedule={cookingWorkshopDetails.day2Schedule}
        price={cookingWorkshopDetails.price}
        minPax={cookingWorkshopDetails.minPax}
      />
    </div>

    <div>
      <Info 
        title={traditionalClothDetails.title}
        duration={traditionalClothDetails.duration}
        included={traditionalClothDetails.included}
        toBring={traditionalClothDetails.toBring}
        schedule={traditionalClothDetails.schedule}
        day2Schedule={traditionalClothDetails.day2Schedule}
        price={traditionalClothDetails.price}
        minPax={traditionalClothDetails.minPax}
      />
    </div>
    
    
    </div>
    <div className='flex justify-center my-6'>
      <button onClick={() => navigate(`/Book-Workshop`)} className="px-8 py-4 bg-primary text-white rounded hover:bg-text"
          >
            Book now
        </button>
    </div>
    <Footer/>
    </div>
    
  );
};

export default WorkShops;