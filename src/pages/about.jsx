import React from 'react';
import { Link } from 'react-router-dom';  // 🔥 Tangira Link

function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Abo Tubanye</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sistema y'Ubuzima bw'Umuryango</h2>
          <p className="text-gray-700 mb-4">
            Turi isosiyete ifasha abanyarwanda gukoresha serivisi z'ubuzima neza. 
            Dukoresha ubuhanga bw'icyorezo mu gufasha imiryango kubona amakuru y'ubuzima byihuse.
          </p>
          <p className="text-gray-700">
            Ushobora kwinjira ukoresheje indangamuntu yawe, kureba ubwishingizi, 
            no gucunga amakuru y'ubuzima y'umuryango wawe wose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">💡 Intego yacu</h3>
            <p className="text-gray-700">
              Kubaka sisiteme ifasha imiryango kubona serivisi z'ubuzima byoroshye 
              kandi burambye, bakoresheje indangamuntu gusa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">🎯 Icyo Dukora</h3>
            <p className="text-gray-700">
              Dufasha imiryango kubona amakuru yose ajyanye n'ubuzima bwabo 
              hamwe no kubona serivisi mu gihe cyihuse.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-block"
          >
            Twandikire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;