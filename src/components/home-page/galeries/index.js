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
    <Container className="gallery text-center">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* <Card className="gallery-containere">
        {galleryImages.map((image, index) => (
          <React.Fragment key={index}>
            <div key={index} className="image w-100 h-100">
              <Card.Img
                variant="top"
                src={image.src}
                alt={image.alt}
                className="gallery-image img-fluid"
              />
            </div>
            <Card.Title>
              <h6 className="text-danger">maki</h6>
              <h2>wizzi</h2>
            </Card.Title>
          </React.Fragment>
        ))}
      </Card> */}
    </Container>
  );
};

export default Galeries;
