/* eslint-disable */
import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const Breadcrumbs = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold">Breadcrumbs</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Breadcrumb>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Library</BreadcrumbItem>
                        </Breadcrumb>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Breadcrumbs;
