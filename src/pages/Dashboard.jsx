import React from 'react';  // 🔥 Tangira ubu
import { Link } from 'react-router-dom';

function Dashboard () {
  // Ibi bizava mu backend
  const familyData = {
    headOfFamily: "Jean de Dieu",
    nationalId: "119988777666555",
    insurance: {
      status: "Yishyuye",
      type: "RSSB",
      expiry: "2024-12-31"
    },
    familyMembers: [
      { name: "Marie Claire", relationship: "Umugore", age: 32 },
      { name: "Eric Nshuti", relationship: "Umuhungu", age: 8 },
      { name: "Annette", relationship: "Umukobwa", age: 5 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Murakaza neza, {familyData.headOfFamily}
          </h1>
          <p className="text-gray-600">Indangamuntu: {familyData.nationalId}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Insurance Status */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Ubwishingizi</h2>
            <div className={`p-4 rounded-lg ${familyData.insurance.status === "Yishyuye" ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-semibold">Status: {familyData.insurance.status}</p>
              <p>Ubwoko: {familyData.insurance.type}</p>
              <p>Iherezo: {familyData.insurance.expiry}</p>
            </div>
          </div>

          {/* Family Members */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Abanyamuryango</h2>
              <Link 
                to="/register-patient"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                🏥 Andika Umurowa
              </Link>
            </div>
            <div className="space-y-4">
              {familyData.familyMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-gray-600">{member.relationship} • Imyaka {member.age}</p>
                  </div>
                  <Link 
                    to="/register-patient"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Andika
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;