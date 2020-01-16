import React from "react";
import { Card, CardTitle, Collapse } from "reactstrap";
import "./AutoInvestFaq.css";
import CollapseComponent from "./CollapseComponent";

const AutoInvestFaq = props => {
  const array = [
    {
      title: "What is Auto-Invest and how does it work?",
      description:
        "You can use the Auto-Invest function to define a loan portfolio of your choice. With defined parameters, Auto-Invest automatically invests in credit projects that exactly meet the specified criteria. Investments are made per loan at the fixed investment amount until the maximum portfolio size has been reached."
    },
    {
      title: "What is the difference between personal choice and Auto-Invest?",
      description:
        "The biggest difference is that you can re-evaluate the criteria for your personal selection of credit projects at any time and also determine the level of investment individually. However, if you do not respond immediately to a new credit project, you may miss it. In contrast, the auto-invest always invests if the underlying parameters are correct and the portfolio size still has capacity. Of course, however, despite Auto-Invest, manual investment in credit projects is still possible."
    },
    {
      title: "Can multiple Auto-Invest portfolios be created?",
      description:
        "Yes, you can create as many different auto-invest portfolios as you like. This serves to map different strategies, e.g. vary the investment amount depending on credit risk and more. We recommend starting with a basic portfolio and gaining initial experience. In addition, mixes can be added by manual bidding. If necessary, adjust the alert function for the notifications."
    },
    {
      title: "How can I adjust the portfolio?",
      description:
        'With the icon "edit" you can adjust the desired portfolio at any time. All previous bids are retained, but after saving the Auto-Invest only offers in credit projects that correspond to the new defined portfolio.'
    },
    {
      title: "Can I additionally still invest manually in loans?",
      description:
        "Yes, besides the Auto-Invest, you can still manually invest in loans. Every bid, whether manual or by auto-invest, is still binding."
    },
    {
      title: "How does the Auto-Invest function put my portfolio together?",
      description:
        "You define the criteria based on the available parameters. If you cannot map all parameters as desired, you should continue to place your bids manually. However, we are working on an ongoing expansion of the functionality."
    },
    {
      title:
        "Does the Auto-Invest invest several times in the same borrower if it has several credit projects (e.g. follow-up auction or at a later date)?",
      description:
        "No, Auto-Invest only places one bid per borrower. If you also wish to place a bid at a follow-up auction or another loan project of the same borrower, this must be done manually."
    },
    {
      title:
        "Can I also receive lower allocations despite the maximum amount invested per loan?",
      descrption:
        "Yes, this is possible if your bid has been partly overbid. A bid can be partly overbid if the minimum fixed interest rate in Auto-Invest can’t place a lower and the floor of the interest rate is set lower than your settings allow. It is also possible to outbid the Auto-Invest bid completely. In this case, your bid is not successful for the credit project unless you intervene with a manually bid."
    },
    {
      title: "Does the Auto-Invest also have a bidding agent function?",
      description:
        "Yes, the Auto-Invest always places a bid at the best possible interest rate. If you are underbid, Auto-Invest will automatically places another bid on the next best bid until you win or are completely outbid."
    },
    {
      title: "How is payment made for automatically invested amounts?",
      description:
        "In case of a successful bid, you will receive an e-mail with information about the payment and value date as usual. Afterwards, please transfer the amount or it will be automatically collected from your account with the help of DebitDirect (only for PostFinance account holders)."
    },
    {
      title: "Can I reinvest the repayments directly?",
      description:
        "At the moment, this option does not yet exist and you will receive all refunds - as usual - immediately transferred to your personal account. However, we are working on a corresponding implementation and will gladly inform you via newsletter, blog or social media channels once this feature is available."
    },
    {
      title: "Are there any additional costs when using Auto-Invest?",
      description:
        "No, the Auto-Invest has no influence on the fees and you can use it without additional costs."
    },
    {
      title: "How can I interrupt or stop Auto-Invest?",
      description:
        "You can change the slider from 'on' to 'off' in the 'Status' column at any time. As soon as the status is 'off', no further automatic investments are made until you change the status back to 'on'."
    },
    {
      title: "Can I delete the Auto-Invest function?",
      description:
        'Yes, you can remove your portfolio at any time by clicking on the "delete" icon. All previous bids will remain, but without a defined portfolio no new automatic bids will be placed. Of course, you can define a new portfolio at any time and thus use the function again.'
    },
    {
      title: "In which order and according to which rules are the bids placed?",
      description:
        "If you have several Auto-Invest portfolios that could place a bid for a specific loan project, the Auto-Invest portfolio that has defined the larger investment amount per loan will first make a bid. If this amount is equal, the Auto-Invest Portfolio that has set the lower interest rate places a bid."
    }
  ];

  return (
    <Card className="auto-invest-faq">
      <CardTitle className="auto-invest-title">Auto-Invest-FAQ</CardTitle>
      <div style={{ padding: "1em" }}>
        {array.map(key => (
          <CollapseComponent key={key} content={key} />
        ))}
      </div>
    </Card>
  );
};

export default AutoInvestFaq;
