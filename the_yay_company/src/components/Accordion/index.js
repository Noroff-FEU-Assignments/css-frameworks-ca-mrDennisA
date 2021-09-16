import React from "react";

import { Accordion, Image, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import AccordionComponent from "./AccordionComponent";

export default function index() {
  return (
    <AccordionComponent defaultActiveKey="0" className="d-md-none">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
            Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Image src="./images/tab/tab-1.jpg" fluid />
          <Row xs="auto">
            <Col>SHARE</Col>
            <Col>
              <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
            Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Image src="./images/tab/tab-2.jpg" fluid />
          <Row xs="auto">
            <Col>SHARE</Col>
            <Col>
              <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
            Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Image src="./images/tab/tab-3.jpg" fluid />
          <Row xs="auto">
            <Col>SHARE</Col>
            <Col>
              <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </AccordionComponent>
  );
}
