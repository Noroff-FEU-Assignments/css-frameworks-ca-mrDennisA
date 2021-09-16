import React from "react";
import { Tabs, Tab, Image, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

import Div from "./TabsContainer";

export default function index() {
  return (
    <Div className="d-none d-md-block">
      <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
        <Tab eventKey="first" title="First">
          <Row>
            <Col sm={4}>
              <Image src="./images/tab/tab-1.jpg" fluid />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper
                turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
              </p>
              <Row sm="auto">
                <Col>SHARE</Col>
                <Col>
                  <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="second" title="Second">
          <Row>
            <Col sm={4}>
              <Image src="./images/tab/tab-2.jpg" fluid />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper
                turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
              </p>
              <Row sm="auto">
                <Col>SHARE</Col>
                <Col>
                  <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="third" title="Third">
          <Row>
            <Col sm={4}>
              <Image src="./images/tab/tab-3.jpg" fluid />
            </Col>
            <Col>
              <p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper
                turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
              </p>
              <Row sm="auto">
                <Col>SHARE</Col>
                <Col>
                  <FontAwesomeIcon icon={faFacebookF} className="fa-lg" />
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Div>
  );
}
