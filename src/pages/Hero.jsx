import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ currentSlide, hospitalImages, stats, goToSlide, nextSlide, prevSlide, language }) => {
  const translations = {
    rw: {
      welcome: 'Karibu kuri',
      system: 'Sisteme yo Gucunga Ibitaro ya MediCare',
      description: 'Dukoresha ubuhanga bwa cyuma mu kugabura serivisi zubuzima, dushyigikira imiryango mu kubona uburambe bwiza.',
      familyLogin: 'Injira ukoresheje Indangamuntu',
      bookAppointment: 'Igitego cyo Kwita ku Muganga',
      patientsToday: 'Abarwayi uyu munsi',
      appointments: 'Ibitego',
      emergencyCases: 'Ubutumwa Bwihutirwa',
      availableBeds: 'Ibitanda Bihari'
    },
    en: {
      welcome: 'Welcome to',
      system: 'MediCare Hospital Management System',
      description: 'Using modern technology to deliver healthcare services, supporting families in accessing quality medical care.',
      familyLogin: 'Login with National ID',
      bookAppointment: 'Book Appointment',
      patientsToday: 'Patients Today',
      appointments: 'Appointments',
      emergencyCases: 'Emergency Cases',
      availableBeds: 'Available Beds'
    }
  };

  const t = translations[language];

  const translatedStats = [
    { label: t.patientsToday, value: '124', color: 'bg-[#2563EB]' },
    { label: t.appointments, value: '67', color: 'bg-[#2563EB]' },
    { label: t.emergencyCases, value: '8', color: 'bg-[#2563EB]' },
    { label: t.availableBeds, value: '23', color: 'bg-[#2563EB]' }
  ];

  return (
    <section className="relative h-screen -mt-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {hospitalImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {hospitalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.welcome} <span className="text-white/90">MediCare</span> HMS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {t.system}
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            {t.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/family-login"
              className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {t.familyLogin}
            </Link>
            <Link 
              to="/appointments"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 border border-white/30 backdrop-blur-sm"
            >
              {t.bookAppointment}
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {translatedStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                </div>
                <h3 className="text-white font-semibold text-sm">{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;