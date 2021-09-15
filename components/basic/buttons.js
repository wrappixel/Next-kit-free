import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Buttons = () => {
  return (
    <div id="element">
      <div className="spacer" id="reactstrap-components">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Buttons</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <div className="btn-blocks">
              <Button color="primary">primary</Button>
              <Button color="secondary">secondary</Button>
              <Button color="success">success</Button>
              <Button color="info">info</Button>
              <Button color="warning">warning</Button>
              <Button color="danger">danger</Button>
              <Button color="link">link</Button>
            </div>
            <div className="mt-4 btn-blocks">
              <Button outline color="primary">
                primary
              </Button>
              <Button outline color="secondary">
                secondary
              </Button>
              <Button outline color="success">
                success
              </Button>
              <Button outline color="info">
                info
              </Button>
              <Button outline color="warning">
                warning
              </Button>
              <Button outline color="danger">
                danger
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buttons;
