import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/ui/img6.jpg";
import img2 from "../../assets/images/ui/5.jpg";
import img3 from "../../assets/images/ui/img5.jpg";

const Images = () => {
  return (
    <div>
      <div className="spacer" id="imgs-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Images</h1>
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
          <Col lg="4" className="m-b-30">
            <h4 className="card-title">Image with round corner</h4>
            <h6 className="card-subtitle">
              <code>.img-rounded</code>
            </h6>
            <Image
              src={img1}
              alt="img"
              className="img-responsive img-rounded"
            />
            <p className="m-t-15 m-b-0"></p>
          </Col>
          <Col lg="4" className="text-center m-b-30">
            <h4 className="card-title">Image with circle</h4>
            <h6 className="card-subtitle">
              <code>.img-circle</code> Make sure the image is square not
              ractangle
            </h6>
            <Image src={img2} alt="img" className="img-circle" />
            <p className="m-t-15 m-b-0"></p>
          </Col>
          <Col lg="4">
            <h4 className="card-title">Image with Thumbnail</h4>
            <h6 className="card-subtitle">
              <code>img-thumbnail</code>
            </h6>
            <Image
              src={img3}
              alt="img"
              className="img-responsive img-thumbnail"
            />
            <p className="m-t-15 m-b-0"></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Images;
