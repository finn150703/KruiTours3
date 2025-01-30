import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Header from '../mainpage/Header';
import Footer from '../mainpage/Footer';

function BookWorkshop() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    Tour: '',
    startDate: ''
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false); // Track terms acceptance

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      startDate: date,
    }));
  };

  const sendEmail = (data) => {
    const { name, email, people, Tour, startDate } = data;
    emailjs.send(
      'service_f5029kl',
      'template_o08z0kc',
      { name, email, people, Tour, startDate: format(startDate, 'MMMM d, yyyy') },
      '4UpOrnZHUhK3QzK1l'
    )
    .then(response => {
      alert("Booking request sent successfully!");
    })
    .catch(err => {
      alert("Failed to send booking request.");
      console.error("EmailJS error:", err);
    });
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    sendEmail(formData);
  };

  return (
    <div className='bg-background'>
      <Header />
      <div className="grid grid-cols-3 gap-4 my-8">
        {/* Left Column */}
        <div className="space-y-20 my-12 ml-4">
          <img
            src="./fotos website resa/Pisang island.jpg"
            alt="Image 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="./fotos website resa/mountains.webp"
            alt="Image 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="min-h-screen flex items-center justify-center bg-background relative my-8">
          <div className="relative max-w-lg w-full mx-5 p-8 bg-white rounded-lg shadow-lg font-sans">
            <header className="text-center mb-6 p-5 bg-primary text-white rounded-lg shadow">
              <h1 className="mb-1 text-3xl font-semibold">Krui Tours Indo</h1>
              <p>Explore the beauty of Krui with our exclusive tours!</p>
            </header>

            <form onSubmit={handleSubmit} className="border border-black p-6 rounded-lg bg-background">
              <div className="mb-4">
                <label className="block mb-2 text-text font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-text font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Flex container for Number of People and Number of Days */}
              <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                  <label className="block mb-2 text-text font-medium">Number of People:</label>
                  <input
                    type="number"
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    required
                    min="1" // Prevents negative numbers
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-2 text-text font-medium">Type of Workshop:</label>
                  <select
                    name="days"
                    value={formData.Tour}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Trip</option>
                    <option value="1">Traditional Cloth</option>
                    <option value="2">Shampoo Bar</option>
                    <option value="3">Wood Carving</option>
                    <option value="3">Outdoor Cooking Class</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700 mb-2">Select a Date</label>
                <DatePicker
                  selected={formData.startDate}
                  onChange={handleDateChange}
                  placeholderText="Click to select a date"
                  className="w-full p-2 border rounded cursor-pointer focus:outline-none"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-text font-medium">
                  I accept the{' '}
                  <a
                    href="/Terms-and-conditions-Krui-Tours-Indo.pdf" // Replace with your actual PDF path
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className='my-6 mx-auto'>
                <ReCAPTCHA
                  sitekey="6LciR3wqAAAAAM8FvA7La8NFdvTICbnHT2mgoom0" // Replace with your actual Site Key
                  onChange={onCaptchaChange}
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded font-semibold hover:text-green-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-20 my-12 mr-4">
          <img
            src="./fotos website resa/Lake.jpg"
            alt="Image 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="./fotos website resa/Wave.jpg"
            alt="Image 4"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookWorkshop;

