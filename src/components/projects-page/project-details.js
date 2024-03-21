import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Projects from "./projects";

const ProjectDetails = () => {
  const { id } = useParams(); // Use 'id' instead of 'projectTitle'
  const project = Projects.find((p) => p.id === parseInt(id));

  if (!project) {
    // Handle the case where the project is not found
    return <div>Project not found</div>;
  }

  const { title, image, content } = project;

  return (
    <Card>
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

export default ProjectDetails;
