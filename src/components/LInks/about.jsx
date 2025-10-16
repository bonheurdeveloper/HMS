import React from 'react'

const About = () => {
  const features = [
    {
      title: 'Patient Management',
      description: 'Comprehensive patient records and history management',
      icon: '👥'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Efficient booking and management of patient appointments',
      icon: '📅'
    },
    {
      title: 'Billing & Insurance',
      description: 'Streamlined financial operations and insurance processing',
      icon: '💰'
    },
    {
      title: 'Lab Integration',
      description: 'Seamless integration with laboratory systems',
      icon: '🔬'
    },
    {
      title: 'Pharmacy Management',
      description: 'Complete pharmacy inventory and prescription tracking',
      icon: '💊'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Advanced reporting for better decision making',
      icon: '📊'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
  <h1 className="text-4xl font-bold text-black mb-4">About MediCare HMS</h1>
  <p className="text-xl text-black/70 max-w-3xl mx-auto">
          Transforming healthcare delivery through innovative technology solutions 
          that enhance patient care and streamline hospital operations.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-black/70 leading-relaxed">
            To provide healthcare institutions with a comprehensive, intuitive, and 
            reliable management system that improves patient outcomes, enhances 
            operational efficiency, and supports medical professionals in delivering 
            exceptional care.
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
          <p className="text-black/70 leading-relaxed">
            To be the leading healthcare management solution provider, driving 
            digital transformation in the medical industry and setting new standards 
            for patient care and hospital administration excellence.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
  <h2 className="text-2xl font-bold text-black mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#2563EB] mb-2">50+</div>
            <div className="text-black/70">Healthcare Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2563EB] mb-2">1M+</div>
            <div className="text-black/70">Patients Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#2563EB] mb-2">24/7</div>
            <div className="text-black/70">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About