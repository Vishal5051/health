import React from 'react';

import HeroSection from './Components/HeroSection';
import FeatureCards from './Components/FeatureCards';
import Testimonials from './Components/Testimonials';
import ContactForm from './Components/ContactForm';
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
