import React from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";

import Main from "./NewsComponents";
import Card from "../../components/Card";

let active = 1;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

export default function index() {
  return (
    <Main>
      <Container>
        <h1>News</h1>
        <Pagination>{items}</Pagination>
        <Row xs={1} sm={2} lg={3} xl={4}>
          <Col>
            <Card img="./images/news/news-1.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-2.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-3.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-4.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-5.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-6.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-7.jpg" />
          </Col>
          <Col>
            <Card img="./images/news/news-8.jpg" />
          </Col>
        </Row>

        <Pagination>{items}</Pagination>
      </Container>
    </Main>
  );
}
