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
          <Col lg={4} className=" text-center  ">
            <div>
              <Link to="/">
                <Image
                  src="/images/logo/logoresto.png"
                  className="img-fluid decoration-none mx-auto d-flex justify-content-center"
                  alt={"la fontaine"}
                  width={250}
                  roundedCircle
                />
              </Link>
              <p className="mt-3  text-light">
               " Savourer l'Éthiopie, bouchée après bouchée! "
              </p>
            </div>
            <Col  className="social-media">
              <Nav className="">
                <Nav.Link href="https://www.facebook.com">
                  <p>Facebook</p>
                  <CiFacebook /> 
                </Nav.Link>
                <Nav.Link href="https://www.whatsapp.com/">
                  <p>Whatsapp</p>
                  <BsWhatsapp /> 
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/">
                  <p>Instagram</p>
                  <BsInstagram /> 
                </Nav.Link>
              </Nav>
            </Col>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <h3>Quick Links</h3>

            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Reservation
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Galleries
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <button className="btn btn-danger">Commande</button>
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} lg={4} className="text-center">
            <h3>Contact</h3>

            <Nav className="flex-column">
              <Nav.Link href={`tel:+253 77 00 00 00`}>
                +253 77 00 00 00
              </Nav.Link>

              <Nav.Link href={`mailto:info@lafontaine.com`}>
                info@lafontaine.com
              </Nav.Link>
              <Nav.Link href={config.contact.mapURL} target="_blank">
                place rainbow, Djibouti
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="text-center mt-5 ">
          <p>© 2024 La Fontaine | All Rights Reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
