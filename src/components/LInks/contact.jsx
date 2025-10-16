import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form Data:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      details: '(555) 123-HEAL',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'support@medicare-hms.com',
      description: 'Online support'
    },
    {
      icon: '🏥',
      title: 'Visit Us',
      details: '123 Healthcare Ave',
      description: 'Medical City, MC 12345'
    },
    {
      icon: '🕒',
      title: 'Emergency',
      details: '(555) 123-911',
      description: '24/7 emergency line'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
  <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
  <p className="text-xl text-black/70 max-w-3xl mx-auto">
          Get in touch with our team. We're here to help you with any questions 
          about our Hospital Management System.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <h3 className="font-semibold text-black">{method.title}</h3>
                  <p className="text-black font-medium">{method.details}</p>
                  <p className="text-sm text-black/70">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map/Location Placeholder */}
          <div className="mt-8 card">
            <h3 className="font-semibold text-black mb-4">Our Location</h3>
              <div className="bg-white h-48 rounded-lg flex items-center justify-center border border-blue-50">
              <p className="text-black/70">Interactive Map Would Appear Here</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Question</option>
                <option value="billing">Billing Issue</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                placeholder="Please describe your inquiry in detail..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact