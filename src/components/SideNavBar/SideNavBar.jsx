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

const SideNavBar = () => {
  const url = window.location.href;

  console.log(url);
  return (
    <div className="nav-bar">
      <img src={Logo} alt="logo" />
      <img src={Small} alt="small-logo" className="small-logo" />
      <Nav vertical>
        <NavItem className="nav-bar-item">
          <span className="side-nav-bar-icon">
            <FontAwesomeIcon icon={faThLarge} />
          </span>
          <span className="side-bar-nav-item"> Dashboard</span>
        </NavItem>

        <Abc className="ae" to="/creditProjects">
          <NavItem className="nav-bar-item">
            <NavBarDropdown icon={faList} name="Credit Projects">
              <li className="nav-bar-li">Primary market</li>
              <li className="nav-bar-li">Secondary market</li>
            </NavBarDropdown>
          </NavItem>
        </Abc>

        <Abc to="/">
          <NavItem className="nav-bar-item" active={url === "/"}>
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span className="side-bar-nav-item">Auto-Invest</span>
          </NavItem>
        </Abc>

        <Abc to="/loanAgreements">
          <NavItem className="nav-bar-item" active={url === "/loanAgreements"}>
            <NavBarDropdown icon={faNewspaper} name="Loan agreements">
              <li className="nav-bar-li">Contracts in preparation</li>
              <li className="nav-bar-li">All contracts</li>
            </NavBarDropdown>
          </NavItem>
        </Abc>

        <Abc to="/myBids">
          <NavItem className="nav-bar-item" active={url === "/myBids"}>
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </span>

            <span className="side-bar-nav-item">My bids</span>
          </NavItem>
        </Abc>

        <Abc to="/invoices">
          <NavItem className="nav-bar-item" active={url === "/invoices"}>
            <NavBarDropdown icon={faFile} name="Invoices">
              <li className="nav-bar-li">Unpaid invoices</li>
              <li className="nav-bar-li">Paid invoices</li>
            </NavBarDropdown>
          </NavItem>
        </Abc>

        <Abc to="/notifications">
          <NavItem className="nav-bar-item" active={url === "/notifications"}>
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span className="side-bar-nav-item">Notifications</span>
          </NavItem>
        </Abc>

        <Abc to="/support">
          <NavItem className="nav-bar-item" active={url === "/support"}>
            <span className="side-nav-bar-icon">
              <FontAwesomeIcon icon={faLifeRing} />
            </span>
            <span className="side-bar-nav-item">Support</span>
          </NavItem>
        </Abc>
      </Nav>
    </div>
  );
};

export default SideNavBar;
