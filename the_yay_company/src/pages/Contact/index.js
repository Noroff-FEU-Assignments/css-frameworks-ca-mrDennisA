import React from "react";

import { Container, Row } from "react-bootstrap";

import Main from "./ContactComponents";

import ContactInfo from "../../components/ContactInfo";
import Form from "../../components/Form";

export default function index() {
  return (
    <Main>
      <Container>
        <h1>Submit your details</h1>
      </Container>
      <Container>
        <Row>
          <ContactInfo />

          <Form />
        </Row>
      </Container>
    </Main>
  );
}
