import React from "react";
import "./AutoInvestComponent.css";
import { Container, Row, Col } from "reactstrap";
import Header from "./../Header/Header";
import AutoInvestSection from "./../AutoInvestSection/AutoInvestSection";
import CreateAutoInvest from "./../CreateAutoInvest/CreateAutoInvest";
import AutoInvestFaq from "./../Auto-Invest-Faq/AutoInvestFaq";
import PersonalPortfolioCard from "./../PersonalPortfolioCard/PersonalPortfolioCard";
import SideNavBar from "./../SideNavBar/SideNavBar";
import Description from "./../Description/Description";

const AutoInvestComponent = props => {
  const [sideBarOpen, setSideBarOpen] = React.useState(null);

  const toggle = e => {
    setSideBarOpen(e);
  };

  return (
    <Container className=".container-fluid main-container" fluid={true}>
      <div className={sideBarOpen === true ? "navbar" : "navbarCollapse"}>
        <SideNavBar sideBarOpen={sideBarOpen} />
      </div>
      <div className={sideBarOpen === true ? "aside" : "aside-collapse"}>
        {" "}
        <Header handleToggle={toggle} />
        <AutoInvestSection />
        <div className="column">
          <Row style={{ width: "100%" }}>
            <Col md="12" sm="12" xs="12">
              <Description />
            </Col>
          </Row>

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
};

export default AutoInvestComponent;
