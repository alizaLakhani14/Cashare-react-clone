import React from "react";
import "./SideNavBar.css";
import Logo from "./../../images/logo.PNG";
import Small from "./../../images/small.PNG";
import { Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faList,
  faNewspaper,
  faChartLine,
  faFile,
  faBell,
  faLifeRing,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
import NavBarDropdown from "./NavBarDropdown";
import { NavLink as NavBarLink } from "react-router-dom";

const SideNavBar = ({ sideBarOpen }) => {
  let url = window.location.pathname;
  return (
    <div className="nav-bar">
      <img
        src={Logo}
        alt="logo"
        className={sideBarOpen === true ? "logo-visible" : "logo-hidden"}
      />

      <img
        src={Small}
        alt="small-logo"
        className={sideBarOpen === true ? "small-logo" : "small-logo-visible"}
      />

      <Nav vertical>
        <NavBarLink to="/dashboard" active={url === "/dasboard"}>
          <NavItem className="nav-bar-item">
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faThLarge} />
            </span>
            <span
              className={
                sideBarOpen === true
                  ? "side-bar-nav-item"
                  : "side-bar-nav-item-collapse"
              }
            >
              {" "}
              Dashboard
            </span>
          </NavItem>
        </NavBarLink>

        <NavItem className="nav-bar-item">
          <NavBarDropdown
            icon={faList}
            name="Credit Projects"
            sideBarOpen={sideBarOpen}
          >
            <li className="nav-bar-li">Primary market</li>
            <li className="nav-bar-li">Secondary market</li>
          </NavBarDropdown>
        </NavItem>
        <NavBarLink to='/'>
          <NavItem className="nav-bar-item" active>
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span
              className={
                sideBarOpen === true
                  ? "side-bar-nav-item"
                  : "side-bar-nav-item-collapse"
              }
            >
              Auto-Invest
            </span>
          </NavItem>
        </NavBarLink>

        <NavItem className="nav-bar-item">
          <NavBarDropdown
            icon={faNewspaper}
            name="Loan agreements"
            sideBarOpen={sideBarOpen}
          >
            <li className="nav-bar-li">Contracts in preparation</li>
            <li className="nav-bar-li">All contracts</li>
          </NavBarDropdown>
        </NavItem>

        <NavBarLink to="/myBids">
          <NavItem className="nav-bar-item">
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </span>

            <span
              className={
                sideBarOpen === true
                  ? "side-bar-nav-item"
                  : "side-bar-nav-item-collapse"
              }
            >
              My bids
            </span>
          </NavItem>
        </NavBarLink>

        <NavItem className="nav-bar-item">
          <NavBarDropdown
            icon={faFile}
            name="Invoices"
            sideBarOpen={sideBarOpen}
          >
            <li className="nav-bar-li">Unpaid invoices</li>
            <li className="nav-bar-li">Paid invoices</li>
          </NavBarDropdown>
        </NavItem>

        <NavBarLink to="/notifications">
          <NavItem className="nav-bar-item">
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span
              className={
                sideBarOpen === true
                  ? "side-bar-nav-item"
                  : "side-bar-nav-item-collapse"
              }
            >
              Notifications
            </span>
          </NavItem>
        </NavBarLink>
        <NavBarLink to="/support">
          <NavItem className="nav-bar-item">
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faLifeRing} />
            </span>
            <span
              className={
                sideBarOpen === true
                  ? "side-bar-nav-item"
                  : "side-bar-nav-item-collapse"
              }
            >
              Support
            </span>
          </NavItem>
        </NavBarLink>
      </Nav>
    </div>
  );
};

export default SideNavBar;
