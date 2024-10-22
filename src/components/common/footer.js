import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./footer.scss";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <Container className="px-4">
        <Row className="g-5 px-5">
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
                <Nav.Link href="#">
                 
                  <CiFacebook  className="icons"/> 
                </Nav.Link>
                <Nav.Link href="#">
                  
                  <BsWhatsapp className="icon"/> 
                </Nav.Link>
                <Nav.Link href="#">
                 
                  <BsInstagram className="icon"/> 
                </Nav.Link>
              </Nav>
            </Col>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <h3>Quick Links</h3>

            <Nav className="flex-column">
              <Nav.Link as={Link} to="#">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Reservation
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Galleries
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <button className="btn btn-danger">Commande</button>
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={4} lg={4} className="text-center">
            <h3>Contact</h3>

            <Nav className="flex-column">
              <Nav.Link href="#">
                +253 77 00 00 00
              </Nav.Link>

              <Nav.Link href="#">
                info@lafontaine.com
              </Nav.Link>
              <Nav.Link href="#" >
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
