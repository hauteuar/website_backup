import React from 'react';
import './Features.css'; // Import your CSS file

const Features = () => {
    const img_src1 = process.env.PUBLIC_URL + '/fet1.gif'
    const img_src2 = process.env.PUBLIC_URL + '/fet2.gif'
    const img_src3 = process.env.PUBLIC_URL + '/fet3.gif'
    const img_src4 = process.env.PUBLIC_URL + '/fet4.gif'
  return (
    <div id="features" className="features-container" style={{marginTop:"100px"}}>
      <h1 style={{textAlign: "center"}}>  Features </h1>
      <div className="feature-quadrants">
        <div className="feature">
          <img
            src={img_src1}
            alt="Virtual Try-On Icon"
            className="feature-icon"
          />
          <h2>Virtual Try-On</h2>
          <p>
            Experience the thrill of trying on clothes without ever leaving your home.
            Haute-u AR's cutting-edge technology seamlessly overlays garments onto your
            body, allowing you to visualize styles, fits, and colors with remarkable
            accuracy.
          </p>
          <i>Try On Now</i>
        </div>
        <div className="feature">
          <img
            src={img_src2}
            alt="Style Exploration Icon"
            className="feature-icon"
          />
          <h2>Diverse Style Exploration</h2>
          <p>
            Unleash your inner fashionista with Haute-u AR's extensive collection of
            clothing styles. Experiment with various trends, patterns, and designs to
            discover your perfect match. Find outfits that complement your unique
            personality and express your individual style.
          </p>
          <i>Explore Styles</i>
        </div>
        <div className="feature">
          <img
            src={img_src3}
            alt="Color Customization Icon"
            className="feature-icon"
          />
          <h2>Color Customization</h2>
          <p>
            Haute-u AR empowers you to explore a spectrum of color options for each
            garment. Simply tap on your desired color, and witness the virtual outfit
            transform instantly. Find the perfect shade that flatters your complexion
            and complements your overall look.
          </p>
          <i>Customize Colors</i>
        </div>
        <div className="feature">
          <img
            src={img_src4}
            alt="Confident Shopping Icon"
            className="feature-icon"
          />
          <h2>Confident Shopping</h2>
          <p>
            Say goodbye to buyer's remorse! Haute-u AR eliminates the uncertainty
            associated with online shopping. By virtually trying on clothes beforehand,
            you can make informed decisions with greater confidence. Purchase garments
            knowing they'll look and fit you perfectly.
          </p>
          <i>Shop with Confidence</i>
        </div>
      </div>
    </div>
  );
};

export default Features;
