import React, { useState } from 'react';
import './Header.css';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaBars, FaTimes } from 'react-icons/fa'; // Adding icons for menu
import { Link, useLocation } from 'react-router-dom'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const logo_src = process.env.PUBLIC_URL + '/logo_2.png';
    const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the position you want to scroll to 
      const yOffset = -70; // Adjust the offset pixels to the height of your header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    };
    const handleHomeClick = (e) => {
        // Check if the user is already on the Home page
        if (location.pathname === '/') {
            e.preventDefault(); // Prevent Link from navigating
            scrollToSection('Home'); // Assume 'top' is the id of the section at the top of your Home page
        }
        // If the user is not on the Home page, Link will navigate to '/' as usual
    };

  return (
       <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ marginRight: 'auto' }}><img src={logo_src} alt="Logo" /></div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
              <nav style={{ display: menuOpen ? 'flex' : 'none', gap: '15px', alignItems: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                  <Link to="/" className="active-link" onClick={handleHomeClick} style={{ color: 'blue', textDecoration: 'underline' }}>Home</Link>
               <a href="#features" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
               <a href="#how-it-works" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works');} }>How It Works</a>
               <a href="#app-try-on" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('app-try-on');} }>Try On Feature</a>
               <a href="#testimonials" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
               
                  <a href="#contact-us" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a>
                  <Link to="/Blog" className="active-link" style={{ color: 'blue', textDecoration: 'underline' }}>Blog</Link>
        </nav> 
        <div style={{ marginLeft: 'auto', display: menuOpen ? 'none' : 'flex', gap: '10px', fontSize: '1.5rem', alignItems: 'right' }}>
        <a href="https://www.linkedin.com/company/hauteu-ar-technologies-inc/?viewAsMember=true" className="mx-2"><FaLinkedin /></a>
        <a href="https://www.instagram.com/hauteuar/?igshid=NjIwNzIyMDk2Mg%3D%3D" className="mx-2"><FaInstagram /></a>
        <a href="https://facebook.com" className="mx-2"><FaFacebookSquare /></a>
      </div>
      </div>
    </header>
  );
}


export default Header;
