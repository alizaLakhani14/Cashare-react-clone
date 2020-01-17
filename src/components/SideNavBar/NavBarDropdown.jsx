import React, { useState } from "react";
import "./NavBarDropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "reactstrap";
import {
  faChevronLeft,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const NavBarDropdown = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggle} className="nav-bar-dropdown-conatainer">
        <div className="icon-name">
          <span class="nav-bar-dropdown-icon">
            <FontAwesomeIcon icon={props.icon} />
          </span>
          <span className="nav-dropdown-item">{props.name}</span>
        </div>
        <div className='dropdown-nav-bar'>
          {isOpen === true ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="nav-bar-collapse-icon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="nav-bar-collapse-icon"
            />
          )}
        </div>
      </div>
      <Collapse isOpen={isOpen} className="nav-bar-collapse">
        <ul className="nav-bar-dropdown-list">{props.children}</ul>
      </Collapse>
    </>
  );
};

export default NavBarDropdown;
