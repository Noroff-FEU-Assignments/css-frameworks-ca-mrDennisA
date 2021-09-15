import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ContactInfo from "../../components/ContactInfo";
import Form from "../../components/Form";

export default function index() {
  return (
    <Container>
      <h2>Submit your details</h2>
      <Row md={2}>
        <Col>
          <ContactInfo />
        </Col>
        <Col md={{ order: "first" }}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}
