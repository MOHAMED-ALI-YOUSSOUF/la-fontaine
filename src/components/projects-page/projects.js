import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import projects from "../../helpers/data/projects.json";

import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <Container>
      <Row>
        {projects.map((item) => (
          <Col className="mb-5" sm={12} key={item.id}>
            <ProjectCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
