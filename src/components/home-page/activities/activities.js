import React from "react";
import ActivityCard from "./activity-card";
import { Col, Container, Row } from "react-bootstrap";
import "./activities.scss";

import activities from "../../../helpers/data/activities.json";

const Activities = () => {
  return (
    <div className="activities">
      <h2 className="text-center text-primary py-5 fs-2">Activities</h2>
      <Container>
        <Row>
          {activities.map((activity) => (
            <Col lg={4} md={6}  key={activity.id}>
              <ActivityCard {...activity} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Activities;
