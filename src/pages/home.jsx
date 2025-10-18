import React from 'react';  // 🔥 Tangira React
import { Link } from 'react-router-dom';  // 🔥 Tangira Lin
function  Home (){
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Sistema y'Ubuzima bw'Umuryango
          </h1>
          <p className="text-xl mb-8">
            Koresha Indangamuntu yawe kugirango wakire serivisi zubuzima ku muryango wawe
          </p>
          <div className="space-x-4">
            <Link 
              to="/login"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
            >
              Injira ukoresheje Indangamuntu
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition inline-block"
            >
              Menya byinshi
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ibyo Dukora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-2">Gucunga Umuryango</h3>
              <p className="text-gray-600">Menya amakuru y'ubuzima y'umuryango wawe wose</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Ubwishingizi</h3>
              <p className="text-gray-600">Reba niba ubwishingizi bwawe buri bukora</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Kwandika</h3>
              <p className="text-gray-600">Andika abarwayi mu muryango wawe byihuse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Imibare</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,250+</div>
              <p className="text-gray-600">Imiryango</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">Abarwayi</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Abaganga</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Serivisi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;