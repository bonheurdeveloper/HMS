import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // 🔥 Tangira Link

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hano tuzohereza ubutumwa
    console.log('Ubutumwa:', formData);
    alert('Urakoze! Ubutumwa bwawe bwakiriwe.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Twandikire</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Ohereza Ubutumwa</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amazina
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imeyili
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ubutumwa
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition"
              >
                Ohereza
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Amakuru yacu</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">📍 Aho turi</h3>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">📞 Telefone</h3>
                <p className="text-gray-600">+250 788 123 456</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">✉️ ImeYili</h3>
                <p className="text-gray-600">info@sistemayubuzima.rw</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">🕒 Igihe dukora</h3>
                <p className="text-gray-600">08:00 - 17:00<br/>Ku wa mbere - Ku wa gatanu</p>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/login" 
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition"
              >
                Injira muri Konti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;