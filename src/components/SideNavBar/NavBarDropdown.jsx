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
          <span
            className={
              props.sideBarOpen === true
                ? "nav-dropdown-icon"
                : "nav-dropdown-icon-collapse"
            }
          >
            <FontAwesomeIcon icon={props.icon} />
          </span>
          <span
            className={
              props.sideBarOpen === true
                ? "nav-dropdown-item"
                : "nav-dropdown-item-collapse"
            }
          >
            {props.name}
          </span>
        </div>
        {props.sideBarOpen === true && (
          <div className="dropdown-nav-bar">
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
        )}
      </div>
      <Collapse
        isOpen={isOpen}
        className={
          props.sideBarOpen === true
            ? "nav-bar-collapse"
            : "nav-bar-collapse-hidden"
        }
      >
        <ul className="nav-bar-dropdown-list">{props.children}</ul>
      </Collapse>
    </>
  );
};

export default NavBarDropdown;
