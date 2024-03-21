import React, { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { config } from "../../helpers/config";
import {
  FiHome,
  FiAperture,
  FiCalendar,
  FiAward,
  FiHeadphones,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./menubar.scss";

const Menubar = () => {
  const [mode, setMode] = useState("white");
  const [text, setText] = useState("primary");
  const [orange, setOrange] = useState("d-none");
  const [commande, setCommande] = useState("d-none");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleScroll = () => {
    const scrollYPosition = window.scrollY;
    if (scrollYPosition > 100) {
      setMode("primary");
      setText("light");
      setOrange("d-block");
      setCommande("d-block")
    } else {
      setMode("white");
      setText("primary");
      setOrange("d-none");
      setCommande("d-none");
    }
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`menubar bg-${mode} } `}
        sticky="top"
        data-bs-theme={mode}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            title={config.project.name}
            className={`text-${text}`}
          >
            <Image
              src={`/images/logo/logoresto.png`}
              className="img-fluid"
              alt="La Fontaine Logo"
              width={120}
              roundedCircle
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
            className="bg-light  "
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            className="text-center "
            show={showOffcanvas}
            onHide={closeOffcanvas}
          >
            <Offcanvas.Header closeButton className="text-center ">
              <Offcanvas.Title
                className=" mx-auto"
                id={`offcanvasNavbarLabel-expand-lg`}
              >
                <Image
                  src={`/images/logo/logoresto.png`}
                  className="img-fluid"
                  alt="La Fontaine Logo"
                  width={120}
                  roundedCircle
                />{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className=" fs-6 ">
              <Nav
                className={`text-${text} justify-content-center flex-grow-1 pe-3 gap-2`}
              >
                <Nav.Link
                  onClick={closeOffcanvas}
                  className={`text-${text}`}
                  as={Link}
                  to="/"
                >
                  <FiHome /> Accueil
                </Nav.Link>
                <Nav.Link
                  className={`text-${text}`}
                  as={Link}
                  to="/about"
                  onClick={closeOffcanvas}
                >
                  <FiAward /> Menu
                </Nav.Link>
                <Nav.Link
                  className={`text-${text}`}
                  as={Link}
                  to="/projects"
                  onClick={closeOffcanvas}
                >
                  <FiAperture /> Reservation
                </Nav.Link>
                <Nav.Link
                  className={`text-${text}`}
                  as={Link}
                  to="/gallery"
                  onClick={closeOffcanvas}
                >
                  <FiCalendar /> Gallerie
                </Nav.Link>
                <Nav.Link
                  className={`text-${text}`}
                  as={Link}
                  to="/contact"
                  onClick={closeOffcanvas}
                >
                  <FiHeadphones /> Contact
                </Nav.Link>
              </Nav>

              <Link
                to="/donate"
                onClick={closeOffcanvas}
               
                className={`text-${text} ${orange} btn btn-outline-secondary`}
              >
                <FiHeadphones /> COMMANDE 
              </Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className={`nav-bottom  ${orange} `}> </div>
      <Container className="text-center mt-3">
        <Link
          to="/donate"
          className={`btn btn-outline-secondary ${orange}`}
        >
          <FiHeadphones /> COMMANDE
        </Link>
      </Container>
    </>
  );
};

export default Menubar;
