import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header/Header.jsx";
import AutoInvestSection from "./components/AutoInvestSection/AutoInvestSection";
import CreateAutoInvest from "./components/CreateAutoInvest/CreateAutoInvest";
import AutoInvestFaq from "./components/Auto-Invest-Faq/AutoInvestFaq";
import PersonalPortfolioCard from "./components/PersonalPortfolioCard/PersonalPortfolioCard";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Description from "./components/Description/Description";

function App(props) {
  const url = window.location.href;

  const [sideBarOpen, setSideBarOpen] = React.useState(null);

  const toggle = e => {
    setSideBarOpen(e);
  };

  return (
    <Container className=".container-fluid main-container" fluid={true}>
      <div className={sideBarOpen === true ? "navbar" : "navbarCollapse"}>
        <SideNavBar url={url} sideBarOpen={sideBarOpen} />
      </div>
      <div className={sideBarOpen === true ? "aside" : "aside-collapse"}>
        {" "}
        <Header handleToggle={toggle} />
        <AutoInvestSection />
        <div className="column">
          <Description />
          <Row style={{ marginTop: "2em", width: "100%" }}>
            <Col md="6" sm="12" xs="12">
              <CreateAutoInvest />
              <PersonalPortfolioCard />
            </Col>
            <Col md="6" sm="12" x="12">
              <AutoInvestFaq />
            </Col>
          </Row>
        </div>
        <footer>Copyright 2008-2020 Cashare AG</footer>
      </div>
    </Container>
  );
}

export default App;
