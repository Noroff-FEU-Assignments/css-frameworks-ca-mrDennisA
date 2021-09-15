import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faVimeoV } from "@fortawesome/free-brands-svg-icons";

export default function index() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faVimeoV} className="fa-2x" />
            <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
          </Col>
          <Col>hello@yay.com</Col>
          <Col>
            Copyright <span>{new Date().getFullYear()}</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
