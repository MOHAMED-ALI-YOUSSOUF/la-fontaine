import React from "react";
import TeamProfileCard from "./team-profile-card";
import { Col, Container, Row } from "react-bootstrap";
import teamData from "../../../helpers/data/team-profil.json";
import "./team-profile.scss"

const TeamProfile = () => {
  return (
    <Container className="team-profile ">

    <Row className="g-2 text-center d-flex justify-content-between align-items-center" >
  
      {teamData.map((team) => (
        <Col  sm={6} md={4} key={team.id}  >
          <TeamProfileCard {...team} />
        </Col>
      ))}
    </Row>
  </Container>
  
  );
};

export default TeamProfile;
