import React from "react";
import { Button } from "react-bootstrap";
import { config } from "../../helpers/config";

const ButtonToFacebook = () => {
  return (
    <div className="d-flex justify-content-center">
     
        <a href={config.contact.socialMedia.facebook}>
          <Button className="btn btn-outline-success text-light">
            For More...
          </Button>
        </a>
     
    </div>
  );
};

export default ButtonToFacebook;
