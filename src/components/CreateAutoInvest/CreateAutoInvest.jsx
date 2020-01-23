import React from "react";
import "./CreateAutoInvest.css";
import {
  Card,
  CardText,
  Button,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Popover,
  PopoverBody,
  CustomInput
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import PopoverComponent from "./../PopOver/PopoverComponent";
// import Select from "react-select";
import MultipleSelect from "./../LoanCategorySelect/MultipleSelect";
import InputSlider from "../InputSlider/InputSlider";

const CreateAutoInvest = props => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const collateralOptions = [
    { value: "Mortgage", label: "Mortgage" },
    { value: "Personal Guarantee", label: "Personal Guarantee" },
    { value: "Assignmnet for security", label: "Assignment for security" },
    { value: "Cryptoassets", label: "Cryptoassets" }
  ];

  const LoanCategories = [
    { value: "Private", label: "Private" },
    { value: "SME", label: "SME" }
  ]

  const loanTypes = [
    {
      value: "Installment Loans",
      label: "Installment Loans"
    },
    { value: "Bullet Loans", label: "Bullet Loans" }
  ]

  return (
    <div>
      <Card className="create-auto-invest-card">
        <CardTitle className="create-auto-invest-title">
          Create Auto Invest Portfolio
        </CardTitle>
        <CardText className="create-auto-invest-text">
          With Auto-Invest you diversify your investment portfolio and make
          investments even more convenient.
        </CardText>
        <Button className="create-auto-invest-btn" onClick={toggle}>
          <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
          Create a new Auto-Invest portfolio{" "}
        </Button>
      </Card>
      {/* Modal */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="fade.in show create-auto-invest-modal"
        centered
      >
        <ModalHeader
          toggle={toggle}
          className="create-auto-invest-modal-header"
        >
          Create a new Auto-Invest portfolio
        </ModalHeader>
        <ModalBody className="create-auto-invest-modal-body">
          <Container fluid={true} className="modal-body-container">
            <Form className="modal-form">
              <Row>
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label for="name" className="modal-label">
                      Name of the portfolio *
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-name"
                      />
                      <PopoverComponent
                        target="popover-name"
                        description="Choose a unique name so you can always see at glance how this portfolio invests. You can also differentiate between different portfolios using descriptive names"
                      />
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="modal-input green-border"
                    ></Input>
                  </FormGroup>
                </Col>
                {/*  */}
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label for="size" className="modal-label">
                      Portfolio Size *
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-size"
                      />
                      <PopoverComponent
                        target="popover-size"
                        description="Here you define the maximum amount to which Auto-Invest builds up this portfolio for you."
                      />
                    </Label>
                    <Input
                      type="number"
                      id="size"
                      className="modal-input green-border"
                    />
                  </FormGroup>
                </Col>
                {/*  */}
              </Row>
              <Row>
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label for="amount" className="modal-label">
                      Investing Amount per loan*
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-loan"
                      />
                      <PopoverComponent
                        target="popover-loan"
                        description="Here you define the amount for which the Auto-Invest invests in a credit project. In this way, you specify the deepest diversification range (portfolio size / investment amount per loan = number of credit projects)."
                      />
                    </Label>
                    <Input
                      type="number"
                      id="amount"
                      className="modal-input green-border"
                    />
                  </FormGroup>
                </Col>
                {/*  */}
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label for="category" className="modal-label">
                      Loan Categorty(s)*
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-category"
                      />
                      <PopoverComponent
                        target="popover-category"
                        description="You can choose whether Auto-Invest should invest only in personal loans, corporate loans or in both."
                      />
                    </Label>
                    <MultipleSelect
                      options={[
                        { value: "Private", label: "Private" },
                        { value: "SME", label: "SME" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label className="modal-label" for="collateral">
                      Collateral
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-collateral"
                      />
                      <PopoverComponent
                        target="popover-collateral"
                        description="If you choose one or two securities (mortgage, guarantee), Auto-Invest invests only in such credit projects. Auto-Invest doesn't place bids on unsecured loans. If desired, such bids would have to be added with manual bids or you create an additional portfolio."
                      />
                    </Label>
                    <MultipleSelect value={[]} options={collateralOptions}></MultipleSelect>
                    {/* <Select options={options}></Select> */}
                  </FormGroup>
                </Col>
                <Col md="6" lg="6" xl="6" sm="12" xs="12">
                  <FormGroup>
                    <Label className="modal-label" for="loan-type">
                      Loan type(s)*
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-loan-type"
                      />
                      <PopoverComponent
                        target="popover-loan-type"
                        description="For the loan type, you can choose whether Auto-Invest should only invest in installment loans and/or bullet loans. With installment loans, you receive a monthly payment consisting of amortization and interest. For loans with maturity, the loan amount is repaid once at the end of the repayment term. The interest payment also takes place at maturity (in the event of maturing real estate loans, depending on the repayment terms, a monthly/quarterly / annual interest payment may also occur)."
                      />
                    </Label>
                    <MultipleSelect
                      options={loanTypes}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ padding: "0px 18px"}}>
                <Col md="12" lg="12" sm="12" xl="12" xa="12">
                  <FormGroup>
                    <Label className="modal-label" for="loan-type">
                      Interest rate range
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-interest-rate-range"
                      />
                      <PopoverComponent
                        target="popover-interest-rate-range"
                        description="Here you set the desired interest rate range. Auto-Invest invests only in credit projects that meet this attitude. If the interest rate in an auction falls below your defined minimum interest rate, the Auto-Invest no longer places bids."
                      />
                    </Label>
                    <InputSlider
                      min={0}
                      max={15}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 4, label: "4" },
                        { value: 8, label: "8" },
                        { value: 11, label: "11" },
                        { value: 15, label: "15+" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ padding: "0px 18px" }}>
                <Col md="12" lg="12" sm="12" xl="12" xa="12">
                  <FormGroup>
                    <Label className="modal-label" for="loan-type">
                      Rating
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-slider-rating"
                      />
                      <PopoverComponent
                        target="popover-slider-rating"
                        description="Here you can set the desired ratings. Auto-Invest only invests in credit projects that meet your setting. If you also want other ratings in the portfolio as a mixture, you can still bid on them manually or create an additional portfolio."
                      />
                    </Label>
                    <InputSlider
                      min={0}
                      max={20}
                      marks={[
                        { value: 0, label: "A" },
                        { value: 5, label: "B+" },
                        { value: 10, label: "B" },
                        { value: 15, label: "C+" },
                        { value: 20, label: "C" }
                      ]}
                      step={5}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ padding: "0px 18px" }}>
                <Col md="12" lg="12" sm="12" xl="12" xa="12">
                  <FormGroup>
                    <Label className="modal-label" for="loan-type">
                      Loan Term
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        id="popover-slider-loan-term"
                      />
                      <PopoverComponent
                        target="popover-slider-loan-term"
                        description="Here you set the desired terms of the loan. Auto-Invest invests only in credit projects that meet this setting. If you also want other maturities in the portfolio as mixtures, you can still bid on these manually or create an additional portfolio."
                      />
                    </Label>
                    <InputSlider
                      min={0}
                      max={60}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 15, label: "15" },
                        { value: 30, label: "30" },
                        { value: 45, label: "45" },
                        { value: 60, label: "60" }
                      ]}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="footer">
                <Col lg="12" md="12" sm="12" xs="12" xl="12">
                  <FormGroup style={{ display: "flex" }}>
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      className="modal-footer-checkbox"
                    />
                    <Label className="checkbox-label-modal">
                      I have read,{" "}
                      <span className="checkbox-label-modal-span">
                        understood and accepted the terms and
                      </span>{" "}
                      conditions of the Auto-Invest func
                    </Label>
                  </FormGroup>
                </Col>
                <Col className="buttons-column">
                  <Button
                    className="modal-footer-cancel-button"
                    onClick={toggle}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="modal-footer-create-button"
                    onClick={toggle}
                  >
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateAutoInvest;
