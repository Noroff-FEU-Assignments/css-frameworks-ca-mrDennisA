import React from "react";

import { Accordion, Image } from "react-bootstrap";

export default function index() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body>
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
            Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Image src="./images/tab/tab-1.jpg" fluid />
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
