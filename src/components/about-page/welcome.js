import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <Container>
        <Row className="g-5">
          <Col md={6}>
            <Image src="/images/about/welcome.png" className="img-fluid" />
          </Col>
          <Col md={6} >
            <h2 className="mb-3">Welcome to the Afar People Association</h2>
            <p className="mb-3">
              We are delighted to welcome you to the website of the Association
              for the Afar People in Turkey. Founded in 2021, Our association is dedicated to
              building a bridge between Turkey and the Afar people, with the aim
              of fostering economic, cultural, and social development within
              this community.
            </p>
            <h2> Our Mission</h2>
            <p> Our mission is to promote economic opportunities, strengthen cultural and historical ties, and enhance the quality of life of the Afar people in Turkey. We believe in solidarity, cooperation, and progress, and we work on a non-profit basis to achieve these goals.</p>
            <h2>Our Goals</h2>
            <p>Our association aims to support and develop initiatives aimed at improving the lives of our Afar people in Turkey. We encourage collaboration with individuals and organizations working in this field. Our goal is to promote the well-being and progress of our community without seeking profits or engaging in political activities.</p>

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
