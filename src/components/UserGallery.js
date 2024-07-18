// DressGallery.js

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for styling


const dressImages = [
  {
    original: process.env.PUBLIC_URL + '/texture1.png',
    thumbnail: process.env.PUBLIC_URL + '/texture1.png',
  },
  {
    original: process.env.PUBLIC_URL + '/texture2.png',
    thumbnail: process.env.PUBLIC_URL + '/texture2.png',
  },
  {
    original: process.env.PUBLIC_URL + '/texture3.png',
    thumbnail: process.env.PUBLIC_URL + '/texture3.png',
  },
  {
    original: process.env.PUBLIC_URL + '/Dress1.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress1.png',
  },
  {
    original: process.env.PUBLIC_URL + '/Dress2.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress2.png',
  },
 
  {
    original: process.env.PUBLIC_URL + '/Dress4.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress4.png',
  },
  {
    original: process.env.PUBLIC_URL + '/features6.png',
    thumbnail: process.env.PUBLIC_URL + '/features6.png',
  },
  {
    original: process.env.PUBLIC_URL + '/features7.png',
    thumbnail: process.env.PUBLIC_URL + '/features7.png',
  },
  {
    original: process.env.PUBLIC_URL + '/features31.png',
    thumbnail: process.env.PUBLIC_URL + '/features31.png',
  }, 
  {
    original: process.env.PUBLIC_URL + '/features51.png',
    thumbnail: process.env.PUBLIC_URL + '/features51.png',
  },
  // Add more dress image paths here
];

const UserGallery = () => {
  return (
    <div className="gallery-container" style={{ height: '20%', alignItems: "center" }}>
      <ImageGallery
        items={dressImages}
        showThumbnails={true} // Hide thumbnails
        showFullscreenButton={false} // Hide fullscreen button
        showPlayButton={false} // Hide play button
        autoPlay={true} // Enable autoPlay
        slideDuration={500} // Adjust slide transition duration
        slideInterval={3000} // Adjust slide interval (in milliseconds)
      />
    </div>
  );
};

export default UserGallery;
