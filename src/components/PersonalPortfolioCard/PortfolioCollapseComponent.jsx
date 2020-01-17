import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronUp,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import Switch from "./Switch";
import "./PortfolioCollapseComponent.css";

const PortfolioCollapseComponent = ({ content }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <tr style={{ width: "100%" }}>
        <td className="collapse-td" style={{ width: "25%" }}>
          <span className="portfolio-collapse-icon">
            {isOpen === true ? (
              <FontAwesomeIcon icon={faChevronUp} onClick={toggle} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} onClick={toggle} />
            )}
          </span>
          {content.name}
        </td>
        <td className="collapse-td" style={{ width: "20%" }}>
          {content.size}
        </td>
        <td className="collapse-td" style={{ width: "25%" }}>
          {content.range}
        </td>
        <td className="collapse-td collapse-td-switch" style={{ width: "35%" }}>
          <Switch />
          {/* <span style={{ marginLeft: "8px", marginBottom: "7px" }}> */}
          <div style={{ display: "flex" }}>
            <span className="edit-icon-span">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span className="trash-icon-span">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </td>
      </tr>
      <Collapse isOpen={isOpen} className="personal-portfolio-collapse">
        <ul className="portfolio-collapse-ul">
          <li>
            <span className="portfolio-list-item-span">Loan type(s):</span>
            <span className="portfolio-list-item-span-2">
              {content.LoanType}
            </span>
          </li>
          <li>
            <span className="portfolio-list-item-span">Collateral:</span>
            <span className="portfolio-list-item-span-2">
              {content.Collateral}
            </span>
          </li>
          <li>
            <span className="portfolio-list-item-span">Rating:</span>
            <span className="portfolio-list-item-span-2">{content.Rating}</span>
          </li>
          <li>
            <span className="portfolio-list-item-span">Loan Term:</span>
            <span className="portfolio-list-item-span-2">
              {content.LoanTerm}
            </span>
          </li>
          <li>
            <span className="portfolio-list-item-span">
              Investing amount per loan:
            </span>
            <span className="portfolio-list-item-span-2">
              {content.InvestingAmount}
            </span>
          </li>
        </ul>
      </Collapse>
    </>
  );
};

export default PortfolioCollapseComponent;
