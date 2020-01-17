import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header/Header.jsx";
import AutoInvestSection from "./components/AutoInvestSection/AutoInvestSection";
import CreateAutoInvest from "./components/CreateAutoInvest/CreateAutoInvest";
import AutoInvestFaq from "./components/Auto-Invest-Faq/AutoInvestFaq";
import PersonalPortfolioCard from "./components/PersonalPortfolioCard/PersonalPortfolioCard";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Description from "./components/Description/Description";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
  const url = window.location.href;

  return (
    <BrowserRouter>
      {/* <Switch>
        <Route exact path="/"></Route>
        <Route path="/dashboard" component={null}></Route>
        <Route path="/creditProjects" component={null}></Route>
        <Route path="/loanAgreements" component={null}></Route>
        <Route path="/myBids" component={null}></Route>
        <Route path="/invoices" component={null}></Route>
        <Route path="/notifications" component={null}></Route>
        <Route path="/support" component={null}></Route>
      </Switch> */}

      <Container className=".container-fluid main-container" fluid={true}>
        <div className="navbar">
          <SideNavBar url={url} />
        </div>
        <div className="aside">
          {" "}
          <Header />
          <AutoInvestSection />
          <div className="column">
            <Description />
            <Row style={{ marginTop: "2em", width:'100%' }}>
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
    </BrowserRouter>
  );
}

export default App;
