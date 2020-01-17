import React from "react";

const Code = () => {
  return (
    <div>
      <div className="main row">
        {/* <Row> */}
        {/* <Col md="6" sm="12" lg="6"> */}
        <div className="column2 col-md-6">
          <CreateAutoInvest />
          <PersonalPortfolioCard />
        </div>
        <AutoInvestFaq className="col-md-6" />
        {/* </Col> */}
        {/* </Row> */}
      </div>
    </div>
  );
};

export default Code;
