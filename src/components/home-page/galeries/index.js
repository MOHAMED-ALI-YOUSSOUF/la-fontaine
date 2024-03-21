import React from 'react';
import { Container } from 'react-bootstrap';
import "./galeries.scss"
const Galeries = () => {
  // Define your gallery content here
  const galleryImages = [
    { src: '/images/galeries/1.jpg', alt: 'Image 1' },
    { src: '/images/galeries/2.jpg', alt: 'Image 2' },
    { src: '/images/galeries/3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <Container className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Galeries;
