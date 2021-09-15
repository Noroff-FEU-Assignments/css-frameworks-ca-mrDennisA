import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faVimeoV } from "@fortawesome/free-brands-svg-icons";

import Footer from "./FooterContainer";

export default function index() {
  return (
    <Footer>
      <Container>
        <Row>
          <Col xs={12} md>
            <FontAwesomeIcon icon={faVimeoV} className="fa-2x" />
            <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
          </Col>
          <Col xs={6} md="auto">
            hello@yay.com
          </Col>
          <Col xs={6} md>
            Copyright <span>{new Date().getFullYear()}</span>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}
