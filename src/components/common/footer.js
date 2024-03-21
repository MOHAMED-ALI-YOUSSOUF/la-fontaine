import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./footer.scss";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col lg={3} className=" text-center  ">
            <Link to="/">
              <Image
                src="/images/logo/logo.jpeg"
                className="img-fluid decoration-none mx-auto d-flex justify-content-center"
                alt={config.project.name}
                width={80}
                roundedCircle
              />
            </Link>
            <p className="mt-3  text-light">{config.project.description}</p>
          </Col>
          <Col md={4} lg={3} className="text-center">
            <h3>Quick Links</h3>

            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} lg={3} className="text-center">
            <h3>Social Links</h3>

            <Nav className="flex-column">
              <Nav.Link href={config.contact.socialMedia.facebook}>
                <CiFacebook /> Facebook
              </Nav.Link>
              <Nav.Link href={config.contact.socialMedia.whatsapp}>
                <BsWhatsapp /> Whatsapp
              </Nav.Link>
              <Nav.Link href={config.contact.socialMedia.instagram}>
                <BsInstagram /> Instagram
              </Nav.Link>
              <Nav.Link href={config.contact.socialMedia.twitter}>
                <FaXTwitter /> Twitter
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} lg={3} className="text-center">
            <h3>Contact</h3>

            <Nav className="flex-column">
              <Nav.Link href={`tel:${config.contact.phone}`}>
                {config.contact.phone}
              </Nav.Link>

              <Nav.Link href={`mailto:${config.contact.email}`}>
                {config.contact.email}
              </Nav.Link>
              <Nav.Link href={config.contact.mapURL} target="_blank">
                {config.contact.address}
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="text-center mt-5 ">
          <p>© 2023 Afar People Association | All Rights Reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
