import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import histories from "../../../helpers/data/history.json";
const History = () => {
  return (
    <Container>
        <h1 className="text-center mb-5">Notre Histoire</h1>
      <Card rounded className="p-5 bg-light shadow">
        <Row>
          {histories.map((history, index) => (
            <React.Fragment key={index}>
              <Col lg={6}>
                <Card.Img
                  src={`/images/history/${history.image}`}
                  alt={history.title}
                  className="img-fluid"
                />
              </Col>
              <Col lg={6}>
                <Card.Body>
                  <p className="text-justify">{history.content}</p>
                </Card.Body>
                <div className="d-flex justify-content-center"> {/* Added d-flex and justify-content-center */}
                  <button className="btn btn-danger">Pour plus d'info</button>
                </div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Card>
    </Container>
  );
};

export default History;
