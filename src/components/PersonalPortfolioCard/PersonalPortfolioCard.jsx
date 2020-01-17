import React from "react";
import { Card, CardTitle, CardText, Table } from "reactstrap";
import "./PersonalPortfolioCard.css";
import Switch from "./Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PortfolioCollapseComponent from "./PortfolioCollapseComponent";

const PersonalPortfolioCard = () => {
  const portfolios = [
    {
      name: "testing 106",
      size: "3'000.00 / 3'000.00",
      range: "0.0% - 15.0%",
      status: false,
      LoanType: "Private, SME",
      Collateral: "None",
      Rating: "A-C",
      LoanTerm: "1-60 months",
      InvestingAmount: "4'000.00"
    },
    {
      name: "testing 107",
      size: "0.00 / 32'000.00",
      range: "0.0% - 15.0%",
      status: false,
      LoanType: "Private, SME",
      Collateral: "Mortgage,Warranty,Unused",
      Rating: "A-C",
      LoanTerm: "0-60 months",
      InvestingAmount: "3'000.00"
    },
    {
      name: "testing this update",
      size: "0.00 / 20'000.00",
      range: "0.0% - 15.0%",
      status: false,
      LoanType: "Private, SME",
      Collateral: "Warranty,Global cession, Crypto assets",
      Rating: "A-C",
      LoanTerm: "0-60 months",
      InvestingAmount: "3'000.00"
    },
    {
      name: "last test UPDATED",
      size: "0.00 / 300.00",
      range: "6.0% - 13.0%",
      status: false,
      LoanType: "SME",
      Collateral: "Mortgage, Crypto assets",
      Rating: "B+-C",
      LoanTerm: "0-53 months",
      InvestingAmount: "400.00"
    },
    {
      name: "fdsafdas",
      size: "1'000.00 / 100'000.00",
      range: "0.0% - 15.0%",
      status: false,
      LoanType: "Private,SME",
      Collateral: "None",
      Rating: "A-C",
      LoanTerm: "0-60 months",
      InvestingAmount: "1000.00"
    },
    {
      name: "testing 9898",
      size: "0.00/4'000.00",
      range: "3.0% - 13.0%",
      status: false,
      LoanType: "Private,SME",
      Collateral: " Global cession, Crypto assets",
      Rating: "B+-C",
      LoanTerm: "8-53 months",
      InvestingAmount: "50'000.00"
    }
  ];

  return (
    <div>
      <Card className="portfolio-card">
        <CardTitle className="portfolio-title">
          Your personal Auto-Invest Portfolios
        </CardTitle>
        <div className="portfolio-parent-div">
          <Table striped responsive>
            <thead>
              <tr>
                <td>Name of the portfolio</td>
                <td>Portfolio size</td>
                <td>Interest rate range</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {portfolios.map(item => (
                <PortfolioCollapseComponent key={item} content={item} />
              ))}
            </tbody>
            <></>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default PersonalPortfolioCard;
