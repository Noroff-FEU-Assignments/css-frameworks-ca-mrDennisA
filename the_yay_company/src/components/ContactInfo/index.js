import React from "react";

import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function index() {
  return (
    <>
      <Row xs="auto">
        <Col>
          <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
        </Col>
        <Col>
          <div>hello@yay.com</div>
        </Col>
      </Row>
      <Row xs="auto">
        <Col>
          <FontAwesomeIcon icon={faPhone} className="fa-2x" />
        </Col>
        <Col>
          <div>123 456 7890</div>
        </Col>
      </Row>
      <Row xs="auto">
        <Col>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x" />
        </Col>
        <Col>
          <div>123 Some Street</div>
          <div>Somewhere</div>
          <div>Some City</div>
          <div>10000</div>
        </Col>
      </Row>
    </>
  );
}
