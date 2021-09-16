import React from "react";

import { Card, Button } from "react-bootstrap";

import CardComponent from "./CardComponent";

export default function index(data) {
  console.log(data);
  return (
    <CardComponent>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>Nunc porttitor vel</Card.Title>
        <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
        <Button variant="primary">MORE</Button>
      </Card.Body>
    </CardComponent>
  );
}
