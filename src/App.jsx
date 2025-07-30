import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <HeroSection />
      
      <FeatureCards />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
