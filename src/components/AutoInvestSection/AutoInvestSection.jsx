import React from "react";
import "./AutoInvestSection.css";
import { Row, Breadcrumb, BreadcrumbItem } from "reactstrap";

const AutoInvestSection = () => {
  return (
    <div>
      <div className="row-1">
        <h2 className="auto-invest-heading">Auto-Invest</h2>
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem active className="active-state">
            Auto-Invest
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      
    </div>
  );
};

export default AutoInvestSection;
