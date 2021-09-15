import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "reactstrap";

const Dropdowns = () => {
  return (
    <div>
      <div className="spacer" id="dropdowns-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Dropdowns</h1>
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
          <Col md="12" className="text-center btn-blocks">
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-danger" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-info" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-primary" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-warning" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="button" className="btn btn-success" caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
            <ButtonGroup>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle
                  tag="button"
                  className="btn btn-secondary"
                  caret
                >
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/blah">
                    Link
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 1
                  </DropdownItem>
                  <DropdownItem tag="a" href="/blah">
                    Link 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dropdowns;
