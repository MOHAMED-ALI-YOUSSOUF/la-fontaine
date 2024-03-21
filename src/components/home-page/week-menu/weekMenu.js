import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import weekMenus from "../../../helpers/data/week-menu.json";
import { CiStar } from "react-icons/ci";
import "./weekMenu.scss"; // Importer le fichier CSS pour les styles personnalisés

const WeekMenu = () => {
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<CiStar key={i} className="star-icon" />); // Ajouter la classe CSS pour les étoiles
    }
    return stars;
  };

  return (
    <Container>
      <h1 className="text-center">Specialites de la semaine</h1>
      {weekMenus.map((weekMenu) => (
        <Card sm={4}key={weekMenu.id}>
          <Card.Img variant="top" src={`/images/weekMenus/${weekMenu.image}`} />
          <Card.Body>
            <Card.Title>{weekMenu.title}</Card.Title>
            <Card.Text>
              {renderStars(weekMenu.rate)}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary">20min</Button>
              <Button variant="primary">Commander</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default WeekMenu;
