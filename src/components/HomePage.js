import React from 'react';
import ReactPlayer from 'react-player';
import './HomePage.css'; // Import your CSS file
import styled from 'styled-components';

const WelcomeTitle = styled.h1`
  text-align: center;
  padding-top: 40px; /* Default padding for web/tab */

  @media (max-width: 768px) { /* Adjusts for mobile devices */
    padding-top: 100px;
  }
`;

const PoweredBy = styled.h2`
  text-align: center;
  padding-top: 10px; /* Default padding */

  /* Example: If you also wanted to change this for mobile */
  @media (max-width: 768px) { /* Adjusts for mobile devices */
    padding-top: 20px; /* Adjust as needed */
  }
`;


const HomePage = () => {
    const img_src1 = process.env.PUBLIC_URL + '/features1.png'
    const img_src2 = process.env.PUBLIC_URL + '/features2.png'
    const img_src3 = process.env.PUBLIC_URL + '/features3.png'
    const img_src4 = process.env.PUBLIC_URL + '/features5.png'
    const video_src = process.env.PUBLIC_URL + '/haute-u-AR.mp4';
    const appStoreBadge = process.env.PUBLIC_URL + 'app_store.png'
    const googlePlayBadge = process.env.PUBLIC_URL +'google-play.png'
    return (
       
    <div id="Home" className="home-page" >

            <WelcomeTitle>Welcome to <i>Haute-u AR</i> technologies</WelcomeTitle>
            <PoweredBy className="blinking-link">Powered by <i>Gen AI</i> </PoweredBy>

      <main className="main-content">
        
        <section className="left-section">
           
         
          <h2>Experience Virtual Fashion Like Never Before</h2>
          
          <p style = {{justifyContent:"center"}}>
            Haute-u AR revolutionizes online shopping by letting you virtually try on clothes from the comfort of your home.
             Our cutting-edge technology seamlessly overlays garments onto your body, allowing you to visualize styles, fits, 
             and colors with remarkable accuracy.
          </p>
          <p>
          Discover your perfect outfit without stepping into a store.
            <b> <div style={{color: 'blue'}}> <i> Haute-U-AR dress try-on app</i> </div> </b> <li>  Our first step to reduce returns and cost, there by offering our <i>2 cents to eco sustainability</i></li>
            </p>
          <button className="try-on-button" onClick={() => document.getElementById('app-try-on').scrollIntoView()}>Try On Now</button>
          <div className="download-buttons">
        <a href="https://apps.apple.com/app/id" target="_blank" rel="noopener noreferrer">
          <img src={appStoreBadge} alt="Download on the App Store" className="store-badge" />
        </a>
        <a href="https://play.google.com/store/apps/details?id" target="_blank" rel="noopener noreferrer">
          <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge" />
        </a>
      </div>
        </section>
 
        <section className="right-section">
          <h2>Explore the App in Action</h2>
          <div className="screenshot-container">
            {/* Replace with your actual screenshot images */}
            <img src={img_src1} alt="Screenshot 1" className="screenshot" />
            <img src={img_src2} alt="Screenshot 2" className="screenshot" />
            <img src={img_src3} alt="Screenshot 3" className="screenshot" />
            <img src={img_src4} alt="Screenshot 4" className="screenshot" />
            
          </div>
        </section>
        </main>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
          <div style={{ width: '75%', height: '60%', padding: '7px' }}>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={video_src}
                width='90%'
                height='60%'
                playing={true}
                muted={true}
                controls={true}
                loop={true}
              />
              </div>
              </div>
              </div>
            </div>
    
  );
};

export default HomePage;
