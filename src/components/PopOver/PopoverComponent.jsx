import React from "react";
import "./PopoverComponent.css";
import { UncontrolledPopover, PopoverBody } from "reactstrap";

const PopoverComponent = props => {
  return (
    <UncontrolledPopover
      trigger="hover"
      target={props.target}
      placement="bottom"
    >
      <PopoverBody className="popover-body">{props.description}</PopoverBody>
    </UncontrolledPopover>
  );
};

export default PopoverComponent;
