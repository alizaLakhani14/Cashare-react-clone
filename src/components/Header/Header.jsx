import React from "react";
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
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-button">
        <Button className="btn-secondary">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
      <div className="header-section-2">
        <UncontrolledDropdown>
          <DropdownToggle caret>c2091</DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem>User Data</DropdownItem>
            <DropdownItem>Documents</DropdownItem>
            <DropdownItem divider></DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Button color="link" className="notification-button">
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <Badge color="danger" className="notification-badge">
            0
          </Badge>
        </Button>
        <Button color="link" className="logout-btn">
          {" "}
          <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
