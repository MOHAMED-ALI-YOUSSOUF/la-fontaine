import React from "react";
import { Card, Container } from "react-bootstrap";
import "./galeries.scss";
const Galeries = () => {
  // Define your gallery content here
  const galleryImages = [
    { src: "/images/galeries/1.jpg", alt: "Image 1" },
    { src: "/images/galeries/2.jpg", alt: "Image 2" },
    { src: "/images/galeries/3.jpg", alt: "Image 3" },
    { src: "/images/galeries/4.jpg", alt: "Image 4" },
    { src: "/images/galeries/1.jpg", alt: "Image 1" },

    { src: "/images/galeries/3.jpg", alt: "Image 3" },

    // Add more images as needed
  ];

  return (
    <div className="bg-light py-5">
    <Container className="gallery text-center ">
      <h2>Gallery</h2>
      <div className="gallery-container ">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item shadow ">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default Galeries;
