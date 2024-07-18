import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
//import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
//import CollectionsShowcase from './components/CollectionsShowcase';
import ContactUs from './components/ContactUs';
import UserGallery from './components/UserGallery'; // Assume you've implemented this based on previous instructions
import Footer from './components/Footer'; // Assume you've implemented this based on previous instructions
import Testimonials from './components/Testimonials';

import Apptryon from './components/App_tryon';
import MovingParticles from './components/MovingParticles';
import Partners from './components/PartnersList';
import HomePage from './components/HomePage';
import Privacy from './components/PrivacyStatementModal';
import CookieConsentPopup from './components/CookieConsentPopup';
function App() {
    return (            
      <div className="Header">
      <Header className="fixed w-full bg-black z-10 ..." />

            <CookieConsentPopup />

          <div className="rest-of-the-page">
              <MovingParticles />
              <HomePage />
          <Features />
          <HowItWorks />
          
          <Apptryon />
            <Testimonials />
      <UserGallery />
          <ContactUs />
      <Partners />
                <Footer />
                <Privacy />
            </div>
            </div>
      
        
          

   );
}

export default App;
