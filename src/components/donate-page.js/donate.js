import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./donate.scss"
const Donate = () => {
  const [iban, setIban] = useState("TR580006400000110891298500");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setIban("TR580006400000110891298500")
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Card className="text-center">
      <Card.Header>
        <p className="py-5">
          If you would like to support the development of our projects, please
          consider donating.
        </p>
      </Card.Header>
      <Card.Body>
        <Row className={`mx-md-5 mx-2 text-center ${copied ? 'bounce' : ''}`}>
          <Col
            md={6}
            lg={6}
            className={`shadow  mx-auto m-5 p-5  ${copied ? "bg-success " : ""}`}
          >
            <div>
              <h2>İş Bankası</h2>
              <h3>Afar Halk Dernegi</h3>
              <p className={copied ? "bg-danger" : ""}>{iban}</p>
              <CopyToClipboard text={iban} onCopy={handleCopy}>
                <Button variant="danger">
                  {copied ? "Copied!" : "Copy IBAN"}
                </Button>
              </CopyToClipboard>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Donate;
