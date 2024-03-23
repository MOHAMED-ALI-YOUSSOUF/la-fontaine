import React, { useState } from "react";
import { Container, Modal, Button, Card } from "react-bootstrap";
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
    { src: "/images/galeries/2.jpg", alt: "Image 1" },
    { src: "/images/galeries/4.jpg", alt: "Image 1" },
    { src: "/images/galeries/1.jpg", alt: "Image 2" },
    { src: "/images/galeries/3.jpg", alt: "Image 3" },
    { src: "/images/galeries/2.jpg", alt: "Image 4" },
    { src: "/images/galeries/1.jpg", alt: "Image 1" },
    // Add more images as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="bg-light py-5">
      <Container className="gallery text-center">
        <h2>Gallery</h2>
        <div className="gallery-container">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item shadow"
              onClick={() => handleImageClick(index)}
            >
              <Card style={{  height: '300px' }}>
                <Card.Img
                  variant="top"
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
            </div>
          ))}
        </div>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImageIndex !== null && (
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="enlarged-image"
              style={{ maxWidth: '100%', maxHeight: '50vh', margin: '0 auto', display: 'block' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviousImage} disabled={selectedImageIndex === 0}>
            Previous
          </Button>
          <Button variant="secondary" onClick={handleNextImage} disabled={selectedImageIndex === galleryImages.length - 1}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Galeries;
