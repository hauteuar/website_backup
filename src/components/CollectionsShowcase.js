import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for styling

const dressImages = [
  {
    original: process.env.PUBLIC_URL + '/texture1.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress1.png',
  },
  {
    original: process.env.PUBLIC_URL + '/texture2.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress2.png',
  },
  {
    original: process.env.PUBLIC_URL + '/texture3.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress3.png',
  },
  {
    original: process.env.PUBLIC_URL + '/texture4.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress4.png',
  },
  {
    original: process.env.PUBLIC_URL + '/Dress5.png',
    thumbnail: process.env.PUBLIC_URL + '/Dress5.png',
  },
  {
    original: process.env.PUBLIC_URL + '/img2.png',
    thumbnail: process.env.PUBLIC_URL + '/img2.png',
  },// Add more dress image paths here
];

const CollectionsShowcase = () => {
  return (
    <div className="gallery-container">
      <ImageGallery
        items={dressImages}
        showThumbnails={false} // Hide thumbnails
        showFullscreenButton={false} // Hide fullscreen button
        showPlayButton={false} // Hide play button
        slideDuration={500} // Adjust slide transition duration
        slideInterval={3000} // Adjust slide interval (in milliseconds)
      />
    </div>
  );
};

export default CollectionsShowcase;
