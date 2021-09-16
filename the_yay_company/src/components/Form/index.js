import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

import ColComponent from "./FormComponent";

export default function index() {
  return (
    <ColComponent md={{ order: "first" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicWebsite">
          <Form.Label>Website</Form.Label>
          <InputGroup>
            <InputGroup.Text>https://</InputGroup.Text>
            <Form.Control type="text" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" defaultValue="#563d7c" label="Allow us to sell your personal details to whomever we want" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ColComponent>
  );
}
