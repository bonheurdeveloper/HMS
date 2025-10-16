import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/footer&nav/navigation';
import Footer from './components/footer&nav/footer';
import Home from './components/Links/home';
import About from './components/Links/about';
import Contact from './components/Links/contact';
import PatientForm from './components/forms/patientform';
import './App.css';

function App() {
  return (
    <Router>
  <div className="min-h-screen bg-white flex flex-col pt-16">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient-form" element={<PatientForm />} />
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;