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
import { NavLink as Abc } from "react-router-dom";

const SideNavBar = ({ sideBarOpen }) => {
  const url = window.location.href;
  console.log(sideBarOpen);
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

        <NavItem className="nav-bar-item" active={url === "/"}>
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

        <NavItem className="nav-bar-item" active={url === "/loanAgreements"}>
          <NavBarDropdown
            icon={faNewspaper}
            name="Loan agreements"
            sideBarOpen={sideBarOpen}
          >
            <li className="nav-bar-li">Contracts in preparation</li>
            <li className="nav-bar-li">All contracts</li>
          </NavBarDropdown>
        </NavItem>

        <NavItem className="nav-bar-item" active={url === "/myBids"}>
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

        <NavItem className="nav-bar-item" active={url === "/invoices"}>
          <NavBarDropdown
            icon={faFile}
            name="Invoices"
            sideBarOpen={sideBarOpen}
          >
            <li className="nav-bar-li">Unpaid invoices</li>
            <li className="nav-bar-li">Paid invoices</li>
          </NavBarDropdown>
        </NavItem>

        <NavItem className="nav-bar-item" active={url === "/notifications"}>
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

        <NavItem className="nav-bar-item" active={url === "/support"}>
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
      </Nav>
    </div>
  );
};

export default SideNavBar;
