import React from "react";
import "./slider.scss";
import slides from "../../../helpers/data/slider.json";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import main_menus from "../../../helpers/data/main_menu.json";

const Slider = () => {
  return (
    <Container>
      <Carousel fade className="slider">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Image
              src={`/images/slider/${slide.image}`}
              className="img-fluid"
            />
            <Carousel.Caption>
              <h1>Une specialite ethiopien et bien plus </h1>
              <div className="button-group d-flex gap-3 mt-5">
                <button className="btn btn-danger">Commande</button>
                <button className="btn btn-primary">Reservez</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container className="main-menu">
        <Row className=" justify-content-between ">
          {main_menus.map((main_menu, index) => (
            <Col key={index} className="rounded  text-center  ">
              <button className="btn btn-ligh">
                <Image
                  src={`/images/main-menu/${main_menu.image}`}
                  className="img-fluid"
                  roundedCircle
                  width={100}
                />
                <h4 className="text-center">{main_menu.title}</h4>
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Slider;
