import React from "react";
import "./CreateAutoInvest.css";
import { Card, CardText, Button, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const CreateAutoInvest = () => {
  return (
    <div>
      <Card className="create-auto-invest-card">
        <CardTitle className="create-auto-invest-title">
          Create Auto Invest Portfolio
        </CardTitle>
        <CardText className="create-auto-invest-text">
          With Auto-Invest you diversify your investment portfolio and make
          investments even more convenient.
        </CardText>
        <Button className="create-auto-invest-btn">
          <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
          Create a new Auto-Invest portfolio{" "}
        </Button>
      </Card>
    </div>
  );
};

export default CreateAutoInvest;
