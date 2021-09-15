import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">NextJs UI Kit Lite</h1>
            <h4 className="subtitle font-light">
              Powerful Reactstrap UI Kit with
              <br /> Beautiful Pre-Built Demos
            </h4>

            <Button
              to="/#coming"
              className="btn btn-md m-t-30 btn-danger-gradiant font-14"
            >
              Upgrade To Pro
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
