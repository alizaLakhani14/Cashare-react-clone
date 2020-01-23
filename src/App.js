import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AutoInvestComponent from "./components/AutoInvestComponent/AutoInvestComponent";
import Dashboard from "./components/Dashboard/Dashboard";
import CreditProjects from "./components/CreditProjects/CreditProjects";
import LoanAgreements from "./components/Loan Agreements/LoanAgreements";
import MyBids from "./components/My bids/MyBids";
import Invoices from "./components/Invoices/Invoices";
import Notifications from "./components/Notifications/Notifications";
import Support from "./components/Support/Support";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AutoInvestComponent} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/creditProjects" component={CreditProjects} />
          <Route path="/loanAgreements" component={LoanAgreements} />
          <Route path="/myBids" component={MyBids} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/support" component={Support} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
