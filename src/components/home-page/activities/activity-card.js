import React from 'react'
import { Card } from 'react-bootstrap';
import "./activity-card.scss"
;

const ActivityCard = ({title, image}) => {
  return (
    <div>
      
      <Card className="activity-card">
      <div className="image">
        <Card.Img
          variant="top"
          src={`/images/activities/${image}`}
          alt={title}
          className="img-fluid"
          
        />
      </div>
      <Card.Title>
      
        <h6>{title}</h6>
      </Card.Title>
    </Card>
      
    </div>
  )
}

export default ActivityCard
