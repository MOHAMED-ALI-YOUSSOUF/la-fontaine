import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import galleriesData from "../../helpers/data/gallery.json";
import GalleryCard from "./gallery-card";

const Gallery = () => {
  const [aid, setAid] = useState([]);
  const [juin27, setJuin27] = useState([]);
  const [ramadanIftar, setRamadanIftar] = useState([]);
  const [all, setAll] = useState(galleriesData);

  const filterAid = () => {
    setAid(galleriesData.filter((gallery) => gallery.title === "AID DAY"));
    setJuin27([]);
    setRamadanIftar([]);
    setAll([]);
  };

  const filterJuin27 = () => {
    setJuin27(galleriesData.filter((gallery) => gallery.title === "27-juin"));
    setAid([]);
    setRamadanIftar([]);
    setAll([]);
  };

  const filterRamadanIftar = () => {
    setRamadanIftar(
      galleriesData.filter((gallery) => gallery.title === "Iftar of Ramadan")
    );
    setAid([]);
    setJuin27([]);
    setAll([]);
  };

  const showAll = () => {
    setAll(galleriesData);
    setAid([]);
    setJuin27([]);
    setRamadanIftar([]);
  };

  return (
    <Container>
      <div className="d-flex justify-content-evenly gap-md-5 gap-2 ">
        <Button variant="success  w-75 " onClick={showAll}>
          All
        </Button>
        <Button variant="success text-light w-75" onClick={filterJuin27}>
          27-Juin
        </Button>
        <Button variant="success text-light w-75" onClick={filterAid}>
          Aid
        </Button>
        <Button variant="success text-light w-75" onClick={filterRamadanIftar}>
          Ramadan Iftar
        </Button>
      </div>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mt-2">
        {aid.length > 0
          ? aid.map((gallery) => (
              <Col key={gallery.id}>
                <GalleryCard {...gallery} />
              </Col>
            ))
          : null}
        {juin27.length > 0
          ? juin27.map((gallery) => (
              <Col key={gallery.id}>
                <GalleryCard {...gallery} />
              </Col>
            ))
          : null}
        {ramadanIftar.length > 0
          ? ramadanIftar.map((gallery) => (
              <Col key={gallery.id}>
                <GalleryCard {...gallery} />
              </Col>
            ))
          : null}
        {all.length > 0
          ? all.map((gallery) => (
              <Col key={gallery.id}>
                <GalleryCard {...gallery} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default Gallery;
