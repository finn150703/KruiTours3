import React from 'react';
import Homepage from './Homepage'
import BookTour from './components/Booking pages/Booktour'
import BookWorkshop from './components/Booking pages/Bookworkshop'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScooterRental from './components/more info pages/ScooterRental';
import Trips from './components/more info pages/Trips';
import WorkShops from './components/more info pages/Workshops';
import ActivitiesInfo from './components/more info pages/Activities';
import BookActivity from './components/Booking pages/Bookactivity'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/more-info-trips" element={<Trips/>}/>
        <Route path="/more-info-workshops" element={<WorkShops/>}/>
        <Route path="/more-info-Activities" element={<ActivitiesInfo/>}/>
        <Route path="/Book-Tour" element={<BookTour/>}/>
        <Route path="/Book-Workshop" element={<BookWorkshop/>}/>
        <Route path="/Book-Activity" element={<BookActivity/>}/>
        <Route path="/Scooter-Rental" element={<ScooterRental/>}/>
      </Routes>
    </Router>
  );
}

export default App;


