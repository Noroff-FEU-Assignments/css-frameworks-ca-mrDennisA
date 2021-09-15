import React from "react";

import { Card, Button } from "react-bootstrap";

export default function index(data) {
  console.log(data);
  return (
    <Card>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>Nunc porttitor vel</Card.Title>
        <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
