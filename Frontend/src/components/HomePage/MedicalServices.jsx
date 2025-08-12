import React from 'react';
import { useNavigate } from 'react-router-dom';

const MedicalServices = () => {
  const navigate = useNavigate();
  
  const services = [
    { title: 'Appointment Booking', buttonText: 'Appointment Booking', route: '/appointment' },
    { title: 'Telemedicine Support', buttonText: 'Telemedicine Support', route: '/telemedicine' },
    { title: 'Video Calling Feature', buttonText: 'Video Calling Feature', route: '/video-call' },
    { title: 'Medical Centers On Maps', buttonText: 'Medical Centers On Maps', route: '/medical-centers' },
    { title: 'AI-Diagnosis', buttonText: 'AI-Diagnosis', route: '/ai-diagnosis' },
  ];
  
  return (
    <div className="bg-gray-50 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-full"
            >
              <div className="rounded-full bg-green-100 p-3 text-green-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold">{service.title.charAt(0)}</span>
              </div>
              <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <button
                onClick={() => navigate(service.route)}
                className="mt-3 sm:mt-4 bg-green-300 text-green-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-green-400 w-full"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;