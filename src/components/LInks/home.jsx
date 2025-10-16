import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../footer&nav/navigation';
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hospitalImages = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "Modern hospital reception"
    },
    {
      url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "Doctor with patient"
    },
    {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "Hospital waiting area"
    },
    {
      url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      alt: "Medical team discussion"
    }
  ];

  const stats = [
  { label: 'Patients Today', value: '124', color: 'bg-[#2563EB]' },
  { label: 'Appointments', value: '67', color: 'bg-[#2563EB]' },
  { label: 'Emergency Cases', value: '8', color: 'bg-[#2563EB]' },
  { label: 'Available Beds', value: '23', color: 'bg-[#2563EB]' }
  ];

  const quickActions = [
    { title: 'Register Patient', description: 'Add new patient to the system', icon: '👤', link: '/patient-form' },
    { title: 'Schedule Appointment', description: 'Book new appointments', icon: '📅', link: '#' },
    { title: 'View Records', description: 'Access patient records', icon: '📋', link: '#' },
    { title: 'Billing', description: 'Manage financial records', icon: '💰', link: '#' }
  ];

  const recentActivities = [
    { time: '2 mins ago', activity: 'New patient registration - John Doe', status: 'success' },
    { time: '15 mins ago', activity: 'Lab results ready for Sarah Smith', status: 'info' },
    { time: '1 hour ago', activity: 'Emergency admission - Room 204', status: 'error' },
    { time: '2 hours ago', activity: 'Appointment rescheduled - Dr. Wilson', status: 'warning' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hospitalImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hospitalImages.length]);

  const getStatusColor = (status) => {
    const colors = {
      success: 'bg-[#2563EB]',
      info: 'bg-[#2563EB]',
      error: 'bg-[#2563EB]',
      warning: 'bg-[#2563EB]'
    };
  return colors[status] || 'bg-[#2563EB]';
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hospitalImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hospitalImages.length) % hospitalImages.length);
  };

  return (
    <div className="min-h-screen">
       
      {/* Full-screen Hero Slideshow */}
      <section className="relative h-screen -mt-16"> {/* -mt-16 to go under navigation */}
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
              Welcome to <span className="text-white/90">MediCare</span> HMS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Advanced Healthcare Management System for Modern Medical Facilities
            </p>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Streamlining patient care, appointments, and hospital operations with cutting-edge technology and compassionate service.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/patient-form"
                className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Register New Patient
              </Link>
              <Link 
                to="/appointments"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 border border-white/30 backdrop-blur-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{stat.value}</span>
                  </div>
                  <h3 className="text-black font-semibold text-sm">{stat.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Below Hero */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const ActionComponent = action.link === '#' ? 'div' : Link;
              const props = action.link === '#' 
                ? { className: "bg-white rounded-xl shadow-lg border border-blue-50 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block p-6 opacity-70" }
                : { to: action.link, className: "bg-white rounded-xl shadow-lg border border-blue-50 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 block p-6" };
              
              return (
                <ActionComponent key={index} {...props}>
                  <div className="text-4xl mb-4">{action.icon}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{action.title}</h3>
                  <p className="text-sm text-black/70">{action.description}</p>
                </ActionComponent>
              );
            })}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white rounded-xl shadow-lg border border-blue-50 p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-blue-50 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                  <span className="text-black font-medium">{item.activity}</span>
                </div>
                <span className="text-sm text-black/70 bg-white px-3 py-1 rounded-full">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;