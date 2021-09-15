import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/ui/img4.jpg";
import img2 from "../../assets/images/ui/img5.jpg";
import img3 from "../../assets/images/ui/img6.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const JsComponents = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };

  const slides = items.map((item, i) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={i}
    >
      <Image src={item.src} alt={item.altText} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <div>
      <div className="spacer" id="js-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Javascript Components</h1>
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
        <Row className="m-b-40">
          <Col md="6">
            <Button
              type="button"
              onClick={toggle.bind(null)}
              className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30"
            >
              Large Modal
            </Button>
            <Modal
              size="lg"
              isOpen={modal}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader toggle={toggle.bind(null)}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle.bind(null)}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle.bind(null)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button
              type="button"
              onClick={toggle1.bind(null)}
              className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30"
            >
              Medium Modal
            </Button>
            <Modal
              size="md"
              isOpen={modal1}
              toggle={toggle1.bind(null)}
              className={props.className}
            >
              <ModalHeader toggle={toggle1.bind(null)}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle1.bind(null)}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle1.bind(null)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button
              type="button"
              onClick={toggle2.bind(null)}
              className="btn btn-block waves-effect waves-light btn-outline-primary"
            >
              Small Modal
            </Button>
            <Modal
              size="sm"
              isOpen={modal2}
              toggle={toggle2.bind(null)}
              className={props.className}
            >
              <ModalHeader toggle={toggle2.bind(null)}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter className="justify-content-center">
                <Button color="primary" onClick={toggle2.bind(null)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col md="6">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JsComponents;
