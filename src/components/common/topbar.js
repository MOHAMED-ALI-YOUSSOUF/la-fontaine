import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { config } from "../../helpers/config";
import "./topbar.scss";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
        <Col sm={8} className="d-sm-flex text-center gap-3 d-block align-items-center">
            <h6 className="mb-">Faites-vous livrer gratuitement pour l'Aİd al-Fitre</h6>
          </Col>
          <Col sm={4} className="d-sm-flex text-center gap-3 d-block align-items-center justify-content-end">
            <button className="btn btn-danger ">Commande</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topbar;
