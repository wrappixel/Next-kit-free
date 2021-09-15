import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Typography = () => {
    return (
        <div>
            <div className="spacer" id="typography-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Typography</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="6">
                        <h4 className="card-title">Typography</h4>
                        <h6 className="card-subtitle">Use tags <code>h1 to h6</code> for get desire heading.</h6>
                        <h1>h1. Bootstrap heading</h1>
                        <h2>h2. Bootstrap heading</h2>
                        <h3>h3. Bootstrap heading</h3>
                        <h4>h4. Bootstrap heading</h4>
                        <h5>h5. Bootstrap heading</h5>
                        <h6>h6. Bootstrap heading</h6>
                    </Col>
                    <Col md="6">
                        <h4 className="card-title">Heading with subtitle</h4>
                        <h6 className="card-subtitle">Use tags <code>h1 to h6</code> for get desire heading.</h6>
                        <h1>Heading 1 <small>Sub-heading</small></h1>
                        <h2>Heading 2 <small>Sub-heading</small></h2>
                        <h3>Heading 3 <small>Sub-heading</small></h3>
                        <h4>Heading 4 <small>Sub-heading</small></h4>
                        <h5>Heading 5 <small>Sub-heading</small></h5>
                        <h6>Heading 6 <small>Sub-heading</small></h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Typography;
