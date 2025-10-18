// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation';
import Footer from './pages/footer';
import Home from './pages/About';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;