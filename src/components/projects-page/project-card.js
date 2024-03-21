import React from "react";
import { Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, content, id }) => {
  // const projectDetailsPath = `/projects/${id}`; // Adjust the path as needed
  return (
    <Card >
      <Row>
        <Col lg={6}>
          <Card.Img
            src={`/images/projects/${image}`}
            alt={title}
            className="img-fluid"
          />
        </Col>
        <Col lg={6}>
          <Card.Body>
            <h2 className="cardTitle">{title}</h2>
            <p className="text-justify">{content}</p>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;
