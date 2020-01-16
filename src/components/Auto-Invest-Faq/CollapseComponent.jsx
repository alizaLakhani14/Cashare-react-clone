import React, { useState } from "react";
import "./CollapseComponent.css";
import { Card, CardText, Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapseComponent = ({ content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Card className="collapse-card">
      <CardText className="collapse-card-text" onClick={toggle}>
        {content.title}
        {isOpen === true ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="collapse-component-icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="collapse-component-icon"
          />
        )}
      </CardText>

      <Collapse isOpen={isOpen} className="collapse-component">
        <div className="collapse-component-div">{content.description}</div>
      </Collapse>
    </Card>
  );
};

export default CollapseComponent;
