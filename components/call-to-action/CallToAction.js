import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  Pro Version coming soon
                </h2>
                <h6 className="subtitle font-light text-white">
                  We will add Pro Version with tons of great features and
                  multiple category demos which is ready to use...
                </h6>
                <Button
                  href="/#coming"
                  className="btn btn-dark m-r-20 btn-md m-t-30"
                >
                  Comming Soon
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
