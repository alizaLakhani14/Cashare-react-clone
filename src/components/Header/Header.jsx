import React, { useState } from "react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSignOutAlt,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleToggle }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-button">
        <Button
          className="btn-secondary"
          onClick={() => {
            handleToggle(!isOpen);
            toggle();
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="dropdown-list-item">
            <UncontrolledDropdown>
              <DropdownToggle caret>c2091</DropdownToggle>
              <DropdownMenu right={true}>
                <DropdownItem>User Data</DropdownItem>
                <DropdownItem>Documents</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li>
            <Button color="link" className="notification-button">
              <FontAwesomeIcon icon={faBell} className="bell-icon" />
              <Badge color="danger" className="notification-badge">
                0
              </Badge>
            </Button>
          </li>
          <li className="user-list-item">
            <UncontrolledDropdown>
              <DropdownToggle color="link" className="user-icon-button">
                <FontAwesomeIcon icon={faUserAlt} className="user-icon" />
              </DropdownToggle>
              <DropdownMenu right={true}>
                <DropdownItem>User Data</DropdownItem>
                <DropdownItem>Documents</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li>
            <Button color="link" className="logout-btn">
              {" "}
              <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" />
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
