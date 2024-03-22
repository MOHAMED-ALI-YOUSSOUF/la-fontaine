import React from "react";
import { Card, Container } from "react-bootstrap";
import "./team-profile-card.scss";

const TeamProfileCard = ({ title, image, name }) => {
  return (
    <Container>
      <Card className="team-profile-card">
        <div className="image w-100 h-100">
          <Card.Img
            variant="top"
            src={`/images/teams/${image}`}
            alt={title}
            className="img-fluid"
          />
        </div>
        <Card.Title>
          <h6 className="text-danger">{title}</h6>
          <h2>{name}</h2>
        </Card.Title>
      </Card>
    </Container>
  );
};

export default TeamProfileCard;
