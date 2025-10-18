import React, { useState } from 'react';  // 🔥 Tangira ubu
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nationalId, setNationalId] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hano tuzakora login ukoresheje Indangamuntu
    console.log('Indangamuntu:', nationalId);
    
    // Simulate successful login
    if (nationalId.length ==11) {
      navigate('/dashboard');
    }
    //igihe imibare yiranga muntu ituzuye
        else{
      console.log("Imibare yirangamuntu igomba kuba ari 11 (cuminumwe)")
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 pt-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Injira</h1>
          <p className="text-gray-600">Koresha Indangamuntu yawe kwinjira</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Numero y'Indangamuntu
            </label>
            <input
              type="text"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Shyiramo numero y'Indangamuntu"
              required
                         />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-200"
          >
            Injira
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Ufite ikibazo? <a href="/contact" className="text-blue-600 hover:underline">Twandikire</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;