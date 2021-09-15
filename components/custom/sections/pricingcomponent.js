/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const PricingComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Pricing</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pricing8 spacer b-t">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">
                Simple Pricing to make your Work Effective
              </h2>
              <h6 className="subtitle">
                We offer 100% satisafaction and Money back Guarantee
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>Regular Plan</h5>
                  <sup>$</sup>
                  <span className="text-dark display-5">39</span>
                  <h6 className="font-light font-14">YEARLY</h6>
                  <p className="m-t-40">
                    The Master license allows you to customize, store and even
                    host your website using your platform
                  </p>
                </CardBody>
                <a className="btn btn-info p-15 btn-arrow btn-block" href="#">
                  CHOOSE PLAN{" "}
                </a>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>Master Plan</h5>
                  <sup>$</sup>
                  <span className="text-dark display-5">49</span>
                  <h6 className="font-light font-14">YEARLY</h6>
                  <p className="m-t-40">
                    The Master license allows you to customize, store and even
                    host your website using your platform
                  </p>
                </CardBody>
                <a className="btn btn-danger p-15 btn-arrow btn-block" href="#">
                  CHOOSE PLAN{" "}
                </a>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <CardBody className="p-30 text-center">
                  <h5>Premium Plan</h5>
                  <sup>$</sup>
                  <span className="text-dark display-5">69</span>
                  <h6 className="font-light font-14">YEARLY</h6>
                  <p className="m-t-40">
                    The Master license allows you to customize, store and even
                    host your website using your platform
                  </p>
                </CardBody>
                <a className="btn btn-info p-15 btn-arrow btn-block" href="#">
                  CHOOSE PLAN{" "}
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PricingComponent;
