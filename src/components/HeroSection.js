import React from 'react';
import ReactPlayer from 'react-player';

const HeroSection = () => {
  const img_src = process.env.PUBLIC_URL + '/app_bg.png';
  const video_src = process.env.PUBLIC_URL + '/haute-u-AR.mp4';

  return (
    <div id="heroSection" className="hero-background">
      <div style={{ padding: '4rem 0' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem', textAlign: 'center' }}>
          Welcome to <i>Haute-u AR</i>
        </h1>
        
        <h1 style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          See Yourself in Style Instantly with <i>Haute-u AR Virtual Dress Try-On</i>
        </h1>
           
        
        <h2 style={{  fontSize: '1.5rem', textAlign: 'left' }} >
          Experience the Future of Fashion with Our Virtual Dress Try-On App
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-start', fontSize: '1.375rem' }}>
          <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.375rem', textAlign: 'left' }}>
          
          <br />
          <p style={{color:'aqua', font: 'sanserif'}}>
            Discover your perfect outfit without stepping into a store.
            <b> Haute-U-AR dress try-on app </b> <li>A transformative and convenient shopping experience for users </li>
            <li> Enabling users to visualize how clothes will look on them without the need to physically try them on. </li>
          </p>
                   
            <p style={{color:'aqua', justifyContent: 'center'}}>
              Welcome to a revolutionary way of shopping that blends the latest in augmented reality (AR) technology 
              with the convenience of online shopping. </p>
              <p style={{color:'aqua', justifyContent: 'center'}}> Our virtual dress try-on app is designed to make your fashion experience seamless,
              fun, and incredibly efficient. Here’s what makes our app a game-changer in the world of fashion
            </p>
            
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={img_src} alt="App Screenshot" style={{ maxWidth: '80%'}} />
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '70px' }}>
          <div style={{ width: '100%', padding: '10px' }}>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={video_src}
                width='90%'
                height='80%'
                playing={true}
                muted={true}
                controls={true}
                loop={true}
              />
              <button>Start Your Virtual Try-On Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
