import React, { useState } from 'react';

const TripInfo = ({ title, duration, included, toBring, schedule, day2Schedule, price, minPax }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg border border-purple-300">
      {/* Title Section */}
      <div className='flex justify-between items-center cursor-pointer' onClick={toggleExpand}>
      <h1
        className="text-center text-4xl font-bold text-purple-700 "
        
      >
        {title}
      </h1>

      <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-2 h-6 w-6 transition-transform duration-300 ${
      isExpanded ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
      </div>

      {/* Dropdown Content */}
      {isExpanded && (
        <div className="mt-4">
          <h2 className="text-center text-2xl font-semibold text-purple-700 mt-2">{duration}</h2>

          <div className="flex flex-col md:flex-row justify-around my-4 border-t border-b border-purple-300 py-4">
            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Included in the price:</h3>
              <ul className="space-y-2">
                {included.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">What you need to bring:</h3>
              <ul className="space-y-2">
                {toBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-2">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">What we're going to do:</h3>
            <div className="space-y-2">
              {schedule.map((activity, index) => (
                <p key={index}>
                  <strong>{activity.time}</strong> - {activity.description}
                </p>
              ))}
            </div>
          </div>

          {day2Schedule && (
            <div className="my-2">
              <p><strong>Day 2</strong></p>
              <div className="space-y-2">
                {day2Schedule.map((activity, index) => (
                  <p key={index}>
                    <strong>{activity.time}</strong> - {activity.description}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div>
            <h1 className="text-center text-4xl font-bold text-purple-700">
              price: {price || "Contact for price"}, min persons: {minPax || 'N.A.'}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripInfo;







